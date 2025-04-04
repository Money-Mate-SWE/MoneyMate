import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Pressable, ScrollView } from 'react-native';
import FormComponent from '@/components/ui/FormComponent';
import { useEffect, useState } from "react";
import { expenseBill } from '@/api/apiInterface';
import { useAuth0 } from 'react-native-auth0';
import { GetExpense, GetUser } from "@/api/apiService";



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


export default function Transactions() {
    const { user } = useAuth0();

    const [data, setData] = useState<expenseBill[]>([]);

    useEffect(() => {
        if (user) {
            const Email = user.email ?? "";
            checkUserExists(Email)
                .then((userProfile) => {
                    GetExpense(userProfile._id)
                        .then((expenseData) => {
                            if (expenseData) {
                                setData(expenseData);
                            }
                        }
                        ).catch((error) => {
                            console.error("Error getting expense data:", error);
                        });
                })
                .catch((error) => {
                    console.error("Error checking user existence:", error);
                });

        }
    }, [user]);

    return (
        <ThemedView style={{ flex: 1, backgroundColor: "#A1CEDC" }}>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">Recent Transactions</ThemedText>
                <ThemedView >
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
            </ThemedView>
        </ThemedView>


    );
}

const styles = StyleSheet.create({
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
        marginTop: "20%",
    },

});
