import { View, Text, Image } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";
import { useUser } from "@clerk/clerk-expo";

export default function ProfileScreen() {
  const { user } = useUser();
  return (
    <View>
      <View
        style={{ padding: 20, paddingTop: 30, backgroundColor: Colors.PRIMARY }}
      >
        <Text
          style={{
            fontSize: 30,
            fontFamily: "outfit-regular",
            color: Colors.PRIMARY,
          }}
        >
          Profile
        </Text>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            backgroundColor: Colors.PRIMARY,
          }}
        >
          <Image
            source={{ uri: user.imageUrl }}
            style={{ width: 90, height: 90, borderRadius: 99 }}
          />
          <Text
            style={{
              fontSize: 26,
              marginTop: 8,
              fontFamily: "titanOne-Regular",
              color: Colors.WHITE,
            }}
          >
            {user.fullName}
          </Text>
          <Text
            style={{
              fontSize: 20,
              marginTop: 8,
              fontFamily: "titanOne-Regular",
              color: Colors.WHITE,
            }}
          >
            {user?.primaryEmailAddress?.emailAddresses}
          </Text>
        </View>
        <Entypo name="log-out" size={24} color={Colors.WHITE} />
      </View>
    </View>
  );
}
