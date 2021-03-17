import renderBars from "./renderBars.js";
import renderNumbers from "./renderNumbers.js";

export default function generateArray(){
   let randomArray = [];

   for(let i = 0; i < 20; i++){
      randomArray.push(Math.floor(Math.random() *100) + 1);
   }
   if(randomArray){
      renderBars(randomArray);
      renderNumbers(randomArray);
   }
   return randomArray;
}