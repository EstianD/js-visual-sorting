import {getState} from "../state.js"
import selectiveSort from "./sort_functions/selectiveSort.js"
import bubbleSort from "./sort_functions/bubbleSort.js";

export default function handleSort(){
   let {selection} = getState()
   
   switch(selection){
      case "SELECTIVE":
         selectiveSort(getState().numberArray) 
         break;
      case "BUBBLE":
         bubbleSort(getState().numberArray);
         break;
      default: 
         console.log("ERROR IN SELECTION") 

   }
}