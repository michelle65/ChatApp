import React,{useState} from "react"
import { Button, TextInput, View, Image, Text } from "react-native"
import Styles from "./Styles"
import ImageChooser from "./ImageChooser";

type PersonalInfoProps = {
    onClosed:(name:string,image:string)=>void;
}

const PersonalInfo = ({onClosed}:PersonalInfoProps) =>{
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    return(
        <View style={Styles.personalInfoContainer}>
            <Image
            style={Styles.logo}
            source={require("../assets/chatIcon.png")}/>
            <View style={Styles.enterYourName}>
               <Text style={Styles.nameText}>Please enter your name</Text>
               <TextInput style={Styles.nameTextInput}
               onChangeText={(text)=>setName(text)}
               value={name}/>
            </View>
            <ImageChooser onChangeImage={(image)=>setImage(image)}/>
            <Button title="Start chatting" onPress={()=>onClosed(name,image)}/>
        </View>
    )
}
export default PersonalInfo;