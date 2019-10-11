import React, {Component} from 'react'
import {View, TextInput, Image, StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native'
import DrinkBlock from './DrinkBlock.js'
export default class WireFrame2 extends Component {


    
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
   
    
     /******************************* 
     * This functional component is to load the loading circle when
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

    render() {
        return (
            <View style={styles.secondView}>
                {/*This is for the text input and the clear button in the text input*/}
                <View style={styles.textInput2Container}>
                    <TextInput autoFocus={true} style={styles.textInput2} onChangeText={text => this.props.callApi(text)} value={this.props.value} />
                    <ClearButton callApi={this.props.callApi} value={this.props.value} />
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

    /****************************************
     * I made it a functional Component because it can be used
     * else where later if we need it
     * This is just a button that will
     * be rendered when there is 3 or more
     * characters in the input then clears it if clicked
     * (NOTE: I had to learn about TouchableOpacity because I was unfamiliar with it)
    *****************************************/
   const ClearButton = ({callApi, value}) => {
    console.log(value)
     if(value.length > 2){
         return(
             <TouchableOpacity style={{position: 'absolute'}} onPress={() => callApi('')}>
                 <Text style={styles.clearButton} >Clear</Text>
             </TouchableOpacity>
         )
     }else{
         return null;
     }
 }

//These are the styling sheets
const styles = StyleSheet.create({
    
    //for second wire frame
    secondView: {
        flex: 1,
        backgroundColor: '#910013',
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
