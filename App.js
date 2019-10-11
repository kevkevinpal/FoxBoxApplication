/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Component} from 'react'
import WireFrame1 from './Components/WireFrame1/WireFrame1.js'
import WireFrame2 from './Components/WireFrame2/WireFrame2.js'
import { BackHandler } from 'react-native'
//I like this module
//I use it at work for api calls
import axios from 'react-native-axios'

//This is the main component which everything
// gets rendered from
class App extends Component {

  /*********************************
  * constructor for the App component
  * we have a
  * isWireFrame2: (checks if we clicked on the search bar on home screen)
  * loading: (checks if we are calling the api then tells wireframe to render a loading icon till resolved)
  * NOTE: (I looked up how to do the loadi  ng in the axios call)
  * data: (this is the data used for the DrinkBlock Component)
  *********************************/
  constructor(props) {
    super(props);
    this.state = {
      isWireFrame2: false,
      value: "Search your faviorite cocktail",
      loading: false,
      data : {
          "drinks": [{
            idDrink: 0,
            strDrink: "No Results",
            strDrinkThumb: 'error'
          },
        ]
        },
    }
    this.lookAtMe = this.lookAtMe.bind(this)
    this.callApi = this.callApi.bind(this)
    //The backHandler stuff I looked up online
    //because I did not know how to access the calls
    //for the android back button
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }


//We add a back handler when the app mounts to app so we can click the back button
// to the home screen
componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

//This unmounts the back handler when App unmounts
componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
}

//we just set the values of isWireFrame2 to false to render
//the first wireframe and then reset the search values place holder
handleBackButtonClick() {
    this.setState({
      isWireFrame2: false,
      value: 'Search your faviorite cocktail'
    });
    return true;
}

  /*******************************
  * Call Api method
  * we pass this to WireFrame so it can update
  * what data is being passed into the application
  * and it also updates the text in the textbox
  *******************************/
  callApi(text){

    // Set state of value to what ever we sent back
    // then sets the state of loading to true and wait 
    // till later in the function till its resolved
    this.setState({
      value: text,
      loading: true
    });

    // If the text is longer than 2 characters we want to hit the backend
    if(text.length >= 3){
      //We want to concat the search term to the endpoint
      let concat = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
      concat = concat.concat(this.state.value)
      //This is the api call
      axios.get(concat)
        .then(response => {
          //if the call is successful then we can set the state with the data
          if(response.data.drinks !== null)
            this.setState({
              data: response.data,
            })

          //This is us resolving the state for loading as the call finishes
          this.setState({loading: false})
        })
        .catch(error => {
          console.log(error)
        })
    //if the text length is 2 or less we still want to display
    //some empty data for the user to know that there are no
    // results and also resolving the loading
    }else{
        this.setState({data: {
          "drinks": [
              {
                  idDrink: 0,
                  strDrink: "No Results",
                  strDrinkThumb: 'error'
              },
            ]
          },
          loading: false
        }
      )
    }
  }

  /*******************************
   * look at me function is passed to
   * wireframe so that when the first
   * text input is clicked on we can switch to the
   * next wireframe
   *******************************/ 
  lookAtMe(){
    this.setState({ isWireFrame2: true})
  }

  /*******************************
   * This is our render function
   * we only call Wireframe and pass it
   * multiple things from the state and some functions
   ******************************/
  render(){
    //If on the 1st wireframe do the 1st if block
    if(!(this.state.isWireFrame2)){
      return (
          <WireFrame1 lookAtMe={this.lookAtMe} callApi={this.callApi} value={this.state.value} />
      )
    //else if on 2nd wireframe do 2nd if block
    }else{
        return (
            <WireFrame2 data={this.state.data} callApi={this.callApi} value={this.state.value} loading={this.state.loading} />
        )
    }
  }
  
}
export default App;
