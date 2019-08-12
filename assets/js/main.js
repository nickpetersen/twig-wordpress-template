let navLines = document.getElementById("navLines");
let page = document.getElementById("wrapper");
let clicked = false;

if (nav.classList.contains("show")) {
    page.onclick = function() { toggleMenu() };  
}

page.onclick = function() {
    if (nav.classList.contains("show")) {
        toggleMenu()
    };
};


navLines.onclick = function() { toggleMenu() };

function toggleMenu () {
  let nav = document.getElementById('nav');

  nav.classList.toggle("show");

  if (nav.classList.contains("show")) { crossNavLines(); } 
  else { navLinesParrallel() }
}

function isHover(hoveredElement) {
  return (hoveredElement.parentElement.querySelector(':hover') === hoveredElement);
}

document.addEventListener('click', function (event) {

  if (!event.target.matches('.navLink')) return;
    nav.classList.toggle("show");
    navLinesParrallel()
}, false);


function crossNavLines () {
  clicked = true;

  topLine.style.marginTop = "0px";
  topLine.style.transform = "rotate(-60deg)";
  topLine.style.transition = "all .2s ease";

  middleLine.style.marginTop = "-14px";
  middleLine.style.marginLeft = "28px";
  middleLine.style.transform = "rotate(65deg)";
  middleLine.style.transition = "all .2s ease";

  bottomLine.style.marginTop = "21px";
  bottomLine.style.marginLeft = "13px";
  bottomLine.style.width = "20%";
  bottomLine.style.transform = "rotate(0deg)";
  bottomLine.style.transition = "all .2s ease";
}

function navLinesParrallel () {
clicked = false;
topLine.style.marginTop = "0px";
topLine.style.transform = "rotate(0deg)";

middleLine.style.marginTop = "-0";
middleLine.style.marginLeft = "0";
middleLine.style.transform = "rotate(0deg)";

bottomLine.style.marginTop = "0";
bottomLine.style.marginLeft = "0";
bottomLine.style.width = "15%";
bottomLine.style.transform = "rotate(0deg)";
}

// Color Swap
let timer = setInterval(rotateOrbs, 15000);
let pageThemes = ['first','second','third','fourth'];
let activePageThemeIdx = -1;
let orbs = document.getElementById('orbs');
let orbRotation = -90;
let prizmSymbol = document.getElementById('prizmSymbol');
orbs.addEventListener('click', rotateOrbs);
prizmSymbol.addEventListener('click', rotateOrbs);

function rotateOrbs() {
  activePageThemeIdx++;
  if (activePageThemeIdx >= pageThemes.length) {
    activePageThemeIdx = 0;
  }
  let activeTheme = pageThemes[activePageThemeIdx];
  document.getElementsByTagName('body')[0].setAttribute('data-page-active-theme', activeTheme);
  
  orbRotation += 90;
  orbs.style.transform = "rotate("+ orbRotation +"deg)";

}
rotateOrbs();