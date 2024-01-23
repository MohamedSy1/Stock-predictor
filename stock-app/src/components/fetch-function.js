const getStockData = async () => {
    try {
        // const url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&outputsize=full&apikey=JVI29JZAIEZLQ740"
        const responce = await fetch(url)
        if (!responce.ok) throw Error("Stock not found!")
        const data = await responce.json()
        const newArr = []
        const slicedInfo = data.slice(0, 5) 
        console.log(slicedInfo)
        slicedInfo.forEach((data) => {
            newArr.push(
                {
                    
                }
            )
        })
    }
    catch (error) {
        console.warn(error.message)
        return null
    }
}



export default getStockData; 