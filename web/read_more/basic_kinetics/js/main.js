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
                width: 700,
                height: 600,
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
                width: 700,
                height: 600,
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
                width: 700,
                height: 600,
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
                width: 700,
                height: 600,
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

