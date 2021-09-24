/******************Zeroth order**********************/

    // zero order div id's
        var sliderZeroOrder = document.getElementById("sliderZeroOrder");
        var sliderZeroOrderValue = document.getElementById("sliderZeroOrderValue");
        sliderZeroOrderValue.innerHTML = sliderZeroOrder.value;

    // listening to change in slider value
        sliderZeroOrder.oninput = function() {
            sliderZeroOrderValue.innerHTML = this.value
            ZeroOrderConcVsTimeInput.k = this.value
            ZeroOrderRateVsConcInput.k = this.value
            zeroOrderPlot(ZeroOrderConcVsTimeInput)
            zeroOrderPlot2(ZeroOrderRateVsConcInput)
        }

    // inputs for the plots
        ZeroOrderConcVsTimeInput = {
            layout: {
                width: 600,
                height: 500,
                title: 'Concentration vs Time',
                font:{
                  family : 'Lexend Deca',
                  size: 20,
                },
                yaxis: {
                    showgrid: true,
                    showticklabel: true,
                    tickfont : {
                      family : 'Lexend Deca',
                      size : 14,
                      color : '#black'
                    },
                    range: [0,10.2],
                    title: {
                        text: 'Concentration of reactant (mol/L)',
                        font: {
                            family: 'Lexend Deca',
                            size: 18,
                            color: '#7f7f7f',      
                        }
                    }
                },
                xaxis: {
                    showgrid: true,
                    showticklabel: true,
                    tickfont : {
                      family : 'Lexend Deca',
                      size : 14,
                      color : '#black'
                    },
                    range: [0,10],
                    title: {
                        text: 'Time (s)',
                        font: {
                            family: 'Lexend Deca',
                            size: 18,
                            color: '#7f7f7f'
                        }
                    }
                }
            },
            data :{
                type: 'scatter',
                mode: 'lines',
                marker: {color: '#ff6347'}
            },
            k : 1,
            start : 0,
            end : 10,
            step : 0.01,
            divId : document.getElementById('zero_order_conc_v_time')
        }

        ZeroOrderRateVsConcInput = {
            layout:{
                width: 600,
                height: 500,
                title: 'Rate vs Concentration',
                font:{
                  family : 'Lexend Deca',
                  size: 20,
                },
                yaxis: {
                    showgrid: true,
                    showticklabel: true,
                    tickfont : {
                      family : 'Lexend Deca',
                      size : 14,
                      color : '#black'
                    },
                    range: [0,2.1],
                    title: {
                        text: 'Rate (s^-1))',//rate of consumption of reactant
                        font: {
                            family: 'Lexend Deca',
                            size: 18,
                            color: '#7f7f7f',      
                        }
                    }

                },
                xaxis: {
                    showgrid: true,
                    showticklabel: true,
                    tickfont : {
                      family : 'Lexend Deca',
                      size : 14,
                      color : '#black'
                    },
                    range: [0,10],
                    title: {
                        text: 'Concentration of reactant',
                        font: {
                            family: 'Lexend Deca',
                            size: 18,
                            color: '#7f7f7f'
                        }
                    }
                }
            },
            data :{
                type: 'scatter',
                mode: 'lines',
                marker: {color: '#ff6347'}
            },
            k : 1,
            start : 0,
            end : 10,
            step : 0.01,
            divId : document.getElementById('zero_order_rate_conc')
        }

    // plot the during first load
        zeroOrderPlot(ZeroOrderConcVsTimeInput)
        zeroOrderPlot2(ZeroOrderRateVsConcInput)

/******************First order**********************/

    // first order div id's
        var sliderFirstOrder = document.getElementById("sliderFirstOrder");
        var sliderFirstOrderValue = document.getElementById("sliderFirstOrderValue");
        sliderFirstOrderValue.innerHTML = sliderFirstOrder.value;

    // listening to change in slider value
        sliderFirstOrder.oninput = function() {
            sliderFirstOrderValue.innerHTML = this.value
            FirstOrderConcVsTimeInput.k = this.value
            FirstOrderRateVsConcInput.k = this.value
            firstOrderPlot(dydx,FirstOrderConcVsTimeInput)
            firstOrderPlot2(FirstOrderRateVsConcInput)
        }

    // inputs for the plots
        FirstOrderConcVsTimeInput = {
            layout:{
                //plot_bgcolor:"fff2e5",
                width: 600,
                height: 500,
                title: 'Concentration vs Time',
                font:{
                  family : 'Lexend Deca',
                  size: 20,
                },
                yaxis: {
                    showgrid: true,
                    showticklabel: true,
                    tickfont : {
                      family : 'Lexend Deca',
                      size : 14,
                      color : '#black'
                    },
                    range: [0,10],
                    title: {
                        text: 'Concentration of reactant (mol/L)',
                        font: {
                            family: 'Lexend Deca',
                            size: 18,
                            color: '#7f7f7f',      
                        }
                    }
                },
                xaxis: {
                    showgrid: true,
                    showticklabel: true,
                    tickfont : {
                      family : 'Lexend Deca',
                      size : 14,
                      color : '#black'
                    },
                    range: [0,10],
                    title: {
                        text: 'Time (s)',
                        font: {
                            family: 'Lexend Deca',
                            size: 18,
                            color: '#7f7f7f'
                        }
                    }
                }
            },
            data :{
                type: 'scatter',
                mode: 'lines',
                marker: {color: '#ff6347'}
            },
            k : 1,
            start : 0,
            end : 10,
            step : 0.01,
            divId : document.getElementById('first_order_conc_v_time')
        }

        FirstOrderRateVsConcInput = {
            layout:{
                width: 600,
                height: 500,
                title: 'Rate vs Concentration',
                font:{
                  family : 'Lexend Deca',
                  size: 20,
                },
                yaxis: {
                    showgrid: true,
                    showticklabel: true,
                    tickfont : {
                      family : 'Lexend Deca',
                      size : 14,
                      color : '#black'
                    },
                    range: [0,10],
                    title: {
                        text: 'Rate (s^-1))',//rate of consumption of reactant
                        font: {
                            family: 'Lexend Deca',
                            size: 18,
                            color: '#7f7f7f',      
                        }
                    }
                },
                xaxis: {
                    showgrid: true,
                    showticklabel: true,
                    tickfont : {
                      family : 'Lexend Deca',
                      size : 14,
                      color : '#black'
                    },
                    range: [0,10],
                    title: {
                        text: 'Concentration of reactant',
                        font: {
                            family: 'Lexend Deca',
                            size: 18,
                            color: '#7f7f7f'
                        }
                    }
                }
            },
            data :{
                  type: 'scatter',
                  mode: 'lines',
                  marker: {color: '#ff6347'}
            },
            k : 1,
            start : 0,
            end : 10,
            step : 0.01,
            divId : document.getElementById('first_order_rate_conc')
        }

    // da/dt here
        dydx=(x,y,k)=>{
            return(-k*y)
        }

    // plot the during first load
        firstOrderPlot(dydx,FirstOrderConcVsTimeInput)
        firstOrderPlot2(FirstOrderRateVsConcInput)

/******************Second order**********************/

    // second order div id's
        var rateSliderSecondOrder = document.getElementById("rateSliderSecondOrder");
        var rateSliderSecondOrderValue = document.getElementById("rateSliderSecondOrderValue");
        // rateSliderSecondOrderValue.innerHTML = rateSliderSecondOrder.value;

    // second order [B0] slider
        var B0SliderSecondOrder = document.getElementById("B0SliderSecondOrder");
        var B0SliderSecondOrderValue = document.getElementById("B0SliderSecondOrderValue");
    
    // listening to change in slider value
        rateSliderSecondOrder.oninput = function() {
            rateSliderSecondOrderValue.innerHTML = this.value
            SecondOrderConcVsTimeInput.k = this.value
            SecondOrderRateVsConcInput.k = this.value
            secondOrderPlot(dadt,SecondOrderConcVsTimeInput)
            secondOrderPlot2(SecondOrderRateVsConcInput)
        }

        B0SliderSecondOrder.oninput = function() {
            console.log(this.value);
            B0SliderSecondOrderValue.innerHTML = this.value
            SecondOrderConcVsTimeInput.B0 = this.value
            SecondOrderRateVsConcInput.B0 = this.value
            secondOrderPlot(dadt,SecondOrderConcVsTimeInput)
            secondOrderPlot2(SecondOrderRateVsConcInput)
        }

    B0SliderSecondOrderValue.innerHTML = B0SliderSecondOrder.value;

    // inputs for the plots
        SecondOrderConcVsTimeInput = {
            layout: {
                width: 600,
                height: 500,
                title: 'Concentration vs Time',
                font:{
                family : 'Lexend Deca',
                size: 20,
                },
                yaxis: {
                    showgrid: true,
                    showticklabel: true,
                    tickfont : {
                    family : 'Lexend Deca',
                    size : 14,
                    color : '#black'
                    },
                    range: [0,10.2],
                    title: {
                        text: 'Concentration of reactant (mol/L)',
                        font: {
                            family: 'Lexend Deca',
                            size: 18,
                            color: '#7f7f7f',      
                        }
                    }
                },
                xaxis: {
                    showgrid: true,
                    showticklabel: true,
                    tickfont : {
                    family : 'Lexend Deca',
                    size : 14,
                    color : '#black'
                    },
                    range: [0,10],
                    title: {
                        text: 'Time (s)',
                        font: {
                            family: 'Lexend Deca',
                            size: 18,
                            color: '#7f7f7f'
                        }
                    }
                }
            },
            data :{
                type: 'scatter',
                mode: 'lines',
                marker: {color: '#ff6347'}
            },
            k : 1,
            B0 : 10,
            start : 0,
            end : 10,
            step : 0.01,
            divId : document.getElementById('second_order_conc_v_time')
        }

        SecondOrderRateVsConcInput = {
            layout:{
                width: 600,
                height: 500,
                title: 'Rate vs Concentration',
                font:{
                family : 'Lexend Deca',
                size: 20,
                },
                yaxis: {
                    showgrid: true,
                    showticklabel: true,
                    tickfont : {
                    family : 'Lexend Deca',
                    size : 14,
                    color : '#black'
                    },
                    range: [0,2.1],
                    title: {
                        text: 'Rate (s^-1))',//rate of consumption of reactant
                        font: {
                            family: 'Lexend Deca',
                            size: 18,
                            color: '#7f7f7f',      
                        }
                    }

                },
                xaxis: {
                    showgrid: true,
                    showticklabel: true,
                    tickfont : {
                    family : 'Lexend Deca',
                    size : 14,
                    color : '#black'
                    },
                    range: [0,10],
                    title: {
                        text: 'Concentration of reactant',
                        font: {
                            family: 'Lexend Deca',
                            size: 18,
                            color: '#7f7f7f'
                        }
                    }
                }
            },
            data :{
                type: 'scatter',
                mode: 'lines',
                marker: {color: '#ff6347'}
            },
            k : 1,
            conc : [1,10],
            start : 0,
            end : 10,
            step : 0.01,
            divId : document.getElementById('second_order_rate_conc')
        }

    // equation for second order
        dadt=(a,b,k)=>{
            return(-k*b[0]*b[1])
        }

    // plot the during first load
        secondOrderPlot(dadt,SecondOrderConcVsTimeInput)
        secondOrderPlot2(SecondOrderRateVsConcInput)
