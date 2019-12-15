let counter = document.querySelector(".counter");
const addCount = document.querySelector("#addCount");
const lowerCount = document.querySelector("#lowerCount");
const bodyBG = document.querySelector(".bodyBG");
let count = 0;

addCount.addEventListener("click", incrementCounter);
lowerCount.addEventListener("click", decrementCounter);

function incrementCounter() {
  count++;
  counter.innerHTML = count;
  if (counter.innerHTML > "0") {
    counter.style.color = "green";
   
  } else if (counter.innerHTML === "0") {
    counter.style.color = "white";
  }
 
}
function decrementCounter() {
  count--;
  counter.innerHTML = count;
  if (counter.innerHTML < "0") {
    counter.style.color = "red";
  } else if (counter.innerHTML === "0") {
    counter.style.color = "white";
  }
}
