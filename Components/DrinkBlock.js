//our import statments
import React, { Component } from 'react';
import {View, Image, Text, StyleSheet } from 'react-native';

// This component is Used for each block element
// in the search
//
// It contains two elements 
//     1.) An image
//     2.) A Text element
export default class DrinkBlock extends Component {
    render() {
        return(
            <View key={this.props.idDrink} style={styles.blocks}>
                    <Image source={{uri: this.props.strDrinkThumb}} style={styles.image} />
                    <Text style={styles.text}>{this.props.strDrink}</Text>
            </ View>
        )
    }
}

//The styling constants
const styles = StyleSheet.create({
    //For the whole component
    blocks: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: 10,
        padding: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 15
    },
    //For the Image portion
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'rgba(105,105,105, .3)',
        marginRight: 20
    },
    //for the text portion
    text: {
        fontSize: 25,
        flex: 1,
        flexWrap: 'wrap'
    }
})