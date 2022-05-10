
var up=document.getElementById("scroll")
window.onscroll=function  (){
    if(window.scrollY>=1000){
        document.getElementById("scroll").style.display="block"
    }else{
        document.getElementById("scroll").style.display="none"
    }
}
document.getElementById("scroll").onclick= function (){
 window.scrollTo({
     top:0,behavior:"smooth"
 })

} 


