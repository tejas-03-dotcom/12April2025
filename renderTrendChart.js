
function renderTrendChart() {
    const ctx = document.getElementById('trendChart').getContext('2d');

    if (trendChart) {
        trendChart.destroy(); // Destroy existing chart
    }

    const labels = allIntervalData.map(interval => interval.timestamp);
    const oiData = allIntervalData.map(interval => {
        return interval.data.reduce((sum, item) => sum + item.call.OI + item.put.OI, 0);
    });

    const percentageChanges = allIntervalData.map((interval, index) => {
        if (index === 0) return 0; // No change for the first interval
        const previousOI = allIntervalData[index - 1].data.reduce((sum, item) => sum + item.call.OI + item.put.OI, 0);
        return ((oiData[index] - previousOI) / previousOI) * 100;
    });

    trendChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Total Open Interest (OI)',
                    data: oiData,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    fill: false
                },
                {
                    label: 'Percentage Change in OI',
                    data: percentageChanges,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    fill: false,
                    yAxisID: 'y-percentage'
                }
            ]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Time'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Total OI'
                    }
                },
                'y-percentage': {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Percentage Change'
                    },
                    grid: {
                        drawOnChartArea: false
                    }
                }
            }
        }
    });
}