$(function () {
    eachProduct();
    // 单个商品添加
    $('#order .order-content .add').click(function () {
        //  修改数量
        var num = $(this).prev().find('input').val()
        num = parseInt(num) + 1;
        $(this).prev().find('input').val(num)
        //  修改小计
        var singlePrice = $(this).closest('.order-content').find('.single-price').html();
        singlePrice = parseFloat(singlePrice);
        var totalPrice = parseFloat(singlePrice * num).toFixed(2);
        $(this).closest('.order-content').find('.total-price').html(totalPrice);
        eachProduct()
    })
    // 单个商品减除
    $('#order .order-content .dec').click(function () {
        //  修改数量
        var num = $(this).next().find('input').val();
        num = parseInt(num) - 1;
        if (num < 1) {
            num = 1;
        }
        $(this).next().find('input').val(num);
        //  修改小计
        var singlePrice = $(this).closest('.order-content').find('.single-price').html();
        singlePrice = parseFloat(singlePrice);
        var totalPrice = parseFloat(singlePrice * num).toFixed(2);
        $(this).closest('.order-content').find('.total-price').html(totalPrice);
        eachProduct();
    })
    //  商品输入数量
    $("#order input[name='input-num']").focusout(function () {
        //   alert(1)
        var val = $(this).val();
        if (isNaN(val)) {
            $(this).siblings('span').show();
            $(this).val('1');
        } else {
            //  修改小计
            var singlePrice = $(this).closest('.order-content').find('.single-price').html();
            singlePrice = parseFloat(singlePrice);
            var totalPrice = parseFloat(singlePrice * val).toFixed(2);
            $(this).closest('.order-content').find('.total-price').html(totalPrice);
        }
        eachProduct()
    })
    $("#order input[name='input-num']").focusin(function () {
        $(this).siblings('span').hide();
    })
    // 单选和复选框
    $('#order .check-box .single-check').click(function () {
        var check=$(this).prop('checked')
        if(check){
            $(this).closest('.chgc').addClass('bgyellow');
        }else{
            $(this).closest('.chgc').removeClass('bgyellow');      
        }
        eachProduct()
        if(allcheck){
            console.log($("#order .all-check-box label"))
            $("#order .all-check-box label").addClass('bgyellow')
            $("#order input[name='all-check']").prop('checked', true);
        }else{
            $("#order .all-check-box label").removeClass('bgyellow')
            $("#order input[name='all-check']").prop('checked', false);
        }
    })
    $("#order input[name='all-check']").click(function () {
        var check = $(this).prop('checked');
        if (!check) {
            $("#order .chgc").removeClass('bgyellow')
            $("#order input[name='single-check']").prop('checked', check)
            $("#order input[name='all-check']").removeClass('bgyellow')
            $("#order input[name='all-check']").prop('checked', check);
        } else {
            $("#order .chgc").addClass('bgyellow')
            $("#order input[name='single-check']").prop('checked', check)
            $("#order input[name='ll-check']").addClass('bgyellow')
            $("#order input[name='all-check']").prop('checked', check);
        }
        eachProduct()
    })
    //遍历单个是否选中来改变全选
      var allcheck=true;
    // 遍历商品列表
    function eachProduct() {
        // 声明变量
        var nowcheck=true;
        var nownotcheck=false;
        var finalTotalCount = 0;
        var finalTotalPrice = 0;
        $('#order .order-content').each(function () {
            var checked = $(this).find("input[name='single-check']").prop('checked');
            if (checked) {
                var count = parseInt($(this).find("input[name='input-num']").val());
                var price = parseFloat($(this).find(".tp").html());
                finalTotalCount += count;
                finalTotalPrice += price;
                nowcheck=true;
            }
            else{
                nownotcheck=true;
            }
        })
        if(nowcheck&&!nownotcheck){
           allcheck=true
        }else{
            allcheck=false;
        }
        $("#order span.final-total-num").html(finalTotalCount);
        $("#order span.final-total-price").html(finalTotalPrice.toFixed(2));
    }
    // 删除商品
      $('#order .order-content .del').click(function(){
         $(this).closest('.order-content').remove();
         eachProduct();
      })
    //   删除选中商品
      $('#order .order-total .del-product').click(function(){
    //    遍历所有商品
        $('#order .order-content').each(function(){
            var check=$(this).find("input[name='single-check']").prop('checked')
            if(check){
                $(this).remove();
                eachProduct();
            }
        })
          }
      )
})