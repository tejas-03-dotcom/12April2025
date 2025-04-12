
function renderTable(data) {
    let dataHTML = '<table class="table table-bordered"><thead><tr>\
        <th>Strike Price</th><th>Market Price</th><th>Option Type</th>\
        <th>Call LTP</th><th>Call OI</th><th>Put LTP</th><th>Put OI</th>\
        </tr></thead><tbody>';

    data.forEach(item => {
        let highlight = item.isTopOI ? 'style="background-color: yellow;"' : '';

        dataHTML += `<tr ${highlight}>
                        <td>${item.strikePrice}</td>
                        <td>${item.marketPrice}</td>
                        <td>${item.optionType}</td>
                        <td>${item.call.LTP}</td>
                        <td>${item.call.OI}</td>
                        <td>${item.put.LTP}</td>
                        <td>${item.put.OI}</td>
                    </tr>`;
    });

    dataHTML += `</tbody></table>`;
    document.getElementById("dataContainer").innerHTML = dataHTML;
}
