import React, { useState } from 'react'
import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from 'react-native'


export default function LoginForm() {
    const [click,setClick] = useState(false);
    const {email,setEmail}=  useState("");
    const {password,setPassword}=  useState("");
    const {phoneNum ,setPhoneNum}= useState("");
    const {fname,setFname}=useState("");
    const {lname,setLname}=useState("");
  return (
    <SafeAreaView style={styles.container}>
        
        {/* <Image source={logo} style={styles.image} resizeMode='contain' /> */}
        <Text style={styles.title}>Signup</Text>
        <View style={styles.inputView}>
            <TextInput style={styles.input} placeholder='FIRST NAME' value={fname} onChangeText={setFname} autoCorrect={false}
        autoCapitalize='none' />
            <TextInput style={styles.input} placeholder='LAST NAME' value={lname} onChangeText={setLname} autoCorrect={false}
        autoCapitalize='none' />
            <TextInput style={styles.input} placeholder='EMAIL' value={email} onChangeText={setEmail} autoCorrect={false}
        autoCapitalize='none' />
            <TextInput style={styles.input} placeholder='PHONE NO.' secureTextEntry value={phoneNum} onChangeText={setPassword} autoCorrect={false}
        autoCapitalize='none'/>
            <TextInput style={styles.input} placeholder='PASSWORD' secureTextEntry value={password} onChangeText={setPhoneNum} autoCorrect={false}
        autoCapitalize='none'/>
        </View>
       
        <View style={styles.buttonView}>
            <Pressable style={styles.button} onPress={() => Alert.alert("Login Successfuly!","see you in my instagram if you have questions : must_ait6")}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </Pressable>
            {/* <Text style={styles.optionsText}>OR LOGIN WITH</Text> */}
        </View>

        <Text style={styles.footerText}>Already Have Account?<Text style={styles.signup}>  Log in</Text></Text>

        
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container : {
    alignItems : "center",
    paddingTop: 70,
  },
  image : {
    height : 160,
    width : 170
  },
  title : {
    fontSize : 30,
    fontWeight : "bold",
    textTransform : "uppercase",
    textAlign: "center",
    paddingVertical : 40,
    color : "blue"
  },
  inputView : {
    gap : 15,
    width : "100%",
    paddingHorizontal : 40,
    marginBottom  :5
  },
  input : {
    height : 50,
    paddingHorizontal : 20,
    borderColor : "orange",
    borderWidth : 1,
    borderRadius: 7
  },
  rememberView : {
    width : "100%",
    paddingHorizontal : 50,
    justifyContent: "space-between",
    alignItems : "center",
    flexDirection : "row",
    marginBottom : 8
  },
  switch :{
    flexDirection : "row",
    gap : 1,
    justifyContent : "center",
    alignItems : "center"
    
  },
  rememberText : {
    fontSize: 13
  },
  forgetText : {
    fontSize : 11,
    color : "red"
  },
  button : {
    backgroundColor : "orange",
    height : 45,
    borderColor : "gray",
    borderWidth  : 1,
    borderRadius : 5,
    alignItems : "center",
    justifyContent : "center"
  },
  buttonText : {
    color : "white"  ,
    fontSize: 18,
    fontWeight : "bold"
  }, 
  buttonView :{
    width :"100%",
    paddingHorizontal : 50
  },
  optionsText : {
    textAlign : "center",
    paddingVertical : 10,
    color : "gray",
    fontSize : 13,
    marginBottom : 6
  },
  mediaIcons : {
    flexDirection : "row",
    gap : 15,
    alignItems: "center",
    justifyContent : "center",
    marginBottom : 23
  },
  icons : {
    width : 40,
    height: 40,
  },
  footerText : {
    textAlign: "center",
    color : "gray",
  },
  signup : {
    color : "red",
    fontSize : 13
  }
})