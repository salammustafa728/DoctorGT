import React, { Component } from 'react'
import {Line} from 'react-chartjs-2';

const state = {
    labels: ['January','March','May', 'July' ,
             'September','November' ],
    datasets: [
      {
        label: 'Total Fuel Costs',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [40.000, 80.000, 60.000,100.000,120.000,20.000],
      }
    ]
  }
  
export class LineChart extends Component {
    render() {
        return (
            <div  style={{border:"1px solid black",margin:"10% 10%"}}>
                <h2> Fuel cost</h2>
                <hr></hr>
                <h5>Average cost comsuption</h5>
                <h2>28.6L/100km</h2>
                <h5>Fuel cost</h5>  
                <h2>$70.000</h2>             
                <div>

                 <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
           </div>
            </div>
        )
    }
}

export default LineChart
