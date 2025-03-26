import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NavigationBar from "../components/NavigationBar";

const Friends = () => {
  return (
    <><View style={styles.container}>

      <Text style={styles.text}>Welcome to the Friends Screen!</Text>
    </View><NavigationBar /></>
    

  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Friends;
