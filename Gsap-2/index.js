var i = (".img");
var k = ("#Hi");



var l = function(){
gsap.to(i, 1, { x: 500});
}

TweenMax.to(i, 1, {onComplete:l});

var t = function(){
    gsap.to(k, 1, { ease: "bounce.out",duration: 1,delay: 2, x: 530, y: 155 });
    }
    
    TweenMax.to(k, 1, {onComplete:t});

    var d = function(){
        gsap.to(".pro", 1, {opacity: 1})
    }
    