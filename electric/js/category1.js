// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('category1'));

//第一个柱状图数据类型分类
//X轴数据
var myX=["东南非区域","中西非区域","中东北非区域","欧亚区域","亚太区域","美洲区域"];
//柱状图数据
var myData=["100","80","90","120","72","40"];


// 指定图表的配置项和数据
myChart.setOption({
    title: {
        text: '各区域部2018年项目数据指示图 (单位:个)',
        orient: 'horizontal',
        x: '5%',
        y: 'top',
        top:'5%',
        textStyle:{
            color:'#c5daea',
            fontSize:14
        }
    },
    //backgroundColor: '#1d222a',
    tooltip: {
    },
    legend: {
        data: [{
            name:'新签合同总量'
        }],
        icon:'rect',
        itemWidth:13,
        itemHeight:13,
        orient: 'horizontal',
        x: '75%',
        y: 'top',
        top:'5%',
        textStyle:{
            color:'#75c991',
            fontSize:13
        }
    },
    xAxis: {
        axisLine: {   //X轴颜色
            //lineStyle:{
            //    color:'#577798',
            //    width:1
            //}
            show:false
        },
        splitLine:{
            //show:false,
            //textStyle: {
            //    color: '#577798' //坐标值得具体的颜色
            //}
        },
        data: myX,
        type : 'category',
        axisLabel: {
            show: true,
            textStyle: {
                color: '#627283',
                fontSize: 12
            }
            ,
            formatter : function(params){
                var newParamsName = "";
                var paramsNameNumber = params.length;
                var provideNumber = 4;
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                if (paramsNameNumber > provideNumber) {
                    for (var p = 0; p < rowNumber; p++) {
                        var tempStr = "";
                        var start = p * provideNumber;
                        var end = start + provideNumber;
                        if (p == rowNumber - 1) {
                            tempStr = params.substring(start, paramsNameNumber);
                        }
                        else {
                            tempStr = params.substring(start, end) + "\n";
                        }
                        newParamsName += tempStr;
                    } } else {
                    newParamsName = params;
                }
                return newParamsName
            }
        }
    },
    yAxis: {
        //data:['0','50','100','150','200']
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
    series: [{
        name: '新签合同总量',
        type: 'bar',
        barWidth: '20', //每个柱子宽度
        barCategoryGap: '30', //每个柱子的间隔
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                color:'#75c991'
            }
        },
        data: myData
    }]
});
