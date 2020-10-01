import React from "react";
import { Text, StyleSheet, View, Button,TouchableOpacity } from "react-native";

const HomeScreen = () => {
  //  return  <Text style={styles.text}>First File Execute! </Text>;
  return (<View>
    <Text style={styles.text}>Hello</Text>
    <Button 
      onPress={()=> console.log('Button Pressed')}      
      title="Go to Component Demo"
      />
      <TouchableOpacity  onPress={() => console.log('List Pressed')}>
        <Text>Go to List Demo</Text>        
      </TouchableOpacity>
  </View>);
};


const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

