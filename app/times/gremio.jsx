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
  {
    uri: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Trof%C3%A9u_Copa_do_Brasil_Feminina.png",
  },
  {
    uri: "https://sep-bucket-prod.s3.amazonaws.com/wp-content/uploads/2022/11/2018.png",
  },
  {
    uri: "https://images.tcdn.com.br/img/img_prod/1092308/90_trofeu_oficial_completa_da_libertadores_atualizado_2023_129_1_8b5f1be1ade56fddf957caaccb212bd5.png",
  },
  {
    uri: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh085Bkfrk8SF_jRVLO5Fa_wy3mS7dTb_9xMB6Ppct6R80nIB7zFJn1VKAvS_6ildasj-1XwUZbT5xMRt23wcyq3v9h3nEHhzvruRdsrelGt6DPHwWb2uDaWzXTss8OlA5Rhe57YcIeZtc/s1600/trof%25C3%25A9u.png"
  }
];

const stadiumImages = [
  {
    uri: "https://lncimg.lance.com.br/cdn-cgi/image/width=1280,height=720,quality=75,fit=cover/uploads/2024/10/arena_gremio-aspect-ratio-512-320.jpeg",
  },
  {
    uri: "https://assets.goal.com/images/v3/bltedef74a21ff058ef/fa56732909ea5e953a1754d7fb1cc2a358f5d03c.jpg?auto=webp&format=pjpg&width=3840&quality=60",
  },
  {
    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Arena_do_Gr%C3%AAmio.jpg/2560px-Arena_do_Gr%C3%AAmio.jpg",
  },
];

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
              <View style={styles.secondColor} />
              <View style={styles.firstColor} />
              <View style={styles.secondColor} />
              <View style={styles.firstColor} />
              <View style={styles.secondColor} />
              <View style={styles.firstColor} />
              <View style={styles.secondColor} />
              <View style={styles.firstColor} />
              <View style={styles.secondColor} />
              <View style={styles.firstColor} />
              <View style={styles.secondColor} />
          <View style={styles.shieldContaier}>
          </View>
        </View>
        <View style={styles.bannerDown}>
                      <Image
              source={{
                uri: "https://especiais.zh.clicrbs.com.br/infograficos/2022/11-novembro/mapa-serie-a/assets/gremio.png",
              }}
              style={styles.shieldImage}
            />
        </View>

        <View style={styles.infos}>
          <Text style={styles.teamTitle}>Grêmio</Text>
          <View style={styles.trophies}>
            {trophyImages.map((img, idx) => (
              <Image
                key={idx}
                source={img}
                style={styles.trophyImage}
                resizeMode="contain"
              />
            ))}
          </View>
          <View style={styles.divisor} />
          <View style={styles.subtitles}>
            <Image
              source={{
                uri: "https://dcdn.mitiendanube.com/stores/002/720/503/products/1-c1edac6ef388f994f817283509617293-480-0.png",
              }}
              style={styles.logoImage}
            />
            <View style={styles.texts}>
              <Text style={styles.subtitleText}>“Até a pé nós iremos,</Text>
              <Text style={styles.subtitleText}>para o que der e vier ”</Text>
            </View>
            <Image
              source={{
                uri: "https://gmstore73.com.br/cdn/shop/files/E5110757-3C92-448C-8DD1-C11208814F14_1024x.png?v=1713297607",
              }}
              style={styles.logoImage}
            />
          </View>
        </View>

        <View style={styles.winRateContainer}>
          <Text style={styles.sectionTitle}>Retrospecto Recente</Text>
          <View style={styles.winRate}>
            {["V", "V", "V", "V", "D"].map((res, idx) => (
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
              style={[
                styles.arrowButton,
                stadiumIndex === 0 && styles.disabled,
              ]}
            >
              <Text style={styles.arrowText}>{"<"}</Text>
            </TouchableOpacity>
            <Image
              source={stadiumImages[stadiumIndex]}
              style={styles.stadiumImage}
              resizeMode="cover"
            />
            <TouchableOpacity
              onPress={() =>
                setStadiumIndex((prev) =>
                  Math.min(prev + 1, stadiumImages.length - 1)
                )
              }
              disabled={stadiumIndex === stadiumImages.length - 1}
              style={[
                styles.arrowButton,
                stadiumIndex === stadiumImages.length - 1 && styles.disabled,
              ]}
            >
              <Text style={styles.arrowText}>{">"}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.stadiumLabel}>
            {stadiumIndex === 0 || stadiumIndex === 2
              ? "Arena do Grêmio"
              : "Arena do Grêmio"}
          </Text>
        </View>
      </View>
      <View style={styles.backgroundColor}>
        <View style={styles.colorGol}></View>
      </View>
      <Text>GL</Text>
      <ScrollView
        style={styles.carroselGl}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.mainContainer}>
          <View style={styles.goleirosContainer}>
            <View style={styles.cardsContainer}>
              <View style={styles.cardPlayer}>
                <Image
                  source={{
                    uri: "https://static.botafogo.com.br/upload/jogador/bd4d5b59afe14b3b83fd2379b7f6dacf.png",
                  }}
                  style={styles.logoImagePlayer}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.textCard}>Nome do Jogador</Text>
                  <Text style={styles.textCard}>Num</Text>
                  <View style={styles.textContainerRow}>
                    <Text style={styles.textCard}>1,97</Text>
                    <Text style={styles.textCard}>32y</Text>
                  </View>
                  <Image
                    source={{
                      uri: "data:image/png;base64,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",
                    }}
                    style={styles.logoNacionalidade}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.goleirosContainer}>
            <View style={styles.cardsContainer}>
              <View style={styles.cardPlayer}>
                <Image
                  source={{
                    uri: "https://static.botafogo.com.br/upload/jogador/bd4d5b59afe14b3b83fd2379b7f6dacf.png",
                  }}
                  style={styles.logoImagePlayer}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.textCard}>Nome do Jogador</Text>
                  <Text style={styles.textCard}>Num</Text>
                  <View style={styles.textContainerRow}>
                    <Text style={styles.textCard}>1,97</Text>
                    <Text style={styles.textCard}>32y</Text>
                  </View>
                  <Image
                    source={{
                      uri: "data:image/png;base64,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",
                    }}
                    style={styles.logoNacionalidade}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.goleirosContainer}>
            <View style={styles.cardsContainer}>
              <View style={styles.cardPlayer}>
                <Image
                  source={{
                    uri: "https://static.botafogo.com.br/upload/jogador/bd4d5b59afe14b3b83fd2379b7f6dacf.png",
                  }}
                  style={styles.logoImagePlayer}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.textCard}>Nome do Jogador</Text>
                  <Text style={styles.textCard}>Num</Text>
                  <View style={styles.textContainerRow}>
                    <Text style={styles.textCard}>1,97</Text>
                    <Text style={styles.textCard}>32y</Text>
                  </View>
                  <Image
                    source={{
                      uri: "data:image/png;base64,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",
                    }}
                    style={styles.logoNacionalidade}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.goleirosContainer}>
            <View style={styles.cardsContainer}>
              <View style={styles.cardPlayer}>
                <Image
                  source={{
                    uri: "https://static.botafogo.com.br/upload/jogador/bd4d5b59afe14b3b83fd2379b7f6dacf.png",
                  }}
                  style={styles.logoImagePlayer}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.textCard}>Nome do Jogador</Text>
                  <Text style={styles.textCard}>Num</Text>
                  <View style={styles.textContainerRow}>
                    <Text style={styles.textCard}>1,97</Text>
                    <Text style={styles.textCard}>32y</Text>
                  </View>
                  <Image
                    source={{
                      uri: "data:image/png;base64,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",
                    }}
                    style={styles.logoNacionalidade}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.backgroundColor}>
        <View style={styles.colorZag}></View>
      </View>
      <Text>Zag</Text>
            <ScrollView
        style={styles.carroselGl}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.mainContainer}>
          <View style={styles.goleirosContainer}>
            <View style={styles.cardsContainer}>
              <View style={styles.cardPlayer}>
                <Image
                  source={{
                    uri: "https://static.botafogo.com.br/upload/jogador/bd4d5b59afe14b3b83fd2379b7f6dacf.png",
                  }}
                  style={styles.logoImagePlayer}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.textCard}>Nome do Jogador</Text>
                  <Text style={styles.textCard}>Num</Text>
                  <View style={styles.textContainerRow}>
                    <Text style={styles.textCard}>1,97</Text>
                    <Text style={styles.textCard}>32y</Text>
                  </View>
                  <Image
                    source={{
                      uri: "data:image/png;base64,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",
                    }}
                    style={styles.logoNacionalidade}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.goleirosContainer}>
            <View style={styles.cardsContainer}>
              <View style={styles.cardPlayer}>
                <Image
                  source={{
                    uri: "https://static.botafogo.com.br/upload/jogador/bd4d5b59afe14b3b83fd2379b7f6dacf.png",
                  }}
                  style={styles.logoImagePlayer}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.textCard}>Nome do Jogador</Text>
                  <Text style={styles.textCard}>Num</Text>
                  <View style={styles.textContainerRow}>
                    <Text style={styles.textCard}>1,97</Text>
                    <Text style={styles.textCard}>32y</Text>
                  </View>
                  <Image
                    source={{
                      uri: "data:image/png;base64,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",
                    }}
                    style={styles.logoNacionalidade}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.goleirosContainer}>
            <View style={styles.cardsContainer}>
              <View style={styles.cardPlayer}>
                <Image
                  source={{
                    uri: "https://static.botafogo.com.br/upload/jogador/bd4d5b59afe14b3b83fd2379b7f6dacf.png",
                  }}
                  style={styles.logoImagePlayer}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.textCard}>Nome do Jogador</Text>
                  <Text style={styles.textCard}>Num</Text>
                  <View style={styles.textContainerRow}>
                    <Text style={styles.textCard}>1,97</Text>
                    <Text style={styles.textCard}>32y</Text>
                  </View>
                  <Image
                    source={{
                      uri: "data:image/png;base64,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",
                    }}
                    style={styles.logoNacionalidade}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.goleirosContainer}>
            <View style={styles.cardsContainer}>
              <View style={styles.cardPlayer}>
                <Image
                  source={{
                    uri: "https://static.botafogo.com.br/upload/jogador/bd4d5b59afe14b3b83fd2379b7f6dacf.png",
                  }}
                  style={styles.logoImagePlayer}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.textCard}>Nome do Jogador</Text>
                  <Text style={styles.textCard}>Num</Text>
                  <View style={styles.textContainerRow}>
                    <Text style={styles.textCard}>1,97</Text>
                    <Text style={styles.textCard}>32y</Text>
                  </View>
                  <Image
                    source={{
                      uri: "data:image/png;base64,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",
                    }}
                    style={styles.logoNacionalidade}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
            <View style={styles.backgroundColor}>
        <View style={styles.colorMei}></View>
      </View>
      <Text>Mei</Text>
            <ScrollView
        style={styles.carroselGl}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.mainContainer}>
          <View style={styles.goleirosContainer}>
            <View style={styles.cardsContainer}>
              <View style={styles.cardPlayer}>
                <Image
                  source={{
                    uri: "https://static.botafogo.com.br/upload/jogador/bd4d5b59afe14b3b83fd2379b7f6dacf.png",
                  }}
                  style={styles.logoImagePlayer}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.textCard}>Nome do Jogador</Text>
                  <Text style={styles.textCard}>Num</Text>
                  <View style={styles.textContainerRow}>
                    <Text style={styles.textCard}>1,97</Text>
                    <Text style={styles.textCard}>32y</Text>
                  </View>
                  <Image
                    source={{
                      uri: "data:image/png;base64,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",
                    }}
                    style={styles.logoNacionalidade}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.goleirosContainer}>
            <View style={styles.cardsContainer}>
              <View style={styles.cardPlayer}>
                <Image
                  source={{
                    uri: "https://static.botafogo.com.br/upload/jogador/bd4d5b59afe14b3b83fd2379b7f6dacf.png",
                  }}
                  style={styles.logoImagePlayer}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.textCard}>Nome do Jogador</Text>
                  <Text style={styles.textCard}>Num</Text>
                  <View style={styles.textContainerRow}>
                    <Text style={styles.textCard}>1,97</Text>
                    <Text style={styles.textCard}>32y</Text>
                  </View>
                  <Image
                    source={{
                      uri: "data:image/png;base64,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",
                    }}
                    style={styles.logoNacionalidade}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.goleirosContainer}>
            <View style={styles.cardsContainer}>
              <View style={styles.cardPlayer}>
                <Image
                  source={{
                    uri: "https://static.botafogo.com.br/upload/jogador/bd4d5b59afe14b3b83fd2379b7f6dacf.png",
                  }}
                  style={styles.logoImagePlayer}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.textCard}>Nome do Jogador</Text>
                  <Text style={styles.textCard}>Num</Text>
                  <View style={styles.textContainerRow}>
                    <Text style={styles.textCard}>1,97</Text>
                    <Text style={styles.textCard}>32y</Text>
                  </View>
                  <Image
                    source={{
                      uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAAC/CAMAAAA1kLK0AAABfVBMVEUBlkL/ywExJoIAlkAImEUxJ4D/zAD///8xJoP/zgAxJ3//0QD/0gAAlUIwJoAAlEMAlj3///sAkUQAkT4uIoEAkkf6ywYAkD///f8sIIAtIn0mH4MoG30AAHEZAHgAkjvvygDexQ/HvxmLryXn5u0lFn4XFYONjK/VwRJ/e6XuwQ9nU2UAAIBEO43g4OopHXpcV5gcCXhqZ5qetB8zmzdhoyk8oi1zqCZLoDGwuSHSxRK9vRlTnzMznDPpyAZsozOVsCfKvBrhsRfRpzO2kUqaelKKcFd9Y2B4YGmZfUzCoEnSqyhHO3AiG4g0KHVhUW1GNHK+nDdjV2KmhkuqvCB+aVXTsCRGQm2geky5k0W2ts3Kydi/wtFXT5rQyK2538Xc8ONywI1bu4PQ59ein7+FwplpsHrX9+I0mlqh1LdbSW304Is8o1y91cWMzJt3cqH28tj80jmck7/X5eFRT4isrMdioDpvbJhnYqO448Lz5bPl3dFZUpu+vduUlbAg9eyJAAAW4UlEQVR4nO1dC0PaaNYG0tzekBuEACGCFwJqBQR11XqpY+/TYu122tlK/dSKndrtjDvT9lvn+7rz2/ecYK1IEi6iouXpjjOjzpI8Oe85z7m8b3w3+rDh66OPPvroo48++uijjz766KOPPvroo48++ujjGBRFHf112VdyyaAoMaWElO+cCEpUxND06OBMRFHE75gJWBCR8JTu9/MLVIiSv1smYDVE/jbE+P267h+cjVLf5+rA2xblKQZ4AOh+fliRFVFUaj/5rkDJc8s8coDg/UF9JEQp4ndHhCKn5nlGr9Hgr/FxazoCTHw3RMCNKj4lMjPI++vA6P7gCnqK7yV+AA0+WVk4RYNtFbp/aCn03ViEolCh2UG/zjQy4ecZZiosysp154JC+MLKsBMJNQjM8qIoX3dHYScV4RHwDroLDwysD34e/cS1JgIQXhrl8X7dwej88m0ZHap42Rd7fpBTK7yDlzzNhM4vKKnrujrgrkR5aQiCpJc5fGWC0WfD4rUMpFRKTlFTzc3hGMJwSqTky77s7gO85OKyc8x0tYvZ0PViAte6YkuodnjwMww/ugREiL7rskBQOoQaFHULTIBRrKC6uiZmgdmDMtymOdjQ/To/9LfQ9YgeiiJT1Gz7JNRMAhfIlCxT12B1yJQ8/YO7kmwB/PJcKHXFJ4ThSaYiqKibawd3swDhMa+IV7miSVEyFZkGRd05C8dGMRPF9P1qeguUyNEV4awkIMAoFhRRvJqiG5ZFaGmI9+vu7oHheV4QgvAHAP98HGCZ0zZk17nFG8pVJCLlk90UNd4nkBDUV+/cvXf/wcObDx8+uPfox8fjQaADfso0EGGz9sO0eOPqMaFE5pZ5yJ2ciRCC4z/ef0IymXI5kUhoJnwpWxPltaeP7owLvCMRYBX6SPRKaSusvsgU1qgb7wdukeGFl/eeWBkzESCEBBAcxwUCmkS0hDVhPr2LXDgQAU7z1rRsF22uhmGgk5xZdpYOjD84/nw9U4Y7J5wEHEj4habtr0SSaDqglYs3n/FOtsT4ed7W3FeCCDQHO8FyIgKM4UGmrAVIAG4db1uyLUJCOiREAL8tJTLk+bjQuEAY0OlDcxHFp1z2XTYDPKoblIw16tPiAZcELzz+ezKBtkC4gBc4mitn7o/zgiOZP10BoVmrUTsrap0ffzCR4AhageTJA/ycDpCE9dzRzej88mL4sm/UE5gaifKI7nfiASLF80wCXAAX4CSJ82YCqdIC8fL6HaHBV+A3+J/CIFt7trgL/lycvuV31g7C6nq5iRk0rhBt4oVT3gp2MrgYUnpVVEBaFF5x9PZgDsG7Exp4yHaZoMtrLxudpp2eL4i9WNqlRJ/oi4KidipSMzqvP5zQ2mXhiIuJu8BEg5XB5wzeDiki1VuxlILrEVNTTjIIoDPj6wm6qYN0hEa4zAPHxQb0DishSuylPin2+eXFZb8TEfAt4WUhDpqhI4MgEGvLT10Y9uuzIVnpESaoGlLzblUoXbhT0Doi4QhSoPyz7lTUAHnlH12KiFRPRA+bBvm2a41a5+9ktI5WxTcmpPL6oJMTxkDKrER7IYza8y1Yo3ZSPval8o8tzVtGNgcnmU+cyxqoV4emw3LNLC+VCFEJz6I5OC9jhl81z8yDvTqeupW6dJ2ZgkBKXaqr+NqysO/ZkYnxtTP5h69ESKT8IOhW+tSxzo1x67I4QERHdGcGahCeJjqLFo1IPhdcuiPwXX5egfTjcowCYqZITd/CFr4LC4w/eN8K0KQ7RHCZOy71cLgCngF5dTkFG9xYkFrx8x61WT//LMPR3bKIQGJNd3HJ9rrkF7D5cfFMUGJ4bqhJw0JfSxCJPlvsPAZHyi94z3VYm+e+aCpkZUr3sgZA8EUC8qyuWYTEZZ55NYtghQwrFzyEpvhCi0PNOlj84wzXWYLhxoS2rruJ7RoYfSSKcv+CyKCokDIvNO3rCj/Hu0kDgLP+EfT8SJwtmZajyoU0giifEpoZbEoDA56ya6vimInEuLdFwB9hJSWfv6QAAQWeecHLZR1BF9a7IaXqISXue5sEQhiaC6Woc+YCnHJ4trk5APhXma7zEKDBJJp+tq7zU8q5EiGKlBLBqY+mQBNdlzjNNK0iIPkV+C9FyyxgOsoFaElqLN7VuhuuJmHda9Zex74qs7won+OQjaLIkRHHykDjxfB3JpIDX0oH2Y3XFUA+nc6n8/APr19vZA8ONwcGkkCIRDfkYxJN057Kg7Q2e4OzJefFg0iFpkd5vZV1AVT9Tz7GqlvbLLu9s6OyWzfgy/abnW12d1vdVlk1lt+ojuWADrPek4D+Mr2kh5R51cp0Hta5Z+TzoIJSZEVeaX1C8HdVZdmdrTe76q97b3fVrd2trdgv7/Zjsb0P7/ZYG9tASH5jbHOgaGElD1MSjiZxs1r08LIS915ocQIHNTfV7d4gOsnpoZZHwnT/P1kg4gO79yv769sPMXZr5902fNlS1d/29/ZrROz9tqfi32OV6iSQgXdPB0gpqx4cxt2ZoDOrLcSs2kXot+UbqW7zkJpqbDp5XMS/4A7V7Z09/Lr9MfZx92Mspu5usewWu/2Lffvszt4u/hL82QIysmbS0iTOzKpqbNKDiED5eWvTSPbOjx+WIl2kAceAF5fbmAlj/L+zbL6ykc2OlSyMFgPHcYM7OBirVippoGBnZ5fFBcTu7nxAatLVXNKKJ9Pq6yTx8BLx922MZTH+kVD3vKaYis4LTBujkqgq4d6LpmUaEBcgCnAcIRAOOE4rYEgFakjpj408a6+N/TfvWFw9v7D5KpEOklkzQDwCRxN1WQ/df2s63B0mKDk847H3yJmIB2Uc+uBMmnDwt1qQ5DhOIvZIBA4FSKZZhAA7tpFmwWfE1NjbXdsu8mPJgQL8kmsfBHLQNi4FL2YkbO/GPxsLlC+qLLgMNbl+NBNcx1s1kn/lLMklGNI0oTmimcUB82AjDZ7i3bs/gZDdve3YxmbSdC/ocM01VT10HmdLImfQVxT+Lzyre00IOoIfz0hcIH6YTb/+K+eiE1E3oW2AmRSsZC5b2f7lI9Kx/QaWS/7AstwWB8e9b55v1BEBnmLqDM0PO78KdzJHjS4CV8NaRVWrZpMUtPbkNYgZYxXwnW/UD6qKgitbsIBMJxY5uu0Rdwbr3L4Oy1fY2A2PwGe2vc+C55+XUR5Z2RhLmvU8j5YARyTg4qCya8fUvbc7aqwqWU4dEY4UV9u8JLvtMo/bBDogQgGDQEXdwl60Bggv8GkGCmOJycNm7b6vz1wCdc0VkrlqGizizfY+RlakovE/lzLP2r4kjHmgufG+2lsi2M8Mj7TlIk98qnAzjhYhxQ3D8Kah3jYgvpiZgcPX7B4oMZX99c9Y1UK3WUcGR5dfeRfsHK8JHimzgHlCe/YAPCwOMe06ya8I/hyvNTNIO6VbzDsD2TEazOIz+k323f5vrDpWjJ/KRqXEPzogwq5T6LORtuoUkFiI853vLmB0jz4f8ZgslAoHLFsyAkbRyIK8ePtuC+jIl5ISR7hvbSIp8UDo4NIYHNLkh7Gc2aqroEJR+6yPjokYb6wznHjuHkYhxSsVC/W1ZFljeRXWR0x9u10hFjkRP+jEQ9c2aDPo/OCI3HL0oJSfWtmv606EbngQ4VF/gqVkJHAOU4JfMy2wChVSsx1VzSbj30awSOJmsLOrsyMgMzrdauxQRpmWyi+uGI+7E8GRnEGI5PwLKDe/rQHT/CO2/WH/I66PT8UTFnHzLLthwFNMp1orU8jKPNPB5sQTRJjuRJCByhfTLZOoCxDwK5bx+eMOJCLq/na1+DU3PxsRPD+61OpcIiVH54Zc+63NwYwbLh0u0NNrFTY2Ztb9vK5cC5nqN9ICWnIT5Ckk6ntsfrNY+zUal0ZHADtn9JGUfchTS0RgxjnVoYjwezlL8HlmSU0P1P3Ys14raclSenvvnRpj1eyAZuetHTtLnWGGp+XWq3f2HE5oruPteRA+XSxCIpxRIof1EZT2JIIQ0/r8K1b31F8qRgHNqrPwifFzcDYqK23VMSmRCimYaHT0iSCo6Lo7DXxb/kQLnCrEcXTcoyLFgYJITuZhfezt7McmkxB1Em3m4TUWdF0AZdnBnmJFlJeGOzIKRnhvnByTqSOi8eFrVqmoeYzVcGAUA1V2a+styM1qUqPLd1stZJ+8KP/y/3Y2UyNSihyeRSNs+0OFB4nju8VdCST+LWNoEFRa7t+xsUmPCj5BXVGcTINBqCz7HyuOYxJtkgDXNB+mfOHOEnERT30Y5ttWFIzwqFxzA+AHQTMQbf3AdHUDXLzCpje1JlkJSM0N0Jns3l6aTLSbhuv2/vIOGPgKLElEZ3VM59tJc3T+WaZm6kAEZ8SJlVdzhqs/LFYrlSTdpHVOOClZAj+xtbUXm2yjemsXGXlhCmLmGYiw92BQykKbVQmGX83UpCM4uuLBQdEsHZgODxlggBg3csmcVsjlCl7jNZzE0VYuv7+/v8f+q/VLsbWDf2hJPnvLC9ZUeLGlQYATRPBrRw5B28zm09nNhJPUBHMxJ2mT5rSAQR9ufD5sUrugaa248Sc4iv9r51qwtRHtyiyRgkYx385DYLAyY9+5RszPKvvZtMPjaS4kunBQqZQKsIqI9RerjpneE5ngZUgyC4nHP9u4FuxrhKgb3TmJAweN55bbaPj5hbsWOD8Cdg9Ckj0wbfFIAqcFJ1dgYxBP4B6NXDpNXIe2JQ4bPrbwKk6q6u8ts6Az/Eike41g+6A91x3vTmBWM3DR1ieLix8WiiXC2dWnhuScyx2M0aalgbvYLBZzrpkaV+ACR0RwZu7/W34iPD9MRbo7eUndSMn2IXMtEsE/0aS1L7FPtBSH28AiBFcg/xk4HRo406SzG9j6MByGRr7CSGaTBdQjcchVSOZRK7oS3DvvH5wJdX/ADsJPeMVl97/Ds7hXDuTyavrTsQM0/51WK6TRHybzMcs7dBqHJbZ0qBGSHEtKHJd53Foo1/0LSqS9xKI1ALfy9K0WjYJ5mVkrboA+OI6IZCLPHjQ2KjiymSPeTrJwoKpqtqDRn9kqIdqTli5B55dnQmKHrQxviCIli7VdCS1k6MH3CQL64FslSiLZ3FiiQSlIXFxriCf1IMmKmp/QSKbKZq2A9ag5EXrtfB6fcm4DZZQYbVFzC6/Kkgbx7vh2wOEbiYCTvOQkB7V1kgirOlC11iCBz5USktmCrAQJtRg93znLlH1ebfNzGLEmATScyB8MyDEhejQSwWlm1tNLcMSKg7vUuLgU5xIvmlenGH4qHL6AI7xkZQGSe88NAwD+Ud1WcO1LRa2ajQ0fyLE//ZHO5TR3RwGKslRl/4IEVdKkzKr3x6KiHp2LXsxUOhWZWW7qKJhxo+4xD+TZT3G6gQgpoGFWeWi4Z58oHvLshhWwq3SOR0qc/Fx9JeRroxx3JiJ8Iu53bZKHCc8z3AkvqJU2vxjYujG4kyVsjmgDrPpX8WhDQ92+BvuAERwNMIqvq58t9CYZzwwc9/HcWgpd5BsqKHnObo26mwX8YM04cVdEAwvhwHtOnuplapPZXLVQo4yW6G/TU9jkoPFEDTNXHbBsWZpw3+qH0P2DI9EL3LoCn6SIsjylNx6gcpII4cfM6bgIRl7KF0+l2/GCZmlrNXsonOjv0EacJqCurWoMpBgW87SCd8jAXfPttrvPSoUiiqG5W16RlGH4pw1HZxivVTV2qjgBVlA7WYKWitkBtApJiktAwWbJIsWDQmIgxk4WsBGYee4iKhnbOgdnL36jn/15YmjEU3Mz45lTex05zlLZajJwioijcr4Eovw/BXSoIKYD8VI+PVb8S339yaiWxsDPSon3bp4SiWAWwkfvNbpYInz2UM2R5nY5N0J4njw1MGl8eX3w+VSV5pgIurihlkxwkeQzu5HTkmmVFL6oINMtIwEOgyu7e0oGzzekRPFyjtWwjye0S5rO7UGGEf5ert99QYhlukkGyFQnrS8apOxmlv1sEW5yM2d8yZUMdJo0zuW7VfEZnZlP+S7vRD/7JPyQMuw+WcPr6wmp7ralWs/fkQlwjxwmHnS8tFmKa4Y1aWpGPEHs6BGwHgSdPwYkzdBcOOQ7h0SzHS6AihnHwx1qTKxaDfMQbikWaggiacZ6nBiwFozJbH4yhwEXEjaQUj87rwtQuFijto/9vEQifLUXqCy4ThEE70y43LcLpFLFojF0xEsq+9o4klkksTbuRAQ8AX50MdT6EMy58iBTodvLbtWS4LOJds6PKIyxIBrs5TSQTo8dBVqIpc6OkvcLK6CnlR4gwmefVhBWfuKdTxXRg3fRJlqbroO0YiIdK5n2liaSK26ijCJgD+bLhsjJ2MeJ3JruodPaUGmG5MVlx8Er3R98NcF5FaFOjK2DU1ybtEqG/U3Jou3BKZBX5mrQ8di3wVm5l16HSNnnxsnhFZdt0sKPE15FKBI3ThDBGRymFWgRBxtxgqMh5bVVp8CJs4Lhyz5bxgki7vpyXMnC46ThPgtiHmyeSNiPzUPLqWzWBCbKTxz8JDjJwdtRpUff1ZOKrvAOp3HCRY+vW+5N4ErVciAiUNzYmISAOvHAoSbF6/xC2HcJkrolKD6Rss8Ddzrq9uFErZHlsEasgvOSKRQJl5h41ThUyYA5zIR695RTirqhyPKs7rTfhwn+aBkcVlnaOGGE5spPHMOmMJ/q3dMsa0fWUSLOljCNUlMXxm9OcGDqLZ+9Q6TExCPh1NwY/D8zzNBil/arnSdg0Tpqbgj6wWfrkJcTGmWzt8iicQw9MXFzvKHfiq28KaxC9aJvqAPGUjwF2Ulb8cIrktFsceW9PjiaJDLvH6N4OFX7YfihpYjSi0HzNNCTK2J0plFe2SNd/Kv1TCJA8AjsU1UJuzSDkzGEw0Vx83HQ1o51NoWDs7D2fFeBCBv4ojrnk9L9fPDOQ6sc1+pEtyQdyUuJBh7iGXJ/NdhYjdIZflS5MsekH0GhUvYuaoczvpng+N2nZsYypAa/qQWMRHLt4TM96D9d5GDsOeqQeB5t3fME5RNFccpFc+M7BJ7df2JkMuVEwtDg9jXOSFjljEWe3nupB/nGrYW6jie7ipd7RmGHEJXI4qhb2ZlneGH88bNHL57+vL4GWH9/8/7zZ6vgT523HeP7NSK9f1K8I/D1Wim3RMw+vFfg8Q0jwWDQ/gvfNOLSH9D9gr1D72oS4cMxzTCeb+jMRKvQ7amPSA/VHdqH/XLwEV04y1uZgAZmXgkpV9YaEMCD7JOVH+xI2uF+NFtRX91FcQI3FFtzd7jpBhT1VYuYbsAdp7LT27FbsoihpZCMO4ou+y66A1GRZ5ZbO8Kq3hr0kbDsu+yGRTehUHJqvu2dH8LoUvRS+1fdB9bU7LNAWxlN/Loq9NlwSDnjPouehCxPOb52wmlV6Dj1cS5nrF0+QBlG5tw092lrYAZnwz1cjDsTKFlR5NSIvTg8vQWaw4KS8vXqq2XODMoOpEs/8H5P1Q2LZ3mG8vXWq1S6Cvu9LIoYHvF+T7LOz1MhhbqkA+AvBlTNKJRht+zDfh3y4nWRku6ozaBBJJ1ddo4eDM9P9WQ/s8uoWQQoZvtg7YYGFuPnh6ZDvl5qcJ8rbLMI197/eMJr4k7Vleh10tNNUDMLMULN1x0VquPbPK9ajfrsECGA4Dtivx2TCYo6JPbKu6YuFsqN8Ir/a0qKc9S+Hm3znztEJTWNiRgEC3wfndKr8w7nD+wYr/h5MAeqF99QeHHAMTR5enRwMfRd02CDkuWw0gsDo5cPHN29LjXJPvroo48++uijjz766KOPPvroo48++ujjzKD6sHHZz6Fn8F/LZ5bXbFMbWQAAAABJRU5ErkJggg==",
                    }}
                    style={styles.logoNacionalidade}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.goleirosContainer}>
            <View style={styles.cardsContainer}>
              <View style={styles.cardPlayer}>
                <Image
                  source={{
                    uri: "https://static.botafogo.com.br/upload/jogador/bd4d5b59afe14b3b83fd2379b7f6dacf.png",
                  }}
                  style={styles.logoImagePlayer}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.textCard}>Nome do Jogador</Text>
                  <Text style={styles.textCard}>Num</Text>
                  <View style={styles.textContainerRow}>
                    <Text style={styles.textCard}>1,97</Text>
                    <Text style={styles.textCard}>32y</Text>
                  </View>
                  <Image
                    source={{
                      uri: "data:image/png;base64,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",
                    }}
                    style={styles.logoNacionalidade}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
            <View style={styles.backgroundColor}>
        <View style={styles.colorCa}></View>
      </View>
      <Text>Ca</Text>
                  <ScrollView
        style={styles.carroselGl}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.mainContainer}>
          <View style={styles.goleirosContainer}>
            <View style={styles.cardsContainer}>
              <View style={styles.cardPlayer}>
                <Image
                  source={{
                    uri: "https://static.botafogo.com.br/upload/jogador/bd4d5b59afe14b3b83fd2379b7f6dacf.png",
                  }}
                  style={styles.logoImagePlayer}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.textCard}>Nome do Jogador</Text>
                  <Text style={styles.textCard}>Num</Text>
                  <View style={styles.textContainerRow}>
                    <Text style={styles.textCard}>1,97</Text>
                    <Text style={styles.textCard}>32y</Text>
                  </View>
                  <Image
                    source={{
                      uri: "data:image/png;base64,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",
                    }}
                    style={styles.logoNacionalidade}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.goleirosContainer}>
            <View style={styles.cardsContainer}>
              <View style={styles.cardPlayer}>
                <Image
                  source={{
                    uri: "https://static.botafogo.com.br/upload/jogador/bd4d5b59afe14b3b83fd2379b7f6dacf.png",
                  }}
                  style={styles.logoImagePlayer}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.textCard}>Nome do Jogador</Text>
                  <Text style={styles.textCard}>Num</Text>
                  <View style={styles.textContainerRow}>
                    <Text style={styles.textCard}>1,97</Text>
                    <Text style={styles.textCard}>32y</Text>
                  </View>
                  <Image
                    source={{
                      uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAAC/CAMAAAA1kLK0AAABfVBMVEUBlkL/ywExJoIAlkAImEUxJ4D/zAD///8xJoP/zgAxJ3//0QD/0gAAlUIwJoAAlEMAlj3///sAkUQAkT4uIoEAkkf6ywYAkD///f8sIIAtIn0mH4MoG30AAHEZAHgAkjvvygDexQ/HvxmLryXn5u0lFn4XFYONjK/VwRJ/e6XuwQ9nU2UAAIBEO43g4OopHXpcV5gcCXhqZ5qetB8zmzdhoyk8oi1zqCZLoDGwuSHSxRK9vRlTnzMznDPpyAZsozOVsCfKvBrhsRfRpzO2kUqaelKKcFd9Y2B4YGmZfUzCoEnSqyhHO3AiG4g0KHVhUW1GNHK+nDdjV2KmhkuqvCB+aVXTsCRGQm2geky5k0W2ts3Kydi/wtFXT5rQyK2538Xc8ONywI1bu4PQ59ein7+FwplpsHrX9+I0mlqh1LdbSW304Is8o1y91cWMzJt3cqH28tj80jmck7/X5eFRT4isrMdioDpvbJhnYqO448Lz5bPl3dFZUpu+vduUlbAg9eyJAAAW4UlEQVR4nO1dC0PaaNYG0tzekBuEACGCFwJqBQR11XqpY+/TYu122tlK/dSKndrtjDvT9lvn+7rz2/ecYK1IEi6iouXpjjOjzpI8Oe85z7m8b3w3+rDh66OPPvroo48++uijjz766KOPPvroo48++ujjGBRFHf112VdyyaAoMaWElO+cCEpUxND06OBMRFHE75gJWBCR8JTu9/MLVIiSv1smYDVE/jbE+P267h+cjVLf5+rA2xblKQZ4AOh+fliRFVFUaj/5rkDJc8s8coDg/UF9JEQp4ndHhCKn5nlGr9Hgr/FxazoCTHw3RMCNKj4lMjPI++vA6P7gCnqK7yV+AA0+WVk4RYNtFbp/aCn03ViEolCh2UG/zjQy4ecZZiosysp154JC+MLKsBMJNQjM8qIoX3dHYScV4RHwDroLDwysD34e/cS1JgIQXhrl8X7dwej88m0ZHap42Rd7fpBTK7yDlzzNhM4vKKnrujrgrkR5aQiCpJc5fGWC0WfD4rUMpFRKTlFTzc3hGMJwSqTky77s7gO85OKyc8x0tYvZ0PViAte6YkuodnjwMww/ugREiL7rskBQOoQaFHULTIBRrKC6uiZmgdmDMtymOdjQ/To/9LfQ9YgeiiJT1Gz7JNRMAhfIlCxT12B1yJQ8/YO7kmwB/PJcKHXFJ4ThSaYiqKibawd3swDhMa+IV7miSVEyFZkGRd05C8dGMRPF9P1qeguUyNEV4awkIMAoFhRRvJqiG5ZFaGmI9+vu7oHheV4QgvAHAP98HGCZ0zZk17nFG8pVJCLlk90UNd4nkBDUV+/cvXf/wcObDx8+uPfox8fjQaADfso0EGGz9sO0eOPqMaFE5pZ5yJ2ciRCC4z/ef0IymXI5kUhoJnwpWxPltaeP7owLvCMRYBX6SPRKaSusvsgU1qgb7wdukeGFl/eeWBkzESCEBBAcxwUCmkS0hDVhPr2LXDgQAU7z1rRsF22uhmGgk5xZdpYOjD84/nw9U4Y7J5wEHEj4habtr0SSaDqglYs3n/FOtsT4ed7W3FeCCDQHO8FyIgKM4UGmrAVIAG4db1uyLUJCOiREAL8tJTLk+bjQuEAY0OlDcxHFp1z2XTYDPKoblIw16tPiAZcELzz+ezKBtkC4gBc4mitn7o/zgiOZP10BoVmrUTsrap0ffzCR4AhageTJA/ycDpCE9dzRzej88mL4sm/UE5gaifKI7nfiASLF80wCXAAX4CSJ82YCqdIC8fL6HaHBV+A3+J/CIFt7trgL/lycvuV31g7C6nq5iRk0rhBt4oVT3gp2MrgYUnpVVEBaFF5x9PZgDsG7Exp4yHaZoMtrLxudpp2eL4i9WNqlRJ/oi4KidipSMzqvP5zQ2mXhiIuJu8BEg5XB5wzeDiki1VuxlILrEVNTTjIIoDPj6wm6qYN0hEa4zAPHxQb0DishSuylPin2+eXFZb8TEfAt4WUhDpqhI4MgEGvLT10Y9uuzIVnpESaoGlLzblUoXbhT0Doi4QhSoPyz7lTUAHnlH12KiFRPRA+bBvm2a41a5+9ktI5WxTcmpPL6oJMTxkDKrER7IYza8y1Yo3ZSPval8o8tzVtGNgcnmU+cyxqoV4emw3LNLC+VCFEJz6I5OC9jhl81z8yDvTqeupW6dJ2ZgkBKXaqr+NqysO/ZkYnxtTP5h69ESKT8IOhW+tSxzo1x67I4QERHdGcGahCeJjqLFo1IPhdcuiPwXX5egfTjcowCYqZITd/CFr4LC4w/eN8K0KQ7RHCZOy71cLgCngF5dTkFG9xYkFrx8x61WT//LMPR3bKIQGJNd3HJ9rrkF7D5cfFMUGJ4bqhJw0JfSxCJPlvsPAZHyi94z3VYm+e+aCpkZUr3sgZA8EUC8qyuWYTEZZ55NYtghQwrFzyEpvhCi0PNOlj84wzXWYLhxoS2rruJ7RoYfSSKcv+CyKCokDIvNO3rCj/Hu0kDgLP+EfT8SJwtmZajyoU0giifEpoZbEoDA56ya6vimInEuLdFwB9hJSWfv6QAAQWeecHLZR1BF9a7IaXqISXue5sEQhiaC6Woc+YCnHJ4trk5APhXma7zEKDBJJp+tq7zU8q5EiGKlBLBqY+mQBNdlzjNNK0iIPkV+C9FyyxgOsoFaElqLN7VuhuuJmHda9Zex74qs7won+OQjaLIkRHHykDjxfB3JpIDX0oH2Y3XFUA+nc6n8/APr19vZA8ONwcGkkCIRDfkYxJN057Kg7Q2e4OzJefFg0iFpkd5vZV1AVT9Tz7GqlvbLLu9s6OyWzfgy/abnW12d1vdVlk1lt+ojuWADrPek4D+Mr2kh5R51cp0Hta5Z+TzoIJSZEVeaX1C8HdVZdmdrTe76q97b3fVrd2trdgv7/Zjsb0P7/ZYG9tASH5jbHOgaGElD1MSjiZxs1r08LIS915ocQIHNTfV7d4gOsnpoZZHwnT/P1kg4gO79yv769sPMXZr5902fNlS1d/29/ZrROz9tqfi32OV6iSQgXdPB0gpqx4cxt2ZoDOrLcSs2kXot+UbqW7zkJpqbDp5XMS/4A7V7Z09/Lr9MfZx92Mspu5usewWu/2Lffvszt4u/hL82QIysmbS0iTOzKpqbNKDiED5eWvTSPbOjx+WIl2kAceAF5fbmAlj/L+zbL6ykc2OlSyMFgPHcYM7OBirVippoGBnZ5fFBcTu7nxAatLVXNKKJ9Pq6yTx8BLx922MZTH+kVD3vKaYis4LTBujkqgq4d6LpmUaEBcgCnAcIRAOOE4rYEgFakjpj408a6+N/TfvWFw9v7D5KpEOklkzQDwCRxN1WQ/df2s63B0mKDk847H3yJmIB2Uc+uBMmnDwt1qQ5DhOIvZIBA4FSKZZhAA7tpFmwWfE1NjbXdsu8mPJgQL8kmsfBHLQNi4FL2YkbO/GPxsLlC+qLLgMNbl+NBNcx1s1kn/lLMklGNI0oTmimcUB82AjDZ7i3bs/gZDdve3YxmbSdC/ocM01VT10HmdLImfQVxT+Lzyre00IOoIfz0hcIH6YTb/+K+eiE1E3oW2AmRSsZC5b2f7lI9Kx/QaWS/7AstwWB8e9b55v1BEBnmLqDM0PO78KdzJHjS4CV8NaRVWrZpMUtPbkNYgZYxXwnW/UD6qKgitbsIBMJxY5uu0Rdwbr3L4Oy1fY2A2PwGe2vc+C55+XUR5Z2RhLmvU8j5YARyTg4qCya8fUvbc7aqwqWU4dEY4UV9u8JLvtMo/bBDogQgGDQEXdwl60Bggv8GkGCmOJycNm7b6vz1wCdc0VkrlqGizizfY+RlakovE/lzLP2r4kjHmgufG+2lsi2M8Mj7TlIk98qnAzjhYhxQ3D8Kah3jYgvpiZgcPX7B4oMZX99c9Y1UK3WUcGR5dfeRfsHK8JHimzgHlCe/YAPCwOMe06ya8I/hyvNTNIO6VbzDsD2TEazOIz+k323f5vrDpWjJ/KRqXEPzogwq5T6LORtuoUkFiI853vLmB0jz4f8ZgslAoHLFsyAkbRyIK8ePtuC+jIl5ISR7hvbSIp8UDo4NIYHNLkh7Gc2aqroEJR+6yPjokYb6wznHjuHkYhxSsVC/W1ZFljeRXWR0x9u10hFjkRP+jEQ9c2aDPo/OCI3HL0oJSfWtmv606EbngQ4VF/gqVkJHAOU4JfMy2wChVSsx1VzSbj30awSOJmsLOrsyMgMzrdauxQRpmWyi+uGI+7E8GRnEGI5PwLKDe/rQHT/CO2/WH/I66PT8UTFnHzLLthwFNMp1orU8jKPNPB5sQTRJjuRJCByhfTLZOoCxDwK5bx+eMOJCLq/na1+DU3PxsRPD+61OpcIiVH54Zc+63NwYwbLh0u0NNrFTY2Ztb9vK5cC5nqN9ICWnIT5Ckk6ntsfrNY+zUal0ZHADtn9JGUfchTS0RgxjnVoYjwezlL8HlmSU0P1P3Ys14raclSenvvnRpj1eyAZuetHTtLnWGGp+XWq3f2HE5oruPteRA+XSxCIpxRIof1EZT2JIIQ0/r8K1b31F8qRgHNqrPwifFzcDYqK23VMSmRCimYaHT0iSCo6Lo7DXxb/kQLnCrEcXTcoyLFgYJITuZhfezt7McmkxB1Em3m4TUWdF0AZdnBnmJFlJeGOzIKRnhvnByTqSOi8eFrVqmoeYzVcGAUA1V2a+styM1qUqPLd1stZJ+8KP/y/3Y2UyNSihyeRSNs+0OFB4nju8VdCST+LWNoEFRa7t+xsUmPCj5BXVGcTINBqCz7HyuOYxJtkgDXNB+mfOHOEnERT30Y5ttWFIzwqFxzA+AHQTMQbf3AdHUDXLzCpje1JlkJSM0N0Jns3l6aTLSbhuv2/vIOGPgKLElEZ3VM59tJc3T+WaZm6kAEZ8SJlVdzhqs/LFYrlSTdpHVOOClZAj+xtbUXm2yjemsXGXlhCmLmGYiw92BQykKbVQmGX83UpCM4uuLBQdEsHZgODxlggBg3csmcVsjlCl7jNZzE0VYuv7+/v8f+q/VLsbWDf2hJPnvLC9ZUeLGlQYATRPBrRw5B28zm09nNhJPUBHMxJ2mT5rSAQR9ufD5sUrugaa248Sc4iv9r51qwtRHtyiyRgkYx385DYLAyY9+5RszPKvvZtMPjaS4kunBQqZQKsIqI9RerjpneE5ngZUgyC4nHP9u4FuxrhKgb3TmJAweN55bbaPj5hbsWOD8Cdg9Ckj0wbfFIAqcFJ1dgYxBP4B6NXDpNXIe2JQ4bPrbwKk6q6u8ts6Az/Eike41g+6A91x3vTmBWM3DR1ieLix8WiiXC2dWnhuScyx2M0aalgbvYLBZzrpkaV+ACR0RwZu7/W34iPD9MRbo7eUndSMn2IXMtEsE/0aS1L7FPtBSH28AiBFcg/xk4HRo406SzG9j6MByGRr7CSGaTBdQjcchVSOZRK7oS3DvvH5wJdX/ADsJPeMVl97/Ds7hXDuTyavrTsQM0/51WK6TRHybzMcs7dBqHJbZ0qBGSHEtKHJd53Foo1/0LSqS9xKI1ALfy9K0WjYJ5mVkrboA+OI6IZCLPHjQ2KjiymSPeTrJwoKpqtqDRn9kqIdqTli5B55dnQmKHrQxviCIli7VdCS1k6MH3CQL64FslSiLZ3FiiQSlIXFxriCf1IMmKmp/QSKbKZq2A9ag5EXrtfB6fcm4DZZQYbVFzC6/Kkgbx7vh2wOEbiYCTvOQkB7V1kgirOlC11iCBz5USktmCrAQJtRg93znLlH1ebfNzGLEmATScyB8MyDEhejQSwWlm1tNLcMSKg7vUuLgU5xIvmlenGH4qHL6AI7xkZQGSe88NAwD+Ud1WcO1LRa2ajQ0fyLE//ZHO5TR3RwGKslRl/4IEVdKkzKr3x6KiHp2LXsxUOhWZWW7qKJhxo+4xD+TZT3G6gQgpoGFWeWi4Z58oHvLshhWwq3SOR0qc/Fx9JeRroxx3JiJ8Iu53bZKHCc8z3AkvqJU2vxjYujG4kyVsjmgDrPpX8WhDQ92+BvuAERwNMIqvq58t9CYZzwwc9/HcWgpd5BsqKHnObo26mwX8YM04cVdEAwvhwHtOnuplapPZXLVQo4yW6G/TU9jkoPFEDTNXHbBsWZpw3+qH0P2DI9EL3LoCn6SIsjylNx6gcpII4cfM6bgIRl7KF0+l2/GCZmlrNXsonOjv0EacJqCurWoMpBgW87SCd8jAXfPttrvPSoUiiqG5W16RlGH4pw1HZxivVTV2qjgBVlA7WYKWitkBtApJiktAwWbJIsWDQmIgxk4WsBGYee4iKhnbOgdnL36jn/15YmjEU3Mz45lTex05zlLZajJwioijcr4Eovw/BXSoIKYD8VI+PVb8S339yaiWxsDPSon3bp4SiWAWwkfvNbpYInz2UM2R5nY5N0J4njw1MGl8eX3w+VSV5pgIurihlkxwkeQzu5HTkmmVFL6oINMtIwEOgyu7e0oGzzekRPFyjtWwjye0S5rO7UGGEf5ert99QYhlukkGyFQnrS8apOxmlv1sEW5yM2d8yZUMdJo0zuW7VfEZnZlP+S7vRD/7JPyQMuw+WcPr6wmp7ralWs/fkQlwjxwmHnS8tFmKa4Y1aWpGPEHs6BGwHgSdPwYkzdBcOOQ7h0SzHS6AihnHwx1qTKxaDfMQbikWaggiacZ6nBiwFozJbH4yhwEXEjaQUj87rwtQuFijto/9vEQifLUXqCy4ThEE70y43LcLpFLFojF0xEsq+9o4klkksTbuRAQ8AX50MdT6EMy58iBTodvLbtWS4LOJds6PKIyxIBrs5TSQTo8dBVqIpc6OkvcLK6CnlR4gwmefVhBWfuKdTxXRg3fRJlqbroO0YiIdK5n2liaSK26ijCJgD+bLhsjJ2MeJ3JruodPaUGmG5MVlx8Er3R98NcF5FaFOjK2DU1ybtEqG/U3Jou3BKZBX5mrQ8di3wVm5l16HSNnnxsnhFZdt0sKPE15FKBI3ThDBGRymFWgRBxtxgqMh5bVVp8CJs4Lhyz5bxgki7vpyXMnC46ThPgtiHmyeSNiPzUPLqWzWBCbKTxz8JDjJwdtRpUff1ZOKrvAOp3HCRY+vW+5N4ErVciAiUNzYmISAOvHAoSbF6/xC2HcJkrolKD6Rss8Ddzrq9uFErZHlsEasgvOSKRQJl5h41ThUyYA5zIR695RTirqhyPKs7rTfhwn+aBkcVlnaOGGE5spPHMOmMJ/q3dMsa0fWUSLOljCNUlMXxm9OcGDqLZ+9Q6TExCPh1NwY/D8zzNBil/arnSdg0Tpqbgj6wWfrkJcTGmWzt8iicQw9MXFzvKHfiq28KaxC9aJvqAPGUjwF2Ulb8cIrktFsceW9PjiaJDLvH6N4OFX7YfihpYjSi0HzNNCTK2J0plFe2SNd/Kv1TCJA8AjsU1UJuzSDkzGEw0Vx83HQ1o51NoWDs7D2fFeBCBv4ojrnk9L9fPDOQ6sc1+pEtyQdyUuJBh7iGXJ/NdhYjdIZflS5MsekH0GhUvYuaoczvpng+N2nZsYypAa/qQWMRHLt4TM96D9d5GDsOeqQeB5t3fME5RNFccpFc+M7BJ7df2JkMuVEwtDg9jXOSFjljEWe3nupB/nGrYW6jie7ipd7RmGHEJXI4qhb2ZlneGH88bNHL57+vL4GWH9/8/7zZ6vgT523HeP7NSK9f1K8I/D1Wim3RMw+vFfg8Q0jwWDQ/gvfNOLSH9D9gr1D72oS4cMxzTCeb+jMRKvQ7amPSA/VHdqH/XLwEV04y1uZgAZmXgkpV9YaEMCD7JOVH+xI2uF+NFtRX91FcQI3FFtzd7jpBhT1VYuYbsAdp7LT27FbsoihpZCMO4ou+y66A1GRZ5ZbO8Kq3hr0kbDsu+yGRTehUHJqvu2dH8LoUvRS+1fdB9bU7LNAWxlN/Loq9NlwSDnjPouehCxPOb52wmlV6Dj1cS5nrF0+QBlG5tw092lrYAZnwz1cjDsTKFlR5NSIvTg8vQWaw4KS8vXqq2XODMoOpEs/8H5P1Q2LZ3mG8vXWq1S6Cvu9LIoYHvF+T7LOz1MhhbqkA+AvBlTNKJRht+zDfh3y4nWRku6ozaBBJJ1ddo4eDM9P9WQ/s8uoWQQoZvtg7YYGFuPnh6ZDvl5qcJ8rbLMI197/eMJr4k7Vleh10tNNUDMLMULN1x0VquPbPK9ajfrsECGA4Dtivx2TCYo6JPbKu6YuFsqN8Ir/a0qKc9S+Hm3znztEJTWNiRgEC3wfndKr8w7nD+wYr/h5MAeqF99QeHHAMTR5enRwMfRd02CDkuWw0gsDo5cPHN29LjXJPvroo48++uijjz766KOPPvroo48++ujjzKD6sHHZz6Fn8F/LZ5bXbFMbWQAAAABJRU5ErkJggg==",
                    }}
                    style={styles.logoNacionalidade}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.goleirosContainer}>
            <View style={styles.cardsContainer}>
              <View style={styles.cardPlayer}>
                <Image
                  source={{
                    uri: "https://static.botafogo.com.br/upload/jogador/bd4d5b59afe14b3b83fd2379b7f6dacf.png",
                  }}
                  style={styles.logoImagePlayer}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.textCard}>Nome do Jogador</Text>
                  <Text style={styles.textCard}>Num</Text>
                  <View style={styles.textContainerRow}>
                    <Text style={styles.textCard}>1,97</Text>
                    <Text style={styles.textCard}>32y</Text>
                  </View>
                  <Image
                    source={{
                      uri: "data:image/png;base64,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",
                    }}
                    style={styles.logoNacionalidade}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.goleirosContainer}>
            <View style={styles.cardsContainer}>
              <View style={styles.cardPlayer}>
                <Image
                  source={{
                    uri: "https://static.botafogo.com.br/upload/jogador/bd4d5b59afe14b3b83fd2379b7f6dacf.png",
                  }}
                  style={styles.logoImagePlayer}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.textCard}>Nome do Jogador</Text>
                  <Text style={styles.textCard}>Num</Text>
                  <View style={styles.textContainerRow}>
                    <Text style={styles.textCard}>1,97</Text>
                    <Text style={styles.textCard}>32y</Text>
                  </View>
                  <Image
                    source={{
                      uri: "data:image/png;base64,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",
                    }}
                    style={styles.logoNacionalidade}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
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
    width: "100%",
    alignItems: "center",
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
    backgroundColor: "#008000",
    height: 100,
    width: 40,
  },
  bannerDown: {
    backgroundColor: "#25406A",
    height: 30,
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
  },
  shieldContainer: {
    width: "100%",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  shieldImage : {
    width: 50,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
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
    color: "#222",
    marginTop: 8,
    marginBottom: 2,
  },
  trophies: {
    flexDirection: "row",
    justifyContent: "center",
  },
  trophyImage: {
    width: 44,
    height: 44,
    marginHorizontal: 4,
  },
  divisor: {
    backgroundColor: "#25406A",
    height: 5,
    width: "100%",
    borderRadius: 2,
    marginVertical: 6,
  },
  subtitles: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  texts: {
    alignItems: "center",
    marginHorizontal: 6,
  },
  subtitleText: {
    fontStyle: "italic",
    fontSize: 14,
    textAlign: "center",
    color: "#333",
    lineHeight: 18,
  },
  logoImage: {
    width: 40,
    height: 40,
    marginHorizontal: 8,
  },
  winRateContainer: {
    alignItems: "center",
    marginTop: 10,
    width: "100%",
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
    color: "#25406A",
    textAlign: "center",
  },
  winRate: {
    backgroundColor: "#25406A",
    flexDirection: "row",
    justifyContent: "space-around",
    width: 200,
    paddingVertical: 4,
    borderRadius: 8,
    marginTop: 2,
  },
  win: {
    color: "#0f0",
    fontWeight: "bold",
    fontSize: 16,
    marginHorizontal: 8,
  },
  defeat: {
    color: "#f00",
    fontWeight: "bold",
    fontSize: 16,
    marginHorizontal: 8,
  },
  stadiumContainer: {
    alignItems: "center",
    marginTop: 10,
    width: "100%",
  },
  stadiumImage: {
    width: 220,
    height: 120,
    borderRadius: 12,
    marginHorizontal: 12,
    borderWidth: 2,
    borderColor: "#25406A",
    backgroundColor: "#eee",
  },
  stadiumLabel: {
    fontSize: 14,
    color: "#25406A",
    marginTop: 4,
    fontWeight: "bold",
    textAlign: "center",
  },
  carouselRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
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

  mainContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
  },
  goleirosContainer: {
    width: 100,
    display: "flex",
    flexDirection: "collumn",
    alignItems: "center",
    justifyContent: "space-between",
  },
  carroselGl: {
    width: "100%",
    display: "flex",
  },
  backgroundColor: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#25406A",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  colorGol: {
    width: 10,
    height: 10,
    backgroundColor: "#DE3D28",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  colorZag: {
    width: 10,
    height: 10,
    backgroundColor: "#CD5F11",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  colorMei: {
    width: 10,
    height: 10,
    backgroundColor: "#31770E",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  colorCa: {
    width: 10,
    height: 10,
    backgroundColor: "#28AADE",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cardsGlContainer: {
    flexDirection: "row",
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
  },
  cardsContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  cardPlayer: {
    width: 100,
    height: 150,
    backgroundColor: "#25406A",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  logoImagePlayer: {
    height: 60,
    width: 60,
    borderRadius: 10,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  textCard: {
    color: "#fff",
    fontSize: 8,
    marginTop: 4,
  },
  textContainerRow: {
    flexDirection: "row",
    gap: 30,
    width: "100%",
    paddingHorizontal: 8,
  },
  logoNacionalidade: {
    width: 25,
    height: 15,
    marginTop: 4,
  },
});
