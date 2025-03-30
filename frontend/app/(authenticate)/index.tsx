import {
  View,
  Pressable,
  StyleSheet,
  Button,
  Image,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useAuth0, Auth0Provider } from "react-native-auth0";
import { router } from "expo-router";

const LoginButton = () => {
  const { authorize } = useAuth0();

  const onPress = async () => {
    try {
      await authorize();
      router.push("/(tabs)");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Pressable
      style={[styles.loginButton, styles.buttonShadowBox]}
      onPress={onPress}
    >
      <ThemedText style={[styles.login]}>Login</ThemedText>
    </Pressable>
  );
};

export default function Authenticate() {
  return (
    <View style={styles.authentication}>
      <LinearGradient
        style={styles.image1}
        locations={[0.28, 0.54, 0.82]}
        colors={["#bff0fc", "#9dc5cf", "#728e96"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />
      {LoginButton()}
      <View style={[styles.signupButton, styles.buttonShadowBox]}>
        <ThemedText style={[styles.signUp]}>Sign Up</ThemedText>
      </View>
      <ThemedText style={[styles.moneyMate]}>MONEY MATE</ThemedText>

      <ThemedText style={[styles.welcomeBack]}>Welcome Back</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonShadowBox: {
    width: 250,
    backgroundColor: "#fff",
    borderRadius: 8,
    left: 89,
    height: 50,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },

  image1: {
    top: -1,
    left: -1,
    borderTopLeftRadius: 214,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 214,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0)",
    borderWidth: 1,
    width: 430,
    height: 958,
    backgroundColor: "transparent",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },

  login: {
    color: "rgba(0, 0, 0, 0.65)",
    fontSize: 30,
    lineHeight: 40,
  },
  loginButton: {
    top: 530,
    height: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  signUp: {
    height: "70%",
    color: "rgba(0, 0, 0, 0.66)",
    fontSize: 30,
    textAlign: "left",
    lineHeight: 40,
  },
  signupButton: {
    top: 622,
    height: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  moneyMate: {
    top: 43,
    left: 233,
    color: "#fff",
    width: 191,
    height: 25,
    fontSize: 24,
  },

  welcomeBack: {
    top: 430,
    letterSpacing: -0.5,
    lineHeight: 29,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
    color: "#f9f7f7",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 79,
    fontSize: 24,
  },
  authentication: {
    backgroundColor: "#f7fffd",
    flex: 1,
    height: 956,
    overflow: "hidden",
    width: "100%",
  },
});
