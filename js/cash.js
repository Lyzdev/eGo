$(function(){
    $('.price').html('0.00');
     var price=localStorage.getItem('price')
     if(price){
        price=parseFloat(price);
        $('.price').html(price);
        localStorage.clear('price');
     }
    // 银行卡选中背景效果  
     $('.pay-choice .card').click(function(){
     $(this).toggleClass('click-bg').siblings('.card').removeClass('click-bg');
 })
 // 支付倒计时
     var time=86400;
        function countDown(){
            $('.countDown').html('24 时 00 分 00 秒');
            $('.countDown').timer=setInterval(function(){
                time--;
                var hour=Math.floor(time/60/60); if(hour<10){hour='0'+hour}
                var min=Math.floor(time/60%60); if(min<10){min='0'+min}
                var sec=Math.floor(time%60);if(sec<10){sec='0'+sec}
                var str=`${hour} 时 ${min} 分 ${sec} 秒`;
                $('.countDown').html(str);
                if(time==0){
                    clearInterval( $('.countDown').timer)
                }
                console.log(hour,min,sec);
            },1000)
        }
        countDown()
    // console.log(Math.floor(86399/60/60));
})