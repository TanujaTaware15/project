gsap.from('.header',{
    opacity:0,
    y:-25,
    delay:0.5,
    duration:0.5
})
gsap.from('.header h2',{
    opacity:0,
    x:-120,
    delay:1,
    duration:0.5

})
gsap.from('.header .links a',{
    opacity:0,
    y:-20,
    delay:1.5,
    duration:0.5,
    stagger:0.6

})
gsap.from('.header .links button',{
    opacity:0,
    x:250,
    delay:3.9,
    duration:0.5

})

window.addEventListener('scroll',()=>{
    if(window.scrollY>=450){
        tl1.restart()
    }
})

var tl1=gsap.timeline()

tl1.from('.container1 h1',{
    opacity:0,
    x:100,
    scrollTrigger:{
        trigger:'.container1 .title h1',
        scroller:'body',
        start:'top 50%',
        end:'top 50%',
        scrub:5
    }
})
tl1.from('.container1 .skeleton .info h3',{
    opacity:0,
    stagger:0.1,
    scrollTrigger:{
        trigger:'.container1 .skeleton .info h3',
        scroller:'body',
        start:'top 60%',
        end:'top 60%',
        scrub:2
    }
})
tl1.from('.container1 .skeleton p',{
    opacity:0,
    y:70,
    stagger:0.2,
    scrollTrigger:{
        trigger:'.container1 .skeleton p',
        scroller:'body',
        start:'top 60%',
        end:'top 60%',
        scrub:2
    }
})
var tl2=gsap.timeline()
tl2.from('.skill-set .title h2',{
    opacity:0,
    y:-50,
    scrollTrigger:{
        trigger:'.skill-set .title h2',
        scroller:'body',
        start:'top 60%',
        end:'top 60%',
        scrub:5
    }
})
tl2.from('.skill-set .container .skill img',{
    opacity:0,
    scale:0.5,
    stagger:0.1,
    scrollTrigger:{
        trigger:'.skill-set .container .skill img',
        scroller:'body',
        start:'top 60%',
        end:'top 60%',
        scrub:2
    }
})

