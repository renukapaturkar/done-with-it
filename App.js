
import { useDimensions } from "@react-native-community/hooks";
import { StyleSheet, Text, View, SafeAreaView, Image, Button, Alert, Platform, StatusBar } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
      <ViewImageScreen/>

      </SafeAreaView>
      

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
