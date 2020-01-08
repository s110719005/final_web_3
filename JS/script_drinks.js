var tl = new TimelineMax({onUpdate:updatePercentage});
var tl2 = new TimelineMax({onUpdate:updatePercentage});
var tl3 = new TimelineMax({onUpdate:updatePercentage});
var tl4 = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();
const controller2 = new ScrollMagic.Controller();
const controller3 = new ScrollMagic.Controller();
const controller4 = new ScrollMagic.Controller();




 
//  var orange_text = document.getElementsByClassName(".orange_text");



function mq() {
    var query = Modernizr.mq('(max-width: 768px)');
    var query2 = Modernizr.mq('(max-width: 375px)');
    if (query&& !query2) {
        $('#holder').html('true');
        // JavaScript here
        // 當CSS media query計算的視窗寬度小於769px時執行
        tl.from('.orange_text', 1, {opacity: 0},"=-.5");
        tl.from('.orange_pic', 1, {opacity: 0}, "=-.5");
    
        tl2.from('.blue_text', 1.5, {opacity: 0});
        tl2.from('.blue_pic', 2, {opacity: 0}, "=-1.5");
        
        tl3.from('.red_pic', 2, {opacity: 0});
        tl3.from('.red_text', 1.5, {opacity: 0});
        
    
        tl4.from('.green_pic', 2, {opacity: 0});
        tl4.from('.green_text', 1.5, {opacity: 0});
    } 
    else if(query2){
        $('#holder').html('true');
        $(".orange_pic").click(function(){
            document.getElementById("orange_text").style.display = "block";
            document.getElementById("openingLottie").style.top = "53%";
         });
         $(".orange_text").click(function(){
            document.getElementById("orange_text").style.display = "none";
            document.getElementById("openingLottie").style.top = "40%";
         });
        
         $(".blue_pic").click(function(){
            document.getElementById("blue_text").style.display = "block";
         });
         $(".blue_text").click(function(){
            document.getElementById("blue_text").style.display = "none";
         });
        
         $(".red_pic").click(function(){
            document.getElementById("red_text").style.display = "block";
         });
         $(".red_text").click(function(){
            document.getElementById("red_text").style.display = "none";
         });
         
         $(".green_pic").click(function(){
            document.getElementById("green_text").style.display = "block";
         });
         $(".green_text").click(function(){
            document.getElementById("green_text").style.display = "none";
         });
    }
    else {
        $('#holder').html('false');
        // JavaScript here
        // 當CSS media query計算的視窗寬度大於等於769px時執行
        tl.from('.orange_text', .5, {x:-400, opacity: 0},"=-1.5");
        tl.from('.orange_pic', 1, {x:200, opacity: 0}, "=-.5");
        tl.from('.orange_wine', 1, {x:-200, opacity: 0,ease: Power4.easeInOut}, "=-1");

            tl2.from(".top_left", 1, {opacity: 0});
            tl2.to(".top_left", .5, {opacity: 1})

            tl2.from(".top_right", 2, {opacity: 0});
            tl2.to(".top_right", .5, {opacity: 1})

        tl2.from('.blue_text', 1.5, {x:-200, opacity: 0});
        tl2.from('.blue_pic', 2, {x:200, opacity: 0}, "=-1.5");
        tl2.from('.blue_wine', 2, {x:-200, opacity: 0,ease: Power4.easeInOut}, "=-2");

            tl3.from(".middle_left", 1, {opacity: 0});
            tl3.to(".middle_left", .5, {opacity: 1})

            tl3.from(".middle_right", 2, {opacity: 0});
            tl3.to(".middle_right", .5, {opacity: 1})

        tl3.from('.red_text', 1.5, {x:-200, opacity: 0});
        tl3.from('.red_pic', 2, {x:125, opacity: 0}, "=-1.5");
        tl3.from('.red_wine', 2, {opacity: 0,ease: Power4.easeInOut}, "=-2");

            tl4.from(".bottom_left", 1, {opacity: 0});
            tl4.to(".bottom_left", .5, {opacity: 1})

            tl4.from(".bottom_right", 2, {opacity: 0});
            tl4.to(".bottom_right", .5, {opacity: 1})

        tl4.from('.green_text', 1.5, {x:150, opacity: 0});
        tl4.from('.green_pic', 2, {x:200, opacity: 0}, "=-1.5");
        tl4.from('.green_wine', 2, {x:-200, opacity: 0,ease: Power4.easeInOut}, "=-2");
    }
};
// $(window).resize(function() {
//     mq();
// });
mq();


var query2 = Modernizr.mq('(max-width: 375px)');

if (!query2) {
    $('#holder').html('true');
    const scene = new ScrollMagic.Scene({
        triggerElement: ".orange",
                  triggerHook: "onLeave",
                  duration: "100%"
      })
        .setPin(".orange")
        .setTween(tl)
              .addTo(controller);
      
      const scene2 = new ScrollMagic.Scene({
          triggerElement: ".blue",
                      triggerHook: "onLeave",
                      duration: "100%"
      })
          .setPin(".blue")
          .setTween(tl2)
                  .addTo(controller2);
      const scene3 = new ScrollMagic.Scene({
          triggerElement: ".red",
                      triggerHook: "onLeave",
                      duration: "100%"
      })
          .setPin(".red")
          .setTween(tl3)
                  .addTo(controller3);
      const scene4 = new ScrollMagic.Scene({
          triggerElement: ".green",
                      triggerHook: "onLeave",
                      duration: "100%"
      })
          .setPin(".green")
          .setTween(tl4)
                  .addTo(controller4);
                  
      
      
      function updatePercentage() {
        //percent.innerHTML = (tl.progress() *100 ).toFixed();
          tl.progress();
          console.log(tl.progress());
          tl2.progress();
          console.log(tl2.progress());
          tl3.progress();
          console.log(tl3.progress());
          tl4.progress();
          console.log(tl4.progress());
      
      }
}
// const scene = new ScrollMagic.Scene({
//   triggerElement: ".orange",
//             triggerHook: "onLeave",
//             duration: "100%"
// })
//   .setPin(".orange")
//   .setTween(tl)
// 		.addTo(controller);

// const scene2 = new ScrollMagic.Scene({
//     triggerElement: ".blue",
//                 triggerHook: "onLeave",
//                 duration: "100%"
// })
//     .setPin(".blue")
//     .setTween(tl2)
//             .addTo(controller2);
// const scene3 = new ScrollMagic.Scene({
//     triggerElement: ".red",
//                 triggerHook: "onLeave",
//                 duration: "100%"
// })
//     .setPin(".red")
//     .setTween(tl3)
//             .addTo(controller3);
// const scene4 = new ScrollMagic.Scene({
//     triggerElement: ".green",
//                 triggerHook: "onLeave",
//                 duration: "100%"
// })
//     .setPin(".green")
//     .setTween(tl4)
//             .addTo(controller4);
            


// function updatePercentage() {
//   //percent.innerHTML = (tl.progress() *100 ).toFixed();
//     tl.progress();
//     console.log(tl.progress());
//     tl2.progress();
//     console.log(tl2.progress());
//     tl3.progress();
//     console.log(tl3.progress());
//     tl4.progress();
//     console.log(tl4.progress());

// }


  