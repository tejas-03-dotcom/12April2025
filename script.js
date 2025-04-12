let optionData = [];
let allIntervalData = [];
let intervalId = null;
let timeoutId = null;
let trendChart = null;


document.getElementById("dataForm").addEventListener("submit", function(event) 
{
    event.preventDefault();

    if (intervalId) clearInterval(intervalId);

    autoFetchData();
    intervalId = setInterval(autoFetchData, 120000);
    document.getElementById("stopFetch").disabled = false;
});

document.getElementById("stopFetch").addEventListener("click", function() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        alert("Auto Fetch Stopped.");
        document.getElementById("stopFetch").disabled = true;
    }
});

document.getElementById("exportExcel").addEventListener("click", exportToExcel);

document.getElementById("fetchByStrike").addEventListener("click", async function() {
    const strikePrice = document.getElementById("strikePrice").value;
    if (!strikePrice) {
        alert("Please enter a strike price.");
        return;
    }

    if (optionData.length === 0) {
        alert("Please fetch option chain data first.");
        return;
    }

    const filteredData = optionData.filter(item => item.strikePrice == strikePrice);
    if (filteredData.length === 0) {
        alert("No data found for this strike price.");
    } else {
        renderTable(filteredData);
    }
});

document.getElementById("fetchAtTime").addEventListener("click", function() {
    if (timeoutId) clearTimeout(timeoutId);

    const fetchTime = document.getElementById("fetchTime").value;
    if (!fetchTime) {
        alert("Please enter a valid time.");
        return;
    }

    const now = new Date();
    const [hours, minutes] = fetchTime.split(":");
    const fetchDateTime = new Date();
    fetchDateTime.setHours(hours, minutes, 0, 0);

    const delay = fetchDateTime - now;

    if (delay > 0) {
        timeoutId = setTimeout(autoFetchData, delay);
        alert(`Data will be fetched at ${fetchTime}`);
    } else {
        alert("Selected time has already passed.");
    }
});
