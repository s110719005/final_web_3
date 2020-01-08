const l_t = document.querySelector(".left_top");
const l_m = document.querySelector(".left_middle");
const l_b = document.querySelector(".left_bottom");
const m_t = document.querySelector(".middle_top");
const m_m = document.querySelector(".middle_middle");
const m_b = document.querySelector(".middle_bottom");
const r_t = document.querySelector(".right_top");
const r_m = document.querySelector(".right_middle");
const r_b= document.querySelector(".right_bottom");

var tl = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();
var t2 = new TimelineMax({onUpdate:updatePercentage});
const controller2 = new ScrollMagic.Controller();

const t3 = new TimelineMax();

// t3.fromTo(m_t,1,{ y:"-200%" },{y:"0%",ease:Power2.easeInOut})
// .fromTo(m_m,1,{ y:"-150%" },{y:"0%",ease:Power2.easeInOut},"-=1")
// .fromTo(m_b,1,{ y:"150%" },{y:"0%",ease:Power2.easeInOut},"-=1")
// .fromTo(l_t,1,{ x:"-200%" },{x:"0%",ease:Power2.easeInOut})
// .fromTo(l_m,1,{ x: "-200%" },{x: "0%",ease:Power2.easeInOut },"-=1")
// .fromTo(r_b,1,{ x: "200%" },{x: "0%",ease:Power2.easeInOut },"-=1");


function myFunction(x) {
    if (x.matches) { // If media query matches
        t3.fromTo(l_t,1,{ opacity:0 },{opacity:1,ease:Power2.easeInOut})
        .fromTo(l_m,1,{ opacity:0 },{opacity:1,ease:Power2.easeInOut},"-=1")
        .fromTo(l_b,1,{ opacity:0 },{opacity:1,ease:Power2.easeInOut},"-=1");
        //transform: rotateY(180deg);

        tl.from(l_b, .5, {transform: "rotateY(180deg)"},"=-1.5");
        
        const scene = new ScrollMagic.Scene({
            triggerElement: ".left_middle",
                      triggerHook: "onLeave",
                      duration: "0.1%"
          })
            .setPin(".left_middle")
            .setTween(tl)
                  .addTo(controller);
        t2.from(r_t, .5, {transform: "rotateY(180deg)"},"=-1.5");

        const scene2 = new ScrollMagic.Scene({
            triggerElement: ".middle_bottom",
                    triggerHook: "onLeave",
                    duration: "0.1%"
        })
            .setPin(".middle_bottom")
            .setTween(t2)
                .addTo(controller2);
    } else {
        t3.fromTo(m_t,1,{ y:"-200%" },{y:"0%",ease:Power2.easeInOut})
        .fromTo(m_m,1,{ y:"-150%" },{y:"0%",ease:Power2.easeInOut},"-=1")
        .fromTo(m_b,1,{ y:"150%" },{y:"0%",ease:Power2.easeInOut},"-=1")
        .fromTo(l_t,1,{ x:"-200%" },{x:"0%",ease:Power2.easeInOut})
        .fromTo(l_m,1,{ x: "-200%" },{x: "0%",ease:Power2.easeInOut },"-=1")
        .fromTo(r_b,1,{ x: "200%" },{x: "0%",ease:Power2.easeInOut },"-=1");
    }
  }
  
  var x = window.matchMedia("(max-width: 375px)")
  
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state change

  function updatePercentage() {
    //percent.innerHTML = (tl.progress() *100 ).toFixed();
      tl.progress();
      console.log(tl.progress());
      t2.progress();
      console.log(t2.progress());
  
  }