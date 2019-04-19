/**
 * Created by Administrator on 2017/1/10 0010.
 */
var dom = document. getElementById("tz-map");
var myChart = echarts.init(dom);
var app = {};
option = null;
//6个地区总部经纬度
var geoCoordMap = {
    '中华人民共和国': [116.4551,40.2539],
    '美洲区域': [-84.550202,10.120201],
    '亚太区域': [114.971034,-0.296362],
    '欧亚区域': [29.732908,53.134846],
    '中西非区域': [-15.317557,15.13385],
    '中东北非区域': [46.386183,32.628137],
    '东南非区域': [37.257059,5.616742]
};
//6个地区总部数据
var myData = [
    [{name:'亚太区域'}, {name:'中华人民共和国',value:150},{address:'3901,JBC2,Cluster V'},{phone:'+971 45207900'},{email:'MENA@powerchina-intl.com'},{fax:"+971 45207900"}],
    [{name:'欧亚区域'}, {name:'中华人民共和国',value:150},{address:'3901,JBC2,Cluster V'},{phone:'+971 45207900'},{email:'MENA@powerchina-intl.com'},{fax:"+971 45207900"}],
    [{name:'美洲区域'}, {name:'欧亚区域',value:150},{address:'3901,JBC2,Cluster V'},{phone:'+971 45207900'},{email:'MENA@powerchina-intl.com'},{fax:"+971 45207900"}],
    [{name:'欧亚区域'}, {name:'中东北非区域',value:150},{address:'3901,JBC2,Cluster V'},{phone:'+971 45207900'},{email:'MENA@powerchina-intl.com'},{fax:"+971 45207900"}],
    [{name:'美洲区域'}, {name:'中西非区域',value:150},{address:'3901,JBC2,Cluster V'},{phone:'+971 45207900'},{email:'MENA@powerchina-intl.com'},{fax:"+971 45207900"}],
    [{name:'东南非区域'}, {name:'欧亚区域',value:150},{address:'3901,JBC2,Cluster V'},{phone:'+971 45207900'},{email:'MENA@powerchina-intl.com'},{fax:"+971 45207900"}],
    [{name:'东南非区域'}, {name:'亚太区域',value:150},{address:'3901,JBC2,Cluster V'},{phone:'+971 45207900'},{email:'MENA@powerchina-intl.com'},{fax:"+971 45207900"}],
    [{name:'东南非区域'}, {name:'中华人民共和国',value:150},{address:'3901,JBC2,Cluster V'},{phone:'+971 45207900'},{email:'MENA@powerchina-intl.com'},{fax:"+971 45207900"}],
    [{name:'中东北非区域'}, {name:'中华人民共和国',value:150},{address:'3901,JBC2,Cluster V'},{phone:'+971 45207900'},{email:'MENA@powerchina-intl.com'},{fax:"+971 45207900"}],
    [{name:'东南非区域'}, {name:'中东北非区域',value:150},{address:'3901,JBC2,Cluster V'},{phone:'+971 45207900'},{email:'MENA@powerchina-intl.com'},{fax:"+971 45207900"}],
    [{name:'中西非区域'}, {name:'东南非区域',value:150},{address:'3901,JBC2,Cluster V'},{phone:'+971 45207900'},{email:'MENA@powerchina-intl.com'},{fax:"+971 45207900"}],
    [{name:'中西非区域'}, {name:'欧亚区域',value:150},{address:'3901,JBC2,Cluster V'},{phone:'+971 45207900'},{email:'MENA@powerchina-intl.com'},{fax:"+971 45207900"}]
];

var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord]
            });
        }
    }
    return res;
};

