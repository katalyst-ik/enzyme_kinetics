let conc_init = 10;

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

    var layout = input.layout
    //var layout2 = input.layout2

    var data = [{
        x: plot.t_hist,
        y: plot.c_hist,
        type: input.data.type,
        mode: input.data.mode,
        marker: input.data.marker
      }]
    
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
