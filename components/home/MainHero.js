import React from "react";
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    useWindowDimensions,
} from "react-native";

const MainHero = () => {
    const { height } = useWindowDimensions();

    return (
        <ImageBackground
            source={require("../../assets/main-hero-overlay.jpg")}
            style={[
                styles.image,
                {
                    height: height / 2,
                },
            ]}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <Text style={styles.text}>Your Text Here</Text>
                <Text style={styles.text}>Your Text Here</Text> 
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200, // Adjust the height as needed
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
    },
});

export default MainHero;
