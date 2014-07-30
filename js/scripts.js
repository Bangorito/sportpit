/* selectbox */
(function($) {
  $(function() {
  $('select').selectbox();
})
})(jQuery)

/* sliders */
$(function(){
  $("#slides").slides(); // контейнер с элементами слайдера
  $("#slides2").slides({generatePagination: false}); // контейнер с элементами слайдера
});

/* tabs */
$(function() {
  $('.i-tab .i-tabItem:first').addClass ('active');
  $('.tab-content .tab-contentItem:first').css ('display', 'block');
  $('.i-tab').delegate('.i-tabItem:not(.active)', 'click', function() {
    $(this).addClass('active').siblings().removeClass('active')
      .parents('.tabs').find('.tab-content .tab-contentItem').hide()
      .eq($(this).index()).fadeIn('slow');
      return false;
  })
})

/* fancybox */
$(function() {
  $('.fancybox').fancybox();
});

/* modal */
$(function() {

//When you click on a link with class of poplight and the href starts with a #
$('a.poplight[href^=#]').click(function() {
    var popID = $(this).attr('rel'); //Get Popup Name
    var popURL = $(this).attr('href'); //Get Popup href to define size

    //Pull Query & Variables from href URL
    var query= popURL.split('?');
    var dim= query[1].split('&');
    var popWidth = dim[0].split('=')[1]; //Gets the first query string value

    //Fade in the Popup and add close button
    $('#' + popID).fadeIn().css({ 'width': Number( popWidth ) }).prepend('<a href="#" class="close"><img src="close_pop.png" class="btn_close" title="Close Window" alt="Close" /></a>');


    //Define margin for center alignment (vertical   horizontal) - we add 80px to the height/width to accomodate for the padding  and border width defined in the css
    var popMargTop = ($('#' + popID).height() + 80) / 2;
    var popMargLeft = ($('#' + popID).width() + 80) / 2;

    //Apply Margin to Popup
    $('#' + popID).css({
        'margin-top' : -popMargTop,
        'margin-left' : -popMargLeft
    });
    //Fade in Background
    $('body').append('<div id="fade"></div>'); //Add the fade layer to bottom of the body tag.
    var subject = $(this).parent().parent().parent().parent().find('.pageTitle').html();

    $('.popup_block2 input[name=voprosik2]').val(subject);
    $('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn(); //Fade in the fade layer - .css({'filter' : 'alpha(opacity=80)'}) is used to fix the IE Bug on fading transparencies
    return false;


});





var closeModal = function() { //When clicking on the close or fade layer...
    $('#fade , .popup_block').fadeOut(function() {
        $('#fade').remove();  //fade them both out
    });
    return false;
}

$('#popup_name').on('click', '.close', closeModal);
$('body').on('click', '#fade', closeModal);





});
