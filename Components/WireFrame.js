import React, { Component } from 'react';
import { TextInput, ScrollView, Button, TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import DrinkBlock from './DrinkBlock';
import Cocktail from '../assets/images/cocktail.svg';
export default class WireFrame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pic: require('../assets/images/cocktail.png'),
            value: this.props.value
        }
    }

    /*************************************
     * This method will return
     * a bunch of DrinkBlock components
     * according to every element in
     * this.props.drinks
     ***************************************/
    renderBlocks() {
        let eachBlock = null;
        if(this.props.data){
            eachBlock = this.props.data.drinks.map((data) => {
                return (
                    <DrinkBlock key={data.idDrink} idDrink={data.idDrink} strDrinkThumb={data.strDrinkThumb} strDrink={data.strDrink} />
                )
            });
           
        }
        return eachBlock
    }
    
    /****************************************
     * This is just a button that will
     * be rendered when there is 3 or more
     * characters in the input then clears it if clicked
     * (NOTE: I had to learn about TouchableOpacity because I was unfamiliar with it)
    *****************************************/
    renderClearButton(){
        if(this.props.value.length > 2){
            return(
                <TouchableOpacity style={{position: 'absolute'}} onPress={() => this.props.callApi('')}>
                    <Text style={styles.clearButton} >Clear</Text>
                </TouchableOpacity>
            )
        }
    }

    /******************************* 
     * This function is to load the loading circle when
     * we are doing the api call in app.js and show the 
     * blocks when the api call is finished
    ********************************/
    renderLoadingOrBlocks(){
        //return if loading otherwise return the blocks
        if(this.props.loading){
            return (
                <Text style={styles.loading} >Loading...</Text>
            )
        }else{
            return this.renderBlocks()
        }

    }


    /*******************************
     * render view function
     * this function renders the wireFrame Component
     * it is comprised of the two wireframes
     * I could have split these two into two different components
     * but I felt witht he scope of this project that would be more complicated than
     * just keeping it in this file
     ********************************/
    renderView(){
        //If on the 1st wireframe do the 1st if block
        if(!(this.props.isWireFrame2)){
            return (
                <View style={styles.firstView} >
                    <Image source={this.state.pic} style={styles.image} />
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.text}>Cocktail Finder</Text>
                    </View>
                    {/*Text Input*/}
                    <TextInput style={styles.textInput1}  blurOnSubmit={false} onFocus={() => (this.props.lookAtMe(), this.props.callApi(""))} value={this.props.value} />
                   
                </View>
            )
        //else if on 2nd wireframe do 2nd if block
        }else{
            return (
                <View style={styles.secondView}>
                    {/*This is for the text input and the clear button in the text input*/}
                    <View style={styles.textInput2Container}>
                        <TextInput autoFocus={true} style={styles.textInput2} onChangeText={text => this.props.callApi(text)} value={this.props.value} />
                        {this.renderClearButton()}
                    </View>
                    
                    {/*This is the scroll view for either the loading
                       or for the blocks being rendered */}
                    <ScrollView style={styles.scrollView}>
                        {this.renderLoadingOrBlocks()}
                    </ScrollView>

                </ View>
            )
        }
    }

    /*********************************************
     * Main render this just calls the render view function
     * I could of put the code in render view in here but I like
     * to keep the render function pure with as little logic as I 
     * can put in there
     *********************************************/
    render() {
        return (
            this.renderView()
      );
    }
    
}

//These are the styling sheets
const styles = StyleSheet.create({
    //for the first wireframe
    firstView:{
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#910013',
    },
    //for second wire frame
    secondView: {
        flex: 1,
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
    //for image in first wire frame
    image: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 100,
        height: 100,
    },
    //Text in first wire frame
    text: {
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        fontSize: 20,
        fontFamily: 'Pacifico',
    },
    //for the text input in wire frame 2
    textInput2: {
        top: 0,
        left: 0,
        height: 40,
        width: '95%',
        margin: 10,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'white',
        color: 'rgba(105,105,105, .6)',
        borderRadius: 8,
        paddingLeft: 15,
        color: 'black'
    },
    //style for the loading image
    loading: {
        fontSize: 30,
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    //For the container of the text input and clear button
    textInput2Container: {
        justifyContent: 'center',
        alignItems: 'flex-end' 
    },
    //clear button css
    clearButton: {
        marginRight: 25,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 15,
        backgroundColor: 'rgb(192,192,192)'
    }
})
