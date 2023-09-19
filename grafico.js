document.addEventListener("DOMContentLoaded", function () {
    let myChart;

    const ctx = document.getElementById('myChart').getContext('2d');

    const chartForm = document.getElementById('chartForm');
    const colorPicker = document.getElementById('colorPicker');

    chartForm.addEventListener('submit', function (e) {
        e.preventDefault();

        if (myChart) {
            myChart.destroy();
        }

        const chartType = document.querySelector('input[name="chartType"]:checked').value;
        const orientation = document.querySelector('input[name="orientation"]:checked').value;

        const color = colorPicker.value;

        const data = {
            labels: ['GOOGLE CHROME', 'MICROSOFT EDGE', 'OPERA', 'MOZILLA FIREFOX'],
            datasets: [{
                label: 'Uso',
                data: [60, 30, 25, 45],
                backgroundColor: color,
            }]
        };

        const options = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        };

        const config = {
            type: chartType,
            data: data,
            options: options
        };

        if (orientation === 'horizontal' && chartType === 'bar') {
            config.options.indexAxis = 'y';
        }

        myChart = new Chart(ctx, config);
    });
});
