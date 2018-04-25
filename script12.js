

function showa(){
document.getElementById("picture").style.display="block";
document.getElementById("picture2").style.display="none";
document.getElementById("picture3").style.display="none";

}

function showb(){
document.getElementById("picture2").style.display="block";
document.getElementById("picture").style.display="none";
document.getElementById("picture3").style.display="none";

}

function showc(){
document.getElementById("picture3").style.display="block";
document.getElementById("picture2").style.display="none";
document.getElementById("picture").style.display="none"

}
function showcol(){


    var content = document.getElementById("content23");

    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  
}
