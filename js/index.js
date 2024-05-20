const button = document.getElementById("theme");
const body = document.body;
const socialmedia = document.querySelector("div.social-media ul");
const socialmediaicon = document.querySelectorAll("div.social-media ul li a");
const footer = document.querySelector("footer");
button.addEventListener("click", function () {
  if (body.style.backgroundColor == "white") {
    body.style.backgroundColor = "#ffd28f";
    socialmedia.style.backgroundColor = "#5fbdff";
    footer.style.backgroundColor = "#5fbdff";
    footer.style.color = "black";
    button.style.backgroundColor = "#5fbdff";
    button.style.color = "black";
    for (let i = 0; i < socialmediaicon.length; i++) {
      socialmediaicon[i].style.color = "black";
    }
  } else {
    body.style.backgroundColor = "white";
    socialmedia.style.backgroundColor = "#2d3e50";
    footer.style.backgroundColor = "#2d3e50";
    footer.style.color = "white";
    button.style.backgroundColor = "#2d3e50";
    button.style.color = "white";
    for (let i = 0; i < socialmediaicon.length; i++) {
      socialmediaicon[i].style.color = "white";
    }
  }
});
