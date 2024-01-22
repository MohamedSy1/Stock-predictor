import './style.css'
import barChart from './src/chart'
import getStockData from './src/components/fetch-function'

const main = () => {
  getStockData()
  console.log("Hello World")
}

main()