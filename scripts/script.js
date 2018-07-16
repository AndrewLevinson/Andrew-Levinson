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
    }
  });
});
// End jQuery

// Accordion Menu on homepage
const design = document.getElementById("design");
const music = document.getElementById("music");
const finance = document.getElementById("finance");
const writing = document.getElementById("writing");
const photo = document.getElementById("photo");
const acc = document.getElementsByClassName("accordion");

// open from bio paragraph
function trigger(e) {
  const activated = e.parentNode.classList.add("active");
  activated;
  var panel = e.parentNode.nextElementSibling;
  if (activated) {
    // do nothing since panel is already open
  } else {
    setTimeout(function() {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }, 800);
  }
}

// open by clicking directly on accordion section
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
