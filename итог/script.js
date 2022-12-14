condition = true
start = 0
end = 0
function forwards(){
    anime({
        targets: '.menu-small',
        translateX: ['-100%', '0'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    })
    anime({
        targets:'.menu_small_icon',
        rotate:90,
        easing:'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop:false
    });
    anime({
        targets: '.stick',
        rotate:180,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    })
    condition= false
}
function backwards(){
    anime({
        targets: '.menu-small',
        translateX: ['0', '-100%'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    })
    anime({
        targets:'.menu_small_icon',
        rotate:-90,
        easing:'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop:false
    });
    anime({
        targets: '.stick',
        rotate:-180,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    })
    condition=true
}

$('.menu_small_icon').click(function(){
    if (condition){
        forwards()
    }else{
        backwards()
    }
})

$('.container').on('touchstart', function(e){
    start = e.originalEvent.touches[0].pageX
})
$('.container').on('touchend', function(e){
    end = e.originalEvent.changeTouches[0].pageX
    if(end - start >= 100 && condition){
        forwards()
    }else{
        backwards()
    }
})