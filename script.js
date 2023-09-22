// $("button").click(function() {
//     $('html,body').animate({
//             scrollTop: $(".second").offset().top
//         },
//         'slow');
// });

$("#Hello").click(function () {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);
});