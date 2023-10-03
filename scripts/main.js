const tl = gsap.timeline();
const prepare = gsap.timeline();

const container = document.querySelector(".fireworks");
const fireworks = new Fireworks.default(container)
const button = document.querySelector(".play");

button.addEventListener("click", () => {
    console.log("clicked");

    const video = document.querySelector("audio");
    video.volume = 0.1;
    video.play();

    tl.play();    
});

tl.pause();

prepare
    .to("nav", { opacity: 0, delay: 1, y: -50, duration: 0.5, ease: "power4.inOut", })
    .from(".play", { opacity: 0, y: 20, duration: 0.5, ease: "power4.inOut", }, "-=0.5")

tl
    .to(".play", { opacity: 0, y: -20, duration: 0.5, ease: "power4.inOut", })
    .from(".van", { duration: 4, rotate: 360, y: 320, opacity: 0 }, "+=5")
    .from(".harte", { duration: 4, rotate: 360, y: 320, opacity: 0 }, "-=1")
    .from(".gefeliciteerd", { duration: 2, rotateX: 720, y: 120, opacity: 0 }, "+=2")
    .from( ".met-je", { duration: 1, y: 20, opacity: 0 }, "+=3" )
    .from( ".vijf-en-twintig", {duration: 5, y: 20, opacity: 0}, "+=1" )
    .from( ".verjaardag", {duration: 1, y: 20, opacity: 0}, "+=2" )
    .call(() => {
        fireworks.start()
    })
    .to(".fireworks, .birthday-section", {duration: 1, opacity: 0}, "+=50")
    .from(".beste-wensen", {duration: 1, y: 20, opacity: 0})
    .from(".blij", {duration: 1, y: 20, opacity: 0})
