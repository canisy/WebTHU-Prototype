if($('body').is('.debug')){
    document.getElementById('debug_h1');
    const OBJ_DIV=document.getElementById('debug_div');
    const OBJ_TXT=document.getElementById('debug_h1');
    const OBJ_BTN=document.getElementById('debug_butt');
    const OBJ_GON=document.getElementById('debug_goner');
    let debugVar=true;
    OBJ_TXT.innerHTML='Test JS';
    OBJ_BTN.innerHTML='Trigger';
    function testJs(){
        if(debugVar===true){
            OBJ_DIV.classList.toggle("debug-roll");
            OBJ_TXT.innerHTML='GOOD!';
            OBJ_BTN.innerHTML='Stop';
            debugVar=false;
        }
        else {
            OBJ_DIV.classList.toggle("debug-roll");
            OBJ_TXT.innerHTML='Test JS';
            OBJ_BTN.innerHTML='Trigger';
            debugVar=true;
        };
    };
    $(document).ready(function(){
        $(OBJ_GON).click(function(){
            $(OBJ_GON).toggleClass("debug-hide");
            setTimeout(function(){
                $(OBJ_GON).toggleClass("debug-hide")
            }, 5000);
        });
    });
};
//if($('body').is('.index')){
//    const myCarouselElement = document.querySelector('#thu_head_caro')
//    const carousel = new bootstrap.Carousel(myCarouselElement, {
////      interval: 3000,
//      wrap: false,
//    })
//};
$(document).ready(function(){
    if($('body').is('index')){
        $('#thu_head_caro').carousel({
            interval: 5000, cycle: true
        });
    };
});
$(document).ready(function(){
    $(function(){
        $(document).scroll(function(){
            $(".thu-nav").toggleClass(['radiant', 'thu-shadow-trigger-on'],
                $(this).scrollTop() > 90
            );
        });
    });
});
