var galleryIndex = 0;


function next(offset){
  nextGallery(offset)
}
//automatic
function galleryGen(slideshow) {
    ind = 0
    slides = slideshow.querySelectorAll(".slides");

    return (() => {
      // console.log(slides[ind]);
      slides[ind].className = toggleStr(slides[ind].className, "active");
      ind += 1;
      if (ind < 0) ind = slides.length - 1;
      ind %= slides.length;
      slides[ind].className = toggleStr(slides[ind].className, "active");
  });
}


let randomColor = ()=>{
   return parseInt(Math.random()*16777216).toString(16);

}
let colorElement = (element)=>{
  element.style.backgroundColor = "#"+randomColor();
}
toplevel = document.querySelector("body").children;
function traverse(children){
    for(let c of children){
      colorElement(c);
      traverse(c.children);
    }

}
// traverse(toplevel);

// array of elements to put on same slide
//first set of elements are respective element classnames
//show is not required but for sake of simplicity is added before elements
function slideshow(show,classNames,elements){
  let newDiv = (className)=>{
    className = className || "slide";
    slide_temp = document.createElement("DIV");
    slide_temp.className = className;
    return slide_temp
  }
  // console.log(classNames);
  // console.log(elements);
  elements.map((e,i)=>{
    let slide = newDiv();
    show.appendChild(slide);
    for(let j = 0; j < classNames.length; j++){
      section = newDiv(classNames[j]);
      slide.appendChild(section);
      section.textContent = e[j];
    }


  });
  console.log(show.children[0].children[0]);
}

function zip(a,b){
  return a.map(function(e, i) {
    return [e, b[i]];
  })
}
function addList(a,b){
  for(i of b){
    a.push(b);
  }
  return a
}
function toggleStr(str,toggle){
  return "".join(str.split(toggle));

}
classNames = ["quote","author"]
c_authors = "abc def ghi".split(" ");
c_quotes = "The results have exceeded my wildest expectations. For anyone who feels like I did, knowing this is the investment of a lifetime, but does not know where to begin, these are your guys!";
c_quotes += "||I have been more than satisfied with the guidance and the very pleasing and professional attitude. I would recommend these services to anyone at any level with no hesitation what-so-ever.";
c_quotes += "||Cryptocurrency Consulting has helped me get started investing in crypto-currencies. They're highly reliable, but flexible at the same time. Their clear communications skills and all-around knowledge of crypto-currencies have proven highly beneficial to me.";
c_quotes = c_quotes.split("||");
// console.log(c_quotes);
show = document.querySelector("#famous")
slideshow(show,classNames,zip(c_quotes,c_authors)) ;
abstract = galleryGen(show);
// setInterval(abstract, 1000); // Cange image every 6 seconds
