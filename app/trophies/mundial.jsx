import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const TrophyPage = ({ trophyName = "Mundial de Clubes" }) => {
  const champions = [

    {
      id: 1,
      team: "Corinthians",
      year: "2012",
      background: require("../../assets/img/background.trophy/mundial2012.png"),
    },
    {
      id: 2,
      team: "Internacional",
      year: "2006",
      background: require("../../assets/img/background.trophy/mundial2006.jpg"),
    },
    {
      id: 3,
      team: "São Paulo",
      year: "2005",
      background: require("../../assets/img/background.trophy/mundial2005.avif"),
    },
    {
      id: 4,
      team: "Corinthians",
      year: "2000",
      background: require("../../assets/img/background.trophy/mundial2000.webp"),
    },
    {
      id: 5,
      team: "São Paulo",
      year: "1993",
      background: require("../../assets/img/background.trophy/mundial1993.webp"),
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.trophyTitle}>{trophyName}</Text>
      </View>

      <View style={styles.trophyIconContainer}>
        <Image
          source={require("../../assets/img/trophies/mundial.icon.png")}
          style={styles.trophyImage}
        />
      </View>

      <View style={styles.dividerLine} />

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
        O Mundial de Clubes da FIFA é um torneio internacional que reúne os campeões das principais competições continentais de futebol, como a UEFA Champions League, a Copa Libertadores e outras ligas da Ásia, África, América do Norte/Central e Oceania, além do campeão do país-sede em algumas edições. Criado em 2000 para substituir a antiga Copa Intercontinental, o torneio tem como objetivo definir qual é o melhor clube de futebol do mundo. A partir de 2025, o Mundial ganhará um novo formato com 32 equipes e será disputado a cada quatro anos.



        </Text>
      </View>

      <View style={styles.championsSection}>
        <Text style={styles.championsSectionTitle}>ÚLTIMOS TIMES CAMPEÕES</Text>
        <Text style={styles.championsSectionSubtitle}>(Somente Brasileiros)</Text>

        {champions.map((champion) => (
          <View key={champion.id} style={styles.championItem}>
            {/* Imagem de fundo com baixa opacidade */}
            <Image
              source={champion.background}
              style={styles.championBackground}
              blurRadius={1}
            />
            <View style={[styles.championCard, { backgroundColor: champion.color }]}>
              <View style={styles.championContent}>
                <Text style={styles.championTeam}>{champion.team}</Text>
                <Text style={styles.championYear}>{champion.year}</Text>
              </View>
              <View style={styles.championIcon}>
                <Ionicons name="trophy-outline" size={30} color="#FFD700" />
              </View>
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
    backgroundColor: '#E8E8E8',
  },
  header: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20,

  },
  trophyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#25406A',
    textAlign: 'center',
  },
  trophyIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  trophyImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  dividerLine: {
    height: 4,
    backgroundColor: '#25406A',
    marginHorizontal: 30,
    marginBottom: 30,
    borderRadius: 2,
  },
  descriptionContainer: {
    backgroundColor: '#25406A',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
  },
  descriptionText: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'justify',
  },
  championsSection: {
    marginHorizontal: 20,
    paddingBottom: 40,
  },
  championsSectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#25406A',
    textAlign: 'center',
    letterSpacing: 1,
  },
  championsSectionSubtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#25406A',
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 1,

  },
  championItem: {
    marginBottom: 12,
    position: 'relative',
    height: 100,  
  },
  championBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%', 
    borderRadius: 10,
    opacity: 0.48,
  },
  championCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    height: '100%',
  },
  championContent: {
    flex: 1,
  },
  championTeam: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  championYear: {
    fontSize: 14,
    color: '#000000',
    opacity: 0.9,
  },
  championLogo: {
    width: 50,
    height: 50,
    marginLeft: 16,
  },
  championIcon: {
    marginLeft: 16,
  },
});

export default TrophyPage;