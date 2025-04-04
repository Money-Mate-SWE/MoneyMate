import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { GetExpense, GetUser } from "@/api/apiService";
import { useAuth0 } from "react-native-auth0";
import { useEffect, useState } from "react";
import { Collapsible } from '@/components/Collapsible';
import FormComponent from '@/components/ui/FormComponent';
import { ScrollView } from 'react-native';
import { expenseBill } from '@/api/apiInterface';



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

export default function HomeScreen() {

  const { user } = useAuth0();
  const [Firstname, setFirstName] = useState("");
  const [id, setId] = useState("");
  const [data, setData] = useState<expenseBill[]>([]);


  useEffect(() => {
    if (user) {
      const Email = user.email ?? "";
      checkUserExists(Email)
        .then((userProfile) => {
          if (userProfile) {
            setId(userProfile._id);
            setFirstName(userProfile.firstname);
          }

        })
        .catch((error) => {
          console.error("Error checking user existence:", error);
        });
      GetExpense(id)
        .then((expenseData) => {
          if (expenseData) {
            setData(expenseData);
          }
        }
        ).catch((error) => {
          console.error("Error getting expense data:", error);
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
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hi {Firstname} !</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedText>Welcome to the Moneymate!</ThemedText>
      {/* <ThemedText>Check you recent transaction and stay on top of</ThemedText>
      <ThemedText>your finance today!</ThemedText> */}

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="title">Budget Insights</ThemedText>
      </ThemedView>
      {/* <Collapsible title="File-based routing">
        <ThemedText>
          This app has two screens:{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          sets up the tab navigator.
        </ThemedText>
      </Collapsible> */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="title">Transactions</ThemedText>
        <ThemedView style={styles.container}>
          {data.length > 0 ? (
            <ScrollView style={styles.formContainer}>
              {data.map((item) => (
                <FormComponent key={item.date} data={item} />
              ))}
            </ScrollView>
          ) : (
            <ThemedView style={styles.row}>
              <ThemedText>No history found</ThemedText>
            </ThemedView>
          )}
        </ThemedView>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
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
