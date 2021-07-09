import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import odeint
from matplotlib.widgets import Slider

def dxdt(t,x,k1,k2,e0,a):
    return k1*a*(e0-x) - k2*x

"""
Params:
    tf: final time (sec)
    x0: Initial x
    t0: Initial t
    h:step size
"""
def rk4(tf,x0,t0,h,k1,k2,e0,a):
    
    n = (int)((tf - t0)/h)
    x = x0
    x_hist = []
    t_hist = []
    
    for i in range(1, n+1):
        
        x_hist.append(x)
        t_hist.append(i)
              
        c1 = h * dxdt(t0, x, k1,k2,e0,a)
        c2 = h * dxdt(t0 + 0.5 * h, x + 0.5 * c1, k1,k2,e0,a)
        c3 = h * dxdt(t0 + 0.5 * h, x + 0.5 * c2, k1,k2,e0,a)
        c4 = h * dxdt(t0 + h, x + c3, k1,k2,e0,a)
        
        x = x + (1.0 / 6.0)*(c1 + 2 * c2 + 2 * c3 + c4)
        t0 = t0 + h
        
        
    return np.array(x_hist), np.array(t_hist)

x0 = 0
e0, a = 1., 1.
k1_init, k2_init = 0.3, 0.1

def fun(tf,k1,k2,e0,a):
    sol, ts = rk4(tf,x0,0,1e-2,k1,k2,e0,a)
    enz_conc = e0 - sol
    return enz_conc, ts


tf = 10
sol, ts = rk4(tf,x0,0,1e-2,k1_init, k2_init, e0, a)
enz_conc_init = e0 - sol
ts = ts/100 #scale down the time by 100 since step size is taken as 0.01

fig = plt.figure(figsize=(6, 4))
ax = fig.add_subplot(111)
fig.subplots_adjust(bottom=0.13, top=0.70)

ax_k1 = fig.add_axes([0.3, 0.85, 0.4, 0.05])
ax_k1.spines['top'].set_visible(True)
ax_k1.spines['right'].set_visible(True)
ax_k2 = fig.add_axes([0.3, 0.92, 0.4, 0.05])
ax_k2.spines['top'].set_visible(True)
ax_k2.spines['right'].set_visible(True)

s_k1 = Slider(ax=ax_k1, label='k1 ', valmin=0, valmax=2.0,
              valinit=k1_init ,valfmt=' %1.2f ', facecolor='#cc7000')
s_k2 = Slider(ax=ax_k2, label ='k2 ', valmin=0, valmax=2.0, 
              valinit=k2_init,valfmt='%1.2f ', facecolor='#cc7000')

f_d, = ax.plot(ts , enz_conc_init, linewidth=2.5)
ax.set_xlabel("time (seconds)")
ax.set_ylabel("Enzyme conc.")
ax.set_ylim(-0.1,1.1)
ax.set_title("Solution to Michaelis–Menten equation \nInitial conditions: x = 0, e0 = 1, a = 1")

def update(val):
    k1 = s_k1.val
    k2 = s_k2.val
    f_d.set_data(ts , fun(tf,k1,k2,e0,a)[0])
    fig.canvas.draw_idle()
    
s_k1.on_changed(update)
s_k2.on_changed(update)