// todo esto es para la navegacion con botones
import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; //libreria para la navegacion con botones
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import BookingScreen from "../Screens/BookingScreen/BookingScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import { FontAwesome5 } from "@expo/vector-icons"; //libreria para los iconos de los botones de navegacion
import { FontAwesome } from "@expo/vector-icons"; //libreria para los iconos de los botones de navegacion
import Colors from "../Utils/Colors";

// en el componente Tab.Navigator se le agrega  screenOptions={{headerShown: false,}} para que quite los encabezados
const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ color }) => <Text style={style.textTab}>Home</Text>,
          tabBarIcon: ({ color, size }) => (
            //agregamos el icono de la pagina https://icons.expo.fyi/Index/FontAwesome/user-circle
            <FontAwesome5 name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={style.textTab}>Booking</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            //agregamos el icono de la pagina https://icons.expo.fyi/Index/FontAwesome/user-circle
            <FontAwesome name="bookmark" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={style.textTab}>Profile</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            //agregamos el icono de la pagina https://icons.expo.fyi/Index/FontAwesome/user-circle
            <FontAwesome name="user-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const style = StyleSheet.create({
  textTab: {
    color: Colors.PRIMARY,
    fontSize: 12,
    marginTop: -7,
  },
});
