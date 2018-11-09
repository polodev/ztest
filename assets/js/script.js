$('#serach_button_icon').on('click', function () {
  $('.input_box').toggleClass('active')
})

$('#filter_button, .ok_filter, .cancel_filter').on('click', function () {
  $('.filter_box').toggleClass('active');
})
$('#info_plus').on('click', function () {
  $('.sidebar_info_box').toggleClass('active');
});

$sidebar_nav_content = $('.sidebar_nav_content');
$(window).scroll(function (event) {
    var st = $(window).scrollTop();
    var headerH = 115;
    var $svc = $('.sidebar_nav_content');
    var wh = $(window).height();
    var main_content_height = $('.main_content').height();
    console.log('main_content_height', main_content_height);
    var svch = $svc.height();
    console.log('wh', wh)
    console.log('svch', svch)
    var total_svc_height = svch - (wh  + headerH);
    console.log('total_svc_height', total_svc_height)
    console.log('st', st);
    if (st < total_svc_height ) {
      $svc.css('top', -st);
    }
    if (st > main_content_height) {
      $svc.css('top', -st);
    }
});
