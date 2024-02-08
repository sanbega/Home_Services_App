// Aquí estamos agregando los iconos de las categorías
import React from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import Heading from "../../Components/Heading";
import Colors from "../../Utils/Colors";

export default function Categories() {
  const images = [
    {
      source: require("./../../../assets/images/iconoAseo.png"),
      name: "Cleaning",
    },
    {
      source: require("./../../../assets/images/iconoBrocha.jpeg"),
      name: "Painting",
    },
    {
      source: require("./../../../assets/images/iconoCamion.jpeg"),
      name: "Shifting",
    },
    {
      source: require("./../../../assets/images/iconoHerramienta.jpeg"),
      name: "Repairing",
    },
  ];

  return (
    <View style={styles.container}>
      <Heading text={"Categories"} isViewAll={true} style={styles.heading} />
      <View style={styles.imagesContainer}>
        <FlatList
          data={images}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Image
                source={item.source}
                style={styles.image}
                resizeMode="contain"
              />
              <Text style={{ fontFamily: "outfit-regular", marginTop: 10 }}>
                {item?.name}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  imagesContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    marginHorizontal: 13,
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 99,
  },
  heading: {
    fontFamily: "outfit-regular",
    fontSize: 20,
    marginBottom: 10,
  },
});
