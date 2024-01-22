import { DateTime } from 'luxon';
import Chart from 'chart.js/auto';
import { Chart, LinearScale } from 'chart.js';
// import '../chartjs-chart-financial.txt';

const startingDate = luxon.DateTime.fromRFC2822('22 Jan 2024 00:00 GMT')
const secondDate = luxon.DateTime.fromRFC2822('23 Jan 2024 00:00 GMT')
// console.log(startingDate.valueOf())
const data = {
  datasets: [{
    data: 
    [{
      x: startingDate.valueOf(),
      o: 1,
      h: 1.50,
      l: 0.75,
      c: 1.25,
    },
    {
      x: secondDate.valueOf(),
      o: 1.25,
      h: 1.50,
      l: 0.55,
      c: 0.90,
    }
    ],
  }]
};
// config 
const config = {
  type: 'candlestick',
  data,
  options: {
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true
      }
    }
  }
};

// render init block
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);

// Instantly assign Chart.js version
const chartVersion = document.getElementById('chartVersion');
chartVersion.innerText = chart.version;

export default myChart;