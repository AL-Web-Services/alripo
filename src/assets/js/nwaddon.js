  
$(document).ready(function() {
    // $("#subgroup .accordion").foundation('down', $(".accordion .accordion-content"));

    
    $("#btnOpen").click(function() {
        Foundation.Accordion.defaults.multiExpand = true;

    
        //if (!$("#subgroup .accordion .accordion-item").hasClass("is-active")) {
     
            $("#subgroup .accordion").foundation('down', $(".accordion .accordion-content"));
            // $("#btnOpen").removeClass("accordionshow").addClass("accordionhide");   
        // } else {
        //     $("#subgroup .accordion").foundation('up', $(".accordion .accordion-content"));
        //     // $("#btnOpen").removeClass("accordionhide").addClass("accordionshow");

        //}
 
    });

    $("#btnClose").click(function() {

    
        //if ($("#subgroup .accordion .accordion-item").hasClass("is-active")) {
     
            $("#subgroup .accordion").foundation('up', $(".accordion .accordion-content"));

        //}
 
    });

    // $("#btnOpen").click(function() {
    //     if (!$("#subgroup .accordion .accordion-item").hasClass("is-active")) {
    //         $("#subgroup .accordion").foundation('down', $(".accordion .accordion-content"));
    //         $("#btnOpen").removeClass("accordionshow").addClass("accordionhide");
    //     }
        // if ($("#subgroup .accordion .accordion-item").hasClass("is-active")) {
        //     $("#btnOpen").removeClass("accordionshow").addClass("accordionhide");
        // } else {
        //     $("#btnOpen").removeClass("accordionhide").addClass("accordionshow");
        // }
   



    /////////////////////////////////////////////////
    //database design show and hide//
    /////////////////////////////////////////////////
    //var foo = new Foundation.Accordion($("#foo"));
  


	//Configure/customize these variables.
    var showChar = 150;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Show more >";
    var lesstext = "Show less";
    

    $('.more').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
    
});