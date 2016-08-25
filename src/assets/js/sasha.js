//Test 1

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

// 1 //  if($(window).width() <= 1024) {
// 1 //    $('.simple-toggle').click(function(){
// 1 //        $('.simple-toggle-content').fadeToggle();
// 1 //    });

// 2 // $( ".simple-toggle" ).on({
// 2 //   click: function() {
// 2 //     $('.simple-toggle-content').fadeToggle();//$( this ).toggleClass( "active" );
// 2 //
// 2 //   },mouseenter: function() {
// 2 //     $('.simple-toggle-content').fadeToggle();
// 2 //   }
// 2 //   ,mouseleave: function() {
// 2 //     $('.simple-toggle-content').fadeOut();
// 2 //   }
// 2 // });

if($(window).width() <= 1024) {
  $( ".simple-toggle" ).on({
    click: function() {
      $('.simple-toggle-content').fadeToggle();//$( this ).toggleClass( "active" );

    }
    ,mouseleave: function() {
      $('.simple-toggle-content').fadeOut();
    }
   });
 }
    else {
      $('.simple-toggle').hover(function(){
          $('.simple-toggle-content').fadeToggle(1000);
       });
     }


// 3 // $( ".simple-toggle" ).on({
// 3 //  click: function() {
// 3 //    $('.simple-toggle-content').fadeToggle();//$( this ).toggleClass( "active" );
// 3 //
// 3 //  },mouseenter: function() {
// 3 //    $('.simple-toggle-content').fadeToggle();
// 3 //  }
// 3 //  ,mouseleave: function() {
// 3 //    $('.simple-toggle-content').fadeOut();
// 3 //  }
// 3 // });

    //$('.simple-toggle').click(function(event){
    //     event.stopPropagation();
    //});

// 1 //  }
// 1 //  else {
// 1 //    $('.simple-toggle').hover(function(e){
// 1 //      e.preventDefault();
// 1 //        $('.simple-toggle-content').fadeToggle(1000);
// 1 //    });
// 1 //  }

//Test 2

//  $( "div.test" ).off({
//    click: function() {
//      $( this ).toggleClass( "active" );//$( this ).toggleClass( "active" );
//    }, click: function() {
//      $( this ).addClass( "inside" );
//    }, mouseleave: function() {
//      $( this ).removeClass( "inside" );
//    }
//  });

//Test 3

$( "div.test-2" ).on({
  click: function() {
    $( this ).toggleClass( "inside-2" );//$( this ).toggleClass( "active" );
  },mouseleave: function() {
    $( this ).removeClass( "inside-2" );
  }
});

//Test 4 slide div up and down

if($(window).width() <= 1024) {
  $( "div.test-3" ).on({
    click: function() {
      $( this ).toggleClass( "inside-3" );//.toggleClass( "inside-3" );
    },mouseleave: function() {
      $( this ).removeClass( "inside-3" );
    }
  });
 }
    else {
      $( "div.test-3" ).on({
        mouseenter: function() {
          $( this ).toggleClass( "inside-3" );//.toggleClass( "inside-3" );
        },mouseleave: function() {
          $( this ).removeClass( "inside-3" );
        }
      });
     }


//$( "div.test-3" ).on({
//  click: function() {
//    $( this ).toggleClass( "inside-3" );//.toggleClass( "inside-3" );
//  },mouseleave: function() {
//    $( this ).removeClass( "inside-3" );
//  }
//});
