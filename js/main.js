document.querySelector(".fade-layer").addEventListener("click", showMenu)

document.querySelector(".menu-button").addEventListener("click", showMenu)
document.querySelector(".menu-button-menu").addEventListener("click", showMenu)


function showMenu(){
    console.log("hhgfdscfvgbhg")
    let menu = document.querySelector(".menu")
    menu.classList.toggle("show")
    let layer = document.querySelector(".fade-layer")
    layer.classList.toggle("visible")
}