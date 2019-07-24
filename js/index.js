$(
    function () {
        // 二级菜单
        $('#mBanner .menu li').hover(function () {
            $('p', this).addClass('pactive');
            // $('dl', this).addClass('dactive');
            $('dl', this).fadeIn(300);
        }, function () {
            $('p', this).removeClass('pactive');
            // $('dl', this).removeClass('dactive');
            $('dl', this).hide();
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
        //Tab菜单切换函数
        function tabAlt(obj) {
            $(`${obj} .tabMenu li`).hover(
                $(this).mouseenter = function () {
                    $(this).addClass('currentTab').siblings().removeClass('currentTab');
                    let indx = $(this).index();
                    $(`${obj} .content>div:eq(${indx})`).show().siblings().hide();
                }
            )
        }
        // 调用轮播函数
        slideShow('#mBanner .banner')
        slideShow('#ebook .banner1')
        slideShow('#ebook .banner2')
        slideShow('#ebook .banner3')
        slideShow('#cloth .banner4')
        slideShow('#cloth .banner5')
        slideShow('#cloth .banner6')
        slideShow('#outdoor .banner7')
        slideShow('#outdoor .banner8')
        slideShow('#outdoor .banner9')
        slideShow('#child .banner10')
        slideShow('#child .banner11')
        slideShow('#child .banner12')
        tabAlt('#ebook');
        tabAlt('#cloth');
        tabAlt('#outdoor');
        tabAlt('#child');
        // tabAlt('#goods')
        //    图书推荐
        $('.ebookRight li').hover(
            $(this).mouseenter = function () {
                $('.ebookRight li .intro').hide();
                $('.intro', this).show();
                $('.ebookRight li .sub-intro').show();
                $('.sub-intro', this).hide();
            },
            $(this).mouseleave = function () {
                $('.ebookRight li .intro').hide();
                $('.ebookRight li:first .intro').show();
                $('.ebookRight li .sub-intro').show();
                $('.ebookRight li:first .sub-intro').hide();
            }
        )
        $('#goods .dotMenu li').hover(function () {
            var indx = $(this).index();
            $('#goods .goodsBox .currentCont').animate({
                'left': `-${indx * 100}%`
            }, 400)
            $(this).addClass('currentTab').siblings('li').removeClass('currentTab')
        })
        // 楼层按钮
        // 楼层导航交互
        var color = ['#ffdc0c', '#93d56f', '#f65824', '#ba9eee', "#fe7594", "#c2ed51", "#ff6700", "#fe1e00"]
        $("#floorNav li").hover(
            function () {
                var idx = $(this).index();
                $(this).css({
                    "background-color": `${color[idx]}`,
                    "background-position-x": "-40px",
                    "font-size":"14px"
                })
                $(this).animate({
                    'width': '40px'
                },100)
            },
            function () {
                var idx = $(this).index();
                $(this).css({
                    "background-color": `#fff`,
                    "background-position-x": "0",
                    "font-size":"0"
                })
                $(this).animate({
                    'width': '0'
                },100)
            }
        )
        // 楼层点击
        $("#floorNav li:not(:last)").click(function () {
            var inx = $(this).index();
            var height = $('.floor').eq(inx).offset().top;
            //    console.log(top1);
            $('html,body').stop(true).animate({
                "scrollTop": `${height}px`
            })
        })
        $("#floorNav li:last").click(function () {
            $('html,body').stop(true).animate({
                "scrollTop": `0px`
            })
        })
        // 右侧栏扫码
        $('#sideqCode').hover(function () {
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
        sideMove('#sideqCode', 1000, 0, true)
        sideMove('#floorNav', 1000, 1000, true)
        //    var bodyh=$('html,body').offset().top;
        // 窗口滚动
        // $(window).scroll(function(){
        //     var qCodeh=$('#sideqCode').offset().top;
        //     var bodyh=$('html,body').offset().top;
        //     var height=parseInt(bodyh-qCodeh);
        //     $('#sideqCode').animate(
        //         "scrollTop",`${height}`
        //     )
        // })
        // topBarmenu
        $(window).scroll(function () {
            // 窗口高度  
            var ch = $(window).height();
            var sTop = $('html,body').scrollTop();
            if (sTop >= 500) {
                $('.topBarmenu').stop(true).fadeIn(500);
            } else {
                $('.topBarmenu').stop(true).fadeOut(500);
            }
        })
    })
