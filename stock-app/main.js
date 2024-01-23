import './style.css'
import myChart from './src/chart'
import getStockData from './src/components/fetch-function'

const main = () => {
  getStockData()
  console.log("Hello World")
}

main()