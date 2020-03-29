"use strict"
const TypeWriter = function(txtElement, words, wait = 2000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

//Type Method
TypeWriter.prototype.type = function() {
   const current = this.wordIndex & this.words.length;//current index
   const fullTxt = this.words[current];//full text


    if(this.isDeleting) {//check if deleting

      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {

      this.txt = fullTxt.substring(0, this.txt.length + 1);//Add char
    }

    //Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = 100; //typing speed

    if(this.isDeleting) {
        typeSpeed /= 2;
    }
    if(!this.isDeleting && this.txt === fullTxt) { //if word is complete

       typeSpeed = this.wait; //pause at end
       this.isDeleting = true; //set delete to true

    } else if(this.isDeleting && this.txt === '') {
       this.isDeleting = false;
       this.wordIndex++;
       typeSpeed = 500;
    }
   
    setTimeout(() => this.type(),typeSpeed)
}



document.addEventListener ('DOMContentLoaded', init); //event listeners functions app=(words for data-words)(txt-type is the txtelement)(wait for data-wait). TypeWrite is text section/typing section
//init app
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    //Init TypeWrite
    new TypeWriter(txtElement, words, wait);

};

(function($) {

  var slide = $('.owl-carousel');
  slide.owlCarousel({ 
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
      600:{
          items:4
      }
  }
  });
  
   
});
(function($) {
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        },
    }
  })
})

//$(HTMLTableSectionElement).ready(function(){
 // $('.row').Services({
      //slidesToShow: 4,
      //slidesToScroll: 1,
      //autoplay: true,
      //autoplaySpeed: 1500,
      //arrows: false,
      //dots: false,
      //pauseOnHover: false,
      //responsive: [{
         // breakpoint: 768,
         // settings: {
          //    slidesToShow: 4
         // }
      //}, {
       //   breakpoint: 520,
         // settings: {
            //  slidesToShow: 3
         // }
     // }]
  //});
//});

//function text() {
 // var typed = new Typed('.typing', {
 //   strings: ["web developer.", "web designer."],
 //   loop: true,
  //  typeSpeed: 40,
 //   backSpeed: 40,
 //   backDelay: 1000,
 // })
//}  
//console.log("typing active");

 // if (!this.isDeleting && this.txt === fullTxt) {
 // delta = this.period;
  //this.isDeleting = true;
  //} else if (this.isDeleting && this.txt === '') {
  //this.isDeleting = false;var TxtType = function(el, toRotate, period) {
  //this.toRotate = toRotate;
  //this.el = el;
  //this.loopNum = 0;
  //this.period = parseInt(period, 10) || 2000;
  //this.txt = '';
  //this.tick();
  //this.isDeleting = false;
//};

//TxtType.prototype.tick = function() {
  //var i = this.loopNum % this.toRotate.length;
  //var fullTxt = this.toRotate[i];

  //if (this.isDeleting) {
  //this.txt = fullTxt.substring(0, this.txt.length - 1);
  //} else {
  //this.txt = fullTxt.substring(0, this.txt.length + 1);
  //}

  //this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  //var that = this;
  //var delta = 200 - Math.random() * 100;

  //if (this.isDeleting) { delta /= 2; }
  //this.loopNum++;
  //delta = 500;
  //}

  //setTimeout(function() {
  //that.tick();
  //}, delta);
//};

//window.onload = function() {
  //var elements = document.getElementsByClassName('typewrite');
  //for (var i=0; i<elements.length; i++) {
    //  var toRotate = elements[i].getAttribute('data-type');
      //var period = elements[i].getAttribute('data-period');
      //if (toRotate) {
        //new TxtType(elements[i], JSON.parse(toRotate), period);
      //}
  //}
  // INJECT CSS
  //var css = document.createElement("style");
  //css.type = "text/css";
  //css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  //document.body.appendChild(css);
//}
