$('#serach_button_icon').on('click', function () {
  $('.input_box').toggleClass('active')
})

$('#filter_button, .ok_filter, .cancel_filter').on('click', function () {
  $('.filter_box').toggleClass('active');
})
$('#info_plus').on('click', function () {
  $('.sidebar_info_box').toggleClass('active');
});

$(window).scroll(function (event) {
    var st = $(window).scrollTop();
    var viewable_height = 400;
    var windowHeight = $(window).height();
    var main_content_height = $('.main_content').height();
    var $svc = $('.sidebar_nav_content')
    var sidebar_nav_content_height = $svc.height();
    var stableHeight = sidebar_nav_content_height - viewable_height;
    console.log('stableHeight', stableHeight)
    console.log('sidebar_nav_content_height', sidebar_nav_content_height)
    console.log('windowHeight', windowHeight)
    console.log('st', st);
    console.log('footer offset', $('footer').offset())
    if (st < stableHeight  ) {
      $svc.css('top', -st);
    } else if (st > main_content_height) {
      $svc.css('top', -st);
    } else if (st < main_content_height) {
      $svc.css('top', -stableHeight);
    }

});
