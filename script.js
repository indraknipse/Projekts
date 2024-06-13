window.onload=function(){
var canvas = document.getElementById("zimejums");
  var ctx= canvas.getContext("2d");
  ctx.fillStyle = "red";
  ctx.fillRect(20,20,100,100);
}
function taisnsturis(){
  var canvas = document.getElementById("zimejums");
  var ctx= canvas.getContext("2d");
  ctx.strokeStyle = "red";
  ctx.strokeRect(10,10,100,100);
}
function aplis() {
  var kanvas = document.getElementById("zimejums");
  var konteksts = kanvas.getContext("2d");
  konteksts.beginPath();
  konteksts.arc(50,50,20,0,2*Math.PI);
  konteksts.linweWidth = 20;
  konteksts.fillStyle = "blue";
  konteksts.fill();
}
function linija(){
    var kanva = document.getElementById("zimejums");
    var konteksts = kanva.getContext("2d");
    konteksts.beginPath();
    konteksts.moveTo(50,300);
    konteksts.lineTo(250,350);
    konteksts.linweWidth = 5;
    konteksts.strokeStyle= "red";
    konteksts.stroke();
}
  function teksts(){
  var kanva = document.getElementById("zimejums");
  var konteksts = kanva.getContext("2d");
  konteksts.font = "30px Kristen ITC";
    konteksts.fillStyle = "yelow";
    konteksts.fillText("Sveiki, pasaule!",200,150);
  }
  

    
    