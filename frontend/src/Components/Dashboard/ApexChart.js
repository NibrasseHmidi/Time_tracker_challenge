import React, { useEffect, useState } from 'react'
import {Chart as ChartJS ,BarElement, CategoryScale, LinearScale} from 'chart.js'
import {Bar} from 'react-chartjs-2'
import { useDispatch, useSelector } from 'react-redux'
import { getalltask } from '../../redux/actions/taskActions'
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale
)

const ApexChart = () => {
  const dispatch = useDispatch();
  const [chart,setChart]=useState([])
  //get all tasks
  const allTask = useSelector((state) => state.taskReducer.task);

  useEffect(() => {
    setChart(allTask)
    dispatch(getalltask());
    
  }, []);
 var data = {
    labels: chart?.map(x => x.name),
    datasets: [{
        label: '# of Votes', 
        data: [...chart.keys()] ,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
}

var options={
  maintainAspectRatio:false,
  scales: {
      y: {
          beginAtZero: true
      }
  },
  legend:{
    labels:{
      fontSize:26
    }
  }
}

  return (
    <div><Bar
    data={data}
    options={options}
    height={150}
    /></div>
  )
}

export default ApexChart
