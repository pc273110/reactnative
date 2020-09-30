import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {

    const friends =[
        {name:'Firends #1', key: '1'},
        {name:'Firends #2', key: '2'},
        {name:'Firends #3', key: '3'},
        {name:'Firends #4', key: '4'},
        {name:'Firends #5', key: '5'},
        {name:'Firends #6', key: '6'},
        {name:'Firends #7', key: '7'},
        {name:'Firends #8', key: '8'},
        {name:'Firends #9', key: '9'},
        {name:'Firends #10', key: '10'}
    ];

    return (<FlatList 
            horizontal={true}
            keyExtractor={friends=>friends.name}
            data={friends} 
            renderItem={({item})=> {
                return <Text style={stles.textStyle}>{item.name}</Text>;
            }}
            />);
  
};

const stles = StyleSheet.create({
    textStyle:{
        marginVertical:50
    }
});

export default ListScreen;