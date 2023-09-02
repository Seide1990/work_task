var front=document.querySelector("#Frontend");

var back=document.querySelector("#backend");
var data=document.querySelector("#database");
var frontul=document.querySelector("#frontList");
var backul=document.querySelector("#backList");
var dataul=document.querySelector("#dataList");

var front1 = ["Html", "Css", "Js"];
var back1 = ["Java", "Python", "Go", "C#"];
var database1 = ["MySql", "Mongo", "Mssql"];

front.addEventListener("click",function(){

    for (i=0;i<=front1.length;i++){
    var li=document.createElement("li")
    li.innerText=front1[i]
    frontul.append(li)
}
})

back.addEventListener("click",function(){

    for (i=0;i<=back1.length;i++){
    var li=document.createElement("li")
    li.innerText=back1[i]
    backul.append(li)
}
})
data.addEventListener("click",function(){

    for (i=0;i<=database1.length;i++){
    var li=document.createElement("li")
    li.innerText=database1[i]
    dataul.append(li)
}
})


