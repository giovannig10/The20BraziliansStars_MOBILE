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

const TrophyPage = ({ trophyName = "Copa do Brasil" }) => {
  const champions = [

    {
      id: 1,
      team: "Flamengo",
      year: "2024",
      background: require("../../assets/img/background.trophy/cdb2024.webp"),
    },
    {
      id: 2,
      team: "São Paulo",
      year: "2023",
      background: require("../../assets/img/background.trophy/cdb2023.webp"),
    },
    {
      id: 3,
      team: "Flamengo",
      year: "2022",
      background: require("../../assets/img/background.trophy/cdb2022.jpg"),
    },
    {
      id: 4,
      team: "Atlético Mineiro",
      year: "2021",
      background: require("../../assets/img/background.trophy/cdb2021.webp"),
    },
    {
      id: 5,
      team: "Palmeiras",
      year: "2020",
      background: require("../../assets/img/background.trophy/cdb2020.webp"),
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.trophyTitle}>{trophyName}</Text>
      </View>

      <View style={styles.trophyIconContainer}>
        <Image
          source={require("../../assets/img/trophies/copa-do-brasil-icon.png")}
          style={styles.trophyImage}
        />
      </View>

      <View style={styles.dividerLine} />

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
        A Copa do Brasil é uma das principais competições de futebol do Brasil, criada em 1989. É um torneio de mata-mata, ou seja, os times se enfrentam em jogos eliminatórios, geralmente em ida e volta, e o vencedor segue para a próxima fase. Participam clubes de todas as regiões do país, o que dá uma característica democrática ao torneio, permitindo que times de menor expressão tenham a chance de enfrentar e, até mesmo, eliminar grandes equipes. O campeão garante uma vaga direta na fase de grupos da Copa Libertadores da América, além de uma premiação em dinheiro significativa. A competição é muito valorizada por sua imprevisibilidade e emoção, já que, frequentemente, times menos conhecidos surpreendem ao derrotar os gigantes do futebol brasileiro.

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