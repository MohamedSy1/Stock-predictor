import { stockData } from "./components/fetch-function";

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
    label: 'Weekly Sales',
    data: stockData(),
  // backgroundColor: (ctx) => {
  //   const { raw: { o, c} } = ctx;
  //   let color;
  //   if (c >= o) {
  //     color = 'rgba(75, 192, 192, 1)'
  //   } else {
  //     color = 'rgba(255, 26, 104, 1)'
  //   }
  //   return color
  // },
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor: 'rgba(255, 26, 104, 1)',
    borderWidth: 2,
    borderSkipped: false,
  }]
};

const candlestick = {
  id: 'candlestick',
  // beforeDatasetsDraw(chart, args, pluginOptions) {
  //   const {ctx, data, chartArea: {top, bottom, left, right, width, height}, scales: {x, y}} = chart;
  //   ctx.save();
  //   ctx.lineWidth = 2;
  //   ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
  //   data.datasets[0].data.forEach((datapoint, index) => {
  //     ctx.beginPath();
  //     ctx.moveTo(chart.getDatasetMeta(0).data[index].x, chart.getDatasetMeta(0).data[index].y);
  //     ctx.lineTo(chart.getDatasetMeta(0).data[index].x, y.getPixelForValue(data.datasets[0].data[0].h))
  //     ctx.stroke();
  //     ctx.beginPath()
  //     ctx.moveTo(chart.getDatasetMeta(0).data[index].x, chart.getDatasetMeta(0).data[0].y);
  //     ctx.lineTo(chart.getDatasetMeta(0).data[index].x, y.getPixelForValue(data.datasets[0].data[0].l))
  //     ctx.stroke()
  //   })
  // }
}

// config 
const config = {
  type: 'bar',
  data,
  options: {
    parsing: {
      xAxisKey: 'x',
      yAxisKey: 's'
    },
    scales: {
      x: {
        type: 'timeseries',
        time: {
          unit: 'day' 
        }
      },
      y: {
        beginAtZero: true,
        grace: 1
      }
    }
  },
  plugins: [candlestick]
};

// render init block
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);
// Instantly assign Chart.js version

export default myChart;