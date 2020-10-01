import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ImageDetail from '../components/ImageDetail';


const ImageScreen=() =>{
    return <Text>
        <ImageDetail title="Forest"  />
        <ImageDetail title="Beach" />
        <ImageDetail title="Mountain" />        
    </Text>;
};

const styles=StyleSheet.create({});

export default ImageScreen;