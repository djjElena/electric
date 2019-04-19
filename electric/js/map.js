var mapChart = echarts.init(document.getElementById('tz-map'));
//样式调整请参考  http://echarts.baidu.com/option.html#geo.emphasis.label.show
/*数据类型分类*/
var myData = [
    {name:'美国洛杉矶',value: [-118.24311, 34.052713,120]},
    {name:'香港邦泰',value:[114.195466, 22.282751,120]},
    {name:'英国曼彻斯特',value:[-1.657222, 51.886863,120]},
    {name:'德国汉堡',value:[10.01959, 54.38474,120]},
    {name:'俄罗斯',value:[89.116876, 67.757906,120]},
    {name:'巴西',value:[-48.678945, -10.493623,120]}
];
//var mydata=[
//    {name:'美洲',value:[120]},
//    {name:'东南非',value:[120]},
//    {name:'中西非',value:[120]},
//    {name:'中东北非',value:[120]},
//    {name:'欧亚',value:[120]},
//    {name:'亚太',value:[120]}
//]
// mapChart的配置
var option7 = {
    geo: {
        map: 'world',
        roam:true,//是否开启平移或者缩放
        zoom:1,//当前视角的缩放比例。
        itemStyle: {					// 定义样式
            normal: {					// 普通状态下的样式
                areaColor: 'transparent',
                borderColor: '#929bb0'
            },
            emphasis: {			// 高亮状态下的样式
                areaColor: '#4b6faa'
            }
        },
        emphasis:{
            label:{
                show:false//关闭高亮  可开启
            },
            itemStyle:{
                areaColor: 'transparent'//关闭高亮  可开启
            }
        }
    },
    backgroundColor: 'transparent',
    series: [

        {
            name: '数据',
            type: 'map',
            mapType: 'world',
            roam: true,
            label: {
                normal: {
                    show: false //省份名称或者国家显示
                },
                emphasis: {
                    show: true
                }
            }
            //,
            //data:mydata  //数据
        }
    ],
    tooltip : {
        trigger: 'item' ,//数据弹出提示
        position:'right',
        textStyle:{
            fontSize:16,
            margin:30
        },
        formatter: function(data) {
            return "<i></i> <span>"+data.name + "</span><br>"+ "<span> 地址 ："+ data.value[2]+"</span><br>"+"<span>电话 ："+ data.value[2]+"</span><br>"
                +"<span>邮箱 ："+ data.value[2]+"<span><br>"+"<span>传真 ："+ data.value[2]+"</span> <i></i>";
        }
    },
    legend: {
        orient: 'vertical',
        y: 'bottom',
        x: 'left',
        data: myData.name,
        textStyle: {
            color: '#fff'
        }
    }
    /*
     配置值域
     visualMap: {
     type: 'continuous', // 连续型
     min: 0,       		// 值域最小值，必须参数
     max: 200,			// 值域最大值，必须参数
     calculable: true,	// 是否启用值域漫游
     inRange: {
     color: ['#50a3ba','#eac736','#d94e5d']
     // 指定数值从低到高时的颜色变化
     },
     textStyle: {
     color: '#fff'	// 值域控件的文本颜色
     }
     }
     */
};
mapChart.setOption(option7);

//实现动画
$('.map').on('click', function (event) {
    $('.right-content').addClass('right-contentActive');
    $('.category').addClass('categoryActive');
    $('.show-chart').addClass('show-chartActive');
    $('.left-content').addClass('left-contentActive');
})

