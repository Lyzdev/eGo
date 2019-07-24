$(function(){
    // 表单部分
    $("#regForm input[class='fal-inpt']").on('input',function(){
        var len=$(this).val().length;
        if(len>0){
        $(this).siblings('.fals').show()
        }else{
         $(this).siblings('.fals').hide()
        }
    })
    $('.fals').click(function(){
        $(this).siblings('input').val('');
        $(this).hide();
    })
    $('.proto span').click(function(){
        console.log(1000)
        $('.radio-box').toggleClass('bgyellow');
    })
    // 获取验证码倒计时
       $('#regForm .getc-btn').click(function(){
            let second=60;
            $(this).html('60 s');
            $(this).prop('disabled',true)
           var timer=setInterval(function(){
               second--;
               if(second<0){
                $('#regForm .getc-btn').prop('disabled',false);
                $('#regForm .getc-btn').html('再次获取验证码');
                   clearInterval(timer);
               }else{
                   var str=`${second} s`
                   console.log(str)
                   $('#regForm .getc-btn').html(str);
               }
           }, 1000);
       })
    //    验证码
      $('#regForm .checkCode').click(function(){
          var str=randomWord(false,4);
          $(this).html(str);
      })
    // 随机码产生
       function randomWord(flag,min,max){
           var str='';
           var range=min;
           var arr=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
           if(flag){
               range=Math.round(Math.random()*(max-min))+min;
           }
           for(var i=0;i<range;i++){
               var j=Math.floor(Math.random()*62);
               str+=arr[j];
           }
           return str;
       }
})