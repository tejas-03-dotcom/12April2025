
function calculateMetrics(data) {
    const totalCallOI = data.reduce((sum, item) => sum + item.call.OI, 0);
    const totalPutOI = data.reduce((sum, item) => sum + item.put.OI, 0);
    const totalOI = totalCallOI + totalPutOI;

    const callLTPs = data.map(item => item.call.LTP).filter(ltp => ltp > 0);
    const putLTPs = data.map(item => item.put.LTP).filter(ltp => ltp > 0);

    const avgCallLTP = callLTPs.length > 0 ? (callLTPs.reduce((sum, ltp) => sum + ltp, 0) / callLTPs.length) : 0;
    const avgPutLTP = putLTPs.length > 0 ? (putLTPs.reduce((sum, ltp) => sum + ltp, 0) / putLTPs.length) : 0;

    return {
        totalCallOI,
        totalPutOI,
        totalOI,
        avgCallLTP,
        avgPutLTP
    };
}
