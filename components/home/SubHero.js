import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

const SubHero = ({ alignment, heading, desc }) => {
    const { height } = useWindowDimensions();

    return (
        <View
            style={[
                styles.hero,
                {
                    height: height / 3,
                    backgroundColor: alignment === "left" ? "white" : "orange",
                },
            ]}
        >
            <View style={styles.heroContent}>
                <Text style={styles.heading}>{heading}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    hero: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    heroContent: {
        alignItems: "center",
        justifyContent: "center",
        maxWidth: 320, // Example max-width, adjust as needed
        padding: 16,
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 12,
    },
    desc: {
        fontSize: 14,
    },
});

export default SubHero;
