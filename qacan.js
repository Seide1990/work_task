
var span=document.querySelector("span")
var x=0;

span.addEventListener("mouseover",function(){
 if (x==0){
span.classList.add("armud")
x=1;}
else{
    span.classList.add("alma")  
    x=0; 
}
    
})
