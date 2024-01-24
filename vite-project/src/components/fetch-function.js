export const stockData = async (tickerSymbol) => {
    try {
        const responce = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${tickerSymbol}&interval=5min&outputsize=full&apikey=GNDURFAB7UHESSMK`)
        if(!responce.ok) throw Error("Stock data not found!!!")
        const data = await responce.json()
        console.log(data)
        const lastRefreshed = new Date(data["Meta Data"]["3. Last Refreshed"]);

        const targetEndTime = new Date(lastRefreshed);
        targetEndTime.setHours(16, 0, 0, 0);
        
        let chartData = [];
        
        for (const [key, value] of Object.entries(data["Time Series (5min)"])) {
            const dateTime = new Date(key);
            if (dateTime <= targetEndTime) {
                chartData.push({
                    x: dateTime.getTime(),
                    o: parseFloat(value["1. open"]),
                    h: parseFloat(value["2. high"]),
                    l: parseFloat(value["3. low"]),
                    c: parseFloat(value["4. close"]),
                    s: [parseFloat(value["1. open"]), parseFloat(value["4. close"])]
                });
            }
        }
        console.log(chartData)
        return chartData;
    }
    catch (error) {
        console.warn(error)
        return null
    }
}
