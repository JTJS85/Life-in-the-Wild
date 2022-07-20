//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } 
  else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

mainBanner = document.getElementById("h1title")
let onOff = 0

function bannerFunction() {
  if (onOff == 0) {
    mainBanner.style.color = "pink";
    mainBanner.style.background = "black";
    mainBanner.innerHTML = "fuck off";
    onOff = 1
  }else {
    mainBanner.style.color = "black";
    mainBanner.style.background = "white";
    mainBanner.innerHTML = "Life in the wild";
    onOff = 0
  }
  // if (mainBanner.style.color == "pink") {
  //   mainBanner.style.color = "black";
  // }

}