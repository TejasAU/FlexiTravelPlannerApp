import React from "react";
import { View, Text, Pressable, Alert, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useUser } from "../../contexts/UserContext";

const Logout = () => {
    const { setUserExists } = useUser();

    const handleLogout = async () => {
        await AsyncStorage.removeItem("user");
        Alert.alert("Logout Successful");
        setUserExists(false);
    };

    const handleCancel = () => {
        Alert.alert("Cancelled Logout");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Are you sure you want to logout?</Text>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={handleLogout}>
                    <Text style={styles.buttonText}>Yes</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={handleCancel}>
                    <Text style={styles.buttonText}>No</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "50%",
    },
    button: {
        backgroundColor: "orange",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default Logout;
