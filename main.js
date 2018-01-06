var galleryIndex = 1;


var quoteIndex = 1;



//Deal with the image gallery at the top of the landing page, allows for the user controlled movement
//Carousel Begins
function plusSlides(n)   {
  showGallery(galleryIndex += n);
}


function currentSlide(n)   {
  showGallery(galleryIndex = n);
}

//user guided
function showGallery(n)  {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {galleryIndex = 1}
  if (n < 1) {galleryIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[galleryIndex-1].style.display = "block";
}
//automatic
function automaticGallery() {
    var i;
    var slides = document.getElementsByClassName("slides");

    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    galleryIndex++;
    if (galleryIndex > slides.length) {galleryIndex = 1}

    slides[galleryIndex-1].style.display = "block";

    setTimeout(automaticGallery, 6000); // Change image every 4 seconds
}


//Carousel Ends


//Deals witht he quote gallery lower down on the landing page, which moves automatically
//quote box functionality begins
function showQuotes() {
    var i;
    var slides = document.getElementsByClassName("quote-slides");

    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    quoteIndex++;
    if (quoteIndex > slides.length) {quoteIndex = 1}

    slides[quoteIndex-1].style.display = "block";

    setTimeout(showQuotes, 6000); // Change image every 4 seconds
}
//Quote box functionality ends


showGallery(galleryIndex);
automaticGallery();


showQuotes();
