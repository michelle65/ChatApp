import React,{useEffect,useState} from 'react'
import Styles from './Styles';
import {Button, Image, View, Platform, Text} from 'react-native';
import * as ImagePicker from "expo-image-picker"
import * as ImageManipulator from "expo-image-manipulator"
type ImageChooserProps = {
    onChangeImage: (image: string) => void;
}

const ImageChooser = (props: ImageChooserProps)=>{
    const [image,setImage] = useState("");
    useEffect(()=>{
        (async()=>{
            if(Platform.OS !== "web"){
                const{
                    status,
                }=await ImagePicker.requestMediaLibraryPermissionsAsync();
                if(status !== "granted"){
                    alert("Sorry, we need camera roll permission to make this ...");
                }
            }
        })();
    },[]);

    const pickImage = async ()=>{
        let result=await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect:[1,1]
        });

        if(!result.canceled){
            var resizeImage=await ImageManipulator.manipulateAsync(
                result.assets[0].uri,
                [{resize:{ width:50,height:50 }}],
                {base64:true}
            );
            var imageBase64=resizeImage.base64 ?? "";
            setImage(result.assets[0].uri);
            props.onChangeImage(imageBase64)
        }
    };
  return (
    <View>
      <Button title="Pick an Image" onPress={pickImage}/>
      {image?(
        <Image 
        resizeMode="cover"
        source={{uri:image}}
        style={Styles.avatarBig}/>
      ):(<Text style={{alignSelf:"center"}}>No image selected</Text>)}
    </View>
  )
}

export default ImageChooser
