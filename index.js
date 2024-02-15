// Gsap

let tl = gsap.timeline()

tl.from(".logo, .sidebar li",{
    // y:-10,
    duration:1,
    // delay:0.3,
    // stagger:0.2,
    opacity:0
})

let tl1 = gsap.timeline({
    scrollTrigger:{
        scroller:".page1",
        // triggered:".home-text",
        start:"20% 50%",
        end:"60% 50%",
        // markers:true,
        scrub:1
    }
})


let tl2 = gsap.timeline()


tl2.from(".home-text",{
    x:-60,
    duration:0.75,
    // delay:0.3,
    opacity:0,
    stagger:0.4
})

let tl3 = gsap.timeline()

tl3.from(".home-img",{
    x:60,
    duration:0.75,
    // delay:0.3,
    opacity:0,
    // stagger:0.4
})

let tl4 = gsap.timeline({
    scrollTrigger:{
        // scroller:"page2",
        trigger:".page2",
        start:"5% 40%",
        end:"140% 50%",
        // markers:true,
        scrub:1
    }
})

tl4.to(".about-new",{
    rotate:180,
})







// tl.from(".about-img",{
//     x:-100,
//     duration:0.6,
//     // delay:0.3,
//     opacity:0,
//     stagger:0.4
// })

// tl.from(".about-info",{
//     x:100,
//     duration:0.6,
//     // delay:0.3,
//     opacity:0,
//     stagger:0.4
// })

// tl.from(".section-title",{
//     y:-50,
//     duration:0.6,
//     // delay:0.3,
//     opacity:0,
//     stagger:0.4
// })

let tl8 = gsap.timeline()

tl8.from(".skills__box h3,.skills__box span,.skills__img",{
    y:-50,
    duration:0.45,
    // delay:0.3,
    opacity:0,
    stagger:0.2
})


// tl.from(".skills__box h3,.skills__box span , .skills__img",{
//     x:-100,
//     duration:0.6,
//     // delay:0.3,
//     opacity:0,
//     stagger:0.1
// })

// tl.from(".skills__img",{
//     x:100,
//     duration:0.6,
//     // delay:0.3,
//     opacity:0,
//     stagger:0.1
// })

// tl.from(".page4 h3",{
//     y:-50,
//     duration:0.6,
//     // delay:0.3,
//     opacity:0,
//     stagger:0.4
// })

let tl5 = gsap.timeline()

tl5.from(".project-section",{
    y:-50,
    duration:0.6,
    // delay:0.3,
    opacity:0,
    stagger:0.2
})

let tl6 = gsap.timeline()

tl5.from(".image-box",{
    y:-50,
    duration:0.5,
    // delay:0.3,
    opacity:0,
    stagger:0.2
})

let tl7 = gsap.timeline()

tl5.from("form",{
    y:-50,
    duration:0.5,
    // delay:0.3,
    opacity:0,
    // stagger:0.2
})

// tl.from(".image-box",{
//     x:-100,
//     duration:0.6,
//     // delay:0.3,
//     opacity:0,
//     stagger:0.2
// })


// tl.from("form",{
//     x:100,
//     duration:0.6,
//     // delay:0.3,
//     opacity:0,
//     stagger:0.1
// })

const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const hidebar = document.querySelector(".hidebar");
const btn = document.querySelector(".btn")



// Responsive Hamburger Menu 

function hamburgerMenu ( ) {
 hidebar.classList.toggle("show");
 btn.classList.toggle("index")
//  hamburger.innerHTML = "&#9747";
}
