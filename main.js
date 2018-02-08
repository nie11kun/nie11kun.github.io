$(function () {
    var val1 = 0;
    $(".wrapper").on("click", function () {
        if (val1 == 0) {
            val1 = 1;
            $("h2").hide();
            $(".wrapper").animate({padding: "10em 0em 4em 0em"}, 50);
            $(".nav").animate({fontSize: "2em"}, 50);
            $("#box").animate({left: "11%"}, 500);
            $("footer").css({color: "#222222"});
        } else {
            val1 = 0;
            $("footer").css({color: "#EAE9E5"});
            $("#box").animate({left: "100%"}, 500);
            $(".nav").animate({fontSize: "4.4em"}, 50);
            $(".wrapper").animate({padding: "10em 0em 4em 5em"}, 50);
            $("h2").show();
        }
        
    });
});