import { useState } from "react";
import {
    Alert,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../../contexts/UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginForm() {
    const [ email, setEmail ] = useState("");
    const [ error, setError ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ fName, setFname ] = useState("");
    const [ lName, setLname ] = useState("");
    const navigation = useNavigation();
    const { setUserExists } = useUser();

    const handleLogin = () => {
        navigation.navigate("Login");
    };

    const isEmailValid = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };
    const handleEmailChange = (e) => {
        const temp = e;
        setEmail(temp);

        if (!isEmailValid(temp)) {
            setError("Invalid email format.");
        } else {
            setError("");
        }
    };

    const handleSignup = async () => {
      const formData = {
          name: fName + " " + lName,
          email,
          password,
      };
      console.log(formData);
      try {
          const response = await fetch(
              "http://flexitravelplannerbackend.onrender.com/api/users/createUser",
              {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(formData),
              }
          );
          const data = await response.json();
          console.log(data);
          await AsyncStorage.setItem("user", JSON.stringify(data));
          setUserExists(true); // Update userExists state here
          Alert.alert(
              "Registration Successful",
              "",
              [
                  {
                      text: "OK",
                      onPress: () => navigation.navigate("Home"),
                  },
              ],
              { cancelable: false }
          );
      } catch (error) {
          console.error("Sign up error:", error);
          Alert.alert("Registration Failed", error.message || "Something went wrong");
      }
  };
  

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Signup</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    placeholder="FIRST NAME"
                    value={fName}
                    onChangeText={setFname}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.input}
                    placeholder="LAST NAME"
                    value={lName}
                    onChangeText={setLname}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.input}
                    placeholder="EMAIL"
                    value={email}
                    onChangeText={handleEmailChange}
                    autoCorrect={false}
                    autoCapitalize="none"
                />
                {error && <Text style={styles.textError}>{error}</Text>}
                <TextInput
                    style={styles.input}
                    placeholder="PASSWORD"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                    autoCorrect={false}
                    autoCapitalize="none"
                />
            </View>

            <View style={styles.buttonView}>
                <Pressable style={styles.button} onPress={handleSignup}>
                    <Text style={styles.buttonText}>SIGN UP</Text>
                </Pressable>
            </View>

            <Text style={styles.footerText}>Already Have Account?</Text>
            <Text style={styles.signup} onPress={handleLogin}>
                Login
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: 70,
    },
    image: {
        height: 160,
        width: 170,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
        paddingVertical: 40,
        color: "blue",
    },
    inputView: {
        gap: 15,
        width: "100%",
        paddingHorizontal: 40,
        marginBottom: 5,
    },
    input: {
        height: 50,
        paddingHorizontal: 20,
        borderColor: "orange",
        borderWidth: 1,
        borderRadius: 7,
    },
    rememberView: {
        width: "100%",
        paddingHorizontal: 50,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 8,
    },
    switch: {
        flexDirection: "row",
        gap: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    rememberText: {
        fontSize: 13,
    },
    forgetText: {
        fontSize: 11,
        color: "red",
    },
    button: {
        backgroundColor: "orange",
        height: 45,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    buttonView: {
        width: "100%",
        paddingHorizontal: 50,
    },
    optionsText: {
        textAlign: "center",
        paddingVertical: 10,
        color: "gray",
        fontSize: 13,
        marginBottom: 6,
    },
    mediaIcons: {
        flexDirection: "row",
        gap: 15,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 23,
    },
    icons: {
        width: 40,
        height: 40,
    },
    footerText: {
        textAlign: "center",
        color: "gray",
        marginTop: 20,
    },
    signup: {
        color: "red",
        fontSize: 20,
    },
    textError: {
        color: "red", 
    },
});
