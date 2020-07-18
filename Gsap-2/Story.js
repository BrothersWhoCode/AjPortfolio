var a = (".P");


var t = function(){
    gsap.to(a, 1, { ease: "bounce.out",duration: 1,delay: 2, opacity: 1 });
    }
    
    TweenMax.to(a, 1, {onComplete:t});

    var d = function(){
        gsap.to(a, 1, {opacity: 1});
    }
    