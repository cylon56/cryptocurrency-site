var galleryIndex = 0;


function next(offset){
  nextGallery(offset)
}
//automatic
function nextGallery(offset) {
    var slides = document.getElementsByClassName("slides");
    galleryIndex += offset | 1
    if (galleryIndex < 0) galleryIndex = slides.length - 1
    galleryIndex %= slides.length
    console.log(galleryIndex)
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
setInterval(nextGallery, 6000); // Change image every 6 seconds
