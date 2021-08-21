# -*- coding: utf-8 -*-
"""
Created on Fri Jul 23 16:56:35 2021

@author: Meghna
"""


import numpy as np
import matplotlib.pyplot as plt

def f(r,t):  #change to r where r[0] = e, r[1] = a
    A = r[0]
    B = r[1] #we'll have to get B initial value from the slider
    k = 0.3 #we'll have to get K value from slider
    f2 = -k*A*B
    return(np.array([f2],float))

r = np.array([10,10],float) #intial values of A and B, again 
                            #we'll have to get B initial value from the slider and do the calcs
                            
#different a and b values, these are the start and stop values in your code
a = 1
b = 10
n= 10000
h = (b-a)/n

tlist= np.arange(a,b,h) #list for time basically xhist in your code
A_list = [] #list for storing all the A values basically yhist in your code
B_list = [] #list for storing all the A values basically yhist in your code

for t in tlist:
    A_list.append(r[0])
    B_list.append(r[1])
    k_1 = h*f(r, t)
    k_2 = h*f((r+ 0.5*k_1),(t+ 0.5*h))
    k_3 = h*f((r+ 0.5*k_2),(t+ 0.5*h))
    k_4 = h*f((r+k_3),(t+h))
    r = r + ((k_1+ 2*k_2 + 2*k_3 + k_4)/6) 
    
A_list_np = np.array(A_list)
B_list_np = np.array(B_list)
conc_list = A_list_np* B_list_np
plt.figure(1)
plt.plot(tlist, conc_list)
plt.title("second order")
plt.xlabel("t")
plt.ylabel("reactant concs")
plt.show()