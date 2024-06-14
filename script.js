window.onload=function(){
  zimetuzkanva();
}
function zimetuzkanva(){
  var canva = document.getElementById("zimejums");
  var konteksts= canva.getContext("2d");
  konteksts.fillStyle = "red";
  konteksts.fillRect(20,20,150,100);
}
function taisnsturis(){
  var canva = document.getElementById("zimejums");
  var konteksts= canva.getContext("2d");
  konteksts.strokeStyle = "red";
  konteksts.strokeRect(60,60,150,100);
}
function aplis() {
  var kanva = document.getElementById("zimejums");
  var konteksts = kanva.getContext("2d");
  konteksts.beginPath();
  konteksts.arc(200,200,50,0,2*Math.PI);
  konteksts.linweWidth = 20;
  konteksts.fillStyle = "pink";
  konteksts.strokeStyle = "red";
  konteksts.fill();
  konteksts.stroke();
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
      konteksts.fillStyle = "pink";
      konteksts.fillText("Sveika, Pasaule!",250,150);
  }
  

    
    