// to change style with jQuery
$("h1").css("color","red")

$("h2").css("font-size","5rem")
$("h2").css("color","yellow")

$("h3").css("font-weight","bold")
$("h3").css("color","green")

// to change style using css but apply with jQuery
$("h3").addClass("size")
$("h4").addClass("big-title")

// changing text along with tags
$(".heading").html("I want to <em>discover</em>  something")
$(".heading").css("color","red")

// changin/updating attributes
$("a").attr("href","https://google.com")
$("a").css("font-size","30px")

// adding eventListener
$("h2").click(function(){
    $("h2").css("color","purple")
})

// keypress event
$("input").keypress(function(event){
    console.log(event.key)
})

// keypress for entire document
$(document).keypress(function(event){
    $(".key").text(event.key)
})

// add hover to h2
$("h4").on("mouseover",function(){
    $("h4").css("color","purple")
})

// adding new element 
$("h4").before("<button id=1> click1</button>");
$("h4").after("<button id=2> click2 </button>")

// for element to hide (use .hide()) and show(use .show()) 
//   for both respectively(use .toggle())  
$("#1").click(function(){
    $("h2").toggle();
})

// to hide element with effect
$("#2").click(function(){
    $("h3").slideUp().slideDown().fadeOut();
})

// custom css along with multiple method
$(".heading").after("<button> click </button>")
$("button").click(function(){
    $(".heading").slideUp().slideDown().animate({opacity:0.5});
})