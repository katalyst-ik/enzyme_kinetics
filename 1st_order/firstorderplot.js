// Finds value of y for a given x using step size h
// and initial value y0 at x0.

rungeKutta=(x0, y0, x, h, k, eqn)=>{

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
    for(let i = 0; i<=10 ; i++){
        //appending the values of rate into array
        ratehist.push(k*i)
        //appending the values of concentration into array
        conchist.push(i)
    }
    return{ratehist,conchist};
    }

plot = (eqn,input1)=>{

    var plot = rungeKutta(input1.start,10,10,input1.step,input1.k,eqn)
    //console.log(plot);

    var layout = input1.layout
    //var layout2 = input1.layout2

    var data = [{
        x: plot.xhist,
        y: plot.yhist,
        type: input1.data.type,
        mode: input1.data.mode,
        marker: input1.data.marker
      }]
    
    Plotly.newPlot( input1.divId, data, layout)
    
}

plot2 = (input2)=>{
    var plot = rate_vs_conc(input2.k)

    var data = [{
        x: plot.conchist,
        y: plot.ratehist,
        type: input2.data.type,
        mode: input2.data.mode,
        marker: input2.data.marker
    }]
    Plotly.newPlot( input2.divId, data, input2.layout)
}
