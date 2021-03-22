import selectiveSort from "../functions/sort_functions/selectiveSort.js";
import generateArray from "../functions/generateArray.js";
import stopSort from "../functions/stopSort.js";
import renderSortList from "./renderSortList.js";
import handleSort from "../functions/handleSort.js";

export default function renderButtonContainer(numArray){
   let buttonContainer = document.getElementById("button-container");

   // Build generate button
   let generateButton = document.createElement("button");
   generateButton.id = "btn__gen_array";
   generateButton.innerHTML = "Generate";
   generateButton.classList.add("header_btn")
   buttonContainer.appendChild(generateButton);

   // Build sort button
   let sortButton = document.createElement("button");
   sortButton.id = "btn__run_script";
   sortButton.innerHTML = "Run";
   sortButton.classList.add("header_btn")
   buttonContainer.appendChild(sortButton);

   // Build stop button
   let stopButton = document.createElement("button");
   stopButton.id = "btn__stop_script";
   stopButton.innerHTML = "Stop";
   stopButton.classList.add("header_btn");
   buttonContainer.appendChild(stopButton);

   renderSortList();
   
   // Event listener for selective sorting
   sortButton.addEventListener("click", () => {handleSort()});
   // Event listener for button to generate random array
   generateButton.addEventListener("click", () => {generateArray()})
   // Event listener for stop button
   stopButton.addEventListener("click", () => {stopSort()});

}