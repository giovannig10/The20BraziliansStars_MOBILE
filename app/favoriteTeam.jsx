import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
    FlatList,
    ActivityIndicator,
    Alert,
    SafeAreaView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Lista de times brasileiros com seus escudos
const brazilianTeams = [
    { id: '1', name: 'Flamengo', logo: require('../assets/img/shields/escudo_flamengo.png') },
    { id: '2', name: 'Palmeiras', logo: require('../assets/img/shields/escudo_palmeiras.png') },
    { id: '3', name: 'Corinthians', logo: require('../assets/img/shields/escudo_corinthians.png') },
    { id: '4', name: 'São Paulo', logo: require('../assets/img/shields/escudo_saopaulo.png') },
    { id: '5', name: 'Santos', logo: require('../assets/img/shields/escudo_santos.png') },
    { id: '6', name: 'Fluminense', logo: require('../assets/img/shields/escudo_flu.png') },
    { id: '7', name: 'Vasco', logo: require('../assets/img/shields/escudo_vasco.png') },
    { id: '8', name: 'Grêmio', logo: require('../assets/img/shields/escudo_gremio.png') },
    { id: '9', name: 'Internacional', logo: require('../assets/img/shields/escudo_inter.png') },
    { id: '10', name: 'Cruzeiro', logo: require('../assets/img/shields/escudo_cruzeiro.png') },
    { id: '11', name: 'Atlético-MG', logo: require('../assets/img/shields/escudo_galo.png') },
    { id: '12', name: 'Botafogo', logo: require('../assets/img/shields/escudo_botafogo.png') },
    { id: '13', name: 'Bragantino', logo: require('../assets/img/shields/escudo_bragantino.png') },
    { id: '14', name: 'Bahia', logo: require('../assets/img/shields/escudo_bahia.png') },
    { id: '15', name: 'Fortaleza', logo: require('../assets/img/shields/escudo_fortaleza.png') },
    { id: '16', name: 'Sport', logo: require('../assets/img/shields/escudo_sport.png') },
    { id: '17', name: 'Ceará', logo: require('../assets/img/shields/escudo_ceara.png') },
    { id: '18', name: 'Juventude', logo: require('../assets/img/shields/escudo_juventude.png') },
    { id: '19', name: 'Mirassol', logo: require('../assets/img/shields/escudo_mirassol.png') },
    { id: '20', name: 'Vitória', logo: require('../assets/img/shields/escudo_vitoria.png') },
];

export default function FavoriteTeam() {
    const navigation = useNavigation();
    const [selectedTeam, setSelectedTeam] = useState(null);
    const [currentFavoriteTeam, setCurrentFavoriteTeam] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    // Carregar o time favorito atual ao iniciar a página
    useEffect(() => {
        const loadFavoriteTeam = async () => {
            try {
                console.log("Carregando time favorito...");
                const favoriteTeamData = await AsyncStorage.getItem('@user_favorite_team');
                console.log("Dados carregados:", favoriteTeamData);
                
                if (favoriteTeamData) {
                    const team = JSON.parse(favoriteTeamData);
                    setCurrentFavoriteTeam(team);
                    setSelectedTeam(team.id);
                } else {
                    // Default para Corinthians quando não há time salvo (baseado no perfil padrão)
                    const defaultTeam = brazilianTeams.find(team => team.name === "Corinthians");
                    if (defaultTeam) {
                        setSelectedTeam(defaultTeam.id);
                    }
                }
            } catch (error) {
                console.error('Erro ao carregar o time favorito:', error);
            } finally {
                setLoading(false);
            }
        };

        loadFavoriteTeam();
    }, []);

    // Função para salvar o time favorito
    const saveFavoriteTeam = async () => {
        if (!selectedTeam) {
            Alert.alert('Erro', 'Por favor, selecione um time favorito.');
            return;
        }

        setSaving(true);
        try {
            const team = brazilianTeams.find(team => team.id === selectedTeam);
            
            console.log("Salvando time favorito:", team);
            
            // Salvar no AsyncStorage para recuperar na página de perfil
            await AsyncStorage.setItem('@user_favorite_team', JSON.stringify(team));
            
            Alert.alert(
                'Sucesso!',
                `${team.name} foi definido como seu time favorito.`,
                [{ 
                    text: 'OK', 
                    onPress: () => {
                        navigation.navigate('profile');
                    } 
                }]
            );
        } catch (error) {
            console.error('Erro ao salvar o time favorito:', error);
            Alert.alert('Erro', 'Não foi possível salvar seu time favorito. Tente novamente.');
        } finally {
            setSaving(false);
        }
    };

    // Renderizar cada item da lista de times
    const renderTeamItem = ({ item }) => (
        <TouchableOpacity
            style={[
                styles.teamItem,
                selectedTeam === item.id && styles.selectedTeam
            ]}
            onPress={() => setSelectedTeam(item.id)}
        >
            <Image 
                source={item.logo} 
                style={styles.teamLogo} 
                resizeMode="contain" 
            />
            <Text style={styles.teamName}>{item.name}</Text>
            {selectedTeam === item.id && (
                <Ionicons name="checkmark-circle" size={24} color="#1A2F5A" style={styles.checkIcon} />
            )}
        </TouchableOpacity>
    );

    if (loading) {
        return (
            <SafeAreaView style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#1A2F5A" />
                <Text style={styles.loadingText}>Carregando...</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity 
                    style={styles.backButton}
                    onPress={() => navigation.navigate('profile')}
                >
                    <Ionicons name="arrow-back" size={24} color="#FFF" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Escolha seu Time</Text>
            </View>
            
          
            
           
            
            {/* Team List */}
            <FlatList
                data={brazilianTeams}
                renderItem={renderTeamItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.teamList}
                showsVerticalScrollIndicator={false}
            />
            
            {/* Save Button */}
            <TouchableOpacity 
                style={styles.saveButton} 
                onPress={saveFavoriteTeam}
                disabled={saving}
            >
                {saving ? (
                    <ActivityIndicator size="small" color="#FFF" />
                ) : (
                    <>
                        <Text style={styles.saveButtonText}>Salvar Escolha</Text>
                        <Ionicons name="save-outline" size={20} color="#FFF" style={styles.saveIcon} />
                    </>
                )}
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F2F5',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F2F5',
    },
    loadingText: {
        marginTop: 10,
        color: '#1A2F5A',
        fontSize: 16,
    },
    header: {
        backgroundColor: '#1A2F5A',
        paddingVertical: 20,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    backButton: {
        padding: 5,
    },
    headerTitle: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    currentTeamContainer: {
        backgroundColor: '#FFFFFF',
        margin: 16,
        marginBottom: 10,
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    currentTeamLabel: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    currentTeamInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    currentTeamLogo: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    currentTeamName: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: '600',
        color: '#1A2F5A',
    },
    selectPrompt: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
        marginHorizontal: 16,
        marginTop: 10,
        marginBottom: 5,
    },
    teamList: {
        padding: 16,
        paddingTop: 8,
    },
    teamItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginBottom: 10,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
    selectedTeam: {
        borderWidth: 2,
        borderColor: '#1A2F5A',
        backgroundColor: '#F0F8FF',
    },
    teamLogo: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    teamName: {
        marginLeft: 15,
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
        flex: 1,
    },
    checkIcon: {
        marginLeft: 10,
    },
    saveButton: {
        backgroundColor: '#1A2F5A',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        margin: 16,
        marginTop: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    saveIcon: {
        marginLeft: 8,
    }
});