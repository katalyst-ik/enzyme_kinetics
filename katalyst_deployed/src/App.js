import Plot from 'react-plotly.js';
import React, { Component } from 'react';
import ContinuousSlider from './slider'

export default class App extends Component {

  constructor(props){
      super(props)

      this.state = {
        slider1 : 1,
        slider2 : 2,
        x: [],
        y: []
      }
  }

    // Javascript program to implement Runge Kutta method

    // dy/dx here
    dydx=(x, y , k_1 , k_2 ,e0,a)=>{
      return(k_1*(e0 - y)*a - k_2*y)
    }

  // Finds value of y for a given x using step size h
  // and initial value y0 at x0.
  rungeKutta=(x0, y0, x, h, k_1, k_2,e0, a)=>{

    // Count number of iterations using
    // step size or step height h
    let n = parseInt((x - x0) / h, 10);

    let k1, k2, k3, k4;

    // Iterate for number of iterations
    let y = y0;
    for(let i = 1; i <= n; i++)
    {

      // Apply Runge Kutta Formulas to find
      // next value of y
      k1 = h * this.dydx(x0, y ,k_1 , k_2, e0, a);
      k2 = h * this.dydx(x0 + 0.5 * h, y + 0.5 * k1 ,k_1 , k_2, e0, a);
      k3 = h * this.dydx(x0 + 0.5 * h, y + 0.5 * k2 ,k_1 , k_2, e0, a);
      k4 = h * this.dydx(x0 + h, y + k3 ,k_1 , k_2, e0, a);

      // Update next value of y
      y = y + (1 / 6) * (k1 + 2 * k2 +
                2 * k3 + k4);;

      // Update next value of x
      x0 = x0 + h;
    }
    return y.toFixed(10);
  }

  integ = (x0,x_,step,k1,k2)=>{
    var x = []
    var y = []
    var count = x0
    while(count <= x_){
      x.push(count)
      y.push(this.rungeKutta(0,0,count,0.01,k1,k2,.001,1.))
      count += step
    }
    count += 10
    return({x,y})
  }

  plot = async()=>{

    var plot = await this.integ(0,10,0.01,this.state.slider1,this.state.slider2)
    this.setState({x:plot.x})
    this.setState({y:plot.y})

    // console.log(x2);

  }

  onchangev1 = (e)=>{
    const newValue = e.target.value
    this.setState({slider1: newValue/50 })
    this.plot()
  }

  onchangev2 = (e)=>{
    const newValue = e.target.value
    this.setState({slider2: newValue/50 })
    this.plot()
  }

  componentDidMount(){
    this.plot()
  }

  render() {
    return (
      <>
        <div style={{display:'block',margin:'auto'}}>
          <Plot
            data={[
              {
                x: this.state.x,
                y: this.state.y,
                type: 'scatter',
                mode: 'lines',
                marker: {color: 'blue'},
              }
            ]}
            layout={ {width: 800, height: 600, title: 'Michaelis–Menten equation => dx/dt =  k1·(e0 - x)·a - k2·x',yaxis: {range: [0,0.001]}} }
          />
          <ContinuousSlider func1={this.onchangev1} func2={this.onchangev2} value1={this.state.slider1} value2={this.state.slider2} />
        </div>
      </>
    );
  }
}