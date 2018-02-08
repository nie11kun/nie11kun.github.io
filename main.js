$(function () {
    $(".wrapper").on("click", function () {
        $("h2").hide();
        $("h1").text("MN");
        $(".wrapper").animate({padding: "3em 0em 4em 0em"}, 50);
        $(".nav").animate({fontSize: "2em"}, 50);
        $("#box").animate({left: "10%"}, 500);
        $("footer").css({color: "#222222"});
        $("#homeBtn").css({opacity: 1});
    });

    $("#homeBtn").on("click", function () {
        $("#homeBtn").css({opacity: 0});
        $("footer").css({color: "#EAE9E5"});
        $("#box").animate({left: "100%"}, 500);
        $(".nav").animate({fontSize: "4.4em"}, 50);
        $(".wrapper").animate({padding: "3em 0em 4em 5em"}, 50);
        $("h2").show();
        $("h1").text("Marco Nie");
    });
    
});