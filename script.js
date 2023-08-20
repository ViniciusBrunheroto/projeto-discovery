let bd = document.documentElement
let btn = document.getElementById("switch")

let img = document.querySelector("#profile img")

btn.addEventListener("click", toggleMode)

function toggleMode() {
  bd.classList.toggle("light")

  if (bd.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
