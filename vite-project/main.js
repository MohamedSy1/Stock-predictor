import './style.css'
import myChart from '../vite-project/src/chart'
import {stockData} from '../vite-project/src/components/fetch-function'

const handleSubmit = (event) => {
  event.preventDefault()

  const form = event.target
  const formData = FormData(form)
  const formObj = Object.fromEntries(formData)

  console.log(formObj)
}

const main = () => {
  form = document.getElementById("#searchForm")
  form.addEventListner('submit', handleSubmit())

  
  console.log("Hello World")
}

main()
