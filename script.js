document.getElementById("buttonMC").addEventListener("click", function(){
  window.open("picles");
});
document.getElementById("buttonP").addEventListener("click", function(){
  window.open("picles");
});
document.getElementById("darkModeButton").addEventListener("click", function(){
  document.body.style.backgroundColor = "#333";
  document.body.style.color = "white";
});

document.getElementById("lightModeButton").addEventListener("click", function(){
  document.body.style.backgroundColor = "#ffffff";
  document.body.style.color = "black";
});
