import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import Heading from "../../Components/Heading";

export default function BusinessListSlider() {
  const images = [
    require("./../../../assets/images/ecomerce9.jpeg"),
    require("./../../../assets/images/ecomerce10.png"),
    require("./../../../assets/images/ecomerce11.jpeg"),
    require("./../../../assets/images/ecomerce12.png"),
  ];
  return (
    <View style={{ paddingTop: 30 }}>
      <Heading text={"Products"} isViewAll={true} style={styles.heading} />
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
