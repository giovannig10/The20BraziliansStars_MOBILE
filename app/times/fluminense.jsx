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
];

const stadiumImages = [
  {
    uri: "data:image/jpeg;base64,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"
  }, 
  {
    uri: "data:image/jpeg;base64,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"
  },
  {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYPOhXvFk1eDtDxWVkZKp4YNzmaQfgA0nXkw&s"
  },
  {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS08QI5EVedANPyFp0dZlNeuv8IjX_YULqXRA&s"
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
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Escudo_Botafogo.png/800px-Escudo_Botafogo.png",
              }}
              style={styles.shieldImage}
            />
        </View>

        <View style={styles.infos}>
          <Text style={styles.teamTitle}>fluminense</Text>
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
                uri: "https://acdn-us.mitiendanube.com/stores/002/183/167/products/camisa-fluminense-1-home-i-tricolor-verde-grena-torcedor-jogador-kit-jersey-fan-player-2024-2025-umbro-9070a3ca0e988d943617086046296310-480-0.png",
              }}
              style={styles.logoImage}
            />
            <View style={styles.texts}>
              <Text style={styles.subtitleText}>“Sou Tricolor de coração </Text>
              <Text style={styles.subtitleText}>clube tantas vezes campeão”</Text>
            </View>
            <Image
              source={{
                uri: "https://acdn-us.mitiendanube.com/stores/001/865/527/products/terceira-camisa-fluminense-2023-2024-umbro-21-removebg-preview-74ec7bda359b9f16a516998426573357-640-0.png",
              }}
              style={styles.logoImage}
            />
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
              ? "Maracanã"
              : "Maracanã"}
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
                      uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAAC/CAMAAAA1kLK0AAABfVBMVEUBlkL/ywExJoIAlkAImEUxJ4D/zAD///8xJoP/zgAxJ3//0QD/0gAAlUIwJoAAlEMAlj3///sAkUQAkT4uIoEAkkf6ywYAkD///f8sIIAtIn0mH4MoG30AAHEZAHgAkjvvygDexQ/HvxmLryXn5u0lFn4XFYONjK/VwRJ/e6XuwQ9nU2UAAIBEO43g4OopHXpcV5gcCXhqZ5qetB8zmzdhoyk8oi1zqCZLoDGwuSHSxRK9vRlTnzMznDPpyAZsozOVsCfKvBrhsRfRpzO2kUqaelKKcFd9Y2B4YGmZfUzCoEnSqyhHO3AiG4g0KHVhUW1GNHK+nDdjV2KmhkuqvCB+aVXTsCRGQm2geky5k0W2ts3Kydi/wtFXT5rQyK2538Xc8ONywI1bu4PQ59ein7+FwplpsHrX9+I0mlqh1LdbSW304Is8o1y91cWMzJt3cqH28tj80jmck7/X5eFRT4isrMdioDpvbJhnYqO448Lz5bPl3dFZUpu+vduUlbAg9eyJAAAW4UlEQVR4nO1dC0PaaNYG0tzekBuEACGCFwJqBQR11XqpY+/TYu122tlK/dSKndrtjDvT9lvn+7rz2/ecYK1IEi6iouXpjjOjzpI8Oe85z7m8b3w3+rDh66OPPvroo48++uijjz766KOPPvroo48++ujjGBRFHf112VdyyaAoMaWElO+cCEpUxND06OBMRFHE75gJWBCR8JTu9/MLVIiSv1smYDVE/jbE+P267h+cjVLf5+rA2xblKQZ4AOh+fliRFVFUaj/5rkDJc8s8coDg/UF9JEQp4ndHhCKn5nlGr9Hgr/FxazoCTHw3RMCNKj4lMjPI++vA6P7gCnqK7yV+AA0+WVk4RYNtFbp/aCn03ViEolCh2UG/zjQy4ecZZiosysp154JC+MLKsBMJNQjM8qIoX3dHYScV4RHwDroLDwysD34e/cS1JgIQXhrl8X7dwej88m0ZHap42Rd7fpBTK7yDlzzNhM4vKKnrujrgrkR5aQiCpJc5fGWC0WfD4rUMpFRKTlFTzc3hGMJwSqTky77s7gO85OKyc8x0tYvZ0PViAte6YkuodnjwMww/ugREiL7rskBQOoQaFHULTIBRrKC6uiZmgdmDMtymOdjQ/To/9LfQ9YgeiiJT1Gz7JNRMAhfIlCxT12B1yJQ8/YO7kmwB/PJcKHXFJ4ThSaYiqKibawd3swDhMa+IV7miSVEyFZkGRd05C8dGMRPF9P1qeguUyNEV4awkIMAoFhRRvJqiG5ZFaGmI9+vu7oHheV4QgvAHAP98HGCZ0zZk17nFG8pVJCLlk90UNd4nkBDUV+/cvXf/wcObDx8+uPfox8fjQaADfso0EGGz9sO0eOPqMaFE5pZ5yJ2ciRCC4z/ef0IymXI5kUhoJnwpWxPltaeP7owLvCMRYBX6SPRKaSusvsgU1qgb7wdukeGFl/eeWBkzESCEBBAcxwUCmkS0hDVhPr2LXDgQAU7z1rRsF22uhmGgk5xZdpYOjD84/nw9U4Y7J5wEHEj4habtr0SSaDqglYs3n/FOtsT4ed7W3FeCCDQHO8FyIgKM4UGmrAVIAG4db1uyLUJCOiREAL8tJTLk+bjQuEAY0OlDcxHFp1z2XTYDPKoblIw16tPiAZcELzz+ezKBtkC4gBc4mitn7o/zgiOZP10BoVmrUTsrap0ffzCR4AhageTJA/ycDpCE9dzRzej88mL4sm/UE5gaifKI7nfiASLF80wCXAAX4CSJ82YCqdIC8fL6HaHBV+A3+J/CIFt7trgL/lycvuV31g7C6nq5iRk0rhBt4oVT3gp2MrgYUnpVVEBaFF5x9PZgDsG7Exp4yHaZoMtrLxudpp2eL4i9WNqlRJ/oi4KidipSMzqvP5zQ2mXhiIuJu8BEg5XB5wzeDiki1VuxlILrEVNTTjIIoDPj6wm6qYN0hEa4zAPHxQb0DishSuylPin2+eXFZb8TEfAt4WUhDpqhI4MgEGvLT10Y9uuzIVnpESaoGlLzblUoXbhT0Doi4QhSoPyz7lTUAHnlH12KiFRPRA+bBvm2a41a5+9ktI5WxTcmpPL6oJMTxkDKrER7IYza8y1Yo3ZSPval8o8tzVtGNgcnmU+cyxqoV4emw3LNLC+VCFEJz6I5OC9jhl81z8yDvTqeupW6dJ2ZgkBKXaqr+NqysO/ZkYnxtTP5h69ESKT8IOhW+tSxzo1x67I4QERHdGcGahCeJjqLFo1IPhdcuiPwXX5egfTjcowCYqZITd/CFr4LC4w/eN8K0KQ7RHCZOy71cLgCngF5dTkFG9xYkFrx8x61WT//LMPR3bKIQGJNd3HJ9rrkF7D5cfFMUGJ4bqhJw0JfSxCJPlvsPAZHyi94z3VYm+e+aCpkZUr3sgZA8EUC8qyuWYTEZZ55NYtghQwrFzyEpvhCi0PNOlj84wzXWYLhxoS2rruJ7RoYfSSKcv+CyKCokDIvNO3rCj/Hu0kDgLP+EfT8SJwtmZajyoU0giifEpoZbEoDA56ya6vimInEuLdFwB9hJSWfv6QAAQWeecHLZR1BF9a7IaXqISXue5sEQhiaC6Woc+YCnHJ4trk5APhXma7zEKDBJJp+tq7zU8q5EiGKlBLBqY+mQBNdlzjNNK0iIPkV+C9FyyxgOsoFaElqLN7VuhuuJmHda9Zex74qs7won+OQjaLIkRHHykDjxfB3JpIDX0oH2Y3XFUA+nc6n8/APr19vZA8ONwcGkkCIRDfkYxJN057Kg7Q2e4OzJefFg0iFpkd5vZV1AVT9Tz7GqlvbLLu9s6OyWzfgy/abnW12d1vdVlk1lt+ojuWADrPek4D+Mr2kh5R51cp0Hta5Z+TzoIJSZEVeaX1C8HdVZdmdrTe76q97b3fVrd2trdgv7/Zjsb0P7/ZYG9tASH5jbHOgaGElD1MSjiZxs1r08LIS915ocQIHNTfV7d4gOsnpoZZHwnT/P1kg4gO79yv769sPMXZr5902fNlS1d/29/ZrROz9tqfi32OV6iSQgXdPB0gpqx4cxt2ZoDOrLcSs2kXot+UbqW7zkJpqbDp5XMS/4A7V7Z09/Lr9MfZx92Mspu5usewWu/2Lffvszt4u/hL82QIysmbS0iTOzKpqbNKDiED5eWvTSPbOjx+WIl2kAceAF5fbmAlj/L+zbL6ykc2OlSyMFgPHcYM7OBirVippoGBnZ5fFBcTu7nxAatLVXNKKJ9Pq6yTx8BLx922MZTH+kVD3vKaYis4LTBujkqgq4d6LpmUaEBcgCnAcIRAOOE4rYEgFakjpj408a6+N/TfvWFw9v7D5KpEOklkzQDwCRxN1WQ/df2s63B0mKDk847H3yJmIB2Uc+uBMmnDwt1qQ5DhOIvZIBA4FSKZZhAA7tpFmwWfE1NjbXdsu8mPJgQL8kmsfBHLQNi4FL2YkbO/GPxsLlC+qLLgMNbl+NBNcx1s1kn/lLMklGNI0oTmimcUB82AjDZ7i3bs/gZDdve3YxmbSdC/ocM01VT10HmdLImfQVxT+Lzyre00IOoIfz0hcIH6YTb/+K+eiE1E3oW2AmRSsZC5b2f7lI9Kx/QaWS/7AstwWB8e9b55v1BEBnmLqDM0PO78KdzJHjS4CV8NaRVWrZpMUtPbkNYgZYxXwnW/UD6qKgitbsIBMJxY5uu0Rdwbr3L4Oy1fY2A2PwGe2vc+C55+XUR5Z2RhLmvU8j5YARyTg4qCya8fUvbc7aqwqWU4dEY4UV9u8JLvtMo/bBDogQgGDQEXdwl60Bggv8GkGCmOJycNm7b6vz1wCdc0VkrlqGizizfY+RlakovE/lzLP2r4kjHmgufG+2lsi2M8Mj7TlIk98qnAzjhYhxQ3D8Kah3jYgvpiZgcPX7B4oMZX99c9Y1UK3WUcGR5dfeRfsHK8JHimzgHlCe/YAPCwOMe06ya8I/hyvNTNIO6VbzDsD2TEazOIz+k323f5vrDpWjJ/KRqXEPzogwq5T6LORtuoUkFiI853vLmB0jz4f8ZgslAoHLFsyAkbRyIK8ePtuC+jIl5ISR7hvbSIp8UDo4NIYHNLkh7Gc2aqroEJR+6yPjokYb6wznHjuHkYhxSsVC/W1ZFljeRXWR0x9u10hFjkRP+jEQ9c2aDPo/OCI3HL0oJSfWtmv606EbngQ4VF/gqVkJHAOU4JfMy2wChVSsx1VzSbj30awSOJmsLOrsyMgMzrdauxQRpmWyi+uGI+7E8GRnEGI5PwLKDe/rQHT/CO2/WH/I66PT8UTFnHzLLthwFNMp1orU8jKPNPB5sQTRJjuRJCByhfTLZOoCxDwK5bx+eMOJCLq/na1+DU3PxsRPD+61OpcIiVH54Zc+63NwYwbLh0u0NNrFTY2Ztb9vK5cC5nqN9ICWnIT5Ckk6ntsfrNY+zUal0ZHADtn9JGUfchTS0RgxjnVoYjwezlL8HlmSU0P1P3Ys14raclSenvvnRpj1eyAZuetHTtLnWGGp+XWq3f2HE5oruPteRA+XSxCIpxRIof1EZT2JIIQ0/r8K1b31F8qRgHNqrPwifFzcDYqK23VMSmRCimYaHT0iSCo6Lo7DXxb/kQLnCrEcXTcoyLFgYJITuZhfezt7McmkxB1Em3m4TUWdF0AZdnBnmJFlJeGOzIKRnhvnByTqSOi8eFrVqmoeYzVcGAUA1V2a+styM1qUqPLd1stZJ+8KP/y/3Y2UyNSihyeRSNs+0OFB4nju8VdCST+LWNoEFRa7t+xsUmPCj5BXVGcTINBqCz7HyuOYxJtkgDXNB+mfOHOEnERT30Y5ttWFIzwqFxzA+AHQTMQbf3AdHUDXLzCpje1JlkJSM0N0Jns3l6aTLSbhuv2/vIOGPgKLElEZ3VM59tJc3T+WaZm6kAEZ8SJlVdzhqs/LFYrlSTdpHVOOClZAj+xtbUXm2yjemsXGXlhCmLmGYiw92BQykKbVQmGX83UpCM4uuLBQdEsHZgODxlggBg3csmcVsjlCl7jNZzE0VYuv7+/v8f+q/VLsbWDf2hJPnvLC9ZUeLGlQYATRPBrRw5B28zm09nNhJPUBHMxJ2mT5rSAQR9ufD5sUrugaa248Sc4iv9r51qwtRHtyiyRgkYx385DYLAyY9+5RszPKvvZtMPjaS4kunBQqZQKsIqI9RerjpneE5ngZUgyC4nHP9u4FuxrhKgb3TmJAweN55bbaPj5hbsWOD8Cdg9Ckj0wbfFIAqcFJ1dgYxBP4B6NXDpNXIe2JQ4bPrbwKk6q6u8ts6Az/Eike41g+6A91x3vTmBWM3DR1ieLix8WiiXC2dWnhuScyx2M0aalgbvYLBZzrpkaV+ACR0RwZu7/W34iPD9MRbo7eUndSMn2IXMtEsE/0aS1L7FPtBSH28AiBFcg/xk4HRo406SzG9j6MByGRr7CSGaTBdQjcchVSOZRK7oS3DvvH5wJdX/ADsJPeMVl97/Ds7hXDuTyavrTsQM0/51WK6TRHybzMcs7dBqHJbZ0qBGSHEtKHJd53Foo1/0LSqS9xKI1ALfy9K0WjYJ5mVkrboA+OI6IZCLPHjQ2KjiymSPeTrJwoKpqtqDRn9kqIdqTli5B55dnQmKHrQxviCIli7VdCS1k6MH3CQL64FslSiLZ3FiiQSlIXFxriCf1IMmKmp/QSKbKZq2A9ag5EXrtfB6fcm4DZZQYbVFzC6/Kkgbx7vh2wOEbiYCTvOQkB7V1kgirOlC11iCBz5USktmCrAQJtRg93znLlH1ebfNzGLEmATScyB8MyDEhejQSwWlm1tNLcMSKg7vUuLgU5xIvmlenGH4qHL6AI7xkZQGSe88NAwD+Ud1WcO1LRa2ajQ0fyLE//ZHO5TR3RwGKslRl/4IEVdKkzKr3x6KiHp2LXsxUOhWZWW7qKJhxo+4xD+TZT3G6gQgpoGFWeWi4Z58oHvLshhWwq3SOR0qc/Fx9JeRroxx3JiJ8Iu53bZKHCc8z3AkvqJU2vxjYujG4kyVsjmgDrPpX8WhDQ92+BvuAERwNMIqvq58t9CYZzwwc9/HcWgpd5BsqKHnObo26mwX8YM04cVdEAwvhwHtOnuplapPZXLVQo4yW6G/TU9jkoPFEDTNXHbBsWZpw3+qH0P2DI9EL3LoCn6SIsjylNx6gcpII4cfM6bgIRl7KF0+l2/GCZmlrNXsonOjv0EacJqCurWoMpBgW87SCd8jAXfPttrvPSoUiiqG5W16RlGH4pw1HZxivVTV2qjgBVlA7WYKWitkBtApJiktAwWbJIsWDQmIgxk4WsBGYee4iKhnbOgdnL36jn/15YmjEU3Mz45lTex05zlLZajJwioijcr4Eovw/BXSoIKYD8VI+PVb8S339yaiWxsDPSon3bp4SiWAWwkfvNbpYInz2UM2R5nY5N0J4njw1MGl8eX3w+VSV5pgIurihlkxwkeQzu5HTkmmVFL6oINMtIwEOgyu7e0oGzzekRPFyjtWwjye0S5rO7UGGEf5ert99QYhlukkGyFQnrS8apOxmlv1sEW5yM2d8yZUMdJo0zuW7VfEZnZlP+S7vRD/7JPyQMuw+WcPr6wmp7ralWs/fkQlwjxwmHnS8tFmKa4Y1aWpGPEHs6BGwHgSdPwYkzdBcOOQ7h0SzHS6AihnHwx1qTKxaDfMQbikWaggiacZ6nBiwFozJbH4yhwEXEjaQUj87rwtQuFijto/9vEQifLUXqCy4ThEE70y43LcLpFLFojF0xEsq+9o4klkksTbuRAQ8AX50MdT6EMy58iBTodvLbtWS4LOJds6PKIyxIBrs5TSQTo8dBVqIpc6OkvcLK6CnlR4gwmefVhBWfuKdTxXRg3fRJlqbroO0YiIdK5n2liaSK26ijCJgD+bLhsjJ2MeJ3JruodPaUGmG5MVlx8Er3R98NcF5FaFOjK2DU1ybtEqG/U3Jou3BKZBX5mrQ8di3wVm5l16HSNnnxsnhFZdt0sKPE15FKBI3ThDBGRymFWgRBxtxgqMh5bVVp8CJs4Lhyz5bxgki7vpyXMnC46ThPgtiHmyeSNiPzUPLqWzWBCbKTxz8JDjJwdtRpUff1ZOKrvAOp3HCRY+vW+5N4ErVciAiUNzYmISAOvHAoSbF6/xC2HcJkrolKD6Rss8Ddzrq9uFErZHlsEasgvOSKRQJl5h41ThUyYA5zIR695RTirqhyPKs7rTfhwn+aBkcVlnaOGGE5spPHMOmMJ/q3dMsa0fWUSLOljCNUlMXxm9OcGDqLZ+9Q6TExCPh1NwY/D8zzNBil/arnSdg0Tpqbgj6wWfrkJcTGmWzt8iicQw9MXFzvKHfiq28KaxC9aJvqAPGUjwF2Ulb8cIrktFsceW9PjiaJDLvH6N4OFX7YfihpYjSi0HzNNCTK2J0plFe2SNd/Kv1TCJA8AjsU1UJuzSDkzGEw0Vx83HQ1o51NoWDs7D2fFeBCBv4ojrnk9L9fPDOQ6sc1+pEtyQdyUuJBh7iGXJ/NdhYjdIZflS5MsekH0GhUvYuaoczvpng+N2nZsYypAa/qQWMRHLt4TM96D9d5GDsOeqQeB5t3fME5RNFccpFc+M7BJ7df2JkMuVEwtDg9jXOSFjljEWe3nupB/nGrYW6jie7ipd7RmGHEJXI4qhb2ZlneGH88bNHL57+vL4GWH9/8/7zZ6vgT523HeP7NSK9f1K8I/D1Wim3RMw+vFfg8Q0jwWDQ/gvfNOLSH9D9gr1D72oS4cMxzTCeb+jMRKvQ7amPSA/VHdqH/XLwEV04y1uZgAZmXgkpV9YaEMCD7JOVH+xI2uF+NFtRX91FcQI3FFtzd7jpBhT1VYuYbsAdp7LT27FbsoihpZCMO4ou+y66A1GRZ5ZbO8Kq3hr0kbDsu+yGRTehUHJqvu2dH8LoUvRS+1fdB9bU7LNAWxlN/Loq9NlwSDnjPouehCxPOb52wmlV6Dj1cS5nrF0+QBlG5tw092lrYAZnwz1cjDsTKFlR5NSIvTg8vQWaw4KS8vXqq2XODMoOpEs/8H5P1Q2LZ3mG8vXWq1S6Cvu9LIoYHvF+T7LOz1MhhbqkA+AvBlTNKJRht+zDfh3y4nWRku6ozaBBJJ1ddo4eDM9P9WQ/s8uoWQQoZvtg7YYGFuPnh6ZDvl5qcJ8rbLMI197/eMJr4k7Vleh10tNNUDMLMULN1x0VquPbPK9ajfrsECGA4Dtivx2TCYo6JPbKu6YuFsqN8Ir/a0qKc9S+Hm3znztEJTWNiRgEC3wfndKr8w7nD+wYr/h5MAeqF99QeHHAMTR5enRwMfRd02CDkuWw0gsDo5cPHN29LjXJPvroo48++uijjz766KOPPvroo48++ujjzKD6sHHZz6Fn8F/LZ5bXbFMbWQAAAABJRU5ErkJggg==",
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
                      uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAAC/CAMAAAA1kLK0AAABfVBMVEUBlkL/ywExJoIAlkAImEUxJ4D/zAD///8xJoP/zgAxJ3//0QD/0gAAlUIwJoAAlEMAlj3///sAkUQAkT4uIoEAkkf6ywYAkD///f8sIIAtIn0mH4MoG30AAHEZAHgAkjvvygDexQ/HvxmLryXn5u0lFn4XFYONjK/VwRJ/e6XuwQ9nU2UAAIBEO43g4OopHXpcV5gcCXhqZ5qetB8zmzdhoyk8oi1zqCZLoDGwuSHSxRK9vRlTnzMznDPpyAZsozOVsCfKvBrhsRfRpzO2kUqaelKKcFd9Y2B4YGmZfUzCoEnSqyhHO3AiG4g0KHVhUW1GNHK+nDdjV2KmhkuqvCB+aVXTsCRGQm2geky5k0W2ts3Kydi/wtFXT5rQyK2538Xc8ONywI1bu4PQ59ein7+FwplpsHrX9+I0mlqh1LdbSW304Is8o1y91cWMzJt3cqH28tj80jmck7/X5eFRT4isrMdioDpvbJhnYqO448Lz5bPl3dFZUpu+vduUlbAg9eyJAAAW4UlEQVR4nO1dC0PaaNYG0tzekBuEACGCFwJqBQR11XqpY+/TYu122tlK/dSKndrtjDvT9lvn+7rz2/ecYK1IEi6iouXpjjOjzpI8Oe85z7m8b3w3+rDh66OPPvroo48++uijjz766KOPPvroo48++ujjGBRFHf112VdyyaAoMaWElO+cCEpUxND06OBMRFHE75gJWBCR8JTu9/MLVIiSv1smYDVE/jbE+P267h+cjVLf5+rA2xblKQZ4AOh+fliRFVFUaj/5rkDJc8s8coDg/UF9JEQp4ndHhCKn5nlGr9Hgr/FxazoCTHw3RMCNKj4lMjPI++vA6P7gCnqK7yV+AA0+WVk4RYNtFbp/aCn03ViEolCh2UG/zjQy4ecZZiosysp154JC+MLKsBMJNQjM8qIoX3dHYScV4RHwDroLDwysD34e/cS1JgIQXhrl8X7dwej88m0ZHap42Rd7fpBTK7yDlzzNhM4vKKnrujrgrkR5aQiCpJc5fGWC0WfD4rUMpFRKTlFTzc3hGMJwSqTky77s7gO85OKyc8x0tYvZ0PViAte6YkuodnjwMww/ugREiL7rskBQOoQaFHULTIBRrKC6uiZmgdmDMtymOdjQ/To/9LfQ9YgeiiJT1Gz7JNRMAhfIlCxT12B1yJQ8/YO7kmwB/PJcKHXFJ4ThSaYiqKibawd3swDhMa+IV7miSVEyFZkGRd05C8dGMRPF9P1qeguUyNEV4awkIMAoFhRRvJqiG5ZFaGmI9+vu7oHheV4QgvAHAP98HGCZ0zZk17nFG8pVJCLlk90UNd4nkBDUV+/cvXf/wcObDx8+uPfox8fjQaADfso0EGGz9sO0eOPqMaFE5pZ5yJ2ciRCC4z/ef0IymXI5kUhoJnwpWxPltaeP7owLvCMRYBX6SPRKaSusvsgU1qgb7wdukeGFl/eeWBkzESCEBBAcxwUCmkS0hDVhPr2LXDgQAU7z1rRsF22uhmGgk5xZdpYOjD84/nw9U4Y7J5wEHEj4habtr0SSaDqglYs3n/FOtsT4ed7W3FeCCDQHO8FyIgKM4UGmrAVIAG4db1uyLUJCOiREAL8tJTLk+bjQuEAY0OlDcxHFp1z2XTYDPKoblIw16tPiAZcELzz+ezKBtkC4gBc4mitn7o/zgiOZP10BoVmrUTsrap0ffzCR4AhageTJA/ycDpCE9dzRzej88mL4sm/UE5gaifKI7nfiASLF80wCXAAX4CSJ82YCqdIC8fL6HaHBV+A3+J/CIFt7trgL/lycvuV31g7C6nq5iRk0rhBt4oVT3gp2MrgYUnpVVEBaFF5x9PZgDsG7Exp4yHaZoMtrLxudpp2eL4i9WNqlRJ/oi4KidipSMzqvP5zQ2mXhiIuJu8BEg5XB5wzeDiki1VuxlILrEVNTTjIIoDPj6wm6qYN0hEa4zAPHxQb0DishSuylPin2+eXFZb8TEfAt4WUhDpqhI4MgEGvLT10Y9uuzIVnpESaoGlLzblUoXbhT0Doi4QhSoPyz7lTUAHnlH12KiFRPRA+bBvm2a41a5+9ktI5WxTcmpPL6oJMTxkDKrER7IYza8y1Yo3ZSPval8o8tzVtGNgcnmU+cyxqoV4emw3LNLC+VCFEJz6I5OC9jhl81z8yDvTqeupW6dJ2ZgkBKXaqr+NqysO/ZkYnxtTP5h69ESKT8IOhW+tSxzo1x67I4QERHdGcGahCeJjqLFo1IPhdcuiPwXX5egfTjcowCYqZITd/CFr4LC4w/eN8K0KQ7RHCZOy71cLgCngF5dTkFG9xYkFrx8x61WT//LMPR3bKIQGJNd3HJ9rrkF7D5cfFMUGJ4bqhJw0JfSxCJPlvsPAZHyi94z3VYm+e+aCpkZUr3sgZA8EUC8qyuWYTEZZ55NYtghQwrFzyEpvhCi0PNOlj84wzXWYLhxoS2rruJ7RoYfSSKcv+CyKCokDIvNO3rCj/Hu0kDgLP+EfT8SJwtmZajyoU0giifEpoZbEoDA56ya6vimInEuLdFwB9hJSWfv6QAAQWeecHLZR1BF9a7IaXqISXue5sEQhiaC6Woc+YCnHJ4trk5APhXma7zEKDBJJp+tq7zU8q5EiGKlBLBqY+mQBNdlzjNNK0iIPkV+C9FyyxgOsoFaElqLN7VuhuuJmHda9Zex74qs7won+OQjaLIkRHHykDjxfB3JpIDX0oH2Y3XFUA+nc6n8/APr19vZA8ONwcGkkCIRDfkYxJN057Kg7Q2e4OzJefFg0iFpkd5vZV1AVT9Tz7GqlvbLLu9s6OyWzfgy/abnW12d1vdVlk1lt+ojuWADrPek4D+Mr2kh5R51cp0Hta5Z+TzoIJSZEVeaX1C8HdVZdmdrTe76q97b3fVrd2trdgv7/Zjsb0P7/ZYG9tASH5jbHOgaGElD1MSjiZxs1r08LIS915ocQIHNTfV7d4gOsnpoZZHwnT/P1kg4gO79yv769sPMXZr5902fNlS1d/29/ZrROz9tqfi32OV6iSQgXdPB0gpqx4cxt2ZoDOrLcSs2kXot+UbqW7zkJpqbDp5XMS/4A7V7Z09/Lr9MfZx92Mspu5usewWu/2Lffvszt4u/hL82QIysmbS0iTOzKpqbNKDiED5eWvTSPbOjx+WIl2kAceAF5fbmAlj/L+zbL6ykc2OlSyMFgPHcYM7OBirVippoGBnZ5fFBcTu7nxAatLVXNKKJ9Pq6yTx8BLx922MZTH+kVD3vKaYis4LTBujkqgq4d6LpmUaEBcgCnAcIRAOOE4rYEgFakjpj408a6+N/TfvWFw9v7D5KpEOklkzQDwCRxN1WQ/df2s63B0mKDk847H3yJmIB2Uc+uBMmnDwt1qQ5DhOIvZIBA4FSKZZhAA7tpFmwWfE1NjbXdsu8mPJgQL8kmsfBHLQNi4FL2YkbO/GPxsLlC+qLLgMNbl+NBNcx1s1kn/lLMklGNI0oTmimcUB82AjDZ7i3bs/gZDdve3YxmbSdC/ocM01VT10HmdLImfQVxT+Lzyre00IOoIfz0hcIH6YTb/+K+eiE1E3oW2AmRSsZC5b2f7lI9Kx/QaWS/7AstwWB8e9b55v1BEBnmLqDM0PO78KdzJHjS4CV8NaRVWrZpMUtPbkNYgZYxXwnW/UD6qKgitbsIBMJxY5uu0Rdwbr3L4Oy1fY2A2PwGe2vc+C55+XUR5Z2RhLmvU8j5YARyTg4qCya8fUvbc7aqwqWU4dEY4UV9u8JLvtMo/bBDogQgGDQEXdwl60Bggv8GkGCmOJycNm7b6vz1wCdc0VkrlqGizizfY+RlakovE/lzLP2r4kjHmgufG+2lsi2M8Mj7TlIk98qnAzjhYhxQ3D8Kah3jYgvpiZgcPX7B4oMZX99c9Y1UK3WUcGR5dfeRfsHK8JHimzgHlCe/YAPCwOMe06ya8I/hyvNTNIO6VbzDsD2TEazOIz+k323f5vrDpWjJ/KRqXEPzogwq5T6LORtuoUkFiI853vLmB0jz4f8ZgslAoHLFsyAkbRyIK8ePtuC+jIl5ISR7hvbSIp8UDo4NIYHNLkh7Gc2aqroEJR+6yPjokYb6wznHjuHkYhxSsVC/W1ZFljeRXWR0x9u10hFjkRP+jEQ9c2aDPo/OCI3HL0oJSfWtmv606EbngQ4VF/gqVkJHAOU4JfMy2wChVSsx1VzSbj30awSOJmsLOrsyMgMzrdauxQRpmWyi+uGI+7E8GRnEGI5PwLKDe/rQHT/CO2/WH/I66PT8UTFnHzLLthwFNMp1orU8jKPNPB5sQTRJjuRJCByhfTLZOoCxDwK5bx+eMOJCLq/na1+DU3PxsRPD+61OpcIiVH54Zc+63NwYwbLh0u0NNrFTY2Ztb9vK5cC5nqN9ICWnIT5Ckk6ntsfrNY+zUal0ZHADtn9JGUfchTS0RgxjnVoYjwezlL8HlmSU0P1P3Ys14raclSenvvnRpj1eyAZuetHTtLnWGGp+XWq3f2HE5oruPteRA+XSxCIpxRIof1EZT2JIIQ0/r8K1b31F8qRgHNqrPwifFzcDYqK23VMSmRCimYaHT0iSCo6Lo7DXxb/kQLnCrEcXTcoyLFgYJITuZhfezt7McmkxB1Em3m4TUWdF0AZdnBnmJFlJeGOzIKRnhvnByTqSOi8eFrVqmoeYzVcGAUA1V2a+styM1qUqPLd1stZJ+8KP/y/3Y2UyNSihyeRSNs+0OFB4nju8VdCST+LWNoEFRa7t+xsUmPCj5BXVGcTINBqCz7HyuOYxJtkgDXNB+mfOHOEnERT30Y5ttWFIzwqFxzA+AHQTMQbf3AdHUDXLzCpje1JlkJSM0N0Jns3l6aTLSbhuv2/vIOGPgKLElEZ3VM59tJc3T+WaZm6kAEZ8SJlVdzhqs/LFYrlSTdpHVOOClZAj+xtbUXm2yjemsXGXlhCmLmGYiw92BQykKbVQmGX83UpCM4uuLBQdEsHZgODxlggBg3csmcVsjlCl7jNZzE0VYuv7+/v8f+q/VLsbWDf2hJPnvLC9ZUeLGlQYATRPBrRw5B28zm09nNhJPUBHMxJ2mT5rSAQR9ufD5sUrugaa248Sc4iv9r51qwtRHtyiyRgkYx385DYLAyY9+5RszPKvvZtMPjaS4kunBQqZQKsIqI9RerjpneE5ngZUgyC4nHP9u4FuxrhKgb3TmJAweN55bbaPj5hbsWOD8Cdg9Ckj0wbfFIAqcFJ1dgYxBP4B6NXDpNXIe2JQ4bPrbwKk6q6u8ts6Az/Eike41g+6A91x3vTmBWM3DR1ieLix8WiiXC2dWnhuScyx2M0aalgbvYLBZzrpkaV+ACR0RwZu7/W34iPD9MRbo7eUndSMn2IXMtEsE/0aS1L7FPtBSH28AiBFcg/xk4HRo406SzG9j6MByGRr7CSGaTBdQjcchVSOZRK7oS3DvvH5wJdX/ADsJPeMVl97/Ds7hXDuTyavrTsQM0/51WK6TRHybzMcs7dBqHJbZ0qBGSHEtKHJd53Foo1/0LSqS9xKI1ALfy9K0WjYJ5mVkrboA+OI6IZCLPHjQ2KjiymSPeTrJwoKpqtqDRn9kqIdqTli5B55dnQmKHrQxviCIli7VdCS1k6MH3CQL64FslSiLZ3FiiQSlIXFxriCf1IMmKmp/QSKbKZq2A9ag5EXrtfB6fcm4DZZQYbVFzC6/Kkgbx7vh2wOEbiYCTvOQkB7V1kgirOlC11iCBz5USktmCrAQJtRg93znLlH1ebfNzGLEmATScyB8MyDEhejQSwWlm1tNLcMSKg7vUuLgU5xIvmlenGH4qHL6AI7xkZQGSe88NAwD+Ud1WcO1LRa2ajQ0fyLE//ZHO5TR3RwGKslRl/4IEVdKkzKr3x6KiHp2LXsxUOhWZWW7qKJhxo+4xD+TZT3G6gQgpoGFWeWi4Z58oHvLshhWwq3SOR0qc/Fx9JeRroxx3JiJ8Iu53bZKHCc8z3AkvqJU2vxjYujG4kyVsjmgDrPpX8WhDQ92+BvuAERwNMIqvq58t9CYZzwwc9/HcWgpd5BsqKHnObo26mwX8YM04cVdEAwvhwHtOnuplapPZXLVQo4yW6G/TU9jkoPFEDTNXHbBsWZpw3+qH0P2DI9EL3LoCn6SIsjylNx6gcpII4cfM6bgIRl7KF0+l2/GCZmlrNXsonOjv0EacJqCurWoMpBgW87SCd8jAXfPttrvPSoUiiqG5W16RlGH4pw1HZxivVTV2qjgBVlA7WYKWitkBtApJiktAwWbJIsWDQmIgxk4WsBGYee4iKhnbOgdnL36jn/15YmjEU3Mz45lTex05zlLZajJwioijcr4Eovw/BXSoIKYD8VI+PVb8S339yaiWxsDPSon3bp4SiWAWwkfvNbpYInz2UM2R5nY5N0J4njw1MGl8eX3w+VSV5pgIurihlkxwkeQzu5HTkmmVFL6oINMtIwEOgyu7e0oGzzekRPFyjtWwjye0S5rO7UGGEf5ert99QYhlukkGyFQnrS8apOxmlv1sEW5yM2d8yZUMdJo0zuW7VfEZnZlP+S7vRD/7JPyQMuw+WcPr6wmp7ralWs/fkQlwjxwmHnS8tFmKa4Y1aWpGPEHs6BGwHgSdPwYkzdBcOOQ7h0SzHS6AihnHwx1qTKxaDfMQbikWaggiacZ6nBiwFozJbH4yhwEXEjaQUj87rwtQuFijto/9vEQifLUXqCy4ThEE70y43LcLpFLFojF0xEsq+9o4klkksTbuRAQ8AX50MdT6EMy58iBTodvLbtWS4LOJds6PKIyxIBrs5TSQTo8dBVqIpc6OkvcLK6CnlR4gwmefVhBWfuKdTxXRg3fRJlqbroO0YiIdK5n2liaSK26ijCJgD+bLhsjJ2MeJ3JruodPaUGmG5MVlx8Er3R98NcF5FaFOjK2DU1ybtEqG/U3Jou3BKZBX5mrQ8di3wVm5l16HSNnnxsnhFZdt0sKPE15FKBI3ThDBGRymFWgRBxtxgqMh5bVVp8CJs4Lhyz5bxgki7vpyXMnC46ThPgtiHmyeSNiPzUPLqWzWBCbKTxz8JDjJwdtRpUff1ZOKrvAOp3HCRY+vW+5N4ErVciAiUNzYmISAOvHAoSbF6/xC2HcJkrolKD6Rss8Ddzrq9uFErZHlsEasgvOSKRQJl5h41ThUyYA5zIR695RTirqhyPKs7rTfhwn+aBkcVlnaOGGE5spPHMOmMJ/q3dMsa0fWUSLOljCNUlMXxm9OcGDqLZ+9Q6TExCPh1NwY/D8zzNBil/arnSdg0Tpqbgj6wWfrkJcTGmWzt8iicQw9MXFzvKHfiq28KaxC9aJvqAPGUjwF2Ulb8cIrktFsceW9PjiaJDLvH6N4OFX7YfihpYjSi0HzNNCTK2J0plFe2SNd/Kv1TCJA8AjsU1UJuzSDkzGEw0Vx83HQ1o51NoWDs7D2fFeBCBv4ojrnk9L9fPDOQ6sc1+pEtyQdyUuJBh7iGXJ/NdhYjdIZflS5MsekH0GhUvYuaoczvpng+N2nZsYypAa/qQWMRHLt4TM96D9d5GDsOeqQeB5t3fME5RNFccpFc+M7BJ7df2JkMuVEwtDg9jXOSFjljEWe3nupB/nGrYW6jie7ipd7RmGHEJXI4qhb2ZlneGH88bNHL57+vL4GWH9/8/7zZ6vgT523HeP7NSK9f1K8I/D1Wim3RMw+vFfg8Q0jwWDQ/gvfNOLSH9D9gr1D72oS4cMxzTCeb+jMRKvQ7amPSA/VHdqH/XLwEV04y1uZgAZmXgkpV9YaEMCD7JOVH+xI2uF+NFtRX91FcQI3FFtzd7jpBhT1VYuYbsAdp7LT27FbsoihpZCMO4ou+y66A1GRZ5ZbO8Kq3hr0kbDsu+yGRTehUHJqvu2dH8LoUvRS+1fdB9bU7LNAWxlN/Loq9NlwSDnjPouehCxPOb52wmlV6Dj1cS5nrF0+QBlG5tw092lrYAZnwz1cjDsTKFlR5NSIvTg8vQWaw4KS8vXqq2XODMoOpEs/8H5P1Q2LZ3mG8vXWq1S6Cvu9LIoYHvF+T7LOz1MhhbqkA+AvBlTNKJRht+zDfh3y4nWRku6ozaBBJJ1ddo4eDM9P9WQ/s8uoWQQoZvtg7YYGFuPnh6ZDvl5qcJ8rbLMI197/eMJr4k7Vleh10tNNUDMLMULN1x0VquPbPK9ajfrsECGA4Dtivx2TCYo6JPbKu6YuFsqN8Ir/a0qKc9S+Hm3znztEJTWNiRgEC3wfndKr8w7nD+wYr/h5MAeqF99QeHHAMTR5enRwMfRd02CDkuWw0gsDo5cPHN29LjXJPvroo48++uijjz766KOPPvroo48++ujjzKD6sHHZz6Fn8F/LZ5bXbFMbWQAAAABJRU5ErkJggg==",
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
