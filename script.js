// card click event
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        const cardId = this.id;
        window.location.href = `details.html?hero=${cardId}`;
    });
});

//video options
let bg = document.querySelector(".landing-screen");
let video = document.querySelector(".myvideo");
let video_container = document.querySelector(".video");
let playagain = document.querySelector(".play-again");
let muted = document.querySelector(".muted");
let audio = document.querySelector(".audio");
let leftcont = document.querySelector(".left");

video.onended = function () {
    video_container.style.display = "none";
    muted.style.display = "none";
    audio.style.display = "none";
    playagain.style.display = "block";
    leftcont.style.opacity = 0;    
};
playagain.addEventListener('click', () => {
    // video_container.style.zIndex = -1;
    video_container.style.display="block";
    video.play();
    video.muted = false;
    playagain.style.display = "none";
    audio.style.display = "none";
    muted.style.display = "block";
    leftcont.style.opacity = 1;    
}
);
muted.addEventListener('click', () => {
    video.play();
    video.muted = true;
    playagain.style.display = "none";
    muted.style.display = "none";
    audio.style.display = "block";
}
);
audio.addEventListener('click', () => {
    video.play();
    video.muted = false;
    playagain.style.display = "none";
    audio.style.display = "none";
    muted.style.display = "block";
}
);

// GSAP animation for cards
gsap.from(".card", {
    y: -50,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    delay:2,
    // scrollTrigger: {
    //     trigger: ".heroes",
    //     scroller: "#main", 
    //     scrub: 2,          
    //     // start: "top 100%",  
    //     // end: "bottom 80%",
    //     markers:true,
    // }
});

// // GSAP + Locomotive Scroller
// const scroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true
// });
// ScrollTrigger.scrollerProxy("#main", {
//     scrollTop(value) {
//         return arguments.length
//             ? scroll.scrollTo(value, 0, 0)
//             : scroll.scroll.instance.scroll.y;
//     },
//     getBoundingClientRect() {
//         return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//     },
//     pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });

// scroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.addEventListener("refresh", () => scroll.update());
// ScrollTrigger.refresh();