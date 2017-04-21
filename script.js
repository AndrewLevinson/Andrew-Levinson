
// Sticky Vert Nav

$(document).ready(function(){

    /** 
     * This part does the "fixed navigation after scroll" functionality
     * We use the jQuery function scroll() to recalculate our variables as the 
     * page is scrolled/
     */
    $(window).scroll(function(){
        var window_top = $(window).scrollTop() + 100; // the "12" should equal the margin-top value for nav.stick
        var div_top = $('#span-anchor').offset().top;
            if (window_top > div_top) {
                $('span').addClass('stick');
            } else {
                $('span').removeClass('stick');
            }
    });
    
    
    
  //Side bar slide in out  
$(document).ready(function () {
    slider();
});

$(window).scroll(function () {
    slider();
});

function slider() {
    if (document.body.scrollTop > 200)
        $('#sidebar').stop().animate({"margin-left": '0'});
    else
        $('#sidebar').stop().animate({"margin-left": '-250'});
}
    
 // Nav bar slide in out   
    
 $(document).ready(function () {
    slide();
});

$(window).scroll(function () {
    slide();
});

function slide() {
    if (document.body.scrollTop > 100)
        $('#hero').stop().animate({"margin-top": '0'});
    else
        $('#hero').stop().animate({"margin-top": '-250'});
}   
    
    
    
    
    /**
     * This part handles the highlighting functionality.
     * We use the scroll functionality again, some array creation and 
     * manipulation, class adding and class removing, and conditional testing
     */
    var aChildren = $("span li").children(); // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i=0; i < aChildren.length; i++) {    
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    } // this for loop fills the aArray with attribute href values

    $(window).scroll(function(){
        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();

        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $(theID).offset().top; // get the offset of the div from the top of page
            var divHeight = $(theID).height(); // get the height of the div in question
            if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                $("a[href='" + theID + "']").addClass("span-active");
            } else {
                $("a[href='" + theID + "']").removeClass("span-active");
            }
        }

        if(windowPos + windowHeight == docHeight) {
            if (!$("span li:last-child a").hasClass("span-active")) {
                var navActiveCurrent = $(".span-active").attr("href");
                $("a[href='" + navActiveCurrent + "']").removeClass("span-active");
                $("span li:last-child a").addClass("span-active");
            }
        }
    });
});






// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}











//Sticky Horizontal Nav

//var mn = $(".main-nav");
//mns = "main-nav-scrolled";
//hdr = $('header').height();
//
//$(window).scroll(function () {
//    if ($(this).scrollTop() > hdr) {
//        mn.addClass(mns);
//    } else {
//        mn.removeClass(mns);
//    }
//});

//Accordion Menu

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}

//Page Scroll

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});


//
//(function () {
//    Galleria.loadTheme('galleria/galleria.classic.min.js');
//    Galleria.run('.galleria');
//}());