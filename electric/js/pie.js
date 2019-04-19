var myChart3 = echarts.init(document.getElementById('pie'));
var option = {
    title: {
        text: '项目类型(单位:个)',
        // x 设置水平安放位置，默认左对齐，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
        x: 'center',
        // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
        y: 'top',
        // itemGap设置主副标题纵向间隔，单位px，默认为10，
        itemGap: 30,
        // 主标题文本样式设置
        orient: 'horizontal',
        x: '5%',
        y: 'top',
        top:'5%',
        textStyle:{
            color:'#c5daea',
            fontSize:16
        }
    },
    tooltip: {
        // trigger 设置触发类型，默认数据触发，可选值：'item' ¦ 'axis'
        trigger: 'item',
        showDelay: 20,   // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
        hideDelay: 20,   // 隐藏延迟，单位ms
        backgroundColor: 'rgba(0,0,0,0.5)',  // 提示框背景颜色
        textStyle: {
            fontSize: '16px',
            color: 'white'  // 设置文本颜色 默认#FFF
        },
        // formatter设置提示框显示内容
        // {a}指series.name  {b}指series.data的name
        // {c}指series.data的value  {d}%指这一部分占总数的百分比
        formatter: '{b} : {c}  ({d}%)'
    },
    color: ['#7dbced','#9399e2','#ccba8b','#cca18b','#83dfc3','#8bafcb','#7d83cb','#d7cdb4','#ebd0c2','#bdd8d0','#9fa6ac'],//各个区域颜色
    legend: {
        // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） ¦ 'vertical'（垂直）
        orient: 'vertical',
        // x 设置水平安放位置，默认全图居中，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
        x: '45%',
        // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
        y: 'center',
        icon:'circle',
        itemWidth: 14,   // 设置图例图形的宽
        itemHeight: 14,  // 设置图例图形的高
        // itemGap设置各个item之间的间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔
        itemGap: 20,
        data: ['电力工程','水利工程','公路','铁路','机场','港口航道','地铁','房建','市政','油气管道','其他'],
        formatter:function(name){
            var oa = option.series[0].data;
            var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value;
            for(var i = 0; i < option.series[0].data.length; i++){
                if(name==oa[i].name&&i<=5){
                    return name + '  :  ' + oa[i].value;
                }
                else if(name==oa[i].name&&i>5){
                    return name +' :  '+oa[i].value;
                    legend: {
                        x:'100%'
                    }
                }
            }
        },
        textStyle:{
            color: ['#7dbced','#9399e2','#ccba8b','#cca18b','#97bfb3','#7dbced','#9399e2','#ccba8b','#cca18b','#97bfb3','#7dbced'],//各个区域颜色
            fontSize:14
        }

    },
    graphic:{
        type:'text',
        left:'18%',
        top:'48%',
        style:{
            text:'64\n'+'项目总数', //使用“+”可以使每行文字居中
            textAlign:'center',
            font:'bolder 16px cursive',
            fill:'#c2dbee',
            fontSize:16,
            width:30,
            height:30
        }
    },
    series: [
        {
            name: '',
            type: 'pie',
            // radius: '50%',  // 设置饼状图大小，100%时，最大直径=整个图形的min(宽，高)
            center:['25%', '55%'],// 设置环形饼状图， 第一个百分数设置内圈大小，第二个百分数设置外圈大小
            radius: ['40%', '70%'], // 设置饼状图位置，第一个百分数调水平位置，第二个百分数调垂直位置
            data: [
                {value:32, name:'电力工程'},
                {value:15, name:'水利工程'},
                {value:15, name:'公路'},
                {value:6, name:'铁路'},
                {value:12, name:'机场'},
                {value:12, name:'港口航道'},
                {value:12, name:'地铁'},
                {value:12, name:'房建'},
                {value:12, name:'市政'},
                {value:12, name:'油气管道'},
                {value:12, name:'其他'}


            ],
            // itemStyle 设置饼状图扇形区域样式
            itemStyle: {
                // emphasis：英文意思是 强调;着重;（轮廓、图形等的）鲜明;突出，重读
                // emphasis：设置鼠标放到哪一块扇形上面的时候，扇形样式、阴影
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(30, 144, 255，0.5)'
                }
            },
            // 设置值域的那指向线
            labelLine: {
                normal: {
                    show: false   // show设置线是否显示，默认为true，可选值：true ¦ false
                }
            },
            // 设置值域的标签
            label: {
                show:false
            }
        }
    ]
};
myChart3.setOption(option)
