
//ARTWORK-GALLERY MODAL --------------------------------------------------- 

        // OPEN GALLERY MODAL
        function openModal() {
            document.getElementById('modal-js').style.display = "block";
            document.body.style.overflow = "hidden";
        }

        // CLOSE GALLERY MODAL
        function closeModal() {
            document.getElementById('modal-js').style.display = "none";
            document.body.style.overflow = "visible"; 
        }

        //INITIAL SLIDE VALUE AND FUNCTION CALL;  
        var slideIndex = 1;
        showSlides(slideIndex);

        // NEXT/PREV CONTROLS
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        // THUMBNAIL IMAGE CONTROLS (OPENS THE IMAGE THAT IS IN THE THUMBNAIL) 
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        // FUNCTION FOR SETTING UP THE SLIDESHOW;
        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("slides");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slideIndex - 1].style.display = "block";
        }