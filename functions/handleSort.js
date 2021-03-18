import {getState} from "../state.js"
import selectiveSort from "./selectiveSort.js"
import bubbleSort from "./bubbleSort.js";

export default function handleSort(){
   let {selection} = getState()
   
   switch(selection){
      case "SELECTIVE":
         selectiveSort() 
         break;
      case "BUBBLE":
         bubbleSort();
         break;
      default: 
         console.log("ERROR IN SELECTION") 

   }
}