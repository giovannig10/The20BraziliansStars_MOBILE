import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    SafeAreaView,
    TouchableOpacity,
    Switch,
    ScrollView
} from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Profile() {
    const [user, setUser] = useState({
        name: 'João Vitor',
        username: '@joaogianoni23',
        email: 'joao.gianoni@gmail.com',
        favoriteTeam: 'Corinthians',
    });

    const [darkModeEnabled, setDarkModeEnabled] = useState(false);

    const teamShields = {
        'Flamengo': require('../assets/img/shields/escudo_flamengo.png'),
        'Corinthians': require('../assets/img/shields/escudo_corinthians.png'),
        'São Paulo': require('../assets/img/shields/escudo_saopaulo.png'),
        'Palmeiras': require('../assets/img/shields/escudo_palmeiras.png'),
        'Santos': require('../assets/img/shields/escudo_santos.png'),
        'Grêmio': require('../assets/img/shields/escudo_gremio.png'),
        'Internacional': require('../assets/img/shields/escudo_inter.png'),
        'Cruzeiro': require('../assets/img/shields/escudo_cruzeiro.png'),
        'Atlético-MG': require('../assets/img/shields/escudo_galo.png'),
        'Vasco': require('../assets/img/shields/escudo_vasco.png'),
        'Fluminense': require('../assets/img/shields/escudo_flu.png'),
        'Botafogo': require('../assets/img/shields/escudo_botafogo.png'),
        'Bahia': require('../assets/img/shields/escudo_bahia.png'),
        'Vitória': require('../assets/img/shields/escudo_vitoria.png'),
        'Sport': require('../assets/img/shields/escudo_sport.png'),
        'Ceará': require('../assets/img/shields/escudo_ceara.png'),
        'Fortaleza': require('../assets/img/shields/escudo_fortaleza.png'),
        'Juventude': require('../assets/img/shields/escudo_juventude.png'),
        'Bragantino': require('../assets/img/shields/escudo_bragantino.png'),
        'Mirassol': require('../assets/img/shields/escudo_mirassol.png')
    };

    const backgroundImages = {
        'Flamengo': require('../assets/img/backgrounds/torcida_flamengo.png'),
        'Corinthians': require('../assets/img/backgrounds/torcida_corinthians.png'),
        'São Paulo': require('../assets/img/backgrounds/torcida_saopaulo.png'),
        'Palmeiras': require('../assets/img/backgrounds/torcida_palmeiras.png'),
        'Santos': require('../assets/img/backgrounds/torcida_santos.png'),
        'Grêmio': require('../assets/img/backgrounds/torcida_gremio.png'),
        'Internacional': require('../assets/img/backgrounds/torcida_inter.png'),
        'Cruzeiro': require('../assets/img/backgrounds/torcida_cruzeiro.png'),
        'Atlético-MG': require('../assets/img/backgrounds/torcida_galo.png'),
        'Vasco': require('../assets/img/backgrounds/torcida_vasco.png'),
        'Fluminense': require('../assets/img/backgrounds/torcida_flu.png'),
        'Botafogo': require('../assets/img/backgrounds/torcida_fogao.png'),
        'Bahia': require('../assets/img/backgrounds/torcida_bahia.png'),
        'Vitória': require('../assets/img/backgrounds/torcida_vitoria.png'),
        'Sport': require('../assets/img/backgrounds/torcida_sport.png'),
        'Ceará': require('../assets/img/backgrounds/torcida_ceara.png'),
        'Fortaleza': require('../assets/img/backgrounds/torcida_fortaleza.png'),
        'Juventude': require('../assets/img/backgrounds/torcida_juventude.png'),
        'Bragantino': require('../assets/img/backgrounds/torcida_bragantino.png'),
        'Mirassol': require('../assets/img/backgrounds/torcida_mirassol.png'),
    };


    const getFavoriteTeamShield = () => {
        return teamShields[user.favoriteTeam] || teamShields['default'];
    };

    const getBackgroundImage = () => {
        return backgroundImages[user.favoriteTeam] || backgroundImages['default'];
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <View style={styles.card}>

                        <View style={styles.cardContent}>
                            <View style={styles.headerContainer}>
                                <View style={styles.header}>
                                    <ImageBackground
                                        source={getBackgroundImage()}
                                        style={styles.headerBackground}
                                        blurRadius={2}
                                        imageStyle={styles.backgroundImageStyle}
                                    >
                                        <View style={styles.overlay}>
                                            <View style={styles.profileImageContainer}>
                                                {user.photo ? (
                                                    <Image source={user.photo} style={styles.profileImage} />
                                                ) : (
                                                    <View style={styles.initialsBadge}>
                                                        <Text style={styles.initialsText}>
                                                            {user.name.split(' ').map(n => n[0]).join('')}
                                                        </Text>
                                                    </View>
                                                )}
                                            </View>

                                            <Text style={styles.profileName}>{user.name}</Text>
                                            <Text style={styles.profileUsername}>{user.username}</Text>

                                            <View style={styles.favoriteTeamBadge}>
                                                <Image
                                                    source={getFavoriteTeamShield()}
                                                    style={styles.teamShield}
                                                    resizeMode="contain"
                                                />
                                                <Text style={styles.favoriteTeamText}>Time favorito: {user.favoriteTeam}</Text>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </View>

                            <View style={styles.settingsSection}>
                                <Text style={styles.sectionTitle}>Configurações</Text>

                                <View style={styles.settingItem}>
                                    <View style={styles.settingLeft}>
                                        <Ionicons name="moon-outline" size={22} color="#1A2F5A" />
                                        <Text style={styles.settingText}>Modo escuro</Text>
                                    </View>
                                    <Switch
                                        value={darkModeEnabled}
                                        onValueChange={setDarkModeEnabled}
                                        trackColor={{ false: '#E0E0E0', true: '#BCCEF0' }}
                                        thumbColor={darkModeEnabled ? '#1A2F5A' : '#F4F4F4'}
                                    />
                                </View>

                                <TouchableOpacity style={styles.linkItem}>
                                    <View style={styles.settingLeft}>
                                        <Ionicons name="person-outline" size={22} color="#1A2F5A" />
                                        <Text style={styles.settingText}>Editar perfil</Text>
                                    </View>
                                    <Ionicons name="chevron-forward" size={18} color="#999" />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.linkItem}>
                                    <View style={styles.settingLeft}>
                                        <Ionicons name="football-outline" size={22} color="#1A2F5A" />
                                        <Text style={styles.settingText}>Trocar time favorito</Text>
                                    </View>
                                    <Ionicons name="chevron-forward" size={18} color="#999" />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.linkItem}>

                                    <View style={styles.settingLeft}>
                                        <Link href="/contact" asChild>
                                            <Ionicons name="help-circle-outline" size={22} color="#1A2F5A" />
                                            <Text style={styles.settingText}>Ajuda e suporte</Text>
                                        </Link>
                                    </View>

                                    <Ionicons name="chevron-forward" size={18} color="#999" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F0F2F5',
    },
    scrollView: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    card: {
        backgroundColor: '#FFFFFF',
        width: '90%',
        borderRadius: 10,
        margin: 16,
        height: 700,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        overflow: 'hidden',
    },
    cardContent: {
        flex: 1,
    },

    headerContainer: {
        alignItems: 'center',
        padding: 15,
    },
    header: {
        height: 250,
        width: '100%',
        borderRadius: 12,
        overflow: 'hidden',
    },

    settingsSection: {
        padding: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1A2F5A',
        marginBottom: 15,
        marginTop: 20,
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
    },
    settingLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    settingText: {
        fontSize: 15,
        color: '#333',
        marginLeft: 12,
    },
    linkItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
    },

    headerBackground: {
        width: '100%',
        height: '100%',
    },
    backgroundImageStyle: {
        borderRadius: 12,
    },
    overlay: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 12,
    },
    profileImageContainer: {
        width: 100,
        height: 100,
        borderRadius: 80,
        overflow: 'hidden',
        marginBottom: 6,
        borderWidth: 2,
        borderColor: '#fff',
    },
    profileImage: {
        width: '100%',
        height: '100%',
    },
    initialsBadge: {
        width: '100%',
        height: '100%',
        backgroundColor: '#1A2F5A',
        alignItems: 'center',
        justifyContent: 'center',
    },
    initialsText: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
        gap: 2,
    },
    profileName: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    profileUsername: {
        color: '#e0e0e0',
        fontSize: 13,
        marginBottom: 20,
    },
    favoriteTeamBadge: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingVertical: 3,
        paddingHorizontal: 8,
        borderRadius: 12,
    },
    teamShield: {
        width: 30,
        height: 30,
    },
    favoriteTeamText: {
        color: '#fff',
        fontSize: 11,
        fontWeight: 'bold',
    }
});