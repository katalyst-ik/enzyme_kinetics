# -*- coding: utf-8 -*-
"""
Created on Sun Jun 13 19:54:42 2021

@author: Chandraniva
"""

import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import odeint
from matplotlib.widgets import Slider

def dxdt(x,t,k1,k2,e0,a):
    return k1*a*(e0-x) - k2*x

x0 = 0
e0, a = 1., 1.
k1_init, k2_init = 0.3, 0.1

t = np.linspace(0,10,101)
sol = odeint(dxdt, x0, t, args=(k1_init, k2_init, e0, a))
enz_conc_init = e0 - sol

def fun(t,k1,k2,e0,a):
    sol = odeint(dxdt, x0, t, args=(k1, k2, e0, a))
    enz_conc = e0 - sol
    return enz_conc

plt.plot(t,fun(t,0.3,0.1,e0,a))
plt.show()

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

f_d, = ax.plot(t, enz_conc_init, linewidth=2.5)
ax.set_xlabel("time (seconds)")
ax.set_ylabel("Enzyme conc.")
ax.set_ylim(-0.1,1.1)
ax.set_title("Solution to Michaelis–Menten equation \nInitial conditions: x = 0, e0 = 1, a = 1")

def update(val):
    k1 = s_k1.val
    k2 = s_k2.val
    f_d.set_data(t, fun(t,k1,k2,e0,a))
    fig.canvas.draw_idle()
    
s_k1.on_changed(update)
s_k2.on_changed(update)

plt.show()
