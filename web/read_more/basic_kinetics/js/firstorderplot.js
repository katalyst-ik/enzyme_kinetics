rungeKutta1st=(x0, y0, x, h, k, eqn)=>{

    // Count number of iterations using
    // step size or step height h
    let n = parseInt((x - x0) / h, 10);

    let k1, k2, k3, k4;
    var yhist = []
    var xhist = []
    // Iterate for number of iterations
    let y = y0;
    for(let i = 1; i <= n; i++)
    {
    // Apply Runge Kutta Formulas to find
    // next value of y
    k1 = h * eqn(x0, y ,k);
    k2 = h * eqn(x0 + 0.5 * h, y + 0.5 * k1 ,k);
    k3 = h * eqn(x0 + 0.5 * h, y + 0.5 * k2 ,k);
    k4 = h * eqn(x0 + h, y + k3 ,k);
    // Update next value of y
    y = y + (1 / 6) * (k1 + 2 * k2 + 2 * k3 + k4);;
    //appends conc of reagent value into array
    yhist.push(y)
    
    //appends time value into array
    xhist.push(x0)
    // Update next value of x
    x0 = x0 + h;
    }
    return {xhist,yhist};//this is the no significant figs in calculation of y
}
//for the rate vs conc graph
rate_vs_conc=(k) =>{
    var ratehist = []
    var conchist = []
    //n = parseInt()
    for(let i = 0; i<=10 ; i=i+0.01){
        //appending the values of rate into array
        ratehist.push(k*i)
        //appending the values of concentration into array
        conchist.push(i)
    }
    return{ratehist,conchist};
}

firstOrderPlot = (eqn,input)=>{

    var plot = rungeKutta1st(input.start,10,10,input.step,input.k,eqn)
    //console.log(plot);

    var layout = input.layout
    //var layout2 = input.layout2

    var data = [{
        x: plot.xhist,
        y: plot.yhist,
        type: input.data.type,
        mode: input.data.mode,
        marker: input.data.marker
    }]

    closestToHalfConcFirstOrderGraph = closest(plot.yhist,5)

    annotations = ()=>{
        if (plot.yhist.indexOf(closestToHalfConcFirstOrderGraph) != -1) {
            return([
                {
                    x : plot.xhist[plot.yhist.indexOf(closestToHalfConcFirstOrderGraph)],
                    y : closestToHalfConcFirstOrderGraph,
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
    
    Plotly.newPlot( input.divId, data, layout)
    
}

firstOrderPlot2 = (input)=>{
    var plot = rate_vs_conc(input.k)

    var data = [{
        x: plot.conchist,
        y: plot.ratehist,
        type: input.data.type,
        mode: input.data.mode,
        marker: input.data.marker
    }]
    Plotly.newPlot( input.divId, data, input.layout)
}
