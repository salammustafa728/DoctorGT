import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import LineChart from './Components/LineChart';
import PieChart from './Components/PieChart';
export class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <br></br>
        <PieChart/>
        <LineChart/>
        <Footer/>
      </div>
    )
  }
}

export default App
