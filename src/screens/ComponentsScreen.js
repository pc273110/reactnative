//Import Library
import React from 'react';  //entire react library
import { Text, StyleSheet, View} from 'react-native'; //import only 2 component from library

// Text Primitive Element like Text,View,Image, Button


//JSX Block
const ComponentsScreen = () => {
    const greeting=<Text>Bye there2</Text>;
    return (<View>
        <Text style={styles.textStyle}>this is custom component screen1</Text>        
        {greeting}
        </View>);
};


//Applying stylesheet function validates a set of styling rules that we pass into 
// it. we can use it or pass styling directly into an element./news/
const styles= StyleSheet.create({ 
    textStyle:{
        fontSize:30 
    }
});

export default ComponentsScreen;