import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Dimensions
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MyItineraries = () => {
    const [user, setUser] = useState(null);
    const [userItineraries, setUserItineraries] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const storedUser = await AsyncStorage.getItem("user");
                if (storedUser !== null) {
                    const parsedUser = JSON.parse(storedUser);
                    setUser(parsedUser);
                    const response = await fetch(
                        `http://flexitravelplannerbackend.onrender.com/api/itinerary/getItinerariesByUser/${parsedUser.userId}`,
                        {
                            method: "GET",
                            headers: { "Content-Type": "application/json" },
                        }
                    );
                    if (response.ok) {
                        const responseData = await response.json();
                        setUserItineraries(responseData);
                        console.log(userItineraries);
                    } else {
                        console.log("Itinerary fetching failed");
                    }
                }
            } catch (error) {
                console.error("Error fetching user or itineraries:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            style={{ flex: 1 }}
        >
            <Text style={styles.introText}>
                My Itineraries
            </Text>
            <View style={styles.cardContainer}>
                {userItineraries?.map((itinerary) => (
                    <TouchableOpacity key={itinerary._id} style={styles.card}>
                        <Text style={[styles.cardTitle, { color: "white" }]}>
                            Explore {itinerary.cityName}
                        </Text>
                        <Text
                            style={[styles.cardDescription, { color: "white" }]}
                        >
                            {itinerary.desc}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

// Your styles...

const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "orange",
        paddingVertical: 20,
        minHeight: screenHeight,
    },

    introText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
        textAlign: "left",
        width: "90%",
        marginBottom: 10,
        paddingLeft: 12,
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "white",
        paddingLeft: 12,
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
