
function displayMetrics() {
    const metrics = calculateMetrics(optionData);
    const previousData = allIntervalData.length > 1 ? allIntervalData[allIntervalData.length - 2].data : null;
    const changes = calculatePercentageChanges(optionData, previousData);

    const metricsHTML = `
        <div class="mt-3">
            <h4>Metrics</h4>
            <p>Total Call OI: ${metrics.totalCallOI} (${changes ? changes.callOIChange.toFixed(2) : 0}%)</p>
            <p>Total Put OI: ${metrics.totalPutOI} (${changes ? changes.putOIChange.toFixed(2) : 0}%)</p>
            <p>Total OI: ${metrics.totalOI} (${changes ? changes.totalOIChange.toFixed(2) : 0}%)</p>
            <p>Average Call LTP: ${metrics.avgCallLTP.toFixed(2)} (${changes ? changes.callLTPChange.toFixed(2) : 0}%)</p>
            <p>Average Put LTP: ${metrics.avgPutLTP.toFixed(2)} (${changes ? changes.putLTPChange.toFixed(2) : 0}%)</p>
        </div>
    `;
    document.getElementById('dataContainer').insertAdjacentHTML('beforeend', metricsHTML);
}

