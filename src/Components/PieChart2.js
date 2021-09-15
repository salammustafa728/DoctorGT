import React, { Component } from 'react'
import {Doughnut} from 'react-chartjs-2';
import "./DoughnutSati.css"

const data = {
 
  datasets: [{
    labels: ['January', 'February', 'March',
             'April', 'May'],
    data: [100, 27],
    backgroundColor: [
      'rgb(255, 255, 150)',
      '#FFC069',
    ],
  }]
};
export class PieChart2 extends Component {
    render() {
        return (
            <div class="chartStyle" >
                    <h3 className="statusTitle">Satisfactory</h3>
                         <Doughnut
                             data={data}
                             options={{
                               title:{
                                 display:true,
                                 text:'27%',
                                 fontSize:20
                               },
                                legend:{
                                  display:true,
                                  position:'right'
                               }
                             }}
                           />
                           <hr></hr>
                           <h1 >14</h1>
                           <p >Vihicles</p>
                 </div>
        )
    }
}

export default PieChart2
