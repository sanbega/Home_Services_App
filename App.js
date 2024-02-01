import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
import { NavigationContainer } from '@react-navigation/native' //libreria para la navegacion con botones
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";//libreria para la autenticacion con gmail
import TabNavigation from './App/Navigations/TabNavigation';//libreria para la navegacion con botones
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
  return (
    <ClerkProvider  
    // tokenCache={tokenCache} 
    publishableKey='pk_test_cmVsYXhlZC15ZXRpLTcuY2xlcmsuYWNjb3VudHMuZGV2JA'>
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
    backgroundColor: '#fff',
    paddingTop:30
  },
});
