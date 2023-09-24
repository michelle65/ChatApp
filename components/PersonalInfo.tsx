import React from "react"
import { Button, TextInput, View, Image, Text } from "react-native"
import Styles from "./Styles"
const PersonalInfo = () =>{
    return(
        <View style={Styles.personalInfoContainer}>
            <Image
            style={Styles.logo}
            source={require("../assets/chatIcon.png")}/>
            <View style={Styles.enterYourName}>
               <Text style={Styles.nameText}>Please enter your name</Text>
               <TextInput style={Styles.nameTextInput}/>
            </View>

            <Button title="Start chatting" onPress={()=>{}}/>
        </View>
    )
}
export default PersonalInfo;