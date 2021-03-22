//   Get max value in array
const getMaxValue = (numArray) => {
   let max = numArray.reduce(function(a, b){
      return Math.max(a, b)
   })
   return max;
}

// Calculate each bar length
const calcBarLength = (num, max) => {
   return (num/max) * 100;
}


export default function renderBars(numArray, indexesScanned = 0, sorter = undefined) {
   console.log("rendering")
   
   let bar_container = document.getElementById("bar-container");
   const maxValue = getMaxValue(numArray);

   bar_container.innerHTML = "";

   // Loop through array
   numArray.forEach((num, i) => {
      // Calculate bar height
      const barLength = calcBarLength(num, maxValue);

      // Create bar div
      let div_bar = document.createElement("div");
      // Set bar id to bar-[index]
      div_bar.id=`bar-${i}`;
      // Set bar height to calculated heigth
      div_bar.style.height = barLength + "%"

      switch(sorter){
         case "SELECTIVE": 
            // Check if index has already been scanned
            if(i < indexesScanned){
               div_bar.classList.add("scanned");
            }
         break;
         case "BUBBLE":
            if(i >= numArray.length - indexesScanned){
               div_bar.classList.add("scanned");
            }
      }

      

      bar_container.appendChild(div_bar);
   })

   
   
   
}
