var button1=document.querySelector("#btnplus")
var button2=document.querySelector("#btnminus")
var h2=document.querySelector("#random")
button1.addEventListener("click",function(){
  h2.innerHTML=parseInt(h2.innerHTML)+1;
})
button2.addEventListener("click",function(){
    if((parseInt(h2.innerHTML)-1==0)){
        alert("sifirdir")
    }
    else{
    h2.innerHTML=parseInt(h2.innerHTML)-1;}
  })