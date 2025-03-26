import React from "react";
import { View, StyleSheet } from "react-native";
import PreHeader from "../components/PreHeader";
import NavigationBar from "../components/NavigationBar";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
  return (
    <LinearGradient style={styles.home} colors={["#bff0fc", "#9dc5cf", "#728e96"]}>
      <PreHeader />
      <View style={styles.content}></View>
      <NavigationBar />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default Home;
