import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const  ComponentsExercise = () => {
    const Header=<Text style={styles.textStyle}>Getting Started with react native</Text>;
    const Name='Stephen';
    return (<View>
                {Header}
                <Text style={styles.SubHeadertext}>My name is {Name}</Text>
            </View>
    );
};

const styles=StyleSheet.create({
    textStyle:{
        fontSize:40
    },
    SubHeadertext:{
        fontSize:20
    }
})

export default ComponentsExercise;