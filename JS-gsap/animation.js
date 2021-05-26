//section 2
gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline({
    scrollTrigger: { trigger: '.secondSection', start: "center bottom", toggleActions: "restart restart " }


});
tl.from(".left", { x: -350, opacity: 0, duration: 1 })
    .from(".right", { x: 250, opacity: 0, duration: 1 }, "-=1")
    //parallax section 3
let tl2 = gsap.timeline();
ScrollTrigger.create({
    animation: tl2,
    trigger: '.thirdSection',
    start: "center center",
    toggleActions: "restart reverse",
    pin: ".thirdSection",
    end: "+=500",
    scrub: 5
});
tl2.from(".sec3h21", { yPercent: 111, opacity: 0, duration: 4 })
    .to(".sec3h21", { yPercent: -140, opacity: 0, duration: 4 }) //first one
    .from(".bubble3", { yPercent: 112, opacity: 0, duration: 4 }) //start bubble3
    .from(".sec3h22", { yPercent: 112, opacity: 0, duration: 4 })
    .to(".sec3h22", { yPercent: -142, opacity: 0, duration: 4 }) //second one
    .from(".bubble", { yPercent: 112, opacity: 0, duration: 4 }) //start bubble1
    .from(".sec3h23", { yPercent: 112, opacity: 0, duration: 4 })
    .to(".sec3h23", { yPercent: -142, opacity: 0, duration: 4 }) //third one
    .from(".bubble2", { yPercent: 112, opacity: 0, duration: 4 }) //start bubble2
    .from(".sec3h24", { yPercent: 112, opacity: 0, duration: 4 })
    .to(".sec3h24", { yPercent: -142, opacity: 0, duration: 4 }) //fourth one
    .from(".bubble4", { yPercent: 112, opacity: 0, duration: 4 }) //start bubble1
    .from(".sec3h25", { yPercent: 112, opacity: 0, duration: 4 })
    .to(".sec3h25", { yPercent: -142, opacity: 0, duration: 4 }) //fifth one
    .to(".bubble", { opacity: 0, xPercent: -150, duration: 4 })
    .to(".bubble3", { opacity: 0, xPercent: 150, duration: 4 })
    .to(".bubble4", { opacity: 0, xPercent: 150, duration: 4 })
    .to(".bubble2", { opacity: 0, xPercent: -150, duration: 4 })
    .from(".heart", { yPercent: 120, opacity: 0, duration: 6 })
    .from(".hearth", { yPercent: 120, opacity: 0, duration: 6 })

// Smooth scroll setup
const bodyScrollBar = Scrollbar.init(document.body, { damping: 0.1, delegateTo: document });


bodyScrollBar.setPosition(0, 0);
bodyScrollBar.track.xAxis.element.remove();

// How to get them to work together
ScrollTrigger.scrollerProxy("body", {
    scrollTop(value) {
        if (arguments.length) {
            bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
    }
});
