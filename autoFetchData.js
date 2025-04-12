
async function autoFetchData() {
    const asset = document.getElementById("asset").value;
    const expiry = document.getElementById("expiry").value;

    if (!asset || !expiry) {
        alert("Please select an asset and expiry date.");
        return;
    }

    document.getElementById("loading").style.display = "block";
    optionData = await fetchData(asset, expiry);
    document.getElementById("loading").style.display = "none";

    if (optionData.length === 0) {
        document.getElementById("dataContainer").innerHTML = "<p>No data found.</p>";
        return;
    }

    // Add timestamp to the data
    const timestamp = new Date().toLocaleString();
    const intervalData = {
        timestamp,
        data: optionData
    };

    // Store data for this interval
    allIntervalData.push(intervalData);

    highlightTop3OI();
    renderTable(optionData);
    displayMetrics();
    renderTrendChart();
    document.getElementById("exportExcel").disabled = false;
}
