import React from "react";
import { Text, StyleSheet, View, Button,TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation}) => {
  //console.log(props.navigation);
  //  return  <Text style={styles.text}>First File Execute! </Text>;
  return (<View>
    <Text style={styles.text}>Hello</Text>
    <Button 
      onPress={()=> navigation.navigate('Component')}      
      title="Go to Component Demo"
      /> 
      <Button
      title="Go to list button"
      onPress={() => navigation.navigate('List')}
      />
      <TouchableOpacity  onPress={() => navigation.navigate('List')}>
        <Text>Go to List Demo</Text>        
      </TouchableOpacity>


    <Button
      onPress={() => navigation.navigate('Image')}
      title="Go to Image Demo" 
    />
    

  </View>);
};


const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

