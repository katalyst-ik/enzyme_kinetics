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

// x0 => start of x rang , x_ => end of x range, step = graph resolution in x-axis
// integ = (start,end,step,k,eqn) => {

//     var x = []
//     var y = []

//     var count = start

//     while(count <= end){
//       x.push(count)
//       y.push(rungeKutta(0,10,count,0.01,k,eqn))
//       count += step
//     }

//     return({x,y})
// }

plot = (input,eqn)=>{

    var plot = rungeKutta(input.start,10,10,input.step,input.k,eqn)
    console.log(plot);

    var layout= input.layout

    var data = [{
        x: plot.x,
        y: plot.y,
        type: input.data.type,
        mode: input.data.mode,
        marker: input.data.marker
      }]

    Plotly.newPlot( input.divId, data, layout)
}
