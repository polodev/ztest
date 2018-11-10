/*
showing and hiding search box
 */
$('#serach_button_icon').on('click', function () {
  $('.input_box').toggleClass('active')
})

/**
 * showing and hiding filter box in category page
 */

$('#filter_button, .ok_filter, .cancel_filter').on('click', function () {
  $('.filter_box').toggleClass('active');
})

/**
 * showing and hiding info_plus in category page sidebar
 */

$('#info_plus').on('click', function () {
  $('.sidebar_info_box').toggleClass('active');
});


/**
 * scroll sidebar accordance scrolling
 */

/*
var lastScrollTop = 0;
var windowHeight = $(window).height();
var viewable_height = windowHeight/2;
var main_content_height = $('.main_content').height();
var $svc = $('.sidebar_nav_content')
var sidebar_nav_content_height = $svc.height();
var stableHeight = sidebar_nav_content_height - viewable_height;
$(window).scroll(function (event) {
  var sto = $(this).scrollTop();
  var st = $(window).scrollTop();

 if (sto > lastScrollTop){
    stableHeight = sidebar_nav_content_height - viewable_height;
    console.log('downscroll');
    if (st < stableHeight  ) {
      $svc.css('top', -st);
    }
    if (st > main_content_height ) {
      $svc.css('top', -st);
    }
    console.log('st', st)
    console.log('main_content_height', main_content_height)
 } else {
    console.log('upscroll');
    console.log('stableHeight', stableHeight);
    console.log('st', stableHeight);
    stableHeight = (st > 0 && stableHeight > 0) ? (stableHeight - 4) : 0;
    $svc.css('top', -( (st > 0 && stableHeight > 0) ? stableHeight-- : 0));

   }
   lastScrollTop = sto;
});
*/



/**
 * [Its saved my day - it took me about 3h of work but nothing seems work. This plugin helped me]
 * @type {StickySidebar}
 */
var stickySidebar = new StickySidebar('#sidebar_nav', {
    topSpacing: 115,
    bottomSpacing: 20,
    leftSpacing: 20,
    containerSelector: '.main',
    innerWrapperSelector: '.sidebar_nav_content'
});





















