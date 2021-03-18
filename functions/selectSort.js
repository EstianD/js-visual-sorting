import { setState } from "../state.js"

export default function selectSort(e){
   setState({selection: e.target.value})
}