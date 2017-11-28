

    var controller = new ScrollMagic.Controller();

    // build tween
    var tween = new TimelineMax()
        .add([
            TweenMax.fromTo(".one", 1, { top: '10%' }, { top: 1500, ease: Linear.easeNone }),
            TweenMax.fromTo(".two", 1, { top: '15%' }, { top: 1300, ease: Linear.easeNone }),
            TweenMax.fromTo(".two-b", 1, { top: '5%' }, { top: 1100, ease: Linear.easeNone }),
            TweenMax.fromTo(".two-b", 1, { top: '5%' }, { top: 900, ease: Linear.easeNone }),
            TweenMax.fromTo(".three", 1, { top: '40%' }, { top: 800, ease: Linear.easeNone }),
            TweenMax.fromTo(".three-b", 1, { top: '10%' }, { top: 700, ease: Linear.easeNone }),
            TweenMax.fromTo(".four", 1, { top: '60%' }, { top: 650, ease: Linear.easeNone }),
            TweenMax.fromTo(".five", 1, { top: '60%' }, { top: 600, ease: Linear.easeNone }),
            TweenMax.fromTo(".six", 1, { top: '60%' }, { top: 550, ease: Linear.easeNone }),
        ]);

    // build scene
    var scene = new ScrollMagic.Scene({ triggerElement: "#trigger2", duration: $(window).width() })
        .setTween(tween)
        .addTo(controller);

    // Parallax Section One
    // ====================

    var p1Controller = new ScrollMagic.Controller({ vertical: false });

    var p1 = new ScrollMagic.Scene({
            triggerElement: '.p1',
            triggerHook: 10,
            reverse: false
        })
        .setClassToggle('.p1', 'in-view')
        .addTo(controller)

    var pop1 = new ScrollMagic.Scene({
      triggerElement: '.section-1',
      triggerHook: 0,
      reverse: false
    })
    .setClassToggle('.section-1', 'in-view')
    .addTo(p1Controller)

    // Clouds
    // ======

    var cloudsTween = new TimelineMax()
        .add([
            TweenMax.fromTo(".cg-1", 1, {left: 300 }, { left: 175, ease: Linear.easeNone }),
            TweenMax.fromTo(".cg-2", 1, {right: -1200 }, { left: 475, ease: Linear.easeNone }),
            TweenMax.fromTo(".hills", 1, {right: -400 }, { left: -675, ease: Linear.easeNone }),
        ]);

    // build scene
    var scene2 = new ScrollMagic.Scene({ triggerElement: ".p1 .wrapper",
      duration: 15000 
    })
        .setTween(cloudsTween)
        .addTo(p1Controller);

  // Panels Section
  // ==============

  // New Controller
  var panelsController = new ScrollMagic.Controller();

  var seniorsData1 = new TimelineMax()
  .fromTo('.seniors-data-1', 1, {scale: '0', rotation: '45'}, {scale: '1', rotation: '0', ease: Linear.easeNone})
  .fromTo('.seniors-data-1-inner', 1.5, {scale: '0', rotation: '45'}, {scale: '1', rotation: '0', ease: Linear.easeNone})
  .fromTo('.seniors-data-2', 2.5, {scale: '0', rotation: '45'}, {scale: '1', rotation: '0', ease: Linear.easeNone})
  .fromTo('.seniors-data-3', 3.5, {scale: '0', rotation: '45'}, {scale: '1', rotation: '0', ease: Linear.easeNone})
  .fromTo('.p1-4', 4.5, {scale: '0', rotation: '45'}, {scale: '1', rotation: '0', ease: Linear.easeNone})
  .fromTo('.p1-5', 5.5, {scale: '0', rotation: '45'}, {scale: '1', rotation: '0', ease: Linear.easeNone});

  var seniorsData1Tween = new ScrollMagic.Scene({
      triggerElement: '.panel-1',
      triggerHook: '100px',
      duration: '60%',
      //reverse: false
    })
    .setTween(seniorsData1)
    .addTo(panelsController)

  var disabilityTimeline = new TimelineMax()
    .fromTo('.p2-1-female', 4, {scale: '0', y: '-25px'}, {scale: '1', y: '0', ease: Linear.easeNone})
    .fromTo('.p2-1-male', 4, {scale: '0', y: '-25px'}, {scale: '1', y: '0', ease: Linear.easeNone})
    .staggerFromTo('.p2-2-b ul li', 6, {scale: '0', y: '-25px'}, {scale: '1', y: '0', ease: Linear.easeNone}, .5)
    .fromTo('.p2-3', 10, {opacity: '0', scale: '.95', x: '80px'}, {opacity: '1', scale: '1', x: '0', ease: Linear.easeNone})
    .staggerFromTo('.p2-2 ul li', 6, {scale: '0', y: '-25px'}, {scale: '1', y: '0', ease: Linear.easeNone}, .5)
    .fromTo('.p2-4', 10, {opacity: '0', scale: '.95', x: '80px'}, {opacity: '1', scale: '1', x: '0', ease: Linear.easeNone})
    .fromTo('.p2-5', 10, {opacity: '0', scale: '.95', x: '80px'}, {opacity: '1', scale: '1', x: '0', ease: Linear.easeNone})
    .fromTo('.p2-6', 10, {opacity: '0', scale: '.95', x: '80px'}, {opacity: '1', scale: '1', x: '0', ease: Linear.easeNone})
    .fromTo('.p2-7', 10, {opacity: '0', scale: '.95', x: '80px'}, {opacity: '1', scale: '1', x: '0', ease: Linear.easeNone});

  var disbilityTween = new ScrollMagic.Scene({
    triggerElement: '.panel-2',
    triggerHook: '100px',
    duration: '60%',
    //reverse: false
  })
  .setTween(disabilityTimeline)
  .addTo(panelsController)

  var chronicTimeline = new TimelineMax()
    .fromTo('.p2-a-6', 4, {scale: '0', y: '-25px'}, {scale: '1', y: '0', ease: Linear.easeNone})
    .fromTo('.p2-a-1', 4, {scale: '0', y: '-25px'}, {scale: '1', y: '0', ease: Linear.easeNone})
    .fromTo('.p2-a-2', 4, {scale: '0', y: '-25px'}, {scale: '1', y: '0', ease: Linear.easeNone})
    .fromTo('.p2-a-3', 4, {scale: '0', y: '-25px'}, {scale: '1', y: '0', ease: Linear.easeNone})
    .fromTo('.p2-a-5', 4, {scale: '0', y: '-25px'}, {scale: '1', y: '0', ease: Linear.easeNone})
    .fromTo('.p2-a-4', 4, {scale: '0', y: '-25px'}, {scale: '1', y: '0', ease: Linear.easeNone})

    var disbilityTween = new ScrollMagic.Scene({
      triggerElement: '.panel-2-a',
      triggerHook: '100px',
      duration: '60%',
      //reverse: false
    })
    .setTween(chronicTimeline)
    .addTo(panelsController)

  var qolTimeline = new TimelineMax()
    .fromTo('.p3-1', 10, {opacity: '0', scale: '.95', x: '-80px'}, {opacity: '1', scale: '1', x: '0', ease: Linear.easeNone})
    .fromTo('.p3-2', 10, {opacity: '0', scale: '.95', x: '-80px'}, {opacity: '1', scale: '1', x: '0', ease: Linear.easeNone})
    .fromTo('.p3-3', 10, {opacity: '0', scale: '.95', x: '-80px'}, {opacity: '1', scale: '1', x: '0', ease: Linear.easeNone});

  var qolTween = new ScrollMagic.Scene({
    triggerElement: '.panel-3',
    triggerHook: '100px',
    duration: '40%'
    //reverse: false
  })
  .setTween(qolTimeline)
  .addTo(panelsController)


