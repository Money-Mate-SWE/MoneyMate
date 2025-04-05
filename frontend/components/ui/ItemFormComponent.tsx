import React from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { expenseBillItem } from "@/api/apiInterface";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { router } from "expo-router";

const ItemFormComponent = ({ data }: { data: expenseBillItem }) => {
    return (

        <ThemedView style={styles.form}>
            <ThemedView style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={data.itemName}
                    editable={false}
                />
                <TextInput
                    style={styles.inputQty}
                    value={`Qty: ${data.quantity.toString()}`}
                    editable={false}
                />
            </ThemedView>

            <ThemedView style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={`$${String(data.amount)}`}
                    editable={false}
                />
            </ThemedView>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    form: {
        marginBottom: 5,
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
    inputQty: {
        height: 15,
        marginBottom: 10,
        paddingLeft: 8,
        width: 100,
    },
});

export default ItemFormComponent;
