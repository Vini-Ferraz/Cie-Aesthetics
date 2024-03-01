const btnMenu = document.getElementById("menu-icon");
const myMenu = document.getElementById("menu");
const menuParent = document.getElementById("menu-flex-box");

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
    removeExtraSpaceSwitch();
  } else {
    myMenu.style.opacity = "1";
    myMenu.style.maxHeight = "100%";
    addExtraSpaceSwitch();
  }
}

btnMenu.addEventListener("click", menuSwitch);
