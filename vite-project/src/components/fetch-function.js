const getStockData = async () => {
    try {
        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&outputsize=full&apikey=FUGVWCGH3PVJ77TV`
        const responce = await fetch(url)
        if(!responce.ok) throw Error("Stock not found!")
        const data = await responce.json
        const newArr = []
        const someStockData = data.slice(0,10)
        console.log(someStockData)
        // someStockData.forEach((info) => {

        // })
        return newArr;
    }
    catch (error) {
        console.warn(error.message)
        return null
    }
}

export default getStockData; 