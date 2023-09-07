var button=document.querySelector("#button")
var p_name=document.querySelector("#p_name")
var P_passw=document.querySelector("#p_passw")
var h2=document.querySelector("#h2")
var h3=document.querySelector("#h3")
var name=document.querySelector("#input")
var pasword=document.querySelector("#password")


button.addEventListener("click",function(){
    var value1=input.value;
    var value2=password.value;
    yoxlasana(value1,value2);

   })
function yoxlasana(value1,value2)  { 
    const array=['1','2','3','4','5','6','7','8','9','0'];
var array1=[]
    array1=value1.split("");
if (value1.length>=3 && value1.length<=8){
 
for(i of array1){
    if (array.includes(i)){
        p_name.style.color="red"
 return p_name.innerHTML='adinizi daxil etdikde reqemden istifade etmeyin'}
}
value2=value2.trim();
if (value2.length>=8 && value2.length<=20){
    return h2.innerHTML=` Name : ${input.value}` ,h3.innerHTML=`PASSWORD : ${password.value}`
}

else {
    p_passw.style.color="red"
  return p_passw.innerHTML=' sifrenizin sayi 8 den boyuk 20 den kicik olmalidir'
}
}
else{
    p_name.style.color="red"
    return  p_name.innerHTML='adinizin uzunlugu 3 simvoldan boyuk 8 simvoldan kicik olmalidi'
}}
