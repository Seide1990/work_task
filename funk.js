body=document.querySelector("body");

window.addEventListener("keyup",function(e){
    console.log(e.key)
if(e.key==="d"){
    conf=confirm('dark moda kecmek isteyirsiz?')
if (conf){
body.classlist.add(".dark-mode")
}


}
})