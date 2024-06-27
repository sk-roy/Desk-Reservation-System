
import ApexCharts from 'react-apexcharts';


const PieChart = () => {
    const options = {
        series: [44, 55, 41, 180],
        chart: {
            type: 'donut',
        },
        labels: ['Level 2', 'Level 3', 'Level 4', 'Level 5'],
        colors: ['#5546D6', '#8B7BFF', '#1B98FF', '#00CCC9'],
        dataLabels: {
            enabled: false,
        },
        plotOptions: {
            pie: {
            customScale: 1,
            donut: {
                size: '60%',
                labels: {
                    show: true,
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: (w) => {
                            const total = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                            return total.toLocaleString();
                        },
                    },
                }
            },
            // borderRadius: 3,
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                width: 200
                },
                legend: {
                position: 'bottom'
                }
            }
        }], 
        
        legend: {            
            position: 'right',
            horizontalAlign: 'right',
            offsetX: -10,
            offsetY: 50
        },   
    }
          
    return (
        <div className="pie-chart-container">
            <ApexCharts options={options} series={options.series} type='donut' />
        </div>
    );
}



export default PieChart;
