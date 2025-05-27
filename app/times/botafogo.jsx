import React, { useState } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { WebView } from "react-native-webview";

export default function Home() {

  const stadiumImages = [
    require("../../assets/img/appleLogo.png"),
    require("../../assets/img/facebookLogo.png"),
    require("../../assets/img/googleLogo.png"),
  ];
  const [stadiumIndex, setStadiumIndex] = useState(0);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.main}>
        <View style={styles.bannerContainer}>
          <View style={styles.firstColor}></View>
          <View style={styles.secondColor}></View>
          <View style={styles.firstColor}></View>
          <View style={styles.secondColor}></View>
          <View style={styles.firstColor}></View>
          <View style={styles.secondColor}></View>
          <View style={styles.firstColor}></View>
          <View style={styles.secondColor}></View>
          <View style={styles.firstColor}></View>
          <View style={styles.secondColor}></View>
        </View>
        <View style={styles.bannerDown}></View>
        <View style={styles.infos}>
          <View style={styles.nameTeam}>
            <Text>Botafogo de Futebol e Regatas</Text>
            <View style={styles.trophies}>
              <Image
                source={require("../../assets/img/appleLogo.png")}
                style={{ width: 40, height: 40, marginRight: 8 }}
                resizeMode="contain"
              />
              <Image
                source={require("../../assets/img/appleLogo.png")}
                style={{ width: 40, height: 40, marginRight: 8 }}
                resizeMode="contain"
              />
              <Image
                source={require("../../assets/img/appleLogo.png")}
                style={{ width: 40, height: 40 }}
                resizeMode="contain"
              />
            </View>
            <View style={styles.divisor}></View>
          </View>
          <View style={styles.subtitles}>
            <Image
              source={require("../../assets/img/appleLogo.png")}
              style={{ width: 40, height: 40, marginRight: 8 }}
              resizeMode="contain"
            />
            <View style={styles.texts}>
              <Text>“Botafogo, Botafogo </Text>
              <Text>Campeão desde 1910”</Text>
            </View>
            <Image
              source={require("../../assets/img/appleLogo.png")}
              style={{ width: 40, height: 40, marginRight: 8 }}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.winRateContainer}>
          <Text>Retrospecto Recente</Text>
          <View style={styles.winRate}>
            <Text style={styles.defeat}>D</Text>
            <Text style={styles.defeat}>D</Text>
            <Text style={styles.win}>W</Text>
            <Text style={styles.defeat}>D</Text>
            <Text style={styles.defeat}>D</Text>
          </View>
        </View>
        <View style={styles.stadiumContainer}>
          <Text>Estádio</Text>
          //carrosel dos estadios
          <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 8 }}>
            <TouchableOpacity
              onPress={() => setStadiumIndex((prev) => Math.max(prev - 1, 0))}
              disabled={stadiumIndex === 0}
              style={{ opacity: stadiumIndex === 0 ? 0.3 : 1, padding: 8 }}
            >
              <Text style={{ fontSize: 24 }}>{"<"}</Text>
            </TouchableOpacity>
            <Image
              source={stadiumImages[stadiumIndex]}
              style={{ width: 120, height: 80, borderRadius: 8, marginHorizontal: 12 }}
              resizeMode="cover"
            />
            <TouchableOpacity
              onPress={() => setStadiumIndex((prev) => Math.min(prev + 1, stadiumImages.length - 1))}
              disabled={stadiumIndex === stadiumImages.length - 1}
              style={{ opacity: stadiumIndex === stadiumImages.length - 1 ? 0.3 : 1, padding: 8 }}
            >
              <Text style={{ fontSize: 24 }}>{">"}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.playersContainer}>
          <View style={styles.playerColor}></View>
          <View style={styles.golKeeperBackgroundColor}>
            <View style={styles.golKeeperColor}></View>
          </View>
          <Text>Goleiro</Text>
        </View>
        //CARROSSEL DOS GOLEIROS
        <View style={styles.playerColor}></View>
        <View style={styles.defenserBackgroundColor}>
          <View style={styles.defenserColor}></View>
        </View>
        <Text>Zagueiro</Text>
        //carrosel dos zagueiros
        <View style={styles.playerColor}></View>
        <View style={styles.midFielderBackgroundColor}>
          <View style={styles.midFielderColor}></View>
        </View>
        <Text>Meia</Text>
        // Carrossel dos meias
        <View style={styles.playerColor}></View>
        <View style={styles.strikerBackgroundColor}>
          <View style={styles.strikerColor}></View>
        </View>
        <Text>Atacante</Text>
        // Carrossel dos centroavantes
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
  },
  main: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    gap: 20,
  },
  bannerContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  firstColor: {
    backgroundColor: "#F5F5F5",
    height: 100,
    width: 40,
  },
  secondColor: {
    backgroundColor: "#000000",
    height: 100,
    width: 40,
  },
  bannerDown: {
    backgroundColor: "#25406A",
    height: 30,
    width: "100%",
  },
  infos: {
    gap: 8,
    alignItems: "center",
    width: "90%",
  },
  nameTeam: {
    alignItems: "center",
    width: "100%",
  },
  trophies: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
  },
  divisor: {
    backgroundColor: "#25406A",
    height: 5,
    width: "100%",
  },
  subtitles: {
    display: "flex",
    flexDirection: "row",
    textAlign: "justify",
    alignItems: "center",
  },
  texts: {
    display: "flex",
    flexDirection: "column",
  },
  winRateContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  winRate: {
    backgroundColor: "#25406A",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: 200,
    height: 25,
    gap: 5,
  },
  defeat: {
    backgroundColor: "#FF0000",
    height: 20,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  win: {
    backgroundColor: "#00FF00",
    height: 20,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  playersContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  playerColor: {
    gap: 8,
    padding: 10,
  },
  golKeeperBackgroundColor: {
    backgroundColor: "#25406A",
    height: 40,
    width: 40,
    borderRadius: 40,
  },
  golKeeperColor: {
    backgroundColor: "#DE3D28",
    height: 20,
    width: 20,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginTop: 10,
  },
  defenserBackgroundColor: {
    backgroundColor: "#25406A",
    height: 40,
    width: 40,
    borderRadius: 40,
  },
  defenserColor: {
    backgroundColor: "#CD5F11",
    height: 20,
    width: 20,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginTop: 10,
  },
    midFielderBackgroundColor: {
    backgroundColor: "#25406A",
    height: 40,
    width: 40,
    borderRadius: 40,
  },
  midFielderColor: {
    backgroundColor: "#31770E",
    height: 20,
    width: 20,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginTop: 10,
  },
  strikerBackgroundColor: {
    backgroundColor: "#25406A",
    height: 40,
    width: 40,
    borderRadius: 40,
  },
  strikerColor: {
    backgroundColor: "#28AADE",
    height: 20,
    width: 20,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginTop: 10,
  },
});
