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
            text: 'Average Mortality Rate',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: 'Operational errors',
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
            title: {
                text: 'Operational Errors',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: 'Mortality Rates',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                style: {
                    color: Highcharts.getOptions().colors[0]
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

        }, {
            name: 'Mortality Rate',
            type: 'spline',
            data: data['mortality_rate_data'],
        }]
    }
}

DATA = [
    {
        "title": "Surgical Infection",
        "operational_errors_data": [7200,6500,5000,3000],
        "mortality_rate_data": [45,20,10,5]
    },
    {
        "title": "Catheter Infection",
        "operational_errors_data": [4500,4000,2400,500],
        "mortality_rate_data": [15,10,2,2]
    },
    {
        "title": "Surgical Error",
        "operational_errors_data": [3300,3200,3000,1000],
        "mortality_rate_data": [20,10,5,0]
    },
    {
        "title": "Incorrect Dosage",
        "operational_errors_data": [1100,1000,400,100],
        "mortality_rate_data": [30,20,15,5]
    },
    {
        "title": "Incorrect Medication",
        "operational_errors_data": [900,750,500,400],
        "mortality_rate_data": [20,10,5,10]
    },
    {
        "title": "Delay in Treatment",
        "operational_errors_data": [50,50,50,50],
        "mortality_rate_data": [15,10,10,4]
    },
    {
        "title": "Misdiagnosis",
        "operational_errors_data": [1000,900,950,100],
        "mortality_rate_data": [55,40,5,5]
    },
    {
        "title": "IVError",
        "operational_errors_data": [50,50,50,50],
        "mortality_rate_data": [10,10,5,5]
    },
]


Highcharts.chart('main-chart', main_chart_options);
for (var i = 0; i < DATA.length; i++) {
    options = get_options(DATA[i])
    Highcharts.chart('mini-chart-' + (i + 1), options);
}
