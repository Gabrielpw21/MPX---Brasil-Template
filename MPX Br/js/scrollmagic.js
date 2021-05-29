let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .to('section.parallax .card-img-overlay a', 0.02, {opacity: 0})
    .to('section.parallax .card  img', 1, {opacity:1 })
    .to('section.parallax .card-img-overlay', 1.6, {opacity: 0, x:'50px', opacity:1})
    .to('section.parallax .card-img-overlay', 0.5, {opacity: 1, x:'-10px'})
    .to('section.parallax .card-img-overlay', 1.3, {opacity: 1, x:'620px'})
    .to('section.parallax .card-img-overlay a', 2.5, {opacity: 1})

 

    let  scene = new ScrollMagic.Controller({
        triggerElement: "section",
        duration: "100%",
        triggerHook: 0,
    })

    .setTween(timeline)
    .setPin("section")
    .addTo(controller)

    