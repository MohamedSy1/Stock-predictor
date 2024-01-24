const getStockData = async () => {
    try {
        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&outputsize=full&apikey=FUGVWCGH3PVJ77TV`
        const responce = await fetch(url)
        if(!responce.ok) throw Error("Stock not found!")
        const data = await responce.json
        const newArr = []
        const someStockData = data.slice(0,10)
        // get today
        const todayDate = getDate()
        console.log(todayDate)
        // calculate yesterday: yyyy-mm-dd hh:mm:ss
        // increment by 5
        // check to see if the value exists
        // if it does, grab the data
        // stop at "19:55:00"
        // someStockData.forEach((info) => {
        //     newArr.push(
        //         {
        //         "stock": someStockData["Meta Data"].symbole,
        //         "x": someStockData["Time Series (5min)"],
        //         }
        //     )
        // })
        // return newArr;
    }
    catch (error) {
        console.warn(error.message)
        return null
    }
}

export default getStockData; 