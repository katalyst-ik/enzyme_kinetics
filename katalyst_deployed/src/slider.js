import React from 'react'
import './slider.css'

export default class ContinuousSlider extends React.Component{


  
  render(){return (
    <div>
        <div style={{display:'flex'}}>
            <div style={{width:'400px'}}>
                <h3>slider1</h3>
                <br/>
                {this.props.value1}
                <div item xs>
                    <input className="slider" type="range" min="1" max="100" style={{width:'400px'}} value={this.props.value1*50} onChange={this.props.func1} />
                </div>
            </div>
            
            <div><hr style={{width:'60px',display :'block',opacity:'0'}}/></div>

            <div style={{width:'400px'}}>
                <h3>slider2</h3>
                <br/>
                {this.props.value2}
                <div item xs>
                    <input className="slider" type="range" min="1" max="100" style={{width:'400px'}} value={this.props.value2*50} onChange={this.props.func2} />
                </div>
            </div>
        </div>
    </div>
  )};
}
