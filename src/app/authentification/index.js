
var insb= document.getElementById("inscription");
var conecb= document.getElementById("connexion");
var insf=document.getElementById("inscrf");
var conecf=document.getElementById("conecf");


insf.addEventListener("click" ,function(){
 
    conecb.style.display="none";
    insb.style.display="block";
   
});
conecf.addEventListener("click" ,function(){
 
   conecb.style.display="block";
   insb.style.display="none";
  
});