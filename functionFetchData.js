
async function fetchData(asset, expiry) {
    try {
        const response = await axios.get(`http://localhost:3000/api/option-chain?symbol=${asset}&expiry=${expiry}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to fetch data. Please check the API.");
        return [];
    }
}
