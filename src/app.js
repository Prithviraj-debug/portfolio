// var ele = document.getElementById('#down');

// document.onscroll = function() {
//     if (window.innerHeight + window.scrollY > document.body.clientHeight) {
//         ele.style.display='none';
//     }
// }

$(document).ready(function() {
    $(window).scroll(function() {
        if ($('body').height() <= ($(window).height() + $(window).scrollTop())) {
            $("#down").css("display","none");
        } else {
            $("#down").css("display","block");
        }
    });
}); 