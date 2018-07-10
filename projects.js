// JS specific to project pages

// highlight current section blue in case studies
$(document).ready(function() {
  var aChildren = $("span li").children(); // find the a children of the list items
  var aArray = []; // create the empty aArray
  for (var i = 0; i < aChildren.length; i++) {
    var aChild = aChildren[i];
    var ahref = $(aChild).attr("href");
    aArray.push(ahref);
  } // this for loop fills the aArray with attribute href values
  $(window).scroll(function() {
    var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
    var windowHeight = $(window).height(); // get the height of the window
    var docHeight = $(document).height();

    for (var i = 0; i < aArray.length; i++) {
      var theID = aArray[i];
      var divPos = $(theID).offset().top; // get the offset of the div from the top of page
      var divHeight = $(theID).height(); // get the height of the div in question
      if (windowPos >= divPos && windowPos < divPos + divHeight) {
        $("a[href='" + theID + "']").addClass("span-active");
      } else {
        $("a[href='" + theID + "']").removeClass("span-active");
      }
    }
    if (windowPos + windowHeight == docHeight) {
      if (!$("span li:last-child a").hasClass("span-active")) {
        var navActiveCurrent = $(".span-active").attr("href");
        $("a[href='" + navActiveCurrent + "']").removeClass("span-active");
        $("span li:last-child a").addClass("span-active");
      }
    }
  });
});

// Nav slide down and sidebar slide out when hero image cleared
// debounce for performance on scroll triggers
function debounce(func, wait = 10, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
const heroImage = document.querySelector(".hero-pic");
const navBar = document.querySelector(".nav-down");
const sideBar = document.getElementById("sidebar");
function checkSlide() {
  // slide in content after hero image height cleared
  const slideInAt = heroImage.offsetHeight;
  if (window.scrollY > slideInAt) {
    navBar.classList.add("active");
    sideBar.classList.add("active");
  } else {
    navBar.classList.remove("active");
    sideBar.classList.remove("active");
  }
}

window.addEventListener("scroll", debounce(checkSlide));
