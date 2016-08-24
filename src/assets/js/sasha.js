//$('.image-wrapper').click(function(e){
    //$('.image-overlay-content').fadeToggle();
//});

//$('.image-overlay-content').click(function(){
    //$(this).fadeOut();
//});

//$(window).resize(function(){
//});


  //if($(window).width() <= 1024) {
  //  $('.image-wrapper').click(function(){
  //      $('.image-overlay-content').fadeToggle();
  //  });
  //}
  //else {
  //  $('.image-wrapper').hover(function(){
  //      $('.image-overlay-content').fadeToggle(1000);
  //  });
  //}

  if($(window).width() <= 1024) {
    $('.simple-toggle').click(function(){
        $('.simple-toggle-content').fadeToggle();
    });

    //$('.simple-toggle').click(function(event){
    //     event.stopPropagation();
    //});

  }
  else {
    $('.simple-toggle').hover(function(e){
      e.preventDefault();
        $('.simple-toggle-content').fadeToggle(1000);
    });
  }
