$(function () {
    // 切换
    $('#login-box .login-tab li').click(function(){
        var index=$(this).index();
        $(this).addClass('currentTab').siblings('li').removeClass('currentTab');
        $('#login-box .dialog-box>div').eq(index).show().siblings('div').hide();
    })
    // 表单部分
    $('.userName,.pwd').on('input',function(){
        var len=$(this).val().length;
        if(len>0){
        $(this).siblings('.fals').show()
        }else{
         $(this).siblings('.fals').hide()
        }
    })
    //    $('.userName,.pwd').keypress(function(){
    //        var len=$(this).val().length;
    //        if(len>0){
    //        $(this).siblings('.fals').show()
    //        }else{
    //         $(this).siblings('.fals').hide()
    //        }
    //    })
       $('.fals').click(function(){
           $(this).siblings('input').val('');
           $(this).hide();
       })
       $('.radioli span,.radio-box').click(function(){
           $('.radio-box').toggleClass('bgyellow');
       })
    // 手机扫码部分
    $('#login-box .login-qcode').hover(function () {
        $(this).stop(true).animate({
            'left': '29px'
        },function(){
            $('#login-box .phone').fadeIn(600)
        })
    }, function () {
        $(this).stop(true).animate({
            'left': '101px'
        },function(){
            $('#login-box .phone').fadeOut(600)
        })
    })
})