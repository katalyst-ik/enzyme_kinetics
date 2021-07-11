import plotly.graph_objs as go
import numpy as np
#from ipywidgets import interact, interactive
from ipywidgets import widgets
from IPython.display import display
from scipy.integrate import odeint
import plotly.io as pio
pio.renderers.default = "browser"

def dxdt(x,t,k1,k2,e0,a):
    return k1*a*(e0-x) - k2*x

x0 = 0
e0, a = 1., 1.
k1_init, k2_init = 0.3, 0.1

t = np.arange(0,10,0.1)
sol = odeint(dxdt, x0, t, args=(k1_init, k2_init, e0, a))
sol = np.concatenate(sol)
enz_conc_init = e0 - sol
# print(sol)

def fun(t,k1,k2,e0,a):
    sol = odeint(dxdt, x0, t, args=(k1, k2, e0, a))
    sol = np.concatenate(sol)
    enz_conc = e0 - sol
    return enz_conc

# Create figure
fig = go.Figure()

# Add traces, one for each slider step
for step in np.arange(0, 2, 0.02):
    fig.add_trace(
        go.Scatter(
            visible=False,
            line=dict(color="#00CED1", width=3),
            name="𝜈 = " + str(step),
            x=t,
            y=fun(t,step,0.5,e0,a)))

# Make 10th trace visible
fig.data[10].visible = True

# Create and add slider
steps = []
for i in range(len(fig.data)):
    step = dict(
        method="update",
        args=[{"visible": [False] * len(fig.data)},
              {"title": "Slider switched to k1 = " + str(i*0.02)}],  # layout attribute
    )
    step["args"][0]["visible"][i] = True  # Toggle i'th trace to "visible"
    steps.append(step)

sliders = [dict(
    active=10,
    currentvalue={"prefix": "k1: "},
    pad={"t": 50},
    steps=steps
)]

fig.update_layout(
    sliders=sliders
)


fig.show()