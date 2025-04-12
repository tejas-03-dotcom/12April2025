function highlightTop3OI() {
    optionData.sort((a, b) => (b.call.OI + b.put.OI) - (a.call.OI + a.put.OI));
    optionData.slice(0, 3).forEach(item => item.isTopOI = true);
}
// This function will highlight the top 3 OI entries in the optionData array by adding an isTopOI property to them.
// You can then use this property in your renderTable function to apply the desired highlighting.
// For example, you can modify the renderTable function to check for the isTopOI property and apply a specific style to those rows.
// This will ensure that the top 3 OI entries are visually distinct in the rendered table.
// You can also modify the sorting logic to sort by either call OI or put OI based on your requirements.
// The current implementation sorts by the sum of call and put OI.
// You can change the sorting logic to sort by call OI or put OI individually if needed.

