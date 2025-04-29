import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Image source={require('../assets/img/logos/perfil.png')} style={styles.profileImage} />

                <Text style={styles.profileName}>Nome do Usuário</Text>
                <Text style={styles.textId}>ID: XXXXXXXXXXX</Text>

                <View style={styles.buttonCard}>
                    <View style={styles.optionsCard}>
                        <TouchableOpacity style={styles.optionButton}>
                        <Ionicons name="cog" size={40} color="#25406A" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButton}>
                        <Ionicons name="heart" size={40} color="#25406A" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButton}>
                        <Ionicons name="create" size={40} color="#25406A" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        justifyContent: 'center',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 15,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    textId: {
        fontSize: 14,
        color: '#666',
        marginBottom: 2,
    },
    buttonCard: {
        width: '100%',
        borderRadius: 12,
        padding: 15,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.6,
        shadowRadius: 8,
        elevation: 3,
    },
    optionsCard: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    optionButton: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    optionButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});