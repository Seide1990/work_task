var button=document.querySelector("#btn")

var body=document.querySelector("#body")
const colors = [
      "red",
       "green",
       "blue",
      "yellow",
    "orange",
      "purple",
     "pink",
       "brown",
      "gray",
       "black",
     ];
button.addEventListener("click",function(){
  body.style.backgroundColor=colors[(Math.floor(Math.random()*(9-0)+0))]

    }
)