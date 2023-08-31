var button=document.querySelector("#button")

var select=document.querySelector("#select")
var input1=document.querySelector("#input1")
var input2=document.querySelector("#input2")
var h2=document.querySelector("#h2")
button.addEventListener("click",function(){
    var secim=select.value;
    var value1=input1.value;
    var value2=input2.value;
    if (secim=="+"){
      var  result=parseInt(value1)+parseInt(value2);
    }
    else if(secim=="-"){
        var  result=parseInt(value1)-parseInt(value2);
    }
    else if(secim=="*"){
        var  result=parseInt(value1)*parseInt(value2);
    }
    else if(secim=="/"){
        if(parseInt(value2)==0){
            alert('0 bolmek olmaz')
        }
        else{
        var  result=parseInt(value1)/parseInt(value2);}
    }
else{}

console.log(result)
h2.innerHTML=` RESULT : ${result}`
    }
)