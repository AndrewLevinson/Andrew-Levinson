// jQuery used for page scroll anchoring and highlighting current section with blue underline.

// Page Scroll anchoring thoughout entire site
$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

// Underline current section blue in case studies
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
// End jQuery

// Accordion Menu on homepage
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function openUp() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };
}

// Nav slide down and sidebar slide out when hero image cleared
// debounce for performance on scroll triggers
function debounce(func, wait = 20, immediate = true) {
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
