import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import BusinessListSlider from "./BusinessListSlider";

export default function BusinessListByCategoryScreen() {
  const param = useRoute().params;
  const navigation = useNavigation();
  useEffect(() => console.log("category", param.category), []);
  return (
    <View style={{ padding: 30, paddingTop: 30 }}>
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
        }}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="arrow-back" size={30} color="black" />
        <Text style={{ fontFamily: "titanOne-Regular", fontSize: 25 }}>
          {param?.category}
        </Text>
      </TouchableOpacity>
      <BusinessListSlider />
      <BusinessListSlider />
      <BusinessListSlider />
    </View>
  );
}
