
function calculatePercentageChanges(currentData, previousData) {
    if (!previousData) return null;

    const percentageChange = (current, previous) => {
        if (previous === 0) return 0; // Avoid division by zero
        return ((current - previous) / previous) * 100;
    };

    const currentMetrics = calculateMetrics(currentData);
    const previousMetrics = calculateMetrics(previousData);

    return {
        callOIChange: percentageChange(currentMetrics.totalCallOI, previousMetrics.totalCallOI),
        putOIChange: percentageChange(currentMetrics.totalPutOI, previousMetrics.totalPutOI),
        totalOIChange: percentageChange(currentMetrics.totalOI, previousMetrics.totalOI),
        callLTPChange: percentageChange(currentMetrics.avgCallLTP, previousMetrics.avgCallLTP),
        putLTPChange: percentageChange(currentMetrics.avgPutLTP, previousMetrics.avgPutLTP)
    };
}
