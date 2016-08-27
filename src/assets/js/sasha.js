if ($(window).width() <= 1024) {
    $("div.highlight-inner").on({
        click: function() {
            $(this).toggleClass("slide-action"); //.toggleClass( "inside-3" );
        },
        mouseleave: function() {
            $(this).removeClass("slide-action");
        }
    });

    $( "div.close-button-ne" ).click(function() {
      $(this).css('display','none');
    });
} else {
    $("div.highlight-inner").on({
        mouseenter: function() {
            $(this).toggleClass("slide-action"); //.toggleClass( "inside-3" );
        },
        mouseleave: function() {
            $(this).removeClass("slide-action");
        }
    });
}

$(window).load(function(){

  $('#masonry-container').masonry({

    itemSelector: '#masonry-container div'

  });

});
