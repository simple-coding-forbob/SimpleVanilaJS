$(function () {
  // isotope 설정하기: 1) product-box 를 isotope 대상으로 지정
    $('.quiz-box').isotope({
      // options
      itemSelector: '.quiz',
      layoutMode: 'fitRows',
      // filter: ".women"
    });

    // (*, .men, women) 3개 중에 1개의 li 를 클릭할 때
    $(".quiz-list > li").click(function () {
      $('.quiz-box').isotope({
        // this : 클릭한 li 를 의미함
        filter: $(this).attr("data-filter")
      });
    });
})