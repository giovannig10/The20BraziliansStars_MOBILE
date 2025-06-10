import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const TeamPage = () => {
    const router = useRouter();
    const teamMembers = [
        { id: 1, name: "Giovanni Gonçalves", role: "Product Owner", avatar: require('../assets/img/developers/giovanni.person.jpeg') },
        { id: 2, name: "João Gianoni", role: "Scrum Master", avatar: require('../assets/img/developers/joao.person.jpeg') },
        { id: 3, name: "Pedro Oliveira", role: "Membro Desenvolvedor", avatar: require('../assets/img/developers/pedro.person.jpeg') },
        { id: 4, name: "Vinícius Valverde", role: "Membro Desenvolvedor", avatar: require('../assets/img/developers/vinicius.person.jpeg') },
        { id: 5, name: "Gabriela Fernanda", role: "Membro Desenvolvedor", avatar: require('../assets/img/developers/gabriela.person.jpeg') },
        { id: 6, name: "Vitor Sampaio", role: "Membro Desenvolvedor", avatar: require('../assets/img/developers/vitor.person.jpeg') }
    ];

    
    return (
        <View style={styles.mainContainer}>
            
            <ScrollView style={styles.container}>
                <Text style={styles.title}>CONHEÇA NOSSA EQUIPE</Text>
                <Text style={styles.subtitle}>Somos 6 desenvolvedores e produtores de software, que trabalham juntos para criar o melhor site de futebol do Brasil.</Text>
                <View style={styles.dividerLine} />
                <View style={styles.content}>
                    {teamMembers.map((member, index) => (
                        <View key={member.id} style={styles.card}>
                            <Image source={member.avatar} style={styles.img} />
                            <View style={styles.info}>
                                <Text style={styles.name}>{member.name}</Text>
                                <Text style={styles.role}>{member.role}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#DBDCDD',
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    container: {
        flex: 1,
        backgroundColor: '#DBDCDD',
        paddingTop: 30,
    },
    content: {
        padding: 24,
        alignItems: 'center',
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1A2F5A',
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
        width: '100%',
        maxWidth: 360,
        elevation: 3,
    },
    img: {
        width: 64,
        height: 64,
        borderRadius: 32,
        borderWidth: 3,
        borderColor: '#fff',
        marginRight: 16,
    },
    info: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        marginBottom: 10,
        fontWeight: 'bold',
        color: '#25406A',
        textAlign: 'center',
        letterSpacing: 1,
    },
    subtitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#25406A',
        textAlign: 'center',
        marginBottom: 20,
        letterSpacing: 1,
    },
    dividerLine: {
        height: 2,
        backgroundColor: '#25406A',
        marginHorizontal: 20,
        marginBottom: 5,
        borderRadius: 2,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    role: {
        fontSize: 14,
        color: 'white',
        opacity: 0.8,
    },
});

export default TeamPage;