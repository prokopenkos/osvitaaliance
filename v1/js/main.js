jQuery(window).load(function(){$("#preloader").fadeOut("slow")});
$(function(){(function(){var a=$("#nav-arrows"),b=$("#nav-dots > span"),c=$("#slider").slitslider({onBeforeChange:function(a,c){b.removeClass("nav-dot-current");b.eq(c).addClass("nav-dot-current")}}),e=function(){a.children(":last").on("click",function(){c.next();return!1});a.children(":first").on("click",function(){c.previous();return!1});b.each(function(a){$(this).on("click",function(d){d=$(this);c.isActive()||(b.removeClass("nav-dot-current"),d.addClass("nav-dot-current"));c.jump(a+1);return!1})})};
    return{init:function(){e()}}})().init()});
$(document).ready(function(){jQuery("#nav").singlePageNav({offset:jQuery("#nav").outerHeight(),filter:":not(.external)",speed:2E3,currentClass:"current",easing:"easeInOutExpo",updateHash:!0,beforeStart:function(){console.log("begin scrolling")},onComplete:function(){console.log("done scrolling")}});$(window).scroll(function(){400<$(window).scrollTop()?($(".navbar-brand a").css("color","#fff"),$("#navigation").removeClass("animated-header")):($(".navbar-brand a").css("color","inherit"),$("#navigation").addClass("animated-header"))});
    var a=$(window).height();$("#home-slider, #slider, .sl-slider, .sl-content-wrapper").css("height",a);$(window).resize(function(){"use strict";$("#home-slider, #slider, .sl-slider, .sl-content-wrapper").css("height",a)});$("#works, #testimonial").owlCarousel({navigation:!0,pagination:!1,slideSpeed:700,paginationSpeed:400,singleItem:!0,navigationText:["<i class='fa fa-angle-left fa-lg'></i>","<i class='fa fa-angle-right fa-lg'></i>"]});$(".fancybox").fancybox({padding:0,openEffect:"elastic",openSpeed:650,
        closeEffect:"elastic",closeSpeed:550,closeClick:!0,beforeShow:function(){this.title=$(this.element).attr("title");this.title="<h3>"+this.title+"</h3><p>"+$(this.element).parents(".portfolio-item").find("img").attr("alt")+"</p>"},helpers:{title:{type:"inside"},overlay:{css:{background:"rgba(0,0,0,0.8)"}}}})});google.maps.event.addDomListener(window,"load",init);
function init(){var a={zoom:15,center:new google.maps.LatLng(46.516718,30.726578),disableDefaultUI:!0,scrollwheel:!1,navigationControl:!0,mapTypeControl:!1,scaleControl:!1,draggable:!0,styles:[{featureType:"water",stylers:[{color:"#46bcec"},{visibility:"on"}]},{featureType:"landscape",stylers:[{color:"#f2f2f2"}]},{featureType:"road",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},
    {featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"poi",stylers:[{visibility:"off"}]}]},b=document.getElementById("map-canvas"),a=new google.maps.Map(b,a);new google.maps.Marker({position:new google.maps.LatLng(46.516718,30.726578),map:a,icon:"img/icons/map-marker.png"})}var wow=new WOW({offset:75,mobile:!1});wow.init();