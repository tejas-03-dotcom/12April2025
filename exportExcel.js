
function exportToExcel() {
    if (allIntervalData.length === 0) return;

    const wsData = allIntervalData.map((interval, index) => {
        const metrics = calculateMetrics(interval.data);
        const previousData = index > 0 ? allIntervalData[index - 1].data : null;
        const changes = calculatePercentageChanges(interval.data, previousData);

        return {
            Timestamp: interval.timestamp,
            TotalCallOI: metrics.totalCallOI,
            TotalPutOI: metrics.totalPutOI,
            TotalOI: metrics.totalOI,
            AvgCallLTP: metrics.avgCallLTP,
            AvgPutLTP: metrics.avgPutLTP,
            CallOIChange: changes ? changes.callOIChange.toFixed(2) : 0,
            PutOIChange: changes ? changes.putOIChange.toFixed(2) : 0,
            TotalOIChange: changes ? changes.totalOIChange.toFixed(2) : 0,
            CallLTPChange: changes ? changes.callLTPChange.toFixed(2) : 0,
            PutLTPChange: changes ? changes.putLTPChange.toFixed(2) : 0
        };
    });

    const ws = XLSX.utils.json_to_sheet(wsData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "OptionData");

    const filename = `OptionChain_Analysis_${new Date().toISOString().slice(0, 16).replace("T", "_")}.xlsx`;
    XLSX.writeFile(wb, filename);
}
