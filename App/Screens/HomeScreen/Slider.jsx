// Aquí creamos un Slider con diferentes imágenes sin usar librerías, solo utilizando el componente FlatList
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import Colors from "../../Utils/Colors";
import Heading from "../../Components/Heading";

const Slider = () => {
  const images = [
    require("./../../../assets/images/ecomerce.jpeg"),
    require("./../../../assets/images/ecomerce2.jpeg"),
  ];
  return (
    <View style={{ marginTop: 10 }}>
      <Heading text={"Offers For You"} />
      <FlatList
        style={styles.flatListStyle}
        data={images}
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginRight: 20 }}>
            <Image
              source={item}
              style={styles.imageSlider}
              resizeMode="cover"
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontFamily: "outfit-regular",
    fontSize: 20,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageSlider: {
    width: 270,
    height: 150,
    borderRadius: 20,
    objectFit: "contain",
  },
  flatListStyle: {
    backgroundColor: Colors.WHITE,
    width: Dimensions.get("window").width,
  },
});

export default Slider;