var color = ['#E3E5EA', '#fff753', '#fff753'];
var series = [];
[[' ', myData]].forEach(function (item, i) {
    series.push(
        {
            name: item[0],
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,       //箭头指向速度，值越小速度越快
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0] + ' Top10',
            type: 'lines',
            zlevel: 2,
            effect: {
                //show: true,
                //period: 6,
                //trailLength: 0,
                //symbol: planePath,
                //symbolSize: 55
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.4,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0] + ' Top10',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: ''
                }
            },
            symbolSize: function (val) {
                return val[2] / 7;
            },
            itemStyle: {
                normal: {
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value/2]),
                    address:dataItem[2].address,
                    phone:dataItem[3].phone,
                    email:dataItem[4].email,
                    fax:dataItem[5].fax
                };
            })
        }
    );
});
// 单独美洲区域总部点的数据
series[2].data.push({
    name: '美洲区域',
    value: [-84.550202,10.120201, 75],
    address:'3901,JBC2,Cluster V',
    phone:'+971 45207900',
    email:'MENA@powerchina-intl.com',
    fax:"+971 45207900"
})
// 后台要上传经纬度的坐标点数据
var HtBox = [
    {
        name: '俄罗斯',
        value: [89.116876, 67.757906,120],
        number: 20,
        jigou: '俄罗斯代表处'

    },
    {
        name: '英国曼彻斯特',
        value: [-1.657222, 51.886863,120],
        number: 20,
        jigou: '英国曼彻斯特代表处'
    },
    {
        name: '美国洛杉矶',
        value: [-118.24311, 34.052713,120],
        number: 20,
        jigou: '美国洛杉矶代表处'
    }
]
series.push({
    name: 'test',
    type: 'effectScatter',
    dataType: 4545,
    coordinateSystem: 'geo',
    zlevel: 2,
    rippleEffect: {
        brushType: 'stroke'
    },
    label: {
        normal: {
            show: true,
            position: 'right',
            formatter: ''
        }
    },
    symbolSize: function (val) {
        return val[2] / 7;
    },
    itemStyle: {
        normal: {
            color: color[0]
        }
    },
    data: HtBox
})
// 区域合并
series.push(
    {
        name: 'map',
        type: 'map',
        mapType: 'world',
        geoIndex: 0,
        label: {
            normal: {
                show: true
            },
            emphasis: {
                show: true
            }
        },
        data: [
            {name: '美洲区域', value: 0,zhuwaijigou:'12',zhuwairenyuan:'23',zaigenzongshu:'78',zaijianxiangmu:'89'},
            {name: '欧亚区域', value: 1,zhuwaijigou:'12',zhuwairenyuan:'23',zaigenzongshu:'78',zaijianxiangmu:'89'},
            {name: '亚太区域', value: 2,zhuwaijigou:'12',zhuwairenyuan:'23',zaigenzongshu:'78',zaijianxiangmu:'89'},
            {name: '东南非区域', value: 3,zhuwaijigou:'12',zhuwairenyuan:'23',zaigenzongshu:'78',zaijianxiangmu:'89'},
            {name: '中西非区域', value: 4,zhuwaijigou:'12',zhuwairenyuan:'23',zaigenzongshu:'78',zaijianxiangmu:'89'},
            {name: '中东北非区域', value: 5,zhuwaijigou:'12',zhuwairenyuan:'23',zaigenzongshu:'78',zaijianxiangmu:'89'},
            {name: 'China', value: 6}
        ]
    }
)
option = {
    visualMap: {
        min: 0,
        max: 6,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],
        calculable: false,
        show:false,
        inRange: {
            color: ['rgba(173,155,180,.3)','rgba(97,142,202,.3)','rgba(206,167,147,.3)','rgba(130,169,189,.3)','rgba(162,178,231,.3)','rgba(153,200,169,.5)','rgba(255,255,255,.3)']
        }
    },
    geo: {
        map: 'world',
        zoom: 1,// 改变这个值的大小就可以了
        label: {
            normal:{
                show: false
            },
            emphasis: {
                show: false
            }
        },
        roam: true, //是否放大或缩小
        itemStyle: {
            normal: {//选取前颜色
                areaColor: 'rgba(0,0,0,0)',
                borderColor: 'rgba(0,0,0,0)'
            },
            emphasis: {//选取后颜色
                areaColor: '#adc2e5'
            }
        }
    },
    series: series,
    tooltip : {
        trigger: 'item' ,//数据弹出提示
        position:'right',
        textStyle:{
            fontSize:14,
            margin:30
        },
        formatter: function(data) {
            if (data.seriesName === 'test') {
                return "<i></i> <span> ○ 驻外机构："+data.data.jigou + "</span><br>"+ "<span>○ 国别："+ data.data.name+"</span><br>"+"<span>○ 驻外人员："+ data.data.number+"</span>"
                    +"<i></i>"
            }
            else if(data.name=='China'){
                tooltip:{
                    show:false
                }
            }
            else if (data.seriesName === 'map') {
                return "<i></i> <span> ○ 区域部："+data.name + "</span><br>"+ "<span>○ 驻外机构："+ data.data.zhuwaijigou+"个</span><br>"+"<span>○ 驻外人员："+ data.data.zhuwairenyuan+"个</span><br>"
                    +"<span> ○ 在跟踪数："+data.data.zaigenzongshu + "个</span><br>"+"<span> ○ 在建项目："+data.data.zaijianxiangmu + "个</span>"+"<i></i>"
            }
            else {
                return "<i></i> <span>" + data.name + "</span><br>" + "<span> ○ 地址 ：" + data.data.address + "</span><br>" + "<span>○ 电话 ：" + data.data.phone + "</span><br>"
                    + "<span>○ 邮箱 ：" + data.data.email + "</span><br>" + "<span>○ 传真 ：" + data.data.fax + "</span> <i></i>";
            }
        }
    }
    //,
    //legend: {
    //    orient: 'vertical',
    //    y: 'bottom',
    //    x: 'left',
    //    data: myData[0].name,
    //    textStyle: {
    //        color: '#fff'
    //    }
    //}
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
    window.onresize = myChart.resize
}

$('.map').on('click', function (event) {
    $('.right-content').removeClass('return');
    $('.right-content').addClass('right-contentActive');
    $('.category').removeClass('return');
    $('.category').addClass('categoryActive');
    $('.show-chart').addClass('show-chartActive');
    $('.left-content').addClass('left-contentActive');
})
$('.fh').on('click',function(event){
    $('.category').addClass('return');
    $('.right-content').addClass('return');
    $('.show-chart').removeClass('show-chartActive');
    $('.left-content').removeClass('left-contentActive');
})