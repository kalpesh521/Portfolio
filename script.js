$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY >20) {
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }   
        
    })
    // Toggle Menu-btn 
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
      // typing text animation script
      var typed = new Typed(".typing", {
        strings: ["Microsoft Certified Azure Data Engineer", "Web Developer", "Cloud & Big Data Enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Microsoft Certified Azure Data Engineer", "Web Developer", "Cloud & Big Data Enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});