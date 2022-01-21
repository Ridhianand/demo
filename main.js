var images=[ "daddy.JPG", "momm.jpg", "sister.jpg", "me.jpg"];
 var i=0;
 function nextslide()
 {
var updateimage=[images];
document.getElementById("image1").src=updateimage[i];
 i=i+1;
 }