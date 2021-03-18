export default function renderNumbers(numArray){
   let number_container = document.getElementById("number-container");

   number_container.innerHTML = "";

   // Loop through array
   numArray.forEach((num, i) => {
      // Create bar div
      let bar_num = document.createElement("div");
      // Add classname to bar
      bar_num.classList.add("bar_num")
      // Create a text node for the bar and append
      let numText = document.createTextNode(num);
      bar_num.appendChild(numText);
      // Append to container
      number_container.appendChild(bar_num);
   })
}

