import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CalendarPicker from "react-native-calendar-picker";
import Header from "../BookingScreen/Header";
import Colors from "../../Utils/Colors";
import Heading from "../../Components/Heading";
// import Footer from "./Footer";

export default function BookingScreen() {
  return (
    <View>
      <Header />
      <Heading text={"Select Day"} isViewAll={false} style={style.heading} />
      <View style={style.calendary}>
        <CalendarPicker
          onDateChange={this.onDateChange}
          width={350}
          minDate={Date.now()}
          todayBackgroundColor={Colors.WHITE}
          selectedDayColor={Colors.PRIMARY}
          selectedDayTextColor={Colors.PRIMARY}
        />
      </View>
      {/* <Footer /> */}
    </View>
  );
}

const style = StyleSheet.create({
  calendary: {
    margin: 10,
    backgroundColor: Colors.WHITE,
    padding: 20,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: Colors.BLACK,
  },
  heading: {
    fontFamily: "outfit-regular",
    fontSize: 20,
    marginBottom: 10,
  },
});
