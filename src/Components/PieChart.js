import React, { Component } from 'react'
import {Doughnut} from 'react-chartjs-2';
import DoughnutSati from './DoughnutSati';
import PieChart2 from './PieChart2';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./DoughnutSati.css"
const data = {
 
  datasets: [{
    labels: ['January', 'February', 'March',
             'April', 'May'],
    data: [100, 58],
    backgroundColor: [
      'rgb(255, 255, 150)',
      '#57CC99',
    ],
  }]
};
export class PieChart extends Component {
    render() {
        return (
            <div  style={{}}>
                <Container>
                   <Row className="justify-content-md-center">
                     <Col xs lg="3">
                     <div class="chartStyle">   
                     <h3 className="statusTitle">Good</h3>         
                          <Doughnut 
                           data={data}
                           options={{
                             title:{
                               display:true,
                               text:'58%',
                               fontSize:20
                             },
                             legend:{
                               display:true,
                               position:'right'
                             }
                           }}
                         />
                         <hr></hr>
                         <h1 >52</h1>
                         <p >Vihicles</p>
                         </div>
                        </Col>
                        <Col xs lg="3">
                        <PieChart2/>
                        </Col>
                        <Col xs lg="3"><DoughnutSati/></Col>
                        </Row>
                        </Container>
            </div>
        )
    }
}

export default PieChart
