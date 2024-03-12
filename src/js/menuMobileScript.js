const btnMenu = document.getElementById("menu-icon");
const myMenu = document.getElementById("menu");
const menuParent = document.getElementById("menu-flex-box");
const menuItens = document.getElementById("menu-itens");

function addExtraSpaceSwitch() {
  menuParent.classList.add("section-spacing");
}
function removeExtraSpaceSwitch() {
  menuParent.classList.remove("section-spacing");
}

function menuSwitch() {
  if (myMenu.style.opacity == "1") {
    myMenu.style.opacity = "0";
    myMenu.style.maxHeight = "0";
    menuItens.style.display = "none";
    removeExtraSpaceSwitch();
  } else {
    myMenu.style.opacity = "1";
    myMenu.style.maxHeight = "100%";
    menuItens.style.display = "inline-block";
    addExtraSpaceSwitch();
  }
}

btnMenu.addEventListener("click", menuSwitch);
