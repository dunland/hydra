// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// Mahalia H-R
// IG: @mm_hr_

a.setBins(10)
a.show()
a.setScale(0.3)

shape(() => {return cc[60] + cc[64]}, 0.1, 0.01)
	.repeat(1)
	.modulateRotate(o0)
.scrollX(cc[64] )
	.scale(() => (cc[70] + cc[61]))
	.modulate(noise(1, cc[64]))
	.rotate(cc[62], (cc[71]))
	.out(o0)

src(o0)
	.modulate(osc(100, 0, 0))
	.out(o1)

src(o1)
	.modulateKaleid(voronoi(() => (cc[72]), 0.1, 0.01), () => (0.1 + cc[73]))
	.scale(() => (1 + cc[61]))
	.out(o2)
src(o2).colorama(() => cc[74]).posterize().out(o3)

render(o3)