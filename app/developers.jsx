import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const TeamPage = () => {
    const teamMembers = [
        { id: 1, name: "Giovanni Gonçalves", role: "Product Owner", avatar: require('../assets/img/developers/giovanni.person.jpeg') },
        { id: 2, name: "João Gianoni", role: "Scrum Master", avatar: require('../assets/img/developers/joao.person.jpeg') },
        { id: 3, name: "Pedro Oliveira", role: "Membro Desenvolvedor", avatar: require('../assets/img/developers/pedro.person.jpeg') },
        { id: 4, name: "Vinícius Valverde", role: "Membro Desenvolvedor", avatar: require('../assets/img/developers/vinicius.person.jpeg') },
        { id: 5, name: "Gabriela Fernanda", role: "Membro Desenvolvedor", avatar: require('../assets/img/developers/gabriela.person.jpeg') },
        { id: 6, name: "Vitor Sampaio", role: "Membro Desenvolvedor", avatar: require('../assets/img/developers/vitor.person.jpeg') }
    ];

    
        
    
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>NOSSA EQUIPE</Text>
            <Text style={styles.subtitle}>Composta por 6 grandes Devs!</Text>

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
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
    content: {
        padding: 24,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
    fontWeight: 'bold',
    color: '#25406A',
    textAlign: 'center',
    letterSpacing: 1,
    marginTop: 10,
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
        height: 3,
        backgroundColor: '#25406A',
        marginHorizontal: 20,
        marginBottom: 10,
        borderRadius: 2,
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
