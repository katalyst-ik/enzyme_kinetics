import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';

// const useStyles = makeStyles({
//   root: {
//     width: 200,
//   },
// });

export default class ContinuousSlider extends React.Component{


  
  render(){return (
    <div>
        <div style={{display:'flex'}}>
            <div style={{width:'400px'}}>
                <h3>slider1</h3>
                <br/>
                {this.props.value1}
                <Grid item xs>
                    <Slider step={0.01} style={{width:'400px'}} value={this.props.value1*50} onChange={this.props.func1} aria-labelledby="continuous-slider" />
                </Grid>
            </div>
            
            <div><hr style={{width:'60px',display :'block',opacity:'0'}}/></div>

            <div style={{width:'400px'}}>
                <h3>slider2</h3>
                <br/>
                {this.props.value2}
                <Grid item xs>
                    <Slider step={0.01} style={{width:'400px'}} value={this.props.value2*50} onChange={this.props.func2} aria-labelledby="continuous-slider" />
                </Grid>
            </div>
        </div>
    </div>
  )};
}
