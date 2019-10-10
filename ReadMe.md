# Summary
<p>This is the project given by foxbox which wanted a simple cocktail search which a user can click on the search then after typing their desired drink will return a response of blocks that are similar to the term they searched<p>
	
# Files
 - App.js
	- In this file we set up our global variables since redux is not implemented yet.
	
	- But also we have our api call which changes the state to hold the data
		
	- It passes these props and functions into the wireframe component
		
	- there are 3 functions in this component
			<p>callApi(): this calls the api if the text length is > 2 and also sets the state of the data, loading state, and the value in the text box<p>

 - WireFrame.js
	- This file contains the wire frames of the project because I did not feel splitting the two wireframes into components would make it any easier to read, they are both conditional rendered
		 
	-  there are 5 functions in this Component
			renderBlocks(): this renders the DrinkBlock Components
			renderClearButton(): this renders the clear button
			renderLoadingOrBlocks(): this either renders the loading image or the blocks we wanted
			renderView(): we pick which wire frame to render in here and then render that frame
			render(): this just calls renderView
			
 - DrinkBlock.js
		- This file only returns the View which is pretty simple just a block with an image and text field


