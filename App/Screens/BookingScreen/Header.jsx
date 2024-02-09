import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo"; // Librería para obtener la información del usuario a través de una URL
import Colors from "../../Utils/Colors";
import { FontAwesome } from "@expo/vector-icons"; //libreria para los iconos de los botones de navegacion

export default function Header() {
  const { user, isLoading } = useUser(); //funcion para traer informacion del usuario
  return (
    user && (
      <View style={style.container}>
        <View style={style.profileMainContainer}>
          <View style={style.profileContainer}>
            <Image source={{ uri: user?.imageUrl }} style={style.userImage} />
            <View>
              <Text style={style.textWelcome}>Delivery schedule,</Text>
              <Text style={style.textNameUSer}>{user?.fullName}</Text>
            </View>
          </View>
          <FontAwesome name="user-circle" size={35} color={Colors.WHITE} />
        </View>
        <View style={style.searchBarContainer}></View>
      </View>
    )
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: Colors.PRIMARY,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  profileMainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
  textWelcome: {
    color: Colors.WHITE,
    fontFamily: "outfit-regular",
  },
  textNameUSer: {
    fontSize: 20,
    color: Colors.WHITE,
    fontFamily: "titanOne-Regular",
  },
  textInput: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    width: "85%",
    fontSize: 16,
    fontFamily: "outfit-bold",
  },
  searchBarContainer: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  searchbtn: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 8,
  },
});
