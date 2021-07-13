import Plot from 'react-plotly.js';
import React, { Component } from 'react';

export default class App extends Component {

  render() {
    return (
      <>
        <div style={{display:'block',margin:'auto'}}>
          <Plot
            data={[
              {
                x: [0,2,3,6,7],
                y: [3,5,2,8,9],
                type: 'scatter',
                mode: 'lines',
                marker: {color: 'blue'},
              }
            ]}
            layout={ {width: 800, height: 600, title: 'Michaelis–Menten equation => dx/dt =  k1·(e0 - x)·a - k2·x'} }
          />
        </div>
      </>
    );
  }
}