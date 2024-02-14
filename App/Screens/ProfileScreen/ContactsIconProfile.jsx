import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";
import ContactsIconProfileScreen from "./ContactsIconProfileScreen";

export default function ContactsIconProfile() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleContactPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleContactPress}>
        <View style={styles.button}>
          <FontAwesome6 name="message" size={40} color={Colors.BLACK} />
        </View>
        <View style={styles.notifications}>
          <Text style={{ color: Colors.WHITE }}>5</Text>
        </View>
      </TouchableOpacity>
      <ContactsIconProfileScreen
        visible={modalVisible}
        onClose={handleCloseModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 30,
    right: 40,
  },
  button: {
    // position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
    borderRadius: 99,
    backgroundColor: Colors.WHITE,
    padding: 10,
    // Sombreado
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Solo para Android
  },
  notifications: {
    borderRadius: 99,
    backgroundColor: Colors.PRIMARY,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    right: 0,
    width: 20,
    height: 20,
  },
  buttonText: {
    color: "white",
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
