var meyve=document.querySelectorAll("ul li")

for( let i=0;i<meyve.length;i++){
meyve[i].addEventListener("click",function(){
 
console.log(meyve[i].innerHTML)
    }
)}