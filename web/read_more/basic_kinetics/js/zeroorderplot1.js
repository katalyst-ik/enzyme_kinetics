let conc_init = 10;
let half_conc_int = (conc_init/2);
let t_half = 0;

//for the conc vs time graph
zero_order_conc_vs_time=(k) =>{
    var c_hist = []
    var t_hist = []
    for(let i = 0; i<=conc_init; i=i+0.01){
        //set concentration to zero to avoid negative conc problem
        if (k*i>conc_init){
            c_hist.push(0)
        }
        else{
            c_hist.push(-(k*i)+conc_init)
        }
        t_hist.push(i)
        if ((-(k*i)+conc_init) > half_conc_int){
            t_half = i;
        }
    }
    return{c_hist,t_hist};
}

//for the rate vs conc graph
zero_order_rate_vs_conc=(k) =>{
    var ratehist = []
    var conchist = []
    //n = parseInt()
    for(let i = 0; i<=10 ; i=i+0.01){
        //appending the values of rate into array
        ratehist.push(k)
        //appending the values of concentration into array
        conchist.push(i)
    }
    return{ratehist,conchist};
}

zeroOrderPlot = (input)=>{
    var plot = zero_order_conc_vs_time(input.k)
    //console.log(plot);
    //var data = [trace1];
    //Plotly.newPlot('myDiv', data);
    var layout = input.layout
    //var layout2 = input.layout2
    var trace1 = {
        x :[ plot.t_hist[Math.round(plot.t_hist.length/2)]],
        y :[ plot.c_hist[Math.round(plot.c_hist.length/2)]],
        type: 'scatter',
        mode: 'lines',
        name: 'T-half',
        line: {
            dash: 'dashdot',
            width: 4
        }
    }
    var data = [
        {
            x: plot.t_hist,
            y: plot.c_hist,
            type: input.data.type,
            mode: input.data.mode,
            marker: input.data.marker
        },
        // trace1
    ]

    closestToHalfConcZeroOrderGraph = closest(plot.c_hist,half_conc_int)    // look at general

    console.log(closestToHalfConcZeroOrderGraph);

    annotations = ()=>{
        if (plot.c_hist.indexOf(closestToHalfConcZeroOrderGraph) != -1) {
            return([
                {
                    x : plot.t_hist[plot.c_hist.indexOf(closestToHalfConcZeroOrderGraph)],
                    y : closestToHalfConcZeroOrderGraph,
                    text: 'Half life',
                    showarrow: true,
                    arrowhead: 3,
                    ax: 25,
                    ay: -40
                }
            ])
        } else {
            return(
                null
            )
        }
    }

    layout.annotations = annotations()
    
    Plotly.newPlot( input.divId, data, layout)
}

zeroOrderPlot2 = (input)=>{
    var plot = zero_order_rate_vs_conc(input.k)

    var data = [{
        x: plot.conchist,
        y: plot.ratehist,
        type: input.data.type,
        mode: input.data.mode,
        marker: input.data.marker
    }]
    Plotly.newPlot( input.divId, data, input.layout)
}