//   // New Controller
//   var panelsController = new ScrollMagic.Controller();

//   // Panel Movement
//   var wipeAnimation = new TimelineMax()
//     .fromTo('.panel-2', 1, {x: '200%'}, {x: '0%', ease: Linear.easeNone})
//     .fromTo('.panel-3', 1, {y: '200%'}, {y: '0%', ease: Linear.easeNone});

//   // Create Scene
//   new ScrollMagic.Scene({
//     triggerElement: '.p2',
//     triggerHook: 'onLeave',
//     duration: '200%'
//   })
//   .setPin('.p2')
//   .setTween(wipeAnimation)
//   .addTo(panelsController)

// var panel1 = new ScrollMagic.Controller();

// var p1Height = $('.panel-1').outerHeight();

//   var seniorsData1 = new TimelineMax()
//     .fromTo('.seniors-data-1', 1, {scale: '0', rotation: '45'}, {scale: '1', rotation: '0', ease: Linear.easeNone})
//     .fromTo('.seniors-data-1-inner', 1.5, {scale: '0', rotation: '45'}, {scale: '1', rotation: '0', ease: Linear.easeNone})
//     .fromTo('.seniors-data-2', 2.5, {scale: '0', rotation: '45'}, {scale: '1', rotation: '0', ease: Linear.easeNone})
//     .fromTo('.seniors-data-3', 3.5, {scale: '0', rotation: '45'}, {scale: '1', rotation: '0', ease: Linear.easeNone});

// var seniorsData1Tween = new ScrollMagic.Scene({
//     triggerElement: '.panel-1',
//     triggerHook: '100px',
//     duration: '40%',
//     reverse: false
//   })
//   .setTween(seniorsData1)
//   .addTo(panel1)

//   var p2class = new ScrollMagic.Scene({
//     triggerElement: '.panel-1',
//     triggerHook: 0,
//     duration: '200%',
//     reverse: false
//   })
//   .setClassToggle('.panel-2', 'in-view')
//   .addTo(panel1)

// var panel2 = new ScrollMagic.Controller();
// var p2Height = $('.panel-2').outerHeight();

// var p2List = new TimelineMax()
//   .fromTo('.p2-2 ul li', 1, {opacity: 0}, {opacity: 1, ease: Linear.easeNone})

//   var p2class = new ScrollMagic.Scene({
//     triggerElement: '.panel-2 h2',
//     duration: 0,
//     reverse: false
//   })
//   .setTween(p2List)
//   .addTo(panel2)