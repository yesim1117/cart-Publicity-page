
// 初始化fullpage组件
$(() => {
  $('.container').fullpage({
    // 配合参数
    verticalCentered: false,
    sectionsColor: ['#fadd67', '#84a2d4', '#ef674d', '#ffeedd', '#d04759', '#84d9ed', '#8ac060'],
    scrollingSpeed: 1000,
    navigation: true,
    // continuousVertical: true,
    afterLoad: (anchorLink, index) => {
      $('.section').eq(index-1).addClass('now')
    },
    onLeave: (index, nextIndex, direction) => {
      var currentSection = $('.section').eq(index-1);
      if (index == 2 && nextIndex == 3) {
        currentSection.addClass('leaved');
      }else if (index == 3 && nextIndex == 4) {
        currentSection.addClass('leaved');
      }else if (index == 5 && nextIndex == 6) {
        currentSection.addClass('leaved');
        $('.screen06 .box').addClass('show');
      }else if (index == 6 && nextIndex == 7) {
        $('.screen07 .star img').each(function (i, item) {
          $( $(this)).delay(i*0.35*1000).fadeIn();
        })
        $('.screen07 .text').addClass('show');
      }
    },
    // 页面结构生成后的回调函数，或者说页面初始化完成后的回调函数
    afterRender: () => {
      // 点击更多切换下一页 
      $('.more').on('click', () => {
        $.fn.fullpage.moveSectionDown();
      });
      // $('.again').on('click', () => {
      //   $.fn.fullpage.moveTo(1);
      // });


      // 当第四屏的购物车动画结束后执行收货地址动画
      $('.screen04 .cartWrap').on('transitionend', () => {
        $('.screen04 .address').show().find('img:last').fadeIn(1000);
        $('.screen04 .text').addClass('show');
      })

      // 第八屏功能
      $('.screen08').on('mousemove', function(e) {
        // 鼠标
        $(this).find('.hand').css({
          left: e.clientX - 250,
          top: e.clientY - 160
        })
      }).find('.again').on('click', function() {
          // 调回第一页
          $.fn.fullpage.moveTo(1);
          // 重置加过类属性
          $('.now').removeClass('now');
          $('.leaved').removeClass('leaved');
          $('.show').removeClass('show');
          // 重置style css属性
          $('.content [style]').removeAttr('style');
        });
    }
  });
});