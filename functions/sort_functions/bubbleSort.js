import renderBars from "../../render/renderBars.js"
import renderNumbers from "../../render/renderNumbers.js"



export default async function bubbleSort(numArr){
   console.log("BUBBLE SORTING")  

   
   let newArray = [...numArr];
   let temp, current, searching, prev_match;
   let indexesScanned = 0;

   // [2, 5, 1, 3, 16, 12, 4]
   // Loop through each index until all is sorted
   for(let x = 0, y = 0; x < newArray.length-y; y++){
      // console.log("OUTER: ", y)
      for (let i = 0; i < newArray.length - y; i++){
         // console.log("INNER: ", i)
         // searcher = i;
         // document.getElementById(`bar-${i}`).style.background = 'orange';
         current = i;
         renderBars(newArray, indexesScanned, 'BUBBLE', current, searching);
         renderNumbers(newArray);
         
         // Check if there is a bar to return to blue

         // Check if there is another index after the current loop
         if(newArray[i+1]){
            searching = i + 1;
            // Check if the current value is bigger than the next indexes value
            if(newArray[i] > newArray[i+1]){
               // console.log("BIGGER")
               // Add current value to temp value
               temp = newArray[i];
               // Swap the current index with the next indexes value
               newArray[i] = newArray[i+1];
               // Set the next index to the current value
               newArray[i+1] = temp;
               // Render bars
               renderBars(newArray, indexesScanned, 'BUBBLE', current, searching);
               renderNumbers(newArray);


               await sleep(200)
               // document.getElementById(`bar-${i}`).style.background = 'blue'
               continue;
            }
         }
         // 
         
         await sleep(200)
      }
         // increment the total matched indexes
         indexesScanned++;
         renderBars(newArray, indexesScanned, 'BUBBLE', current, searching);
         // console.log("SCANNED: ", indexesScanned);

   }

   



   

}

// Sleep function
const sleep = (milliseconds) => {
   return new Promise((resolve) => setTimeout(resolve, milliseconds))
}