// import SelectiveSort from './functions/selectiveSort.js';
import renderButtonContainer from "./render/renderButtonContainer.js"
import renderBars from "./render/renderBars.js"
import renderNumbers from "./render/renderNumbers.js"
import generateArray from "./functions/generateArray.js"

// Import state function
import { setState, getState } from "./state.js"


// Generate random array
generateArray();

// Variable to track the indexes scanned
// let indexScanned = 0;

// Render button container
renderButtonContainer(getState().numberArray);

// Get selective sort button
// let btnSelectiveSort = document.getElementById("btn__run_script");
// Get generateArray button
// let btnGenerateArray = document.getElementById("btn__gen_array");



