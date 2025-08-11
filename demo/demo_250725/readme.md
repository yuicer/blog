


rect => circle
p_left_top, p_right_bottom => p_center + RADIUS

(segment_r_0,segment_r_1,segment_r_2,segment_r_3) => rect
(segment_c_0,segment_c_1,segment_c_2,segment_c_3) => circle


segment_r_0 => segment_c_0

segment_r_0 => (pR0,pR1,pR2,pR3)
segment_c_0 => (pC0,pC1,pC2,pC3)

pR0(0,0) => pC0(1,1)

f(t) = pA0 * (1-t) + pB0 * t

t = 0  p = (0,1)
t = 1  p = (1,1)
t=0.3  p = (0.3,0.3)
