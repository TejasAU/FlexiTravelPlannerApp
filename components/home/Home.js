import React, { useState } from "react";
import {
    View,
    ScrollView,
    StyleSheet,
    useWindowDimensions,
} from "react-native";
import SubHero from "./SubHero"; // Assuming the Hero component is in a file named Hero.js
import MainHero from "./MainHero";
const homeData = [
    {
        heading: "Itinerary Adder and Modify Events",
        desc: "Easily create and manage your travel plans with our intuitive itinerary adder. Modify events in your itinerary to customize your travel experience.",
    },
    {
        heading: "Public Itinerary Viewing",
        desc: "Explore other users' public itineraries for inspiration and ideas. Get insights into popular destinations and travel routes.",
    },
    {
        heading: "Explore Things to Do",
        desc: "Discover exciting things to do in your destination city and add them to your itinerary for a personalized travel experience.",
    },
];

const Home = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.content}>
                    <MainHero />
                    {homeData.map((section, index) => (
                        <SubHero
                            alignment={index % 2 === 0 ? "left" : "right"}
                            heading={section.heading}
                            desc={section.desc}
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    content: {
        paddingTop: 0, // Adjust as needed
    },
});

export default Home;
