import React, { Component } from 'react'
import { Doughnut} from 'react-chartjs-2';
import "./DoughnutSati.css"

const data = {
 
  datasets: [{
    labels: ['January', 'February', 'March',
             'April', 'May'],
    data: [100, 15],
    backgroundColor: [
      'rgb(255, 255, 150)',
      'rgb(255, 99, 132)',
    ],
  }]
};
export class DoughnutSati extends Component {
    render() {
        return (
            <div class="chartStyle" >
                <h3 className="statusTitle">Critical</h3>
                 <Doughnut
                    data={data}
                    options={{
                      title:{
                        display:true,
                        text:'15%',
                        fontSize:20
                      },
                      legend:{
                        display:true,
                        position:'right'
                      }
                    }}
                  />
        <hr></hr>
        <h1 >7</h1>
        <p >Vihicles</p>
            </div>
        )
    }
}

export default DoughnutSati
