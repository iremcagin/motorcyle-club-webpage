$( document ).ready(function() {
    $("#menuItems").css("max-height","0px");

    var slideIndex = 1;
    displaySlide(slideIndex);

    /* -----  ONCLICK ----- */
    $(".previous").click(function(){
        moveSlides(-1);
    });

    $(".next").click(function(){
        moveSlides(1);
    });

    $(".footerdot").click(function(){
        var x = $(this).attr("id");
        console.log(x);
        activeSlide(x);
    });

    $("#menu-icon").click(function(){
        menuToggle();
    });

    /* -----  FUNCTIONS ----- */
    function menuToggle(){
        if($("#menuItems").height() == "0"){
            menuItems.style.maxHeight="200px";
        }
        else{
            menuItems.style.maxHeight="0";
        }
    }

    function moveSlides(n){
        displaySlide(slideIndex += n);
    }

    function activeSlide(n){
        displaySlide(slideIndex = n);
    }

    function displaySlide(n){
        var i;
        var totalslides = document.getElementsByClassName("slide");
        var totaldots = document.getElementsByClassName("footerdot");

        /* turn beginning */
        if(n > totalslides.length){
            slideIndex = 1;
        }

        if(n < 1){
            slideIndex = totalslides.length;
        }

        for (i = 0; i < totalslides.length; i++) {
            totalslides[i].style.display = "none";
        }

        for (i = 0; i < totaldots.length; i++) {
            totaldots[i].className =
            totaldots[i].className.replace(" active", "");
        }

        totalslides[slideIndex - 1].style.display = "block";
        totaldots[slideIndex - 1].className += " active";
    }

    /* ----- MENU TRANSITIONS ----- */
    $("#homee").click(function(){
        $("html,body").animate({ scrollTop: $(".navbar").offset().top}, 1000);
    });

    $("#aboutt").click(function(){
        $("html,body").animate({ scrollTop: $(".about").offset().top}, 1000);
    });

    $("#galleryy").click(function(){
        $("html,body").animate({ scrollTop: $(".gallery").offset().top}, 1000);
    });

    $("#contactt").click(function(){
        $("html,body").animate({ scrollTop: $(".footer").offset().top}, 1000);
    });

});