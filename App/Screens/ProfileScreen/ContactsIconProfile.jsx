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
          <FontAwesome6 name="message" size={24} color="black" />
          <Text style={styles.buttonText}>Contactar</Text>
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
    // alignSelf: "center",
  },
  button: {
    flexDirection: "row",
    // alignItems: "center",
    backgroundColor: Colors.PRIMARY,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
