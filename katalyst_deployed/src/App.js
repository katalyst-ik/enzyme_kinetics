import Plot from 'react-plotly.js';
import React, { Component } from 'react';
import ContinuousSlider from './slider'
import ode45 from 'ode45-cash-karp'

export default class App extends Component {

  constructor(props){
      super(props)

      this.state = {
        slider1 : 0,
        slider2 : 0,
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17]
      }
  }

  onchangev1 = (event, newValue)=>{
    this.setState({slider1: newValue })
    this.setState({y: [(newValue*2)**3,(newValue*5)**2,(newValue*3)**1,(newValue*7)**2] })
    // console.log(newValue)
  }

  onchangev2 = (event, newValue)=>{
    this.setState({slider2: newValue })
    this.setState({x: [newValue**1,newValue**2,newValue**3,newValue**4] })
    // console.log(newValue)
  }

  componentDidMount(k){
 
      // The derivative function for a Van der Pol oscillator:
        var vanderpol = function(dydt, y, t) {
          dydt[0] = y[1]
          dydt[1] = 4 * (1-y[0]*y[0])*y[1] - y[0]
        }
        
        // Initialize:
        var y0 = [2,0],
            t0 = 0,
            dt0 = 1e-3,
            integrator = ode45( y0, vanderpol, t0, dt0 )
        
        // Integrate up to tmax:
        var tmax = 10, t = [], y = []
        while( integrator.step( tmax ) ) {
          // Store the solution at this timestep:
          // async()=>{
              t.push( [integrator.y,integrator.t ])
              y.push( integrator.y )
          // }
        }

        console.log(y,t);

      // // console.log(y.map(k=>{return(k)}))
      // this.setState({x: t})
      // this.setState({y:y.map(y=>{return(y[1])})})
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
                mode: 'lines+markers',
                marker: {color: 'blue'},
              }
            ]}
            layout={ {width: 800, height: 600, title: 'A Fancy Plot'} }
          />
          <ContinuousSlider func1={this.onchangev1} func2={this.onchangev2} value1={this.state.value2} value2={this.state.value2} />
        </div>
      </>
    );
  }
}