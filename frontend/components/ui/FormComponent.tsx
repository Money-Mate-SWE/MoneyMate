import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { expenseBill } from "@/api/apiInterface";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";

const FormComponent = ({ data }: { data: expenseBill }) => {
    return (
        <ThemedView style={styles.form}>
            <ThemedView style={styles.inputContainer}>
                <ThemedText style={styles.label}>Store:</ThemedText>
                <TextInput
                    style={styles.input}
                    value={data.store}
                    editable={false}
                />
            </ThemedView>

            <ThemedView style={styles.inputContainer}>
                <ThemedText style={styles.label}>Amount:</ThemedText>
                <TextInput
                    style={styles.input}
                    value={String(data.TotalAmount)}
                    editable={false}
                />
            </ThemedView>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    form: {
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 5,
        flexDirection: 'row', // Arrange the form fields horizontally
        flexWrap: 'wrap', // Allow fields to wrap if needed
    },
    inputContainer: {
        flexDirection: 'row', // Align label and input horizontally
        alignItems: 'center',
        marginRight: 20, // Space between form items
    },
    label: {
        fontSize: 16,
        marginRight: 5, // Space between label and input
    },
    input: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 8,
        borderRadius: 5,
        width: 100, // Limit input width for better layout
    },
});

export default FormComponent;
