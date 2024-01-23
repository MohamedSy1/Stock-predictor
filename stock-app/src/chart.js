import { DateTime } from 'luxon';
import { Chart } from "chart.js";
import * as Chartjs from "chart.js";
// import '../chartjs-chart-financial.txt';

const startingDate = luxon.DateTime.fromRFC2822('22 Jan 2024 00:00 GMT')
const secondDate = luxon.DateTime.fromRFC2822('23 Jan 2024 00:00 GMT')

const data = {
  type: 'candlestick',
  datasets: [{
    data: 
    [
      {
      x: startingDate.valueOf(),
      o: 1,
      h: 1.50,
      l: 0.75,
      c: 1.25,
      },
    ],
  }]
};
// config 
const config = {
  data,
  options: {
    scales: {
      y: {
        type: "linear",
        beginAtZero: true,
      },
      x: {
        type: 'linear'
      }
    }
  }
};
// // render init block
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);

// Instantly assign Chart.js version
const chartVersion = document.getElementById('chartVersion');
chartVersion.innerText = chart.version;

export default myChart;