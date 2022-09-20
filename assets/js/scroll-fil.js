var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: ".name-text-hero"
})
.setClassToggle('.name-text-hero','name-move' ) // add indicators (requires plugin)
.addTo(controller);