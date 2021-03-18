import selectSort from "../functions/selectSort.js"

export default function renderSortList(){

   // Sorting options
   const sorters = ["SELECTIVE", "BUBBLE"];
   // Select button container
   let buttonContainer = document.getElementById("button-container");
   let sorterDiv = document.createElement("div");
   sorterDiv.id = "sorter-selection-div";
   // Create select list
   let selectList = document.createElement("select");
   selectList.id = "sorter-select";
   // Append to sorterDIv
   sorterDiv.appendChild(selectList);

   sorters.forEach((sorter) => {
      let option = document.createElement("option");
      option.value = sorter;
      option.text = sorter;
      selectList.appendChild(option);
   })
   // Append to button container
   buttonContainer.appendChild(sorterDiv);

   selectList.addEventListener("change", (e) => {
      selectSort(e);
   })   

};