import React, {Component} from 'react'
import {View, TextInput, Image, StyleSheet, Text} from 'react-native'

export default class WireFrame1 extends Component {
    render() {
        return (
            <View style={styles.firstView} >
                <Image source={require('../../assets/images/cocktail.png')} style={styles.image} />
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.text}>Cocktail Finder</Text>
                </View>
                {/*Text Input*/}
                <TextInput style={styles.textInput1}  blurOnSubmit={false} onFocus={() => (this.props.lookAtMe(), this.props.callApi(""))} value={this.props.value} />
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    //for the first wireframe
    firstView:{
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#910013',
    },
    //for the text input in the first wire frame
    textInput1: {
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'white',
        textAlign: 'center',
        color: 'rgba(105,105,105, .6)',
        borderRadius: 8
    },
    //Text in first wire frame
    text: {
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        fontSize: 20,
        fontFamily: 'Pacifico',
    },
    //for image in first wire frame
    image: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 100,
        height: 100,
    },
})
