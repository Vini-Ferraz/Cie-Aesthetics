const btnMenu = document.getElementById("menu-icon");
const myMenu = document.getElementById("menu");
const menuParent = document.getElementById("menu-flex-box");
const menuItens = document.getElementById("menu-itens");
const menuLinks = document.querySelectorAll("#menu-itens a");

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
menuLinks.forEach((listItens) => {
  listItens.addEventListener("click", function (e) {
    if (myMenu.style.opacity !== "1") {
      e.preventDefault();
    }
  });
});
btnMenu.addEventListener("click", menuSwitch);
