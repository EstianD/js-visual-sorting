import SelectiveSort from './selectiveSort.js';
import renderButtonContainer from "./renderButtonContainer.js"
import renderBars from "./renderBars.js"
import renderNumbers from "./renderNumbers.js"
import generateArray from "./generateArray.js"


// Define array
let numberArray = generateArray();


// Variable to track the indexes scanned
let indexScanned = 0;

let appState = {
   sorting: false
}

// Render button container
renderButtonContainer(numberArray);

// Get selective sort button
let btnSelectiveSort = document.getElementById("btn__run_script");
// Get generateArray button
let btnGenerateArray = document.getElementById("btn__gen_array");



