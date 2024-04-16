import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const MyItineraries = () => {
    const itineraries = [
        { id: 1, title: "Itinerary 1", description: "Description of Itinerary 1" },
        { id: 2, title: "Itinerary 2", description: "Description of Itinerary 2" },
        { id: 3, title: "Itinerary 3", description: "Description of Itinerary 3" },
        { id: 4, title: "Itinerary 4", description: "Description of Itinerary 4" },
        { id: 5, title: "Itinerary 5", description: "Description of Itinerary 5" },
        { id: 6, title: "Itinerary 6", description: "Description of Itinerary 6" },
        // Add more itineraries as needed
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.introText}>
                Explore curated itineraries which may suit your taste!
            </Text>
            <Text style={styles.text}>My Itineraries</Text>
            <View style={styles.cardContainer}>
                {itineraries.map(itinerary => (
                    <TouchableOpacity key={itinerary.id} style={styles.card}>
                        <Text style={[styles.cardTitle, { color: "white" }]}>{itinerary.title}</Text>
                        <Text style={[styles.cardDescription, { color: "white" }]}>{itinerary.description}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "orange",
        paddingVertical: 20,
    },
    introText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
        textAlign: "left",
        width: "90%",
        marginBottom: 10,
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "white",
    },
    cardContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingHorizontal: 10,
    },
    card: {
        backgroundColor: "black",
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        width: "45%",
        elevation: 5,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    cardDescription: {
        fontSize: 16,
    },
});

export default MyItineraries;