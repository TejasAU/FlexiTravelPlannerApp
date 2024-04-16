import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";


const MyItineraries = () => {
    const [itineraries, setItineraries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItineraries = async () => {
            try {
                const response = await fetch("http://localhost:3001/api/itinerary/getAllItinerary");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data);
                setItineraries(data);
            } catch (error) {
                console.error("Error fetching itineraries:", error);
                setError('Error fetching itineraries');
            } finally {
                setIsLoading(false);
            }
        };
        fetchItineraries();
    }, []);

    // const fetchItineraries = async () => {
    //     try {
    //         const response = await fetch("http://localhost:3001/api/itinerary/getAllItinerary");
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         const data = await response.json();
    //         console.log(data);
    //         setItineraries(data);
    //     } catch (error) {
    //         console.error("Error fetching itineraries:", error);
    //         setError('Error fetching itineraries');
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    if (isLoading) {
        return <Text>Loading...</Text>; // Or show a loading indicator
    }

    if (error) {
        return <Text>{error}</Text>; // Or show an error message
    }

    return (
        <View style={styles.container}>
            <Text style={styles.introText}>
                Explore curated itineraries which may suit your taste!
            </Text>
            <Text style={styles.text}>My Itineraries</Text>
            <View style={styles.cardContainer}>
                {itineraries.map(itinerary => (
                    <TouchableOpacity key={itinerary._id} style={styles.card}>
                        <Text style={[styles.cardTitle, { color: "white" }]}>Explore {itinerary.cityName}</Text>
                        <Text style={[styles.cardDescription, { color: "white" }]}>{itinerary.desc}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

// Your styles...


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