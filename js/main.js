var operational_error_color =  Highcharts.getOptions().colors[0]
var mortality_rate_color = Highcharts.getOptions().colors[1]
DATA = [
    {
        "title": "Surgical Infections <span class='drop'> 58% drop</span><span class='drop mort'> 89% drop</span>",
        "operational_errors_data": [7200,6500,5000,3000],
        "mortality_rate_data": [45,20,10,5],
        "color": operational_error_color
    },
    {
        "title": "Catheter Infections <span class='drop'> 89% drop</span><span class='drop mort'> 97% drop</span>",
        "operational_errors_data": [4500,4000,2400,500],
        "mortality_rate_data": [15,10,2,2],
        "color": operational_error_color
    },
    {
        "title": "Surgical Errors <span class='drop'> 70% drop</span><span class='drop mort'> 100% drop</span>",
        "operational_errors_data": [3300,3200,3000,1000],
        "mortality_rate_data": [20,10,5,0],
        "color": operational_error_color
    },
    {
        "title": "Incorrect Dosage Errors <span class='drop'> 91% drop</span><span class='drop mort'> 83% drop</span>",
        "operational_errors_data": [1100,1000,400,100],
        "mortality_rate_data": [30,20,15,5],
        "color":  operational_error_color
    },
    {
        "title": "Incorrect Medication <span class='drop'> 56% drop</span><span class='drop mort'> 50% drop</span>",
        "operational_errors_data": [900,750,500,400],
        "mortality_rate_data": [20,10,5,10],
        "color":operational_error_color
    },
    {
        "title": "Misdiagnosis <span class='drop'> 90% drop</span><span class='drop mort'> 73% drop</span>",
        "operational_errors_data": [1000,900,950,100],
        "mortality_rate_data": [55,40,5,5],
        "color": operational_error_color
    },
    {
        "title": "Delays in Treatment <span class='drop'> 0% drop</span><span class='drop mort'> 91% drop</span>",
        "operational_errors_data": [50,50,50,50],
        "mortality_rate_data": [15,10,10,4],
        "color": operational_error_color,
        "max":1000
    },
    {
        "title": "IV Errors <span class='drop'> 0% drop</span><span class='drop mort'> 50% drop</span>",
        "operational_errors_data": [50,50,50,50],
        "mortality_rate_data": [10,10,5,5],
        "color": operational_error_color,
        "max": 1000
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
                color: mortality_rate_color
            }
        },
        title: {
            text: 'Average mortality rate',
            style: {
                color: mortality_rate_color
            }
        },
    }, { // Secondary yAxis
        title: {
            text: 'Total operational errors',
            style: {
                color: operational_error_color
            }
        },
        labels: {
            format: '{value}',
            style: {
                color: operational_error_color
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
         color: operational_error_color

    }, {
        name: 'Mortality Rates',
        type: 'spline',
        data: [26.25, 16.25, 7.125, 4.5],
        color: mortality_rate_color
    }]
}

function get_options(data) {
    if (data['max']) max = data['max']
    else max = 8000
    return mini_chart_options = {
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: ''
        },
        xAxis: [{
            categories: ['2012', '2013', '2014', '2015']
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                style: {
                    color: mortality_rate_color
                }
            },
            max: 55,
            title: {
                text: 'Mortality Rates',
                style: {
                    color: mortality_rate_color
                }
            }
        }, { // Secondary yAxis
            title: {
                text: 'Operational Errors',
                style: {
                    color: data["color"]
                }
            },
            max: max,
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
            color: operational_error_color

        }, {
            name: 'Mortality Rate',
            type: 'spline',
            data: data['mortality_rate_data'],
            color: mortality_rate_color
        }]
    }
}

Highcharts.chart('main-chart', main_chart_options);
for (var i = 0; i < DATA.length; i++) {
    options = get_options(DATA[i])
    Highcharts.chart('mini-chart-' + (i + 1), options);
    $("#title-" + (i + 1)).html(DATA[i]['title'])
}

var chart = $('#mini-chart-6').highcharts();
chart.series[0].data[2].update({color:'red'});
var chart = $('#mini-chart-5').highcharts();
chart.series[1].data[3].update({color:'red'});
