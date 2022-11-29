import React from 'react';
import {View, StyleSheet, Image, Text} from "react-native";
import colors from '../configs/colors';

function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View>
                <Text>back</Text>
            </View>
            <Image resizeMode='contain' style={styles.viewImage} source={require("../assets/chair.jpg")}/>

            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black
    }, 
    viewImage: {
        width: "100%",
        height: "100%"
    }
})

export default ViewImageScreen;