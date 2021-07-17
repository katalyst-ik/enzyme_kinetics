// Javascript program to implement Runge Kutta method

    // dy/dx here
    dydx=(x, y , k_1 , k_2 ,e0,a)=>{
      return(k_1*(e0 - y)*a - k_2*y)
    }

// Finds value of y for a given x using step size h
// and initial value y0 at x0.

    rungeKutta=(x0, y0, x, h, k_1, k_2, e0, a, eqn)=>{

        // Count number of iterations using
        // step size or step height h
        let n = parseInt((x - x0) / h, 10);

        let k1, k2, k3, k4;

        // Iterate for number of iterations
        let y = y0;
        for(let i = 1; i <= n; i++)
        {

        // Apply Runge Kutta Formulas to find
        // next value of y
        k1 = h * eqn(x0, y ,k_1 , k_2, e0, a);
        k2 = h * eqn(x0 + 0.5 * h, y + 0.5 * k1 ,k_1 , k_2, e0, a);
        k3 = h * eqn(x0 + 0.5 * h, y + 0.5 * k2 ,k_1 , k_2, e0, a);
        k4 = h * eqn(x0 + h, y + k3 ,k_1 , k_2, e0, a);

        // Update next value of y
        y = y + (1 / 6) * (k1 + 2 * k2 +
                    2 * k3 + k4);;

        // Update next value of x
        x0 = x0 + h;
        }
        return y.toFixed(7);//this is the no significant figs in calculation of y
    }

  // x0 => start of x rang , x_ => end of x range, step = graph resolution in x-axis
    integ = (start,end,step,k1,k2,eqn) => {

        var x = []
        var y = []

        var count = start

        while(count <= end){
          x.push(count)
          y.push(rungeKutta(0,0,count,0.01,k1,k2,.001,1.,eqn))
          count += step
        }

        return({x,y})
    }

    plot = (eqn,input)=>{

        var plot = integ(input.start,input.end,input.step,input.k1,input.k2,eqn)
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
