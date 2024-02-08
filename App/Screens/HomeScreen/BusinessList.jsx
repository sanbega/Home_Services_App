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

export default function BusinessList() {
  const imagesBusiness = [
    require("./../../../assets/images/ecomerce5.jpeg"),
    require("./../../../assets/images/ecomerce6.jpeg"),
    require("./../../../assets/images/ecomerce7.png"),
    require("./../../../assets/images/ecomerce8.jpeg"),
  ];
  return (
    <View style={{ marginTop: 20 }}>
      <Heading
        text={"Latest Bussiness"}
        isViewAll={true}
        style={styles.heading}
      />
      <FlatList
        style={styles.flatListStyle}
        data={imagesBusiness}
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
}
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
