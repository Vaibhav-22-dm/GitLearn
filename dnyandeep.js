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
        $(".review_3").css({
            translate: "translate(-1064px)"
        }, "slow");
        console.log(1);
    });

    $(".right-arrow").click(function () {
        $(".review-main-content").css({
            translate: "translate(-1064px)"
        }, "slow");
        console.log(2);
    });

    // $(window).scroll(() => {
    //     $(".navBar").css({
    //         border-bottom: "2px solid grey"
    //     });
    // });

    $(".navitem").click(function () {
        $(this).siblings().find(".underline").removeClass("underline-more");
        $(this).find(".underline").toggleClass("underline-more");
    });




});

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop == 0) {
        document.querySelector(".navBar").style.boxShadow = "none";
    };
    if (document.documentElement.scrollTop != 0) {
        document.querySelector(".navBar").style.boxShadow = "2px 2px 14px grey";
    };

    
});






