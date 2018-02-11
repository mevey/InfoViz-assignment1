DATA = [
    {
        "title": "Surgical Infections",
        "operational_errors_data": [7200,6500,5000,3000],
        "mortality_rate_data": [45,20,10,5],
        "max":7200,
        "color": "#888888"
    },
    {
        "title": "Catheter Infections",
        "operational_errors_data": [4500,4000,2400,500],
        "mortality_rate_data": [15,10,2,2],
        "max":7200,
        "color":  "#888888"
    },
    {
        "title": "Surgical Errors",
        "operational_errors_data": [3300,3200,3000,1000],
        "mortality_rate_data": [20,10,5,0],
        "max":7200,
        "color": "#888888"
    },
    {
        "title": "Incorrect Dosage Errors",
        "operational_errors_data": [1100,1000,400,100],
        "mortality_rate_data": [30,20,15,5],
        "max":7200,
        "color":  "#888888"
    },
    {
        "title": "Incorrect Medication",
        "operational_errors_data": [900,750,500,400],
        "mortality_rate_data": [20,10,5,10],
        "max":7200,
        "color": "#888888"
    },
    {
        "title": "Misdiagnosis",
        "operational_errors_data": [1000,900,950,100],
        "mortality_rate_data": [55,40,5,5],
        "max":7200,
        "color": "#888888"
    },
    {
        "title": "Delays in Treatment",
        "operational_errors_data": [50,50,50,50],
        "mortality_rate_data": [15,10,10,4],
        "max":1000,
        "color": "red"
    },
    {
        "title": "IV Errors",
        "operational_errors_data": [50,50,50,50],
        "mortality_rate_data": [10,10,5,5],
        "max":1000,
        "color": "red"
    },
]

//Design 1
main_chart_options = {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'Total operational errors between 2012-2015'
    },
    xAxis: [{
        categories: ['2012', '2013', '2014', '2015'],
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: 'Average mortality rate',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: 'Total operational errors',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        x: -120,
        verticalAlign: 'top',
        y: 100,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
    },
    series: [{
        name: 'Operational Errors',
        type: 'column',
        yAxis: 1,
        data: [18100, 16450,12350,5200],

    }, {
        name: 'Mortality Rates',
        type: 'spline',
        data: [26.25, 16.25, 7.125, 4.5],
        tooltip: {
            valueSuffix: ''
        }
    }]
}

function get_options(data) {
    return mini_chart_options = {
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: data['title']
        },
        xAxis: [{
            categories: ['2012', '2013', '2014', '2015']
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            max: 45,
            title: {
                text: 'Mortality Rates',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: 'Operational Errors',
                style: {
                    color: data["color"]
                }
            },
            max: data['max'],
            labels: {
                style: {
                    color:data["color"]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },

        series: [{
            name: 'Operational Errors',
            type: 'column',
            yAxis: 1,
            data: data['operational_errors_data'],
            color: data["color"]

        }, {
            name: 'Mortality Rate',
            type: 'spline',
            data: data['mortality_rate_data'],
            color: Highcharts.getOptions().colors[1]
        }]
    }
}

Highcharts.chart('main-chart', main_chart_options);
for (var i = 0; i < DATA.length; i++) {
    options = get_options(DATA[i])
    Highcharts.chart('mini-chart-' + (i + 1), options);
}

var chart = $('#mini-chart-6').highcharts();
chart.series[0].data[2].update({color:'red'});
var chart = $('#mini-chart-5').highcharts();
chart.series[1].data[3].update({color:'red'});


//Design 2
categories = ["2012", "2013", "2014", "2015"]
barchart_data = []
for(i in DATA) {
    barchart_data.push({"name": DATA[i].title, "data": DATA[i].operational_errors_data})
}
barchart_data.push({"name": "Average mortality rate", "type":"spline", "data": [26.25, 16.25, 7.125, 4.5], "yAxis": 1, "color":Highcharts.getOptions().colors[7]})

main_chart_options = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Operational errors between 2012-2015'
    },

    xAxis: {
        categories: categories,
    },
    yAxis: [
    {
        min: 0,
        title: {
            text: 'Number of operational errors'
        }
    },
    {
        min: 0,
        title: {
            text: 'Average mortality rate'
        },
        opposite: true,
        style: {
            color: Highcharts.getOptions().colors[7]
        }
    }
    ],
    tooltip: {
//        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: barchart_data
}
Highcharts.chart('main-chart-2', main_chart_options);

//Design 3
categories = []
barchart_data = []
d_2012 = [], d_2013 = [], d_2014 = [], d_2015 = []
for(i in DATA) {
    categories.push(DATA[i].title)
    d_2012.push(DATA[i].operational_errors_data[0])
    d_2013.push(DATA[i].operational_errors_data[1])
    d_2014.push(DATA[i].operational_errors_data[2])
    d_2015.push(DATA[i].operational_errors_data[3])
}
barchart_data.push({"name": "2012", "data": d_2012})
barchart_data.push({"name": "2013", "data": d_2013})
barchart_data.push({"name": "2014", "data": d_2014})
barchart_data.push({"name": "2015", "data": d_2015})

main_chart_options = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Operational errors between 2012-2015'
    },

    xAxis: {
        categories: categories,
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of operational errors'
        }
    },
    tooltip: {
//        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: barchart_data
}
Highcharts.chart('main-chart-3', main_chart_options);