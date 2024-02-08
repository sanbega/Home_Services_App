import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import React from "react";
import Colors from "../../Utils/Colors";
import { useOAuth } from "@clerk/clerk-expo"; //libreria para la autenticacion con gmail
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
// esto es para la autenticacion con Gmail
// stytch libreria para autenticacion
WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  //esto es para la autenticacion con Gmail
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  //
  //dentro del componente TouchableOpacity "que es para un eventos" en el onPress se le pasa la constante onPress que es una funcion que tambien es para la autenticacion con gmail
  return (
    <View style={style.container}>
      <Image
        source={require("./../../../assets/images/Login.jpeg")}
        style={style.loginImage}
      />
      <View style={style.subContainer}>
        <Text style={style.textLets}>
          Let's Find
          <Text style={style.textProfessional}>
            Professional Cleaning and repair
          </Text>
          Service
        </Text>
        <Text style={style.textBets}>
          Best App to find services near you which deliver you a Professional
          services
        </Text>

        <TouchableOpacity style={style.button} onPress={onPress}>
          {/* <Text style={style.textButton}>Let's Get Started</Text> */}
          <Text style={style.textButton}>Let's go</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  subContainer: {
    width: "100%",
    backgroundColor: Colors.PRIMARY,
    height: "70%",
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  loginImage: {
    width: 230,
    height: 450,
    marginTop: 70,
    borderWidth: 4,
    borderColor: Colors.BLACK,
    borderRadius: 15,
  },
  textLets: {
    fontSize: 27,
    color: Colors.WHITE,
    textAlign: "center",
    fontFamily: "protestGuerrilla-Regular",
  },
  textProfessional: {
    fontWeight: "bold",
    fontFamily: "protestGuerrilla-Regular",
  },
  textBets: {
    fontSize: 17,
    color: Colors.WHITE,
    textAlign: "center",
    marginTop: 20,
    fontFamily: "protestGuerrilla-Regular",
  },
  button: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    margin: 40,
  },
  textButton: {
    textAlign: "center",
    fontSize: 17,
    color: Colors.PRIMARY,
    fontFamily: "sixtyfour-Regular",
  },
});
