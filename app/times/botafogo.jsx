import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const trophyImages = [
  { uri: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Trofeu_Brasileirao.png" },
  { uri: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Copa_CONMEBOL_trophy.png" },
  { uri: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Trofeu_Carioca.png" },
];

const stadiumImages = [
  { uri: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" }, // Nilton Santos 1
  { uri: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" }, // Marechal Hermes 1
  { uri: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80" }, // Nilton Santos 2
  { uri: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=400&q=80" }, // Marechal Hermes 2
];

const playersByPosition = {
  GOLEIROS: [
    { nome: "Gatito Fernández", img: { uri: "https://randomuser.me/api/portraits/men/32.jpg" } },
    { nome: "Lucas Perri", img: { uri: "https://randomuser.me/api/portraits/men/33.jpg" } },
    { nome: "Santos Silva", img: { uri: "https://randomuser.me/api/portraits/men/40.jpg" } },
    { nome: "João Pedro", img: { uri: "https://randomuser.me/api/portraits/men/41.jpg" } },
  ],
  ZAGUEIROS: [
    { nome: "Adryelson", img: { uri: "https://randomuser.me/api/portraits/men/34.jpg" } },
    { nome: "Victor Cuesta", img: { uri: "https://randomuser.me/api/portraits/men/35.jpg" } },
    { nome: "Rafael Santos", img: { uri: "https://randomuser.me/api/portraits/men/42.jpg" } },
    { nome: "Lucas Oliveira", img: { uri: "https://randomuser.me/api/portraits/men/43.jpg" } },
  ],
  MEIAS: [
    { nome: "Eduardo", img: { uri: "https://randomuser.me/api/portraits/men/36.jpg" } },
    { nome: "Tchê Tchê", img: { uri: "https://randomuser.me/api/portraits/men/37.jpg" } },
    { nome: "Bruno Silva", img: { uri: "https://randomuser.me/api/portraits/men/44.jpg" } },
    { nome: "Carlos Eduardo", img: { uri: "https://randomuser.me/api/portraits/men/45.jpg" } },
  ],
  ATACANTES: [
    { nome: "Tiquinho Soares", img: { uri: "https://randomuser.me/api/portraits/men/38.jpg" } },
    { nome: "Júnior Santos", img: { uri: "https://randomuser.me/api/portraits/men/39.jpg" } },
    { nome: "Gabriel Pereira", img: { uri: "https://randomuser.me/api/portraits/men/46.jpg" } },
    { nome: "Rafael Lima", img: { uri: "https://randomuser.me/api/portraits/men/47.jpg" } },
  ],
};

export default function Home() {
  const [stadiumIndex, setStadiumIndex] = useState(0);
  const [playerIndexes, setPlayerIndexes] = useState({
    GOLEIROS: 0,
    ZAGUEIROS: 0,
    MEIAS: 0,
    ATACANTES: 0,
  });

  const getPair = (array, index) => array.slice(index, index + 2);

  const handleCarousel = (position, direction) => {
    setPlayerIndexes((prev) => {
      const max = playersByPosition[position].length;
      let newIndex;
      if (direction === "prev") {
        newIndex = Math.max(prev[position] - 2, 0);
      } else {
        newIndex = Math.min(prev[position] + 2, max - 2);
      }
      return { ...prev, [position]: newIndex };
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.main}>
        <View style={styles.bannerContainer}>
          {[...Array(5)].map((_, i) => (
            <React.Fragment key={i}>
              <View style={styles.firstColor} />
              <View style={styles.secondColor} />
            </React.Fragment>
          ))}
        </View>
        <View style={styles.bannerDown} />

        <View style={styles.infos}>
          <Text style={styles.teamTitle}>Botafogo de Futebol e Regatas</Text>
          <View style={styles.trophies}>
            {trophyImages.map((img, idx) => (
              <Image key={idx} source={img} style={styles.trophyImage} resizeMode="contain" />
            ))}
          </View>
          <View style={styles.divisor} />
          <View style={styles.subtitles}>
            <Image
              source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Botafogo_de_Futebol_e_Regatas_logo.svg" }}
              style={styles.logoImage}
            />
            <View style={styles.texts}>
              <Text style={styles.subtitleText}>“Botafogo, Botafogo </Text>
              <Text style={styles.subtitleText}>Campeão desde 1910”</Text>
            </View>
            <Image
              source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Botafogo_de_Futebol_e_Regatas_logo.svg" }}
              style={styles.logoImage}
            />
          </View>
        </View>

        <View style={styles.winRateContainer}>
          <Text style={styles.sectionTitle}>Retrospecto Recente</Text>
          <View style={styles.winRate}>
            {["D", "D", "V", "D", "D"].map((res, idx) => (
              <Text key={idx} style={res === "V" ? styles.win : styles.defeat}>
                {res}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.stadiumContainer}>
          <Text style={styles.sectionTitle}>Estádio</Text>
          <View style={styles.carouselRow}>
            <TouchableOpacity
              onPress={() => setStadiumIndex((prev) => Math.max(prev - 1, 0))}
              disabled={stadiumIndex === 0}
              style={[styles.arrowButton, stadiumIndex === 0 && styles.disabled]}
            >
              <Text style={styles.arrowText}>{"<"}</Text>
            </TouchableOpacity>
            <Image
              source={stadiumImages[stadiumIndex]}
              style={styles.stadiumImage}
              resizeMode="cover"
            />
            <TouchableOpacity
              onPress={() => setStadiumIndex((prev) => Math.min(prev + 1, stadiumImages.length - 1))}
              disabled={stadiumIndex === stadiumImages.length - 1}
              style={[styles.arrowButton, stadiumIndex === stadiumImages.length - 1 && styles.disabled]}
            >
              <Text style={styles.arrowText}>{">"}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.stadiumLabel}>
            {stadiumIndex === 0 || stadiumIndex === 2
              ? "Estádio Nilton Santos"
              : "Estádio Marechal Hermes"}
          </Text>
        </View>

        <View style={{ alignItems: "center", width: "100%" }}>
          <Text style={styles.sectionTitle}>Elenco</Text>

          {/* Carousel for each player position */}
          {Object.keys(playersByPosition).map((position) => {
            const players = playersByPosition[position];
            const startIndex = playerIndexes[position];
            const pair = getPair(players, startIndex);

            return (
              <View key={position} style={{ marginVertical: 12, width: "90%" }}>
                <Text style={styles.positionLabel}>{position}</Text>
                <View style={styles.carouselRow}>
                  <TouchableOpacity
                    onPress={() => handleCarousel(position, "prev")}
                    disabled={startIndex === 0}
                    style={[styles.arrowButton, startIndex === 0 && styles.disabled]}
                  >
                    <Text style={styles.arrowText}>{"<"}</Text>
                  </TouchableOpacity>

                  <View style={styles.cardsRow}>
                    {pair.map((player, idx) => (
                      <View
                        key={idx}
                        style={{
                          alignItems: "center",
                          width: 140,
                          marginHorizontal: 8,
                          backgroundColor: "#fff",
                          padding: 8,
                          borderRadius: 12,
                          borderWidth: 1,
                          borderColor: "#ccc",
                        }}
                      >
                        <Image
                          source={player.img}
                          style={{ width: 100, height: 100, borderRadius: 50 }}
                          resizeMode="cover"
                        />
                        <Text style={{ marginTop: 8, fontWeight: "bold" }}>{player.nome}</Text>
                      </View>
                    ))}
                  </View>

                  <TouchableOpacity
                    onPress={() => handleCarousel(position, "next")}
                    disabled={startIndex + 2 >= players.length}
                    style={[styles.arrowButton, startIndex + 2 >= players.length && styles.disabled]}
                  >
                    <Text style={styles.arrowText}>{">"}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    paddingVertical: 20,
  },
  main: {
    width: "100%",
    alignItems: "center",
    gap: 20,
  },
  bannerContainer: {
    flexDirection: "row",
  },
  firstColor: {
    backgroundColor: "#F5F5F5",
    height: 100,
    width: 40,
  },
  secondColor: {
    backgroundColor: "#000",
    height: 100,
    width: 40,
  },
  bannerDown: {
    backgroundColor: "#25406A",
    height: 30,
    width: "100%",
  },
  infos: {
    alignItems: "center",
    width: "90%",
    gap: 8,
  },
  teamTitle: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  trophies: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 8,
  },
  trophyImage: {
    width: 40,
    height: 40,
    marginHorizontal: 4,
  },
  divisor: {
    backgroundColor: "#25406A",
    height: 5,
    width: "100%",
  },
  subtitles: {
    flexDirection: "row",
    alignItems: "center",
  },
  texts: {
    alignItems: "center",
  },
  subtitleText: {
    fontStyle: "italic",
    fontSize: 14,
    textAlign: "center",
  },
  logoImage: {
    width: 40,
    height: 40,
    marginHorizontal: 8,
  },
  winRateContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  winRate: {
    backgroundColor: "#25406A",
    flexDirection: "row",
    justifyContent: "space-around",
    width: 200,
    paddingVertical: 4,
  },
  win: {
    color: "#0f0",
    fontWeight: "bold",
    fontSize: 16,
  },
  defeat: {
    color: "#f00",
    fontWeight: "bold",
    fontSize: 16,
  },
  stadiumContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  stadiumImage: {
    width: 220,
    height: 120,
    borderRadius: 12,
    marginHorizontal: 12,
    borderWidth: 2,
    borderColor: "#25406A",
  },
  stadiumLabel: {
    fontSize: 14,
    color: "#25406A",
    marginTop: 4,
  },
  carouselRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrowButton: {
    padding: 8,
  },
  arrowText: {
    fontSize: 24,
  },
  disabled: {
    opacity: 0.3,
  },
  carouselContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  cardsRow: {
    flexDirection: "row",
    gap: 12,
    marginHorizontal: 8,
  },
  positionLabel: {
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 8,
    textAlign: "center",
  },
});
