import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import PersonalInfo from './components/PersonalInfo'
import Styles from "./components/Styles"

export default function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <PersonalInfo/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
