// jQuery used for page scroll anchoring and highlighting current section with blue underline.
// Add smooth scrolling to all links
$(document).ready(function() {
  $("a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
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
const acc = document.querySelectorAll(".accordion");

// open from bio paragraph
function trigger(e) {
  const activated = e.parentNode.classList.add("active");
  var panel = e.parentNode.nextElementSibling;
  activated;
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
