import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  TouchableOpacity, 
  ImageBackground,
  ScrollView,
  Animated
} from 'react-native';

const teams = [
  { 
    id: 1, 
    name: "Atletico-MG",
    shieldImage: require('../assets/img/shields/escudo_galo.png'),
    backgroundImage: require('../assets/img/backgrounds/torcida_galo.png') 
  },
  { 
    id: 2, 
    name: "Bahia",
    shieldImage: require('../assets/img/shields/escudo_bahia.png'),
    backgroundImage: require('../assets/img/backgrounds/torcida_bahia.png') 
  },
  { 
    id: 3, 
    name: "Botafogo",
    shieldImage: require('../assets/img/shields/escudo_botafogo.png'),
    backgroundImage: require('../assets/img/backgrounds/torcida_fogao.png') 
  },
  { 
    id: 4, 
    name: "Bragantino",
    shieldImage: require('../assets/img/shields/escudo_bragantino.png'), 
    backgroundImage: require('../assets/img/backgrounds/torcida_bragantino.png') 
  },
  { 
    id: 5, 
    name: "Ceará",
    shieldImage: require('../assets/img/shields/escudo_ceara.png'), 
    backgroundImage: require('../assets/img/backgrounds/torcida_ceara.png') 
  },
  { 
    id: 6, 
    name: "Santos",
    shieldImage: require('../assets/img/shields/escudo_santos.png'), 
    backgroundImage: require('../assets/img/backgrounds/torcida_santos.png') 
  },
  { 
    id: 7, 
    name: "Palmeiras",
    shieldImage: require('../assets/img/shields/escudo_palmeiras.png'), 
    backgroundImage: require('../assets/img/backgrounds/torcida_palmeiras.png') 
  },
  { 
    id: 8, 
    name: "Grêmio",
    shieldImage: require('../assets/img/shields/escudo_gremio.png'), 
    backgroundImage: require('../assets/img/backgrounds/torcida_gremio.png') 
  },
  { 
    id: 9, 
    name: "Cruzeiro",
    shieldImage: require('../assets/img/shields/escudo_cruzeiro.png'), 
    backgroundImage: require('../assets/img/backgrounds/torcida_cruzeiro.png') 
  },
  { 
    id: 10, 
    name: "Flamengo",
    shieldImage: require('../assets/img/shields/escudo_flamengo.png'), 
    backgroundImage: require('../assets/img/backgrounds/torcida_flamengo.png') 
  },
  { 
    id: 11, 
    name: "Mirassol",
    shieldImage: require('../assets/img/shields/escudo_mirassol.png'), 
    backgroundImage: require('../assets/img/backgrounds/torcida_mirassol.png') 
  },
  { 
    id: 12, 
    name: "São Paulo",
    shieldImage: require('../assets/img/shields/escudo_saopaulo.png'), 
    backgroundImage: require('../assets/img/backgrounds/torcida_saopaulo.png') 
  },
  { 
    id: 13, 
    name: "Corinthians",
    shieldImage: require('../assets/img/shields/escudo_corinthians.png'), 
    backgroundImage: require('../assets/img/backgrounds/torcida_corinthians.png') 
  },
  { 
    id: 14, 
    name: "Vitória",
    shieldImage: require('../assets/img/shields/escudo_vitoria.png'), 
    backgroundImage: require('../assets/img/backgrounds/torcida_vitoria.png') 
  },
  { 
    id: 15, 
    name: "Vasco",
    shieldImage: require('../assets/img/shields/escudo_vasco.png'), 
    backgroundImage: require('../assets/img/backgrounds/torcida_vasco.png') 
  },
  { 
    id: 16, 
    name: "Sport Recife",
    shieldImage: require('../assets/img/shields/escudo_sport.png'), 
    backgroundImage: require('../assets/img/backgrounds/torcida_sport.png') 
  },
  { 
    id: 17, 
    name: "Internacional",
    shieldImage: require('../assets/img/shields/escudo_inter.png'), 
    backgroundImage: require('../assets/img/backgrounds/torcida_inter.png') 
  },
  { 
    id: 18, 
    name: "Fluminense",
    shieldImage: require('../assets/img/shields/escudo_flu.png'), 
    backgroundImage: require('../assets/img/backgrounds/torcida_flu.png') 
  },
  { 
    id: 19, 
    name: "Fortaleza",
    shieldImage: require('../assets/img/shields/escudo_fortaleza.png'), 
    backgroundImage: require('../assets/img/backgrounds/torcida_fortaleza.png') 
  },
  { 
    id: 20, 
    name: "Juventude",
    shieldImage: require('../assets/img/shields/escudo_juventude.png'), 
    backgroundImage: require('../assets/img/backgrounds/torcida_juventude.png') 
  },


];

const TeamCard = ({ team }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardHeight = useState(new Animated.Value(136))[0];
  const barHeight = useState(new Animated.Value(10))[0];
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    
    Animated.parallel([
      Animated.timing(cardHeight, {
        toValue: isExpanded ? 136 : 153,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(barHeight, {
        toValue: isExpanded ? 10 : 0,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  };
  
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={toggleExpand} activeOpacity={0.9}>
        <Animated.View style={[styles.cardTeamContainer, { height: cardHeight }]}>
          <ImageBackground 
            source={team.backgroundImage}
            style={styles.backgroundImage}
            resizeMode="cover"
          >
            {/* Adicione esta View com overlay escuro */}
            <View style={{backgroundColor: 'rgba(0,0,0,0.5)', width: '100%', height: '100%'}}>
            
              {/* Adicione o layout centralizado com escudo e nome */}
              <View style={{alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                <Image
                  source={team.shieldImage}
                  style={{width: 40, height: 40}}
                  resizeMode="contain"
                />
                <Text style={styles.teamName}>{team.name}</Text>
              </View>
            </View>
          </ImageBackground>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

export default function Time() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.teamsContainer}>
          {teams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DBDCDD',
  },
  scrollContainer: {
    flex: 1,
  },
  teamsContainer: {
    paddingVertical: 50,
    alignItems: 'center', 
  },
  cardContainer: {
    width: '100%',
    height: 90, 
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#DBDCDD',
    marginBottom: 70,
  },
  cardTeamContainer: {
    width: 500, // Reduza de 600 para um valor menor
    height: '100%',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  horizontalLayout: {
    flexDirection: 'row', 
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  shieldContainer: {
    width: '40%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shield: {
    height: 80,
    width: 80,
    backgroundColor: 'rgba(37, 64, 106, 0.7)',
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shieldImage: {
    width: '80%',
    height: '80%',
  },

  nameContainerHorizontal: {
    width: '60%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  nameHorizontal: {
    width: '80%',
    height: '50%',
    backgroundColor: 'rgba(37, 64, 106, 0.8)',
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  teamName: {
    color: '#DBDCDD',
    fontWeight: 'bold',
    fontSize: 16,
  },

  barsContainer: {
    width: '100%',
    height: '20%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  nameBar: {
    height: 5,
    backgroundColor: '#25406A',
    borderRadius: 2,
    marginRight: 5,
  },
 
  nameContainer: {
    width: '100%',
    height: '45%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  name: {
    width: '20%',
    height: '80%',
    backgroundColor: '#25406A',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameBottomBar1: {
    width: '40%',
    backgroundColor: '#25406A',
  },
  nameBottomBar2: {
    width: '40%',
    backgroundColor: '#25406A',
  },
});

