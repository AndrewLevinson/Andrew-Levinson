// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.querySelectorAll(".myBtn");

// Get the <span> element that closes the modal
const close = document.querySelector(".close");

// When the user clicks on the button, open the modal
btn.forEach(button =>
  button.addEventListener("click", function() {
    btn.forEach(button => {
      // commented out until live
      modal.style.display = "block";
    });
  })
);

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// enable button when input field has characters
function success() {
  if (document.getElementById("password").value === "") {
    document.getElementById("loginbutton").disabled = true;
  } else {
    document.getElementById("loginbutton").disabled = false;
  }
}

// needed for multiple pages with same password
let page;
function pageRequest(pagePass) {
  page = pagePass;
}

// Credit for password protection code: https://github.com/matteobrusa/Password-protection-for-static-pages
function loadPage(pwd) {
  var hash = pwd;
  hash = Sha1.hash(pwd);
  var url = hash + page;
  $.ajax({
    url: url,
    dataType: "html",
    success: function(data) {
      window.location = url;
    },
    error: function(xhr, ajaxOptions, thrownError) {
      parent.location.hash = hash;
      // $("#wrongPassword").show();
      $("#password")
        .attr("placeholder", "wrong password")
        .attr("style", "border-color:#EA4A64");
      $("#password").val("");
    }
  });
}

$("#loginbutton").on("click", function() {
  loadPage($("#password").val());
});
$("#password").keypress(function(e) {
  if (e.which == 13) {
    loadPage($("#password").val());
  }
});
$("#password").focus();
