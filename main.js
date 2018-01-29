var galleryIndex = 0;
var galleries = [];



// array of elements to put on same slide
//first set of elements are respective element classnames
//show is not required but for sake of simplicity is added before elements
function slideshow(show,classNames,elements){
  // console.log(show,classNames,elements)
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
  show.children[0].className+= " active";
  console.log(show);
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
  if(str.indexOf(toggle) == -1) return str.trim()+" "+toggle;
  return str.split(toggle).join("");

}
function next(offset){
  nextGallery(offset)
}
//automatic
function galleryGen(slideshow) {
    let ind = 0
    let slides = slideshow.querySelectorAll(".slide");
    let toggle = (str)=>{
      slides[ind].className = toggleStr(slides[ind].className, str || "active");
    }
    let iter = () => {
      // console.log(slides[ind]);
      toggle();
      ind += 1;
      if (ind < 0) ind = slides.length - 1;
      ind %= slides.length;
      toggle();
   };
   slideshow.iter = iter;
   galleries.push(slideshow);
   sizeup(slideshow);
   return iter;


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
function mapDom(el,func){
  let temp = [];
	console.log(el);
  let children = el.children
  for(let e = 0; e < children.length; e++){
    temp.push(func(children[e],e));
  }
  return temp
}
function toText(el){
  return mapDom(el,(e,i)=>{
    return e.textContent;
  });
}
function getClasses(el){
  return mapDom(el,(e,i)=>{
    return e.className;
  });
}
let sizeup = (show)=>{
  // console.log(show);
    let slides = show.querySelectorAll(".slide");
    let iter = show.iter;
    resize = ()=>{
      show.style.height = "";
      let height = 0;
      for(let i = 0; i < slides.length; i++){
        temp = show.clientHeight;
        // console.log(temp, height)
        if(height < temp){
          height = temp;
        }
        iter();
      }
        show.style.height = height+"px";
    }
  resize();
  return resize;
  };
// traverse(toplevel);

/*
2 different ways of creating the slide shows
*/
let genshow = (show)=>{
  statements = show.children;
  content = zip(toText(statements[0]),toText(statements[1]));
	classes = getClasses(show);
	show.innerHTML = "";
  slideshow(show,classes,content);
}
famous = document.querySelector("#famous")
genshow(famous);
setInterval(galleryGen(famous),5000);
clients = document.querySelector("#clients");
genshow(clients);
setInterval(galleryGen(clients),6500);

for(let show of galleries){
  window.addEventListener("resize", sizeup(show));
}
