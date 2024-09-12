'use strict';

const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const btnNavMobile = document.querySelector('.btn-nav-mobile');
const navCloseBtn = document.querySelector('.nav-close-btn');

const navToggle = function() { 
    nav.classList.toggle('active'); 
}

// Add Action Listener
navMenuBtn.addEventListener('click', navToggle);
btnNavMobile.addEventListener('click', navToggle);
navCloseBtn.addEventListener('click', navToggle);

// Function Auto Scroll To Project
function lockContent() {
    const element = document.getElementById("blog");
    element.scrollIntoView({behavior:"smooth"});
}

// Function Auto Scroll To contact
function lockContact() {
    const element = document.getElementById("contact");
    element.scrollIntoView({behavior:"smooth"});
}

/* -------------------------------------------------------------------------- */
/*                                  View More                                 */
/* -------------------------------------------------------------------------- */


function viewMore() {
  document.getElementById("load-more").onclick = function () {
    location.href = "./viewMore.html";
  }
}

/* -------------------------------------------------------------------------- */
/*                                   Filter                                   */
/* -------------------------------------------------------------------------- */

filterSection("all")
function filterSection(c) {
  var x, i;
  x = document.getElementsByClassName("blog-card");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("topics-header");
var btns = btnContainer.getElementsByClassName("topic-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}