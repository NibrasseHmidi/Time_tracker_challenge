import React from "react";
import Chart from "react-apexcharts";

const ApexChart = () => {
 
  const options= {
    chart: {
      id: "Time"
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  }
 const  series= [
  {
    name: "Task",
    data: [30, 40, 45, 50, 49, 60, 70, 91]
  }
]
  



	return (
    <div>
	

     
            <Chart
              options={options}
              series={series}
              type="bar"
             
            />
        
      

		
	</div>)
};

export default ApexChart;
