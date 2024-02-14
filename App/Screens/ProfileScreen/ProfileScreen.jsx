import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import Colors from "../../Utils/Colors"; // para acceder a los colores
import { useUser } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import Login from "../LoginScreen/Login";
import ContactsIconProfile from "./ContactsIconProfile";
import { useClerk } from "@clerk/clerk-react";

export default function ProfileScreen() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const navigation = useNavigation();

  // Logica para salir de la aplicación
  const handleLogout = async () => {
    try {
      await signOut();
      navigation.navigate(Login); // Suponiendo que 'Login' es el nombre de la pantalla de inicio de sesión
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <View
      style={{
        height: "100%",
      }}
    >
      <View
        style={{ padding: 20, paddingTop: 30, backgroundColor: Colors.PRIMARY }}
      >
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="arrow-back" size={30} color={Colors.WHITE} />
            <Text
              style={{
                fontFamily: "titanOne-Regular",
                fontSize: 30,
                color: Colors.WHITE,
                marginLeft: 10, // Espacio entre el icono y el texto
              }}
            >
              Profile
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={handleLogout}>
              <Entypo name="log-out" size={30} color={Colors.WHITE} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
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
              marginLeft: 5,
              fontFamily: "titanOne-Regular",
              color: Colors.BLACK,
              flex: 1,
              flexWrap: "wrap",
            }}
          >
            {user?.primaryEmailAddress?.emailAddresses}
          </Text>
        </View>
      </View>
      <ContactsIconProfile />
    </View>
  );
}

const styles = StyleSheet.create({});
