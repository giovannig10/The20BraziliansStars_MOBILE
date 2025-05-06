import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  ScrollView, 
  ImageBackground,
  SafeAreaView
} from 'react-native';

export default function Profile() {
  const [user, setUser] = useState({
    name: 'João Vitor',
    username: '@joaogianoni23',
    email: 'joao.gianoni@gmail.com',
    favoriteTeam: 'Corinthians', 
  });

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
    'default': require('../assets/img/backgrounds/torcida_corinthians.png') 
  };
  
  const getFavoriteTeamShield = () => {
    return teamShields[user.favoriteTeam] || teamShields['Flamengo'];
  };
  
  const getBackgroundImage = () => {
    return backgroundImages[user.favoriteTeam] || backgroundImages['default'];
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <View style={styles.header}>
              <ImageBackground
                source={getBackgroundImage()}
                style={styles.headerBackground}
                blurRadius={2}
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
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    margin: 16,
    height: 500,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  cardHeader: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  header: {
    height: 300,
    display: 'flex',
  },
  headerBackground: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 10,
    borderWidth: 3,
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
    fontSize: 36,
    fontWeight: 'bold',
  },
  profileName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profileUsername: {
    color: '#e0e0e0',
    fontSize: 16,
    marginBottom: 15,
  },
  favoriteTeamBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginBottom: 10,
  },
  teamShield: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  favoriteTeamText: {
    color: '#fff',
    fontSize: 14,
  },
  memberSinceBadge: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  memberSinceText: {
    color: '#e0e0e0',
    fontSize: 12,
  }
});