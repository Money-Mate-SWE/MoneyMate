import { Image, StyleSheet, Platform, Pressable } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { GetDebtWithAllConnectedUser, GetUser } from "@/api/apiService";
import { useAuth0 } from "react-native-auth0";
import { useEffect, useState } from "react";
import { Collapsible } from '@/components/Collapsible';
import DebtSummaryForm from '@/components/ui/DebtSummaryForm';
import { ScrollView } from 'react-native';
import { debtSummary } from '@/api/apiInterface';
import { useRouter } from 'expo-router';




const checkUserExists = async (email: string) => {
  try {
    const userProfile = await GetUser(email);
    return userProfile;
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      return null;
    }
    console.error("Error checking user existence:", error);
    throw error;
  }
};

export default function Friends() {

  const { user } = useAuth0();
  const [data, setData] = useState<debtSummary[]>([]);
  const router = useRouter();



  useEffect(() => {
    if (user) {
      const Email = user.email ?? "";
      checkUserExists(Email)
        .then((userProfile) => {
          if (userProfile) {
            const borrowerIds = userProfile.connectedUsers;
            GetDebtWithAllConnectedUser(userProfile._id, borrowerIds)
              .then((expenseData) => {
                if (expenseData) {
                  setData(expenseData.result);
                }
              }
              ).catch((error) => {
                console.error("Error getting expense data:", error);
              }
              );
          }
        })
        .catch((error) => {
          console.error("Error checking user existence:", error);
        });

    }
  }, [user]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedText>Your all shared expenses.</ThemedText>

      <ThemedView style={styles.stepContainer}>
        <ThemedView style={styles.container}>
          {data.length > 0 ? (
            <ScrollView style={styles.formContainer}>
              {data.map((item) => (
                <DebtSummaryForm key={item.ConnectedId} data={item} />
              ))}
            </ScrollView>
          ) : (
            <ThemedView style={styles.row}>
              <ThemedText>No history found</ThemedText>
            </ThemedView>
          )}
        </ThemedView>

      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  buttonShadowBox: {
    width: 200,
    backgroundColor: "#fff",
    borderRadius: 8,
    height: 40,
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
    fontSize: 16,
    lineHeight: 35,
    textAlign: "center",
  },
  Button: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#A1CEDC",
    borderRadius: 8,
  },
  formContainer: {
    width: "100%",
    backgroundColor: "#728e96",
    borderRadius: 8,
  },
  row: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
