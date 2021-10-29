rungeKutta3rd=(x0, y0, x, h, k, eqn)=>{

    // Count number of iterations using step size or step height h
    let n = parseInt((x - x0) / h, 10);

    // addin to array
        add = (array,number) =>{
            let arrayLength = array.length
            let retArrray = []
            for(var i = 0; i < arrayLength; i++){
                retArrray[i] = array[i] + number
            }
            return(retArrray)
        }

    let k1, k2, k3, k4;
    var yhist = [[],[]]
    var xhist = []
    // Iterate for number of iterations
    let y = y0;
    for(let i = 1; i <= n; i++){
        // Apply Runge Kutta Formulas to find next value of y
            k1 = h * eqn(x0, y ,k);
            k2 = h * eqn(x0 + 0.5 * h, add(y , 0.5 * k1) ,k);
            k3 = h * eqn(x0 + 0.5 * h, add(y , 0.5 * k2) ,k);
            k4 = h * eqn(x0 + h, add(y , k3) ,k);
        // Update next value of y
            y = add (y , (1 / 6) * (k1 + 2 * k2 + 2 * k3 + k4));

        //appends conc of reagent value into array
            yhist[0].push(y[0])
            yhist[1].push(y[1])
        
        //appends time value into array
            xhist.push(x0)

        // Update next value of x
            x0 = x0 + h;
    }
    return {xhist,yhist};//this is the no significant figs in calculation of y
}
//for the rate vs conc graph
rate_vs_conc3rd=(eqn,input)=>{

    var plot = rungeKutta3rd(input.start,input.conc,input.end,input.step,input.k,eqn)

    var ratehist = []
    var concAHist = plot.yhist[0]
    var concBHist = plot.yhist[1]
    //n = parseInt()
    for(let i = 0; i<=concAHist.length ; i++){
        //appending the values of rate into array
        ratehist.push(input.k*concAHist[i]*concAHist[i]*concBHist[i])
    }
    // console.log({ratehist,concAHist});
    return{ratehist,concAHist};
}

thirdOrderPlot = (eqn,input)=>{
    
    var plot = rungeKutta3rd(input.start,input.conc,input.end,input.step,input.k,eqn)

    var layout = input.layout

    var data = [{
        x: plot.xhist,
        y: plot.yhist[0],
        type: input.data.type,
        mode: input.data.mode,
        marker: input.data.marker
    }]

    closestToHalfConcThirdOrderGraph = closest(plot.yhist[0],0.5)

    annotations = ()=>{
        if (plot.yhist[0].indexOf(closestToHalfConcThirdOrderGraph) != -1) {
            return([
                {
                    x : plot.xhist[plot.yhist[0].indexOf(closestToHalfConcThirdOrderGraph)],
                    y : closestToHalfConcThirdOrderGraph,
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

thirdOrderPlot2 = (dadt,input)=>{
    var plot = rate_vs_conc3rd(dadt,input)

    var data = [{
        x: plot.concAHist,
        y: plot.ratehist,
        type: input.data.type,
        mode: input.data.mode,
        marker: input.data.marker
    }]
    Plotly.newPlot( input.divId, data, input.layout)
}