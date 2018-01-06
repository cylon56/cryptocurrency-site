var galleryIndex = 0;




//automatic
function nextGallery(offset) {
    var slides = document.getElementsByClassName("slides");
    galleryIndex += offset | 1
    galleryIndex %= slides.length
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slides[galleryIndex].style.display = "block";
    nextQuote()
}


//Carousel Ends


// uses gallery index
function nextQuote() {
    var slides = document.getElementsByClassName("quote-slides");

    //hide all quotes
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }


    slides[galleryIndex].style.display = "block";

}
//Quote box functionality ends


nextGallery(0);
setInterval(nextGallery, 1000); // Change image every 6 seconds
