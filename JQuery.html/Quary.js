//hide
$(document).ready(function(){
    // $("#hide").click(function(){
    //     $("p").hide(2000);
    // });
    //show
    // $("#show").click(function() {
    //     $("p").show(2000)
    // });

    // hide and show
    $("#btn").click(function(){
        $("p").toggle();
    });
    // button pe click karne ke bad aayege
    // $("#fadein").click(function() {
    //     $(".box1").fadeIn()
    //     $(".box2").fadeIn(1000)
    //     $(".box3").fadeIn(3000)
    // });
    //fadeout
    // $("#fadeout").click(function() {
    //     $(".box1").fadeOut()
    //     $(".box2").fadeOut(1000)
    //     $(".box3").fadeOut(3000)
    // });

    // togglefade
    $("#togglefade").click(function() {
        $(".box1").fadeToggle();
        $(".box2").fadeToggle(1000);
        $(".box3").fadeToggle(3000);
    })

    $(".container").click(function() {
        $(".content").slideDown();
    })
});