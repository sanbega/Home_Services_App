import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./App/Screens/LoginScreen/Login";
import { NavigationContainer } from "@react-navigation/native"; //libreria para la navegacion con botones
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo"; //libreria para la autenticacion con gmail
import TabNavigation from "./App/Navigations/TabNavigation"; //libreria para la navegacion con botones
import { useFonts } from "expo-font"; //libreria para trabajar con las fuentes
// Esto es para la autenticacion con Gmail los componentes SignedIn y el componente SignedOut
// tambien se utilizaron unas librerias para la autenticacion de Gmail
// en la aplicacion Clerk se crea el proyecto y se sacan las credenciales publishableKey para el componente ClerkProvider

//agregamos un Token Cache para que nos guarde en memoria como tipo redis para mantener la navegacion
//https://clerk.com/docs/quickstarts/expo#adding-a-token-cache
// const tokenCache = {
//   async getToken(key) {
//     try {
//       return SecureStore.getItemAsync(key);
//     } catch (err) {
//       return null;
//     }
//   },
//   async saveToken(key, value) {
//     try {
//       return SecureStore.setItemAsync(key, value);
//     } catch (err) {
//       return;
//     }
//   },
// };

// los componentes NavigationContainer y TabNavigation son para la navegacion con Botones
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    //aca utilisamos outfit por que las desacargamos de https://fonts.google.com/specimen/Outfit?query=outFit
    //y en la ruta pues es de donde tenemos lo descargado de la fuente
    "outfit-bold": require("./assets/fonts/Outfit-Bold.ttf"),
    "outfit-medium": require("./assets/fonts/Outfit-Medium.ttf"),
    "outfit-regular": require("./assets/fonts/Outfit-Regular.ttf"),
  });

  return (
    <ClerkProvider
      // tokenCache={tokenCache}
      publishableKey="pk_test_cmVsYXhlZC15ZXRpLTcuY2xlcmsuYWNjb3VudHMuZGV2JA"
    >
      <View style={styles.container}>
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
        <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
  },
});
