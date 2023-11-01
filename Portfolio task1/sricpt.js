
var timeout;

function firstSection(){
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    
    tl.from("#herofooter", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })
    .to(".boundingelem", {
        y: 1,
        duration: 2,
        ease: Expo.easeInOut,
        delay: -1.5,
        stagger:.2
    });
}

function mouseSkew(){
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function(dets){
        clearTimeout(timeout);

        xscale = gsap.utils.clamp(.8,1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8,1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        mouseFollwer(xscale, yscale);
        timeout = setTimeout(function() {
            document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px ) scale(1, 1)`;
        },100);
    });
}

function mouseFollwer(xscale, yscale){
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px ) scale(${xscale}, ${yscale})`;
    });
}


mouseFollwer();
firstSection();
mouseSkew();
