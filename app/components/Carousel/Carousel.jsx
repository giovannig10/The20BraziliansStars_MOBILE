import React, { useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const Carousel = ({ items }) => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onScroll = (event) => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(slide);
  };

  const goToSlide = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ x: index * width, animated: true });
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    if (currentIndex < items.length - 1) goToSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) goToSlide(currentIndex - 1);
  };

  return (
    <View style={styles.carouselContainer}>
      <TouchableOpacity style={[styles.carouselButton, styles.prevButton]} onPress={prevSlide}>
        <Text style={styles.arrow}>{"<"}</Text>
      </TouchableOpacity>

      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        style={styles.carouselWrapper}
      >
        {items.map((item, index) => (
          <View style={styles.carouselItem} key={item.id || index}>
            <View style={styles.carouselCard}>
              <View style={styles.cardImageContainer}>
                <Image source={{ uri: item.fansBackground }} style={styles.cardImage} resizeMode="cover" />
              </View>
              <View style={styles.cardContent}>
                <View style={styles.tituloCard}>
                  <Text style={styles.cardTitle}>{item.name}</Text>
                  <Image source={{ uri: item.shieldImage }} style={styles.imagemClube} />
                </View>
                <Text style={styles.cardDescription}>
                  O {item.apelido} foi campeão {item.titles} vezes!
                </Text>
                <View style={styles.cardFooter}>
                  <Text style={styles.cardDate}>O último título foi em {item.ultimo}</Text>
                  <TouchableOpacity style={styles.readMoreButton}>
                    <Text style={{ color: "#25406A", fontWeight: "bold" }}>Ver mais</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={[styles.carouselButton, styles.nextButton]} onPress={nextSlide}>
        <Text style={styles.arrow}>{">"}</Text>
      </TouchableOpacity>

      <View style={styles.pagination}>
        {items.map((_, idx) => (
          <TouchableOpacity
            key={idx}
            style={[styles.paginationDot, currentIndex === idx && styles.activeDot]}
            onPress={() => goToSlide(idx)}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    position: "relative",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  carouselWrapper: {
    width: width,
  },
  carouselItem: {
    width: width,
    paddingHorizontal: 10,
    boxSizing: "border-box",
  },
  carouselCard: {
    height: 400,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#25406A",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  cardImageContainer: {
    width: "100%",
    height: 220,
    backgroundColor: "#25406A",
    alignItems: "center",
    justifyContent: "center",
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
  cardContent: {
    padding: 16,
    gap: 8,
    flex: 1,
    justifyContent: "space-between",
  },
  tituloCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    marginBottom: 8,
  },
  imagemClube: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginLeft: 8,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    flexShrink: 1,
  },
  cardDescription: {
    fontSize: 16,
    color: "#fff",
    marginVertical: 8,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  cardDate: {
    color: "#fff",
    fontSize: 14,
  },
  readMoreButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 20,
    fontSize: 14,
    fontWeight: "500",
    elevation: 2,
  },
  carouselButton: {
    position: "absolute",
    top: "45%",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#25406A",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    elevation: 10,
  },
  prevButton: {
    left: 10,
  },
  nextButton: {
    right: 10,
  },
  arrow: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#25406A",
    transform: [{ scale: 1.2 }],
  },
});