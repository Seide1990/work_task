var meyve=document.querySelectorAll("ul li")
var button=document.querySelector("ok")


button.addEventListener("click",function(){
 for (let i=0;i<=meyve.length;i++){
console.log(meyve[i].innerHTML)}
    
})