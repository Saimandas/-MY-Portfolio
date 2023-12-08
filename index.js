function gsap(){
gsap.to("#topbar", {
   y: "20px",

    scrollTrigger: {
        trigger: "#topbar",
        scroller: "body",
       //  y: "30px",
        markers: true,
        start:"top -10%",
        //end : "top 80%",
        scrub:4
    }
});
}
