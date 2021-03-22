import renderBars from "../../render/renderBars.js"
import renderNumbers from "../../render/renderNumbers.js"



export default async function bubbleSort(numArr){
   console.log("BUBBLE SORTING")  
   
   let newArray = [...numArr];
   let temp, searcher, match, prev_match;
   let indexesScanned = 0;

   // [2, 5, 1, 3, 16, 12, 4]
   for (let i = 0; i < newArray.length; i++){
      
      // searcher = i;
      document.getElementById(`bar-${i}`).style.background = 'orange';
      // Check if there is a bar to return to blue

      if(newArray[i+1]){
         if(newArray[i] > newArray[i+1]){
            console.log("BIGGER")
            temp = newArray[i];
            newArray[i] = newArray[i+1];
            newArray[i+1] = temp;
            // console.log(newArray);
            
            
            // document.getElementById(`bar-${i+1}`).style.background = 'orange'
            // Select matching bar
            // prev_match = i+1;

            // Render bars
            renderBars(newArray, indexesScanned, 'BUBBLE');
            renderNumbers(newArray);

            document.getElementById(`bar-${i}`).style.background = 'orange'
            document.getElementById(`bar-${i+1}`).style.background = 'orange'
            await sleep(500)
            document.getElementById(`bar-${i}`).style.background = 'blue'
            continue;
         }
      }
      // 
      // This needs to move into outer loop
      indexesScanned++;
      // 
      
      await sleep(500)
      // prev_match = i;
   }



   

}

// Sleep function
const sleep = (milliseconds) => {
   return new Promise((resolve) => setTimeout(resolve, milliseconds))
}