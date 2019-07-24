$(function(){
    // 轮播
    $(".project-detail").slick({
        slidesToShow: 1,
        arrows:false,
        dots: true,
        asNavFor: '.project-strip',
        autoplay: true,
        autoplaySpeed: 2000
    });
    $(".project-strip").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.project-detail',
        dots: false,
        infinite: true,
        centerMode: true,
        focusOnSelect: true
    });
      // 右侧栏扫码
      $('.sideqCode').hover(function () {
        $('.qCode',this).stop(true).animate({
            'right': '139px'
        })
    }, function () {
        $('.qCode',this).stop(true).animate({
            'right': '-39px'
        })
    })
    // 对应位置显示侧导航
    //  $(window).scroll(function(){
    //       // 窗口高度  
    //      var ch=$(window).height();
    //      var sTop=$('html,body').scrollTop();
    //      if(sTop>1000){
    //          $('#floorNav').stop(true,false).fadeIn(500);
    //      }else{
    //         $('#floorNav').stop(true,false).fadeOut(500);
    //      }
    //  })
    //  ------------------------------------------------
    // 侧栏滚动函数 
    // obj：操作对象
    // speed：动画速度
    // height：指定高度显示
    // bool：是否垂直居中
    function sideMove(obj, speed, height, bool) {
        // 窗口高度  
        var ch = $(window).height();
        // 设置对象属性为absolute
        $(obj).css('position', 'absolute');
        var th = 0
        // 设置对象垂直居中
        if (bool) {
            // 获取对象高度
            var dh = $(obj).css('height');
            th = parseInt((ch - parseInt(dh)) / 2);
            $(obj).css('top', `${th}px`);
        } else {
            th = parseInt($(obj).css('top'));
        }
        // 初始非页头时
        (function init(obj, speed) {
            var sth = $('html,body').scrollTop();
            $(obj).stop(true, false).animate({
                'top': `${th + sth}px`
            }, speed)
        })(obj, speed)
        $(window).scroll(function () {
            var sth = $('html,body').scrollTop();
            if (sth >= height) {
                $(obj).stop(true, false).fadeIn(500).animate({
                    'top': `${th + sth}px`
                }, speed)
            } else {
                $(obj).stop(true, false).fadeOut(500);
            }
        })
    }
    // 二维码上下滚动
    sideMove('.sideqCode', 1000, 0, true)
    // 返回顶部
    $(window).scroll(function(){
           var sTop=$(this).scrollTop();
           if(sTop>1000){
            $('.toTop').fadeIn(300)
           }else{
            $('.toTop').fadeOut(300)
           }
    })
    $('.toTop').click(function () {
        $('html,body').animate({
            'scrollTop': 0
        }, 1000)
    })
})