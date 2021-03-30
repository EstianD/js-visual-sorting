import renderBars from "../../render/renderBars.js"
import renderNumbers from "../../render/renderNumbers.js";

export default async function SelectiveSort(numArray){
   const newArray = [...numArray];
   // Declare variables
   let min, temp, min_index, indexesScanned, prev_min_index, searching;

   // Loop through array
   for (let n = 0; n < newArray.length; n++) {
      // Set current search index
      document.getElementById(`bar-${n}`).classList.add("current");
      
      //  Set min to first index
      min = newArray[n];
      min_index = n;
      // Loop through and match with all other values
      for (let i = n + 1; i < newArray.length; i++) {
         // Set scanning bar color
         searching = document.getElementById(`bar-${i}`).classList.add("pointer")

        if (newArray[i] < min) {
          min = newArray[i];
          // Check if min_index has a value
          // Set the previous min index
          if(min_index){
            prev_min_index = min_index;
            // Check if min_index changed
            // If it changed, return the color back to blue
            if(prev_min_index != n){
              document.getElementById(`bar-${prev_min_index}`).classList.remove("searching");
            }
          }
          // Set new min_index to new lowest index
          // Change color for that index
          min_index = i;
          
         document.getElementById(`bar-${i}`).classList.add("searching")
         document.getElementById(`bar-${i}`).classList.remove("pointer")
        }
        // Wait before itterating to next loop
        await sleep(100);
        
         // Clear styling if value is not the min_index
         if(i !== min_index) {
            document.getElementById(`bar-${i}`).classList.remove("pointer")
         } 
      }

      // Set temp to current itteration of outer loop
      temp = newArray[n];
      // Move the minimun value to the current itteration 
      newArray[n] = min;
      // Set the previous minimum value index to the current loop index
      newArray[min_index] = temp;
      // Set a counter for the number of itteration + 1 to determine the style of that bar
      indexesScanned = n+1;
      // Update array
      // Render bars
      renderBars(newArray, indexesScanned, 'SELECTIVE');
      renderNumbers(newArray);
      console.log("SORTING: ", newArray);
    }
    console.log("NEW ARRAY: ", newArray);
}

const sleep = (milliseconds) => {
   return new Promise((resolve) => setTimeout(resolve, milliseconds))
}