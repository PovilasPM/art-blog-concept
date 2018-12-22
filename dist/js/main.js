
// OPEN AND CLOSE MODAL -------------------------------------------------------------------------

        function menuModal() {
            document.getElementById("js-modal").style.display = "block";
        }

        function menuClose() {
            document.getElementById('js-modal').style.display = "none";
        }

// CAROUSEL  --------------------------------------------------------------------------------------

var slideIndex = 0;
var slides = document.getElementsByClassName("card-container");

showSlides();

// AUTOMATIC SLIDESHOW;
function showSlides() {
    var i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none" //initially hides all the slides;
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 } //returns to initial position;
    slides[slideIndex - 1].style.display = "block";
    auto = setTimeout(showSlides, 80000); //changes slide every 80 seconds;
}

// CONDITIONS FOR PREV/NEXT-SLIDE BUTTONS;
// AUTO-SLIDESHOW RESET WHEN PRESSING PREV/NEXT; 
function plusSlides(n) {
    var newslideIndex = slideIndex + n; //new slide index with prev/next;
    if (newslideIndex < 4 && newslideIndex > 0) {
        currentSlide(newslideIndex);
    }
    else if (newslideIndex > slides.length) {
        currentSlide(1);
    }
    else {
        currentSlide(3);
    }
    clearTimeout(auto);
    auto = setTimeout(showSlides, 80000); //resets the auto-slider time;
}

// SHOWING EXACT SLIDE WHEN PRESSING PREV/NEXT;
// DEFINING SLIDE TO BE SHOWN BY AUTO-SLIDER NEXT;
function currentSlide(no) {
    var i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; //hides all slides;
    }
    slideIndex = no;
    slides[no - 1].style.display = "block";
}