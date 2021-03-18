import renderBars from "../render/renderBars.js";
import renderNumbers from "../render/renderNumbers.js";
// Import state function
import { setState, getState } from "../state.js"

export default function generateArray(){
   let randomArray = [];

   for(let i = 0; i < 20; i++){
      randomArray.push(Math.floor(Math.random() *100) + 1);
   }
   if(randomArray){
      setState({numberArray: randomArray});
      renderBars(getState().numberArray);
      renderNumbers(getState().numberArray);
   }
   // return randomArray;
}