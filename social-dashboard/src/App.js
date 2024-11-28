import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Line } from 'react-chartjs-2';  // Import only from react-chartjs-2
import { Chart as ChartJS } from 'chart.js/auto';  // Import Chart.js core
import { CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
// Register the components needed for your chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {

  const data = {
    labels: ["Mark", 
             "John",
             "Sam"
    ],

    datasets: [
       {
          label: 'Scores',
          data: [200, 104, 500],
          borderColor: "#56bcf0",
          fill: false
       }
    ]
  };

  // Define any optional chart options
  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Sales',
        },
      },
    },
  };


  return (
    <div className="App" style={{ height: '400px', width: '600px' }}>
      <header className="App-header">
      TEST POTATO
      </header>
      <Line data = {data} options = {options} height={400} width={600}/>
    </div>
  );
}

export default App;
