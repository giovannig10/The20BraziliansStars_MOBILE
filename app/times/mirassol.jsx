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
    uri: "",
  },
  {
    uri: "",
  },
  {
    uri: "",
  },
];

const stadiumImages = [
  {
    uri: "https://img.nsctotal.com.br/wp-content/uploads/2025/04/Estadio-Maiao-2.jpg",
  }, // Nilton Santos 1
  {
    uri: "data:image/jpeg;base64,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",
  },
  {
    uri: "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3637084:1743683583/Mirassol_Est%C3%A1dio_Easy-Resize.com.jpg?f=16x9&h=574&w=1020&$p$f$h$w=d8f331f",
  },
  {
    uri: "https://spaceks.net/sites/tsradio.com.br/images/notimage/user_1135412444.jpg",
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
          <View style={styles.shieldContanier}>
          </View>
        </View>
        <View style={styles.bannerDown}>
                      <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/pt/c/ce/Escudo_de_2022_do_Mirassol_Futebol_Clube.png",
              }}
              style={styles.shieldImage}
            />
        </View>

        <View style={styles.infos}>
          <Text style={styles.teamTitle}>Botafogo de Futebol e Regatas</Text>
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
                uri: "https://botafogo.vtexassets.com/arquivos/ids/157244/BF0012NUTS99-1.png?v=638731649410030000",
              }}
              style={styles.logoImage}
            />
            <View style={styles.texts}>
              <Text style={styles.subtitleText}>“Botafogo, Botafogo </Text>
              <Text style={styles.subtitleText}>Campeão desde 1910”</Text>
            </View>
            <Image
              source={{
                uri: "https://images.tcdncom.br/img/img_prod/1092308/90_copia_camisa_botafogo_reebok_home_24_25_1034_1_1d0c6fbc85c0a327e154cb73f1fbab78.png",
              }}
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
              ? "Estádio Nilton Santos"
              : "Estádio Nilton Santos"}
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
                  <View style={styles.colorGlDown}></View>
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
                  <View style={styles.colorGlDown}></View>
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
                  <View style={styles.colorGlDown}></View>
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
                  <View style={styles.colorGlDown}></View>
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
                      uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAAC/CAMAAAA1kLK0AAABfVBMVEUBlkL/ywExJoIAlkAImEUxJ4D/zAD///8xJoP/zgAxJ3//0QD/0gAAlUIwJoAAlEMAlj3///sAkUQAkT4uIoEAkkf6ywYAkD///f8sIIAtIn0mH4MoG30AAHEZAHgAkjvvygDexQ/HvxmLryXn5u0lFn4XFYONjK/VwRJ/e6XuwQ9nU2UAAIBEO43g4OopHXpcV5gcCXhqZ5qetB8zmzdhoyk8oi1zqCZLoDGwuSHSxRK9vRlTnzMznDPpyAZsozOVsCfKvBrhsRfRpzO2kUqaelKKcFd9Y2B4YGmZfUzCoEnSqyhHO3AiG4g0KHVhUW1GNHK+nDdjV2KmhkuqvCB+aVXTsCRGQm2geky5k0W2ts3Kydi/wtFXT5rQyK2538Xc8ONywI1bu4PQ59ein7+FwplpsHrX9+I0mlqh1LdbSW304Is8o1y91cWMzJt3cqH28tj80jmck7/X5eFRT4isrMdioDpvbJhnYqO448Lz5bPl3dFZUpu+vduUlbAg9eyJAAAW4UlEQVR4nO1dC0PaaNYG0tzekBuEACGCFwJqBQR11XqpY+/TYu122tlK/dSKndrtjDvT9lvn+7rz2/ecYK1IEi6iouXpjjOjzpI8Oe85z7m8b3w3+rDh66OPPvroo48++uijjz766KOPPvroo48++ujjGBRFHf112VdyyaAoMaWElO+cCEpUxND06OBMRFHE75gJWBCR8JTu9/MLVIiSv1smYDVE/jbE+P267h+cjVLf5+rA2xblKQZ4AOh+fliRFVFUaj/5rkDJc8s8coDg/UF9JEQp4ndHhCKn5nlGr9Hgr/FxazoCTHw3RMCNKj4lMjPI++vA6P7gCnqK7yV+AA0+WVk4RYNtFbp/aCn03ViEolCh2UG/zjQy4ecZZiosysp154JC+MLKsBMJNQjM8qIoX3dHYScV4RHwDroLDwysD34e/cS1JgIQXhrl8X7dwej88m0ZHap42Rd7fpBTK7yDlzzNhM4vKKnrujrgrkR5aQiCpJc5fGWC0WfD4rUMpFRKTlFTzc3hGMJwSqTky77s7gO85OKyc8x0tYvZ0PViAte6YkuodnjwMww/ugREiL7rskBQOoQaFHULTIBRrKC6uiZmgdmDMtymOdjQ/To/9LfQ9YgeiiJT1Gz7JNRMAhfIlCxT12B1yJQ8/YO7kmwB/PJcKHXFJ4ThSaYiqKibawd3swDhMa+IV7miSVEyFZkGRd05C8dGMRPF9P1qeguUyNEV4awkIMAoFhRRvJqiG5ZFaGmI9+vu7oHheV4QgvAHAP98HGCZ0zZk17nFG8pVJCLlk90UNd4nkBDUV+/cvXf/wcObDx8+uPfox8fjQaADfso0EGGz9sO0eOPqMaFE5pZ5yJ2ciRCC4z/ef0IymXI5kUhoJnwpWxPltaeP7owLvCMRYBX6SPRKaSusvsgU1qgb7wdukeGFl/eeWBkzESCEBBAcxwUCmkS0hDVhPr2LXDgQAU7z1rRsF22uhmGgk5xZdpYOjD84/nw9U4Y7J5wEHEj4habtr0SSaDqglYs3n/FOtsT4ed7W3FeCCDQHO8FyIgKM4UGmrAVIAG4db1uyLUJCOiREAL8tJTLk+bjQuEAY0OlDcxHFp1z2XTYDPKoblIw16tPiAZcELzz+ezKBtkC4gBc4mitn7o/zgiOZP10BoVmrUTsrap0ffzCR4AhageTJA/ycDpCE9dzRzej88mL4sm/UE5gaifKI7nfiASLF80wCXAAX4CSJ82YCqdIC8fL6HaHBV+A3+J/CIFt7trgL/lycvuV31g7C6nq5iRk0rhBt4oVT3gp2MrgYUnpVVEBaFF5x9PZgDsG7Exp4yHaZoMtrLxudpp2eL4i9WNqlRJ/oi4KidipSMzqvP5zQ2mXhiIuJu8BEg5XB5wzeDiki1VuxlILrEVNTTjIIoDPj6wm6qYN0hEa4zAPHxQb0DishSuylPin2+eXFZb8TEfAt4WUhDpqhI4MgEGvLT10Y9uuzIVnpESaoGlLzblUoXbhT0Doi4QhSoPyz7lTUAHnlH12KiFRPRA+bBvm2a41a5+9ktI5WxTcmpPL6oJMTxkDKrER7IYza8y1Yo3ZSPval8o8tzVtGNgcnmU+cyxqoV4emw3LNLC+VCFEJz6I5OC9jhl81z8yDvTqeupW6dJ2ZgkBKXaqr+NqysO/ZkYnxtTP5h69ESKT8IOhW+tSxzo1x67I4QERHdGcGahCeJjqLFo1IPhdcuiPwXX5egfTjcowCYqZITd/CFr4LC4w/eN8K0KQ7RHCZOy71cLgCngF5dTkFG9xYkFrx8x61WT//LMPR3bKIQGJNd3HJ9rrkF7D5cfFMUGJ4bqhJw0JfSxCJPlvsPAZHyi94z3VYm+e+aCpkZUr3sgZA8EUC8qyuWYTEZZ55NYtghQwrFzyEpvhCi0PNOlj84wzXWYLhxoS2rruJ7RoYfSSKcv+CyKCokDIvNO3rCj/Hu0kDgLP+EfT8SJwtmZajyoU0giifEpoZbEoDA56ya6vimInEuLdFwB9hJSWfv6QAAQWeecHLZR1BF9a7IaXqISXue5sEQhiaC6Woc+YCnHJ4trk5APhXma7zEKDBJJp+tq7zU8q5EiGKlBLBqY+mQBNdlzjNNK0iIPkV+C9FyyxgOsoFaElqLN7VuhuuJmHda9Zex74qs7won+OQjaLIkRHHykDjxfB3JpIDX0oH2Y3XFUA+nc6n8/APr19vZA8ONwcGkkCIRDfkYxJN057Kg7Q2e4OzJefFg0iFpkd5vZV1AVT9Tz7GqlvbLLu9s6OyWzfgy/abnW12d1vdVlk1lt+ojuWADrPek4D+Mr2kh5R51cp0Hta5Z+TzoIJSZEVeaX1C8HdVZdmdrTe76q97b3fVrd2trdgv7/Zjsb0P7/ZYG9tASH5jbHOgaGElD1MSjiZxs1r08LIS915ocQIHNTfV7d4gOsnpoZZHwnT/P1kg4gO79yv769sPMXZr5902fNlS1d/29/ZrROz9tqfi32OV6iSQgXdPB0gpqx4cxt2ZoDOrLcSs2kXot+UbqW7zkJpqbDp5XMS/4A7V7Z09/Lr9MfZx92Mspu5usewWu/2Lffvszt4u/hL82QIysmbS0iTOzKpqbNKDiED5eWvTSPbOjx+WIl2kAceAF5fbmAlj/L+zbL6ykc2OlSyMFgPHcYM7OBirVippoGBnZ5fFBcTu7nxAatLVXNKKJ9Pq6yTx8BLx922MZTH+kVD3vKaYis4LTBujkqgq4d6LpmUaEBcgCnAcIRAOOE4rYEgFakjpj408a6+N/TfvWFw9v7D5KpEOklkzQDwCRxN1WQ/df2s63B0mKDk847H3yJmIB2Uc+uBMmnDwt1qQ5DhOIvZIBA4FSKZZhAA7tpFmwWfE1NjbXdsu8mPJgQL8kmsfBHLQNi4FL2YkbO/GPxsLlC+qLLgMNbl+NBNcx1s1kn/lLMklGNI0oTmimcUB82AjDZ7i3bs/gZDdve3YxmbSdC/ocM01VT10HmdLImfQVxT+Lzyre00IOoIfz0hcIH6YTb/+K+eiE1E3oW2AmRSsZC5b2f7lI9Kx/QaWS/7AstwWB8e9b55v1BEBnmLqDM0PO78KdzJHjS4CV8NaRVWrZpMUtPbkNYgZYxXwnW/UD6qKgitbsIBMJxY5uu0Rdwbr3L4Oy1fY2A2PwGe2vc+C55+XUR5Z2RhLmvU8j5YARyTg4qCya8fUvbc7aqwqWU4dEY4UV9u8JLvtMo/bBDogQgGDQEXdwl60Bggv8GkGCmOJycNm7b6vz1wCdc0VkrlqGizizfY+RlakovE/lzLP2r4kjHmgufG+2lsi2M8Mj7TlIk98qnAzjhYhxQ3D8Kah3jYgvpiZgcPX7B4oMZX99c9Y1UK3WUcGR5dfeRfsHK8JHimzgHlCe/YAPCwOMe06ya8I/hyvNTNIO6VbzDsD2TEazOIz+k323f5vrDpWjJ/KRqXEPzogwq5T6LORtuoUkFiI853vLmB0jz4f8ZgslAoHLFsyAkbRyIK8ePtuC+jIl5ISR7hvbSIp8UDo4NIYHNLkh7Gc2aqroEJR+6yPjokYb6wznHjuHkYhxSsVC/W1ZFljeRXWR0x9u10hFjkRP+jEQ9c2aDPo/OCI3HL0oJSfWtmv606EbngQ4VF/gqVkJHAOU4JfMy2wChVSsx1VzSbj30awSOJmsLOrsyMgMzrdauxQRpmWyi+uGI+7E8GRnEGI5PwLKDe/rQHT/CO2/WH/I66PT8UTFnHzLLthwFNMp1orU8jKPNPB5sQTRJjuRJCByhfTLZOoCxDwK5bx+eMOJCLq/na1+DU3PxsRPD+61OpcIiVH54Zc+63NwYwbLh0u0NNrFTY2Ztb9vK5cC5nqN9ICWnIT5Ckk6ntsfrNY+zUal0ZHADtn9JGUfchTS0RgxjnVoYjwezlL8HlmSU0P1P3Ys14raclSenvvnRpj1eyAZuetHTtLnWGGp+XWq3f2HE5oruPteRA+XSxCIpxRIof1EZT2JIIQ0/r8K1b31F8qRgHNqrPwifFzcDYqK23VMSmRCimYaHT0iSCo6Lo7DXxb/kQLnCrEcXTcoyLFgYJITuZhfezt7McmkxB1Em3m4TUWdF0AZdnBnmJFlJeGOzIKRnhvnByTqSOi8eFrVqmoeYzVcGAUA1V2a+styM1qUqPLd1stZJ+8KP/y/3Y2UyNSihyeRSNs+0OFB4nju8VdCST+LWNoEFRa7t+xsUmPCj5BXVGcTINBqCz7HyuOYxJtkgDXNB+mfOHOEnERT30Y5ttWFIzwqFxzA+AHQTMQbf3AdHUDXLzCpje1JlkJSM0N0Jns3l6aTLSbhuv2/vIOGPgKLElEZ3VM59tJc3T+WaZm6kAEZ8SJlVdzhqs/LFYrlSTdpHVOOClZAj+xtbUXm2yjemsXGXlhCmLmGYiw92BQykKbVQmGX83UpCM4uuLBQdEsHZgODxlggBg3csmcVsjlCl7jNZzE0VYuv7+/v8f+q/VLsbWDf2hJPnvLC9ZUeLGlQYATRPBrRw5B28zm09nNhJPUBHMxJ2mT5rSAQR9ufD5sUrugaa248Sc4iv9r51qwtRHtyiyRgkYx385DYLAyY9+5RszPKvvZtMPjaS4kunBQqZQKsIqI9RerjpneE5ngZUgyC4nHP9u4FuxrhKgb3TmJAweN55bbaPj5hbsWOD8Cdg9Ckj0wbfFIAqcFJ1dgYxBP4B6NXDpNXIe2JQ4bPrbwKk6q6u8ts6Az/Eike41g+6A91x3vTmBWM3DR1ieLix8WiiXC2dWnhuScyx2M0aalgbvYLBZzrpkaV+ACR0RwZu7/W34iPD9MRbo7eUndSMn2IXMtEsE/0aS1L7FPtBSH28AiBFcg/xk4HRo406SzG9j6MByGRr7CSGaTBdQjcchVSOZRK7oS3DvvH5wJdX/ADsJPeMVl97/Ds7hXDuTyavrTsQM0/51WK6TRHybzMcs7dBqHJbZ0qBGSHEtKHJd53Foo1/0LSqS9xKI1ALfy9K0WjYJ5mVkrboA+OI6IZCLPHjQ2KjiymSPeTrJwoKpqtqDRn9kqIdqTli5B55dnQmKHrQxviCIli7VdCS1k6MH3CQL64FslSiLZ3FiiQSlIXFxriCf1IMmKmp/QSKbKZq2A9ag5EXrtfB6fcm4DZZQYbVFzC6/Kkgbx7vh2wOEbiYCTvOQkB7V1kgirOlC11iCBz5USktmCrAQJtRg93znLlH1ebfNzGLEmATScyB8MyDEhejQSwWlm1tNLcMSKg7vUuLgU5xIvmlenGH4qHL6AI7xkZQGSe88NAwD+Ud1WcO1LRa2ajQ0fyLE//ZHO5TR3RwGKslRl/4IEVdKkzKr3x6KiHp2LXsxUOhWZWW7qKJhxo+4xD+TZT3G6gQgpoGFWeWi4Z58oHvLshhWwq3SOR0qc/Fx9JeRroxx3JiJ8Iu53bZKHCc8z3AkvqJU2vxjYujG4kyVsjmgDrPpX8WhDQ92+BvuAERwNMIqvq58t9CYZzwwc9/HcWgpd5BsqKHnObo26mwX8YM04cVdEAwvhwHtOnuplapPZXLVQo4yW6G/TU9jkoPFEDTNXHbBsWZpw3+qH0P2DI9EL3LoCn6SIsjylNx6gcpII4cfM6bgIRl7KF0+l2/GCZmlrNXsonOjv0EacJqCurWoMpBgW87SCd8jAXfPttrvPSoUiiqG5W16RlGH4pw1HZxivVTV2qjgBVlA7WYKWitkBtApJiktAwWbJIsWDQmIgxk4WsBGYee4iKhnbOgdnL36jn/15YmjEU3Mz45lTex05zlLZajJwioijcr4Eovw/BXSoIKYD8VI+PVb8S339yaiWxsDPSon3bp4SiWAWwkfvNbpYInz2UM2R5nY5N0J4njw1MGl8eX3w+VSV5pgIurihlkxwkeQzu5HTkmmVFL6oINMtIwEOgyu7e0oGzzekRPFyjtWwjye0S5rO7UGGEf5ert99QYhlukkGyFQnrS8apOxmlv1sEW5yM2d8yZUMdJo0zuW7VfEZnZlP+S7vRD/7JPyQMuw+WcPr6wmp7ralWs/fkQlwjxwmHnS8tFmKa4Y1aWpGPEHs6BGwHgSdPwYkzdBcOOQ7h0SzHS6AihnHwx1qTKxaDfMQbikWaggiacZ6nBiwFozJbH4yhwEXEjaQUj87rwtQuFijto/9vEQifLUXqCy4ThEE70y43LcLpFLFojF0xEsq+9o4klkksTbuRAQ8AX50MdT6EMy58iBTodvLbtWS4LOJds6PKIyxIBrs5TSQTo8dBVqIpc6OkvcLK6CnlR4gwmefVhBWfuKdTxXRg3fRJlqbroO0YiIdK5n2liaSK26ijCJgD+bLhsjJ2MeJ3JruodPaUGmG5MVlx8Er3R98NcF5FaFOjK2DU1ybtEqG/U3Jou3BKZBX5mrQ8di3wVm5l16HSNnnxsnhFZdt0sKPE15FKBI3ThDBGRymFWgRBxtxgqMh5bVVp8CJs4Lhyz5bxgki7vpyXMnC46ThPgtiHmyeSNiPzUPLqWzWBCbKTxz8JDjJwdtRpUff1ZOKrvAOp3HCRY+vW+5N4ErVciAiUNzYmISAOvHAoSbF6/xC2HcJkrolKD6Rss8Ddzrq9uFErZHlsEasgvOSKRQJl5h41ThUyYA5zIR695RTirqhyPKs7rTfhwn+aBkcVlnaOGGE5spPHMOmMJ/q3dMsa0fWUSLOljCNUlMXxm9OcGDqLZ+9Q6TExCPh1NwY/D8zzNBil/arnSdg0Tpqbgj6wWfrkJcTGmWzt8iicQw9MXFzvKHfiq28KaxC9aJvqAPGUjwF2Ulb8cIrktFsceW9PjiaJDLvH6N4OFX7YfihpYjSi0HzNNCTK2J0plFe2SNd/Kv1TCJA8AjsU1UJuzSDkzGEw0Vx83HQ1o51NoWDs7D2fFeBCBv4ojrnk9L9fPDOQ6sc1+pEtyQdyUuJBh7iGXJ/NdhYjdIZflS5MsekH0GhUvYuaoczvpng+N2nZsYypAa/qQWMRHLt4TM96D9d5GDsOeqQeB5t3fME5RNFccpFc+M7BJ7df2JkMuVEwtDg9jXOSFjljEWe3nupB/nGrYW6jie7ipd7RmGHEJXI4qhb2ZlneGH88bNHL57+vL4GWH9/8/7zZ6vgT523HeP7NSK9f1K8I/D1Wim3RMw+vFfg8Q0jwWDQ/gvfNOLSH9D9gr1D72oS4cMxzTCeb+jMRKvQ7amPSA/VHdqH/XLwEV04y1uZgAZmXgkpV9YaEMCD7JOVH+xI2uF+NFtRX91FcQI3FFtzd7jpBhT1VYuYbsAdp7LT27FbsoihpZCMO4ou+y66A1GRZ5ZbO8Kq3hr0kbDsu+yGRTehUHJqvu2dH8LoUvRS+1fdB9bU7LNAWxlN/Loq9NlwSDnjPouehCxPOb52wmlV6Dj1cS5nrF0+QBlG5tw092lrYAZnwz1cjDsTKFlR5NSIvTg8vQWaw4KS8vXqq2XODMoOpEs/8H5P1Q2LZ3mG8vXWq1S6Cvu9LIoYHvF+T7LOz1MhhbqkA+AvBlTNKJRht+zDfh3y4nWRku6ozaBBJJ1ddo4eDM9P9WQ/s8uoWQQoZvtg7YYGFuPnh6ZDvl5qcJ8rbLMI197/eMJr4k7Vleh10tNNUDMLMULN1x0VquPbPK9ajfrsECGA4Dtivx2TCYo6JPbKu6YuFsqN8Ir/a0qKc9S+Hm3znztEJTWNiRgEC3wfndKr8w7nD+wYr/h5MAeqF99QeHHAMTR5enRwMfRd02CDkuWw0gsDo5cPHN29LjXJPvroo48++uijjz766KOPPvroo48++ujjzKD6sHHZz6Fn8F/LZ5bXbFMbWQAAAABJRU5ErkJggg==",
                    }}
                    style={styles.logoNacionalidade}
                  />
                  <View style={styles.colorZagDown}></View>
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
                  <View style={styles.colorZagDown}></View>
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
                  <View style={styles.colorZagDown}></View>
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
                  <View style={styles.colorZagDown}></View>
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
                  <View style={styles.colorMeiDown}></View>
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
                  <View style={styles.colorMeiDown}></View>
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
                  <View style={styles.colorMeiDown}></View>
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
                  <View style={styles.colorMeiDown}></View>
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
                  <View style={styles.colorCaDown}></View>
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
                  <View style={styles.colorCaDown}></View>
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
                  <View style={styles.colorCaDown}></View>
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
                  <View style={styles.colorCaDown}></View>
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
    backgroundColor: "#000",
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
    height: 160,
    backgroundColor: "#25406A",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderWidth: 7,
    borderColor: "#1D2B43",
  },
  logoImagePlayer: {
    height: 60,
    width: 60,
    borderRadius: 10,
    marginTop: 10,
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
    marginTop: 10,
  },
  colorGlDown: {
    marginTop: 4,
    width: 96,
    height: 5,
    backgroundColor: "#DE3D28",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
},
  colorZagDown: {
    marginTop: 4,
    width: 96,
    height: 5,
    backgroundColor: "#CD5F11",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
},
  colorMeiDown: {
    marginTop: 4,
    width: 96,
    height: 5,
    backgroundColor: "#31770E",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
},
  colorCaDown: {
    marginTop: 4,
    width: 96,
    height: 5,
    backgroundColor: "#28AADE",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
},
});
