$('#serach_button_icon').on('click', function () {
  $('.input_box').toggleClass('active')
})

$('#filter_button, .ok_filter, .cancel_filter').on('click', function () {
  $('.filter_box').toggleClass('active');
})

$main_content = $(".main_content");
$sidebar_nav_content = $('.sidebar_nav_content');
$main_content.on('scroll' () => {

})
