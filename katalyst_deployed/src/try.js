dxdt = (t,x,k1,k2,e0,a)=>{
  return k1*a*(e0-x) - k2*x
}

rk4 =(tf,x0,t0,h,k1,k2,e0,a)=>{
  
  var n = (int)((tf - t0)/h)
  var x = x0
  var x_hist = []
  var t_hist = []
  var k = 0

  while (k <= n) {
      
      x_hist.append(x)
      t_hist.append(i)
            
      c1 = h * dxdt(t0, x, k1,k2,e0,a)
      c2 = h * dxdt(t0 + 0.5 * h, x + 0.5 * c1, k1,k2,e0,a)
      c3 = h * dxdt(t0 + 0.5 * h, x + 0.5 * c2, k1,k2,e0,a)
      c4 = h * dxdt(t0 + h, x + c3, k1,k2,e0,a)
      
      x = x + (1.0 / 6.0)*(c1 + 2 * c2 + 2 * c3 + c4)
      t0 = t0 + h

      k++

    }
      
      
  return (x_hist,t_hist)
}

x0 = 0
e0= 1.
a = 1.
k1_init = 0.3
k2_init = 0.1

fun = (tf,k1,k2,e0,a)=>{
    sol, ts = rk4(tf,x0,0,1e-2,k1,k2,e0,a)
    enz_conc = e0 - sol
    return (enz_conc, ts)
  }