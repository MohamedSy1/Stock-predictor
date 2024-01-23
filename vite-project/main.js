import './style.css'
import myChart from '../vite-project/src/chart'
import getStockData from '../vite-project/src/components/fetch-function'

const main = () => {
  getStockData()
  console.log("Hello World")
}

main()
