import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Vector from "../../assets/nav/Vector.svg";
import Friends from "../../assets/nav/Friends.svg";
import AccountCircle from "../../assets/nav/AcCircle.svg";
import Account from "../../assets/nav/Account.svg";
import { Padding, Border, Color, FontFamily, StyleVariable } from "../styles/GlobalStyles";

const NavigationBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navigationBar}>
      {/* Home Button */}
      <View style={[styles.navItem, styles.navItemSpaceBlock]}>
        <View style={styles.iconContainer}>
          <Vector width={20} height={17} />
        </View>
        <Pressable>
        <Text style={styles.labelText}>Home</Text>
        </Pressable>
        
      </View>

      {/* Friends Button */}
      <Pressable
        style={[styles.navItem, styles.navItemSpaceBlock]}
        onPress={() => navigation.navigate("Friends")}
      >
        <View style={styles.iconContainer}>
          <Friends width={20} height={17} />
        </View>
        <Text style={styles.labelText}>Friends</Text>
      </Pressable>

      {/* Account Button */}
      <Pressable style={[styles.navItem, styles.navItemSpaceBlock]} onPress={() => {}}>
        <View style={styles.accountContainer}>
          <AccountCircle width={39} height={36} />
          <Text style={styles.labelText}>Account</Text>
        </View>
      </Pressable>

      {/* Profile Button */}
      <Pressable style={[styles.navItem, styles.navItemSpaceBlock]} onPress={() => {}}>
        <View style={styles.iconContainer}>
          <Account width={47} height={47} />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: Color.blue2,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderColor: Color.blue,
    borderWidth: 1,
    height: 75,
    paddingHorizontal: 8,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_base,
  },
  accountContainer: {
    alignItems: "center",
  },
  labelText: {
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "600",
    textAlign: "center",
    fontSize: StyleVariable.labelMediumSize,
    color: Color.m3SysLightOnSurface,
  },
});

export default NavigationBar;
