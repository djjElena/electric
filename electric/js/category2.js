//1.创建一个echarts对象
var mychart2=echarts.init(document.getElementById("category2"));

//第二个柱状图数据类型分类

//X轴数据
var myXaxis=["2014","2015","2016","2017","2018(年)"];
//柱状图数据
var myData=[
    {name:"美洲",value:[55,55,55,55,55],color:'#ad9bb4'},
    {name:"欧亚",value:[90,90,90,90,90],color: '#ccba8b'},
    {name:"中东北非",value:[90,90,90,90,90],color: '#97bfb3'},
    {name:"中西非",value:[90,90,90,90,90],color: '#adb1e5'},
    {name:"东南非",value:[75,75,75,75,75],color: '#adc2e5'},
    {name:"亚太",value:[90,90,90,90,90],color: '#cca18b'},
];
//折线图数据
var myLine=[110,110,160,155,155];


//2.创建一个配置项对象
var option2={
    title:{
        text:"各区域部近五年项目合同总额 (单位：亿美元)",
        show:true,
        orient: 'horizontal',
        x: '3%',
        y: 'top',
        top:'5%',
        textStyle:{
            color:'#c5daea',
            fontSize:16
        }
    },
    tooltip: {
        trigger:'item',
        formatter: function (params) {
            //var color = params.color;//图例颜色
            var htmlStr ='<div>';
            //为了保证和原来的效果一样，这里自己实现了一个点的效果
            htmlStr += '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;"></span>';
            //添加一个汉字，这里你可以格式你的数字或者自定义文本内容
            htmlStr += params.seriesName + '：'+params.value;
            htmlStr += '</div>';
            return htmlStr;
        }
    },
    legend: {
        data: [
            {
                name:myData[0].name,
                textStyle:{
                    color:'#ad9bb4',
                    fontSize:13
                }
            },
            {
                name:myData[1].name,
                textStyle:{
                    color:'#ccba8b',
                    fontSize:13
                }
            },
            {
                name:myData[2].name,
                textStyle:{
                    color:'#97bfb3',
                    fontSize:13
                }
            },
            {
                name:myData[3].name,
                textStyle:{
                    color:'#adb1e5',
                    fontSize:13
                }
            },
            {
                name:myData[4].name,
                textStyle:{
                    color:'#adc2e5',
                    fontSize:13
                }
            },
            {
                name:myData[5].name,
                textStyle:{
                    color:'#cca18b',
                    fontSize:13
                }
            }
        ],
        icon:'rect',
        itemWidth:10,
        itemHeight:10,
        orient: 'horizontal',
        x: '53%',
        y: 'top',
        top:'5%'
    },
    xAxis:{
        axisLine: {   //X轴颜色
            show:false
        },
        data:myXaxis,
        type : 'category',
        axisLabel: {
            show: true,
            textStyle: {
                color: '#627283'
            }
        }
    },
    yAxis:{
        axisLine: {show:false},
        axisTick: {show:false},
        type:'value',
        scale:true,
        max:200,
        min:0,
        splitNumber:5,
        name : '%',
        axisLabel : {
            formatter: '{value}',
            textStyle: {
                color: '#627283'
            }
        },
        splitLine:{
            show:true,
            lineStyle:{
                color:'#577798',
                width:1,
                type:'solid'
            }
        }
    },
    series:[//数据源
        {
            name:myData[0].name,
            type:"bar",
            barWidth: '8', //每个柱子宽度
            barCategoryGap: '5', //每个柱子的间隔
            data:myData[0].value,
            itemStyle:{ normal:{  color:myData[0].color  } }
        },
        {
            name:myData[1].name,
            type:"bar",
            barWidth: '8', //每个柱子宽度
            barCategoryGap: '5', //每个柱子的间隔
            data:myData[1].value,
            itemStyle:{ normal:{  color:myData[1].color  } }
        },
        {
            name:myData[2].name,
            type:"bar",
            barWidth: '8', //每个柱子宽度
            barCategoryGap: '5', //每个柱子的间隔
            data:myData[2].value,
            itemStyle:{ normal:{  color:myData[2].color  } }
        },
        {
            name:myData[3].name,
            type:"bar",
            barWidth: '8', //每个柱子宽度
            barCategoryGap: '5', //每个柱子的间隔
            data:myData[3].value,
            itemStyle:{ normal:{  color:myData[3].color  } }
        },
        {
            name:myData[4].name,
            type:"bar",
            barWidth: '8', //每个柱子宽度
            barCategoryGap: '5', //每个柱子的间隔
            data:myData[4].value,
            itemStyle:{ normal:{  color:myData[4].color  } }
        },
        {
            name:myData[5].name,
            type:"bar",
            barWidth: '8', //每个柱子宽度
            barCategoryGap: '5', //每个柱子的间隔
            data:myData[5].value,
            itemStyle:{ normal:{  color:myData[5].color } }
        }
        //,
        //{
        //    name:"折线图 ",
        //    type:"line",
        //    data:myLine,
        //    itemStyle:{ normal:{  color:'#f2e287'  } },
        //    tooltip:{
        //        trigger:'item',
        //        formatter: function (params) {
        //            //var color = params.color;//图例颜色
        //            var htmlStr ='<div>';
        //            //为了保证和原来的效果一样，这里自己实现了一个点的效果
        //            htmlStr += '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;"></span>';
        //            //添加一个汉字，这里你可以格式你的数字或者自定义文本内容
        //            htmlStr += '总额' + '：'+params.value;
        //            htmlStr += '</div>';
        //            return htmlStr;
        //        }
        //    }
        //}
    ]
};
//3.将配置项添加到echarts对象中
mychart2.setOption(option2);
// // 实现动画
// $('.right-content').on('click', function (event) {
//     $('.category').addClass('categoryActive');
//     $('.show-chart').addClass('show-chartActive');
//     $('.left-content').addClass('left-contentActive');
// })
$('.qy').each(function(i){
    $(this).on('click', function(key,value){
        option2.series = [
            {
                name:myData[i].name,
                type:"bar",
                barWidth: '8', //每个柱子宽度
                barCategoryGap: '5', //每个柱子的间隔
                data:myData[i].value,
                itemStyle:{ normal:{  color:myData[i].color  } }
            },
            {
                name:"折线图 ",
                type:"line",
                data:myData[i].value,
                itemStyle:{ normal:{  color:'#f2e287'  } },
                tooltip:{
                    trigger:'item',
                    formatter: function (params) {
                        //var color = params.color;//图例颜色
                        var htmlStr ='<div>';
                        //为了保证和原来的效果一样，这里自己实现了一个点的效果
                        htmlStr += '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;"></span>';
                        //添加一个汉字，这里你可以格式你的数字或者自定义文本内容
                        htmlStr += '总额' + '：'+params.value;
                        htmlStr += '</div>';
                        return htmlStr;
                    }
                }
            }
        ];
        mychart2.clear()
        mychart2.setOption(option2);
    })
})
$('.count').on('click',function(e){
    option2.series=[//数据源
        {
            name:myData[0].name,
            type:"bar",
            barWidth: '8', //每个柱子宽度
            barCategoryGap: '5', //每个柱子的间隔
            data:myData[0].value,
            itemStyle:{ normal:{  color:myData[0].color  } }
        },
        {
            name:myData[1].name,
            type:"bar",
            barWidth: '8', //每个柱子宽度
            barCategoryGap: '5', //每个柱子的间隔
            data:myData[1].value,
            itemStyle:{ normal:{  color:myData[1].color  } }
        },
        {
            name:myData[2].name,
            type:"bar",
            barWidth: '8', //每个柱子宽度
            barCategoryGap: '5', //每个柱子的间隔
            data:myData[2].value,
            itemStyle:{ normal:{  color:myData[2].color  } }
        },
        {
            name:myData[3].name,
            type:"bar",
            barWidth: '8', //每个柱子宽度
            barCategoryGap: '5', //每个柱子的间隔
            data:myData[3].value,
            itemStyle:{ normal:{  color:myData[3].color  } }
        },
        {
            name:myData[4].name,
            type:"bar",
            barWidth: '8', //每个柱子宽度
            barCategoryGap: '5', //每个柱子的间隔
            data:myData[4].value,
            itemStyle:{ normal:{  color:myData[4].color  } }
        },
        {
            name:myData[5].name,
            type:"bar",
            barWidth: '8', //每个柱子宽度
            barCategoryGap: '5', //每个柱子的间隔
            data:myData[5].value,
            itemStyle:{ normal:{  color:myData[5].color } }
        }
    ];
    mychart2.setOption(option2);
})