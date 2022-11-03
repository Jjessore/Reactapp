import React from 'react'
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale} from 'chart.js'
import {Bar} from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement
)

/* const chart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: {
      plugins: {
          legend: {
              display: true,
              labels: {
                  color: 'rgb(255, 99, 132)'
              }
          }
      }
  }
}); */

const BarChart = () => {

  var data = {
    labels: ['ward1', 'ward2', 'ward3', 'ward4', 'ward5'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)'
            //'rgba(54, 162, 235, 0.2)',
            //'rgba(255, 206, 86, 0.2)',
            //'rgba(75, 192, 192, 0.2)',
            //'rgba(153, 102, 255, 0.2)',
            //'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)'
            //'rgba(54, 162, 235, 1)',
            //'rgba(255, 206, 86, 1)',
            //'rgba(75, 192, 192, 1)',
            //'rgba(153, 102, 255, 1)',
            //'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    },{
      label: '# of Votes',
      data: [22, 29, 13, 15, 12, 13],
      backgroundColor: [
          //'rgba(255, 99, 132, 0.2)'
          'rgba(54, 162, 235, 0.2)',
          //'rgba(255, 206, 86, 0.2)',
          //'rgba(75, 192, 192, 0.2)',
          //'rgba(153, 102, 255, 0.2)',
          //'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
          //'rgba(255, 99, 132, 1)'
          'rgba(54, 162, 235, 1)',
          //'rgba(255, 206, 86, 1)',
          //'rgba(75, 192, 192, 1)',
          //'rgba(153, 102, 255, 1)',
          //'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
  }]
}


var options =  {
    responsive: true,  
    title: {
      display: true,
      text: 'Election Info'
    },
    //maintainAspectRation: false,
    indexAxis: 'y',
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
    legend: {

      labels: {
        fontSize: 26
      },
      position: 'chartArea'
      
    }
  }
}

/* var options1 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    
  }
} */

return (
    <div>
      <Bar 
        data = {data}
        height={400}
        width = {500}
        options = {options}
      />
      <legend></legend>
    </div>
  )
}

export default BarChart