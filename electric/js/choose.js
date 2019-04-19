$(function(){
    /*全选*/
    $('table thead').on('click','input[type=checkbox]',function () {
        if ($(this).prop('checked') == true) {
            //全选
            $('table tbody input[type=checkbox]').prop('checked',true);
        }else{
            //取消全选
            $('table tbody input[type=checkbox]').prop('checked',false);
        }
    });
    /*单选*/
    $('table tbody').on('click','input[type=checkbox]',function () {
        if ($(this).prop('checked') == true){
            if (ifall()) {
                //个数判断通过 全选
                $('table thead input[type=checkbox]').prop('checked',true);
            }
        }else{
            //取消全选
            $('table thead input[type=checkbox]').prop('checked',false  );
        }
    });
    //点击单选，全选判断
    function ifall() {
        //被选中的个数=总个数
        var num1 = $('table tbody input[type=checkbox]').length;
        var num2 = $("table tbody input[type='checkbox']:checked").length;
        if (num1 == num2) {
            return true;
        }
    }
    /*订单日期选择*/
    var startDate=laydate.render({
        elem: '#dat01'
        /*,showBottom: false*/ // 底部按钮
        ,theme: '#034c6a'     //主体颜色
        ,calendar: true//公历节日
        ,max:maxDate()
        ,done:function(value,date){
            if(value!=""){
                date.month=date.month-1;
                endDate.config.min=date;
            }else{
                endDate.config.min=startDate.config.min;
            }
        }

    });
    function maxDate(){
        var now = new Date();
        return now.getFullYear()+"-" + (now.getMonth()+1) + "-" + now.getDate();
    }
    var endDate=laydate.render({
        elem: '#dat02'
        /*,showBottom: false*/ // 底部按钮
        ,theme: '#034c6a'    //主体颜色
        ,calendar: true//公历节日
        ,max:maxDate()
        ,done:function(value,date){
            if(value!=""){
                date.month=date.month-1;
                startDate.config.max=date;
            }else{
                startDate.config.max=endDate.config.max;
            }
        }
    });
    /*优惠券日期*/
    var startDate02=laydate.render({
        elem: '#dat03'
        /*,showBottom: false*/ // 底部按钮
        ,theme: '#034c6a'     //主体颜色
        ,calendar: true//公历节日
        ,done:function(value,date){
            if(value!=""){
                date.month=date.month-1;
                endDate02.config.min=date;
            }else{
                endDate02.config.min=startDate02.config.min;
            }
        }
    });
    var endDate02=laydate.render({
        elem: '#dat04'
        /*,showBottom: false*/ // 底部按钮
        ,theme: '#034c6a'    //主体颜色
        ,calendar: true//公历节日
        ,done:function(value,date){
            if(value!=""){
                date.month=date.month-1;
                startDate02.config.max=date;
            }else{
                startDate02.config.max=endDate02.config.max;
            }
        }
    });
    /*排序按钮*/
    $('.biao table i').on('click',function(){
        if($(this).attr('class')!='on'){
            $(this).addClass('on');
        } else{
            $(this).removeClass('on');
        }
    });
    /*添加按钮*/
    $('.btn-tj').on('click',function(){
        $('.tj-mb').fadeIn();
    });
    $('.tj-close').on('click',function(){
        $('.tj-mb').fadeOut();
    });
    /*删除按钮*/
    $('.btn-rem').on('click',function(){
        $(".me-tb tbody input[type='checkbox']:checked").parents('tr').remove();
    });
    /*更多条件*/
    $('.dd-gd a').on('click',function(){
        if($(this).attr('class')!='btn btn-more on'){
            $(this).addClass('on');
            $(this).text('收起');
            $('.dd-sou ul').css('height','auto');
        }else{
            $(this).removeClass('on');
            $(this).text('更多条件');
            $('.dd-sou ul').css('height','24px');
        }
    })
    /*查看更多*/
    $('.dd-list li b').on('click',function(){
        if($(this).attr('class')!='on'){
            $(this).addClass('on');
            $(this).text('收起');

            var el = $(this).prev();
            var curHeight = el.height();
            var  autoHeight = el.css('height', 'auto').height()+20;
            el.height(curHeight).animate({height: autoHeight}, 200);
        }else{
            $(this).removeClass('on');
            $(this).text('查看更多');
            $(this).prev().animate({'height':100},200);
        }
    })
})