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
    return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.main}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Aqui você encontra tudo sobre os 20 times que estão disputando o
              "Brasileirão Betano 2025".
            </Text>
          </View>
          <View style={styles.logoContainer}>
            <Image source={require("../assets/img/logos/Logo.png")} style={styles.logo} />
            <View style={styles.bar}></View>
            <Text style={styles.title}>THE BRAZILIAN STARS</Text>
          </View>
        </View>
  
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Conheça a história, o estádio, a torcida, o elenco e os títulos de cada clube
          </Text>
          <Text style={styles.arrow}>▶</Text>
        </TouchableOpacity>
  
        <Text style={styles.subText}>Acompanhe a tabela do campeonato em tempo real!</Text>
  
        {/* WebView da tabela do SofaScore */}
        <View style={styles.webviewContainer}>
          <WebView
            source={{
              uri: "https://widgets.sofascore.com/pt-BR/embed/tournament/83/season/72034/standings/Brasileiro%20Serie%20A%202025?widgetTitle=Brasileiro%20Serie%20A%202025&showCompetitionLogo=true",
            }}
            style={styles.webview}
            javaScriptEnabled={true}
            domStorageEnabled={true}
          />

          <Text style={styles.subText}>Fique ligado na escalação e no jogador da semana!</Text>
          <WebView
            source={{
              uri: "https://widgets.sofascore.com/pt-BR/embed/unique-tournament/372/season/69522/round/17830/teamOfTheWeek?showCompetitionLogo=true&widgetTheme=light&widgetTitle=Paulista%20S%C3%A9rie%20A1",
            }}
            style={styles.webview}
            javaScriptEnabled={true}
            domStorageEnabled={true}
          />
          <Text style={styles.subText}>Fique ligado no jogador da semana!</Text>
          <WebView
            source={{
              uri: "https://widgets.sofascore.com/pt-BR/embed/player/874572?widgetTheme=light",
            }}
            style={styles.webview}
            javaScriptEnabled={true}
            domStorageEnabled={true}
          />
        </View>
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    scrollContainer: {
      flexGrow: 1,
      backgroundColor: "#F5F5F5",
      alignItems: "center",
      paddingHorizontal: 20,
      paddingBottom: 20, 
    },
    main: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
    },
    textContainer: {
      flex: 1,
    },
    text: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#25406A",
      textAlign: "left",
    },
    logoContainer: {
      alignItems: "center",
    },
    logo: {
      width: 120,
      height: 100,
      marginBottom: 5,
    },
    bar: {
      width: 180,
      height: 4,
      backgroundColor: "#25406A",
      marginVertical: 5,
    },
    title: {
      fontSize: 12,
      fontWeight: "bold",
      color: "#25406A",
    },
    button: {
      flexDirection: "row",
      backgroundColor: "#25406A",
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 5,
      marginVertical: 15,
      alignItems: "center",
    },
    buttonText: {
      color: "#FFF",
      fontSize: 14,
      fontWeight: "bold",
    },
    arrow: {
      color: "#FFF",
      fontSize: 14,
      marginLeft: 8,
    },
    subText: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#25406A",
      textAlign: "left",
      width: "100%",
      marginTop: 10,
      display: "flex",
      alignItems: "center",
      textAlign: "center",
    },
    webviewContainer: {
      width: "100%",
      marginTop: 10,
      gap: 20,
    },
    webview: {
      flex: 1,
      width: "100%",
      minHeight: 600, 
      maxHeight: 800,
    },
  });
  
  