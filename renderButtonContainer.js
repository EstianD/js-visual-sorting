import selectiveSort from "./selectiveSort.js";
import generateArray from "./generateArray.js";

export default function renderButtonContainer(numArray){
   let buttonContainer = document.getElementById("button-container");

   // Build generate button
   let generateButton = document.createElement("button");
   generateButton.id = "btn__gen_array";
   generateButton.innerHTML = "Generate";
   buttonContainer.appendChild(generateButton);

   // Build sort button
   let sortButton = document.createElement("button");
   sortButton.id = "btn__run_script";
   sortButton.innerHTML = "Run";
   buttonContainer.appendChild(sortButton);
   
   // Event listener for selective sorting
   sortButton.addEventListener("click", () => {selectiveSort(numArray)});
   // Event listener for button to generate random array
   generateButton.addEventListener("click", () => {generateArray()})
}