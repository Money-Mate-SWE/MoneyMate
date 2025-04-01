import {
  StyleSheet,
  Image,
  Platform,
  Pressable,
  TextInput,
} from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useAuth0, Auth0Provider } from "react-native-auth0";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

import { StyleVariable } from "@/constants/GlobalStyles";

const LogoutButton = () => {
  const { clearSession } = useAuth0();

  const onPress = async () => {
    try {
      await clearSession();
      console.log("User logged out successfully");
      router.push("/(authenticate)");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ThemedView>
      <Pressable
        style={[styles.Button, styles.buttonShadowBox, styles.signout]}
        onPress={onPress}
      >
        <ThemedText style={[styles.buttonText]}>Sign out</ThemedText>
      </Pressable>
    </ThemedView>
  );
};

const UpdateButton = () => {
  const onPress = async () => {
    try {
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ThemedView>
      <Pressable
        style={[styles.buttonShadowBox, styles.Button]}
        onPress={onPress}
      >
        <ThemedText style={[styles.buttonText]}>Update Profile</ThemedText>
      </Pressable>
    </ThemedView>
  );
};

export default function account() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <LinearGradient
          style={styles.friends}
          locations={[0.32, 0.81, 0.94]}
          colors={["#728e96", "#9dc5cf", "#bff0fc"]} //
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Profile</ThemedText>
      </ThemedView>
      <ThemedText>Profile information.</ThemedText>
      <ThemedView>
        <ThemedText>Username</ThemedText>
        <TextInput
          style={styles.textInput}
          value="Username"
          editable={false}
          selectTextOnFocus={false}
        />
      </ThemedView>
      <ThemedView>
        <ThemedText>First Name</ThemedText>
        <TextInput
          style={styles.textInput}
          value="First Name"
          editable={false}
          selectTextOnFocus={false}
        />
      </ThemedView>
      <ThemedView>
        <ThemedText>Last Name</ThemedText>
        <TextInput
          style={styles.textInput}
          value="Last Name"
          editable={false}
          selectTextOnFocus={false}
        />
      </ThemedView>
      <ThemedView>
        <ThemedText>Email</ThemedText>
        <TextInput
          style={styles.textInput}
          value="email.address@email.com"
          editable={false}
          selectTextOnFocus={false}
        />
      </ThemedView>
      <ThemedView>{UpdateButton()}</ThemedView>
      <ThemedView>{LogoutButton()}</ThemedView>
      <ThemedView>
        <ThemedText style={styles.warning}>
          *Note: Signing out will redirect you to use safari.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
    width: "95%",
    backgroundColor: "#fff",
    color: "rgba(0, 0, 0, 0.65)",
  },
  buttonShadowBox: {
    width: 250,
    backgroundColor: "#fff",
    borderRadius: 8,
    height: 50,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  buttonText: {
    color: "rgba(0, 0, 0, 0.65)",
    fontSize: 20,
    lineHeight: 40,
    textAlign: "center",
  },
  Button: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  friends: {
    borderBottomLeftRadius: StyleVariable.radius100,
    flex: 1,
    height: 626,
    transform: [
      {
        rotate: "0deg",
      },
    ],
    width: "100%",
  },
  warning: {
    fontSize: 12,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  signout: {
    backgroundColor: "#D9534F",
  },
});
