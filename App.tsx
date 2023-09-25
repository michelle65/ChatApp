import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import PersonalInfo from "./components/PersonalInfo";
import Styles from "./components/Styles";
import Chat from "./components/Chat";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from 'expo-app-loading';

export default function App() {
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
  const storageUserNameKey = "chatapp-username";
  const storageImageKey = "chatapp-image";
  const [isLoading,setIsLoading] =useState(true)

  const fetchPersonalData = async () => {
   let fetchedUsername = await AsyncStorage.getItem(storageUserNameKey);
   let userName = fetchedUsername==null ? "" : fetchedUsername;
   let fetchedImage = await AsyncStorage.getItem(storageImageKey);
   let image = fetchedImage == null ? "" : fetchedImage;
   setUsername(userName);
   setImage(image);
  };

  const onPersonalInfoClosed = async (name: string, image: string) => {
    setUsername(image);
    await AsyncStorage.setItem(storageUserNameKey,name);
    setImage(image);
    await AsyncStorage.setItem(storageImageKey,image);
  };

  if(isLoading){
    return(
      <AppLoading startAsync={fetchPersonalData} onFinish={()=>setIsLoading(false)} onError={()=>{}}/>
    )
  }

  let activeComponent = username != "" ? (
    <Chat username={username} image={image}/>
  ):(<PersonalInfo onClosed={onPersonalInfoClosed}/>)
  return (
    <SafeAreaView style={Styles.container}>
      {activeComponent}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


