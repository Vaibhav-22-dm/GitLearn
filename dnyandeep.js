$(document).ready(function () {

    $(".answer-box").hide();
    $(".openIcon").click(function () {
        $(this).parentsUntil(".FAQs-content").siblings().find(".answer-box").slideUp();
        $(this).parentsUntil(".FAQs-content").siblings().find(".question-box").find(".openIcon").find(".vertical").removeClass("animate")
        $(this).parent().next().slideToggle();
        $(this).find(".vertical").toggleClass("animate");
    });
    $(".hamList").hide();
    $(".hamburger-icon").click(function () {
        $(".hamList").slideToggle("slow");
    });

    $(".left-arrow").click(function () {
        $(".review-main-content").animate({
            transform: 'translateX(-1000px)'
        });
        console.log(1);
    });

    $(".right-arrow").click(function () {
        $(".review-main-content").animate({
            transform: 'translateX(1000px)'
        });
        console.log(2);
    });


  



});


// document.querySelector("#left").addEventListener('click', () => {
//     document.querySelector("review-main-content").
// });

