import './style.css'
import myChart from '../vite-project/src/chart'
import {stockData} from '../vite-project/src/components/fetch-function'
import {renderStockData} from '../vite-project/src/components/render-functions.js'

const handleSubmit = async (event) => {
  event.preventDefault()

  const formData = new FormData(event.target)
  const formObj = Object.fromEntries(formData)

  await stockData(formObj["search-bar"])

}

const main = () => {
  const form = document.querySelector('#searchForm')
  form.addEventListener('submit', handleSubmit)

  console.log("Hello World")
}

main()
