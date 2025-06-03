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

const TrophyPage = ({ trophyName = "Brasileirão" }) => {
  const champions = [
    {
      id: 1,
      team: "Flamengo",
      year: "2020",
      background: require("../../assets/img/background.trophy/brasileiro2020.webp"),
    },
    {
      id: 2,
      team: "Atlético Mineiro",
      year: "2021",
      background: require("../../assets/img/background.trophy/brasileiro2021.jpg"),
    },
    {
      id: 3,
      team: "Palmeiras",
      year: "2022",
      background: require("../../assets/img/background.trophy/brasileiro2022.webp"),
    },
    {
      id: 4,
      team: "Palmeiras",
      year: "2023",
      background: require("../../assets/img/background.trophy/brasileiro2023.webp"),
    },
    {
      id: 5,
      team: "Botafogo",
      year: "2024",
      background: require("../../assets/img/background.trophy/brasileiro2024.jpg"),
    }
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.trophyTitle}>{trophyName}</Text>
      </View>

      <View style={styles.trophyIconContainer}>
        <Image
          source={require("../../assets/img/trophies/brasileirao.icon.png")}
          style={styles.trophyImage}
        />
      </View>

      <View style={styles.dividerLine} />

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          O Campeonato Brasileiro, ou Brasileirão, é a principal competição de futebol do Brasil. 
          Disputado por 20 clubes no formato de pontos corridos, o torneio tem 38 rodadas, onde o 
          time com mais pontos é o campeão. Além do título, a competição define vagas para 
          torneios internacionais e o rebaixamento para a Série B. Considerado um dos campeonatos 
          mais disputados do mundo, o Brasileirão é marcado por grandes clássicos e muita emoção.
        </Text>
      </View>

      <View style={styles.championsSection}>
        <Text style={styles.championsSectionTitle}>ÚLTIMOS TIMES CAMPEÕES</Text>

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
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  trophyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4A5568',
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
    backgroundColor: '#2D3748',
    marginHorizontal: 30,
    marginBottom: 30,
    borderRadius: 2,
  },
  descriptionContainer: {
    backgroundColor: '#2D3748',
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
    color: '#2D3748',
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 1,
  },
  championItem: {
    marginBottom: 12,
    position: 'relative',
    height: 100,   // altura fixa para conter o background absoluto
  },
  championBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%', // preencher todo container
    borderRadius: 8,
    opacity: 0.15,
    top: 0,
    left: 0,
  },
  championCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    position: 'relative',
    zIndex: 1,
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

