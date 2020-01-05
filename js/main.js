/* main.js */
$(function(){
    $('#main_gnb').mouseover(function(){
        $('#sub_gnb').slideDown();
    });
    $('section').mouseover(function(){
        $('#sub_gnb').slideUp();
    });

    $('.bx-slider').bxSlider({
        mode: 'fade', // 효과설정
        auto: true, // 자동재생
        easing: "ease-in-out", // 가속도(timing-function)
        pause: 5000, // 정지시간(대기)
        controls: false, // prev, next 표시/비표시
        pager: true, // 하단 인디케이터
        resopnsive: false,
    });
});