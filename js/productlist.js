$(
    function () {
        // $('#slider').nivoSlider();
        //    搜索框二级菜单
        $('#logoNav .lmenubox').hover(function () {
            $('#logoNav .menu').stop(true, false).slideDown(500);
        }, function () {
            $('#logoNav .menu').stop(true, false).slideUp(500);
        }
        )
        // 二级菜单
        $('.menu li').hover(function () {
            $('p', this).addClass('pactive');
            $('dl', this).addClass('dactive');
        }, function () {
            $('p', this).removeClass('pactive');
            $('dl', this).removeClass('dactive');
        })
        // 轮播插件函数
        function slideShow(obj) {
            carousel(
                //必选， 要轮播模块(id/class/tagname均可)，必须为jQuery元素
                $(obj),
                {
                    type: 'fade',	//可选，默认左右(leftright) - 'leftright' / 'updown' / 'fade' (左右/上下/渐隐渐现)
                    arrowtype: 'move',	//可选，默认一直显示 - 'move' / 'none'	(鼠标移上显示 / 不显示 )
                    autoplay: true,	//可选，默认true - true / false (开启轮播/关闭轮播)
                    time: 3000	//可选，默认3000
                }
            );
        }
        // 调用轮播函数
        slideShow('#mBanner .banner');
        //    新书推荐
        $('.bookSort li').hover(
            $(this).mouseenter = function () {
                $('.bookSort li .intro').hide();
                $('.intro', this).show();
                $('.bookSort li .sub-intro').show();
                $('.sub-intro', this).hide();
            },
            $(this).mouseleave = function () {
                $('.bookSort li .intro').hide();
                $('.bookSort li:first .intro').show();
                $('.bookSort li .sub-intro').show();
                $('.bookSort li:first .sub-intro').hide();
            }
        )
        $('.right-box li').hover(
            $(this).mouseenter = function () {
                $('.right-box li .intro').hide();
                $('.intro', this).show();
                $('.right-box li .sub-intro').show();
                $('.sub-intro', this).hide();
            },
            $(this).mouseleave = function () {
                $('.right-box li .intro').hide();
                $('.right-box li:first .intro').show();
                $('.right-box li .sub-intro').show();
                $('.right-box li:first .sub-intro').hide();
            }
        )
        //   独家提供部分
        let count = 0;
        // 顶部tab
        $(`#excl .tabMenu li`).hover(function () {
            let index = $(this).index();
            count = index;
            $(this).addClass('currentTab').siblings('li').removeClass('currentTab');
            $(`#excl  .pb-carousel-ind li:eq(${count})`).addClass('pb-this').siblings('li').removeClass('pb-this');
            $('#excl .contentbox').css({
                left: `-${count * 100}%`
            })
        })
        console.log('使用左右键前' + count);
        // 左边按钮
        $('#excl .content .right-ex-btn').click(function () {
            count += 1;
            if (count > 6) { count = 6 };
            // alert(count);
            $(`#excl  .pb-carousel-ind li:eq(${count})`).addClass('pb-this').siblings('li').removeClass('pb-this');
            $('#excl .tabMenu li').eq(count).addClass('currentTab').siblings('li').removeClass('currentTab')
            $('#excl .contentbox').css({
                left: `-${count * 100}%`
            })
            console.log('使用左键后' + count);
        })
        // 右边按钮
        $('#excl .content .left-ex-btn').click(function () {
            count -= 1;
            if (count < 0) { count = 0 }
            console.log('rclick' + count);
            $(`#excl  .pb-carousel-ind li:eq(${count})`).addClass('pb-this').siblings('li').removeClass('pb-this');
            $('#excl .tabMenu li').eq(count).addClass('currentTab').siblings('li').removeClass('currentTab')
            $('#excl .contentbox').css({
                left: `-${count * 100}%`
            })
            console.log('使用右键后' + count);
        })
        console.log('使用左右键后' + count);
        // 底部按钮
        $(`#excl  .pb-carousel-ind li`).hover(function () {
            var index = $(this).index();
            count = index;
            $(this).addClass('pb-this').siblings('li').removeClass('pb-this');
            $('#excl .tabMenu li').eq(count).addClass('currentTab').siblings('li').removeClass('currentTab')
            $('#excl .contentbox').css({
                left: `-${count * 100}%`
            })
        })
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
        // topBarmenu
        $(window).scroll(function () {
            // 窗口高度  
            var ch = $(window).height();
            var sTop = $('html,body').scrollTop();
            if (sTop >= 1000) {
                $('.topBarmenu').stop(true).fadeIn(500);
                $('.toTop').stop(true).show()
            } else {
                $('.topBarmenu').stop(true).fadeOut(500);
                $('.toTop').stop(true).fadeOut(500)
            }
        })
        // 返回顶部
        $('.toTop').click(function () {
            $('html,body').animate({
                'scrollTop': 0
            }, 1000)
        })
    }
)