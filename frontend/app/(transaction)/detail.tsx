import { Image, StyleSheet, Platform, TextInput } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Pressable, ScrollView } from 'react-native';
import { useEffect, useState } from "react";
import { expenseBill, expenseBillItem } from '@/api/apiInterface';
import { useAuth0 } from 'react-native-auth0';
import { GetExpenseById, GetExpenseItemsById } from "@/api/apiService";
import { router } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';
import ItemFormComponent from '@/components/ui/ItemFormComponent';




export default function TransactionDetail() {
    const { user } = useAuth0();
    const { id } = useLocalSearchParams();
    const [data, setData] = useState<expenseBill>();
    const [itemData, setItemData] = useState<expenseBillItem[]>([]);

    useEffect(() => {
        if (user && typeof id === "string") {
            GetExpenseById(id).then((expenseData) => {
                setData(expenseData);

            }
            ).catch((error) => {
                console.error("Error getting expense data:", error);
            }
            );

            GetExpenseItemsById(id).then((expenseItemData) => {
                setItemData(expenseItemData);

            }
            ).catch((error) => {
                console.error("Error getting expense data:", error);
            }
            );
        }
    }, [user]);


    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#A1CEDC" }}>
            <ThemedText type="subtitle" style={{ marginTop: "10%", marginLeft: 20 }}>Bill</ThemedText>

            <ThemedView style={styles.container}>
                <ThemedView style={styles.container}>

                    <ThemedView style={styles.formContainer}>
                        <ThemedView style={styles.form}>
                            <ThemedView style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    value="Store:"
                                    editable={false}
                                />
                            </ThemedView>

                            <ThemedView style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    value={data?.store}
                                    editable={false}
                                />
                            </ThemedView>
                        </ThemedView>

                        <ThemedView style={styles.form}>
                            <ThemedView style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    value="Currency:"
                                    editable={false}
                                />
                            </ThemedView>

                            <ThemedView style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    value={data?.currency}
                                    editable={false}
                                />
                            </ThemedView>
                        </ThemedView>

                        <ThemedView style={styles.form}>
                            <ThemedView style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    value="Amount:"
                                    editable={false}
                                />
                            </ThemedView>

                            <ThemedView style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    value={data?.amount.toString()}
                                    editable={false}
                                />
                            </ThemedView>
                        </ThemedView>

                        <ThemedView style={styles.form}>
                            <ThemedView style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    value="Tax:"
                                    editable={false}
                                />
                            </ThemedView>

                            <ThemedView style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    value={data?.tip.toString()}
                                    editable={false}
                                />
                            </ThemedView>
                        </ThemedView>

                        <ThemedView style={styles.form}>
                            <ThemedView style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    value="Total:"
                                    editable={false}
                                />
                            </ThemedView>

                            <ThemedView style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    value={data?.TotalAmount.toString()}
                                    editable={false}
                                />
                            </ThemedView>
                        </ThemedView>

                        <ThemedView style={styles.form}>
                            <ThemedView style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    value="Card Type:"
                                    editable={false}
                                />
                            </ThemedView>

                            <ThemedView style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    value={data?.CardType}
                                    editable={false}
                                />
                            </ThemedView>
                        </ThemedView>

                        <ThemedView style={styles.form}>
                            <ThemedView style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    value="Date:"
                                    editable={false}
                                />
                            </ThemedView>

                            <ThemedView style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    value={data?.date ? data?.date.split("T")[0] : ""}
                                    editable={false}
                                />
                            </ThemedView>
                        </ThemedView>
                    </ThemedView>

                </ThemedView>
            </ThemedView>
            <ThemedText type="subtitle" style={{ marginTop: "10%", marginLeft: 20 }}>Items</ThemedText>

            <ThemedView style={styles.container}>
                <ThemedView style={styles.container}>
                    {itemData.length > 0 ? (
                        <ThemedView style={styles.formContainer}>
                            {itemData.map((item) => (
                                <ItemFormComponent key={item._id} data={item} />
                            ))}
                        </ThemedView>
                    ) : (
                        <ThemedView style={styles.row}>
                            <ThemedText>No history found</ThemedText>
                        </ThemedView>
                    )}
                </ThemedView>
            </ThemedView>
            <Pressable
                style={[styles.buttonShadowBox, styles.Button]}
                onPress={() => {
                    router.push("/(tabs)");
                }
                }
            >
                <ThemedText style={[styles.buttonText]}>Home</ThemedText>
            </Pressable>
        </ScrollView>

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
    container: {
        justifyContent: "center",
        padding: 7,
        paddingTop: 0,
        backgroundColor: "#728e96",
        borderRadius: 8,
        marginTop: 10,
    },
    buttonShadowBox: {
        width: 100,
        backgroundColor: "#fff",
        borderRadius: 8,
        height: 30,
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 50,
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
        fontSize: 15,
        lineHeight: 25,
        textAlign: "center",
    },
    Button: {
        height: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    form: {
        marginBottom: 0,
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: "35%",
    },
    inputContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: "auto",
        marginLeft: "auto",
    },
    label: {
        fontSize: 16,
        marginRight: 5,
    },
    input: {
        height: 30,
        marginBottom: 10,
        paddingLeft: 8,
        width: 120,
    },
});
