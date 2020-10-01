import React from 'react';
import { FlatList } from 'react-native';
import {Text, View, ListView, StyleSheet} from 'react-native';
const ListAge = ()=>{
const friends=[
    {name:'Firends #1', age: '1'},
    {name:'Firends #2', age: '2'},
    {name:'Firends #3', age: '3'},
    {name:'Firends #4', age: '4'},
    {name:'Firends #5', age: '5'},
    {name:'Firends #6', age: '6'},
];


return (<FlatList
     
    
    keyExtractor={friends=>friends.name}
    data={friends}
    renderItem={({item})=>{
        return (<Text>{item.name} - Age {item.age}</Text>);
    }}
    />);
};

export default ListAge;