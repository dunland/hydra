# Rhizophora Hydra-Visuals

## 0: drehendes Rechteck, trance ✓

http://localhost:8080/?code=JTJGJTJGJTIwbGljZW5zZWQlMjB3aXRoJTIwQ0MlMjBCWS1OQy1TQSUyMDQuMCUyMGh0dHBzJTNBJTJGJTJGY3JlYXRpdmVjb21tb25zLm9yZyUyRmxpY2Vuc2VzJTJGYnktbmMtc2ElMkY0LjAlMkYlMEElMEElMkYlMkYlMjB2aXN1YWxzJTIwZm9yJTIwcmhpem9waG9yYS0lMEElMkYlMkYlMjBtb2R1bGF0ZWQlMjBmcm9tJTNBJTBBJTBBJTIwJTJGJTJGJTIwUHVlcnRhcyUyMElJJTBBJTJGJTJGJTIwcG9yJTIwQ2VsZXN0ZSUyMEJldGFuY3VyJTBBJTJGJTJGJTIwaHR0cHMlM0ElMkYlMkZnaXRodWIuY29tJTJGZXNzdGViYW4lMEElMEFhLnNldEJpbnMoMTApJTBBYS5zaG93KCklMEFhLnNldFNtb290aCgwLjgwKSUwQSUwQW9zYygoKSUyMCUzRCUzRSUyMCgxJTIwJTJCJTIwYS5mZnQlNUI5JTVEKjIxMyklMkMlMjAwJTJDJTIwMSklMEElMjAlMjAua2FsZWlkKCklMEElMjAlMjAubWFzayhzaGFwZSg0JTJDMC4zJTJDMSkpJTBBJTIwJTIwLm1vZHVsYXRlUm90YXRlKHNoYXBlKDQlMkMwLjElMkMxKSklMEElMjAlMjAubW9kdWxhdGVSb3RhdGUoc2hhcGUoNCUyQzAuMSUyQzAuOSkpJTBBJTIwJTIwLm1vZHVsYXRlUm90YXRlKHNoYXBlKDQlMkMwLjElMkMwLjgpKSUwQSUyMCUyMC5zY2FsZSgoKSUyMCUzRCUzRSUyMCgwLjMlMjAlMkIlMjBhLmZmdCU1QjAlNUQlMjAqJTIwMikpJTBBJTIwJTIwLmFkZChzaGFwZSg0JTJDMC4yJTJDMSkuY29sb3IoMC4zJTJDMSUyQzElMkMwLjUpKSUwQSUyMCUyMC5yb3RhdGUoKCklM0QlM0V0aW1lKSUwQSUyMCUyMC5vdXQoKSUwQQ%3D%3D

``` javascript

// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/

// visuals for rhizophora-
// modulated from:

 // Puertas II
// por Celeste Betancur
// https://github.com/essteban

a.setBins(10)
a.show()
a.setSmooth(0.80)

osc(() => (1 + a.fft[9]*213), 0, 1)
  .kaleid()
  .mask(shape(4,0.3,1))
  .modulateRotate(shape(4,0.1,1))
  .modulateRotate(shape(4,0.1,0.9))
  .modulateRotate(shape(4,0.1,0.8))
  .scale(() => (0.3 + a.fft[0] * 2))
  .add(shape(4,0.2,1).color(0.3,1,1,0.5))
  .rotate(()=>time)
  .out()

```

## 1: warpende pixelfläche ✓ besen

angenehme, langsame Farbübergänge

[code](https://hydra.ojack.xyz/?code=JTJGJTJGJTIwbGljZW5zZWQlMjB3aXRoJTIwQ0MlMjBCWS1OQy1TQSUyMDQuMCUyMGh0dHBzJTNBJTJGJTJGY3JlYXRpdmVjb21tb25zLm9yZyUyRmxpY2Vuc2VzJTJGYnktbmMtc2ElMkY0LjAlMkYlMEElMkYlMkYlMjBieSUyME9saXZpYSUyMEphY2slMEElMkYlMkYlMjAlNDBfb2phY2tfJTBBJTBBJTBBb3NjKDIwJTJDJTIwMC4wMSUyQyUyMDEuMSklMEElMDkua2FsZWlkKDUpJTBBJTA5LmNvbG9yKDIuODMlMkMwLjkxJTJDMC4zOSklMEElMDkucm90YXRlKDAlMkMlMjAwLjEpJTBBJTA5Lm1vZHVsYXRlKG8wJTJDJTIwKCklMjAlM0QlM0UlMjBhLmZmdCU1QjAlNUQlMjAqJTIwMC4zKSUwQSUwOS5zY2FsZSgxLjAxKSUwQSUyMCUyMCUwOS5vdXQobzApJTBB)

``` javascript
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// by Olivia Jack
// @_ojack_


osc(20, 0.01, 1.1)
	.kaleid(5)
	.color(2.83,0.91,0.39)
	.rotate(0, 0.1)
	.modulate(o0, () => a.fft[0] * 0.3)
	.scale(1.01)
  	.out(o0)

```

## 2: frequenzbänder-kreis-o-rama ✓
[code](http://localhost:8080/?code=JTJGJTJGJTIwbGljZW5zZWQlMjB3aXRoJTIwQ0MlMjBCWS1OQy1TQSUyMDQuMCUyMGh0dHBzJTNBJTJGJTJGY3JlYXRpdmVjb21tb25zLm9yZyUyRmxpY2Vuc2VzJTJGYnktbmMtc2ElMkY0LjAlMkYlMEElMkYlMkYlMjAlMjJlZ2clMjBvZiUyMHRoZSUyMHBob2VuaXglMjIlMEElMkYlMkYlMjBBbGV4YW5kcmUlMjBSYW5nZWwlMEElMkYlMkYlMjB3d3cuYWxleGFuZHJlcmFuZ2VsLmFydC5iciUyRmh5ZHJhLmh0bWwlMEElMEFhLnNldEJpbnMoNSklMEFhLnNob3coKSUwQWEuc2V0U21vb3RoKDAuMSklMEElMEFzcGVlZCUzRDEuMiUwQXNoYXBlKDk5JTJDLjE1JTJDLjUpLmNvbG9yKDAlMkMxJTJDMiklMEElMEEuZGlmZiglMjBzaGFwZSgyNDAlMkMuNSUyQzApLnNjcm9sbFgoKCklMjAlM0QlM0UlMjAoLjI1JTIwKiUyMGEuZmZ0JTVCMCU1RCkpLnJvdGF0ZSglMjAoKSUzRCUzRXRpbWUlMkYxMCUyMCkuY29sb3IoMSUyQzAlMkMuNzUpJTIwKSUwQS5kaWZmKCUyMHNoYXBlKDk5JTJDLjQlMkMuMDAyKS5zY3JvbGxYKCgpJTIwJTNEJTNFJTIwKC4zNSUyMColMjBhLmZmdCU1QjElNUQpKS5yb3RhdGUoJTIwKCklM0QlM0V0aW1lJTJGMjAlMjApLmNvbG9yKDElMkMwJTJDLjc1KSUyMCklMEEuZGlmZiglMjBzaGFwZSg5OSUyQy4zJTJDLjAwMikuc2Nyb2xsWCgoKSUyMCUzRCUzRSUyMCguNDUlMjAqJTIwYS5mZnQlNUIyJTVEKSkucm90YXRlKCUyMCgpJTNEJTNFdGltZSUyRjMwJTIwKS5jb2xvcigxJTJDMCUyQy43NSklMjApJTBBLmRpZmYoJTIwc2hhcGUoOTklMkMuMiUyQy4wMDIpLnNjcm9sbFgoKCklMjAlM0QlM0UlMjAoLjU1JTIwKiUyMGEuZmZ0JTVCMyU1RCkpLnJvdGF0ZSglMjAoKSUzRCUzRXRpbWUlMkY0MCUyMCkuY29sb3IoMSUyQzAlMkMuNzUpJTIwKSUwQS5kaWZmKCUyMHNoYXBlKDk5JTJDLjElMkMuMDAyKS5zY3JvbGxYKCgpJTIwJTNEJTNFJTIwKC42NSUyMColMjBhLmZmdCU1QjQlNUQpKS5yb3RhdGUoJTIwKCklM0QlM0V0aW1lJTJGNTAlMjApLmNvbG9yKDElMkMwJTJDLjc1KSUyMCklMEElMEEubW9kdWxhdGVTY2FsZSglMEElMjAlMjBzaGFwZSgyNDAlMkMuNSUyQzApLnNjcm9sbFgoLjA1KS5yb3RhdGUoJTIwKCklM0QlM0V0aW1lJTJGMTAlMjApJTBBJTIwJTIwJTJDJTIwKCklM0QlM0UoTWF0aC5zaW4odGltZSUyRjMpKi4yKSUyQi4yJTIwKSUwQSUwQS5zY2FsZSgxLjYlMkMuNiUyQzEpJTBBLm91dCgpJTBB)

``` javascript
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// "egg of the phoenix"
// Alexandre Rangel
// www.alexandrerangel.art.br/hydra.html

a.setBins(5)
a.show()
a.setSmooth(0.1)

speed=1.2
shape(99,.15,.5).color(0,1,2)

.diff( shape(240,.5,0).scrollX(() => (.25 * a.fft[0])).rotate( ()=>time/10 ).color(1,0,.75) )
.diff( shape(99,.4,.002).scrollX(() => (.35 * a.fft[1])).rotate( ()=>time/20 ).color(1,0,.75) )
.diff( shape(99,.3,.002).scrollX(() => (.45 * a.fft[2])).rotate( ()=>time/30 ).color(1,0,.75) )
.diff( shape(99,.2,.002).scrollX(() => (.55 * a.fft[3])).rotate( ()=>time/40 ).color(1,0,.75) )
.diff( shape(99,.1,.002).scrollX(() => (.65 * a.fft[4])).rotate( ()=>time/50 ).color(1,0,.75) )

.modulateScale(
  shape(240,.5,0).scrollX(.05).rotate( ()=>time/10 )
  , ()=>(Math.sin(time/3)*.2)+.2 )

.scale(1.6,.6,1)
.out()

```

## 3: neuronale netzwerke / schwarzweißkreis + glibberglitzer ✓

schwarzweißer kreis im hintergrund, farbenexplosion darüber

[code](http://localhost:8080/?code=JTJGJTJGJTIwbGljZW5zZWQlMjB3aXRoJTIwQ0MlMjBCWS1OQy1TQSUyMDQuMCUyMGh0dHBzJTNBJTJGJTJGY3JlYXRpdmVjb21tb25zLm9yZyUyRmxpY2Vuc2VzJTJGYnktbmMtc2ElMkY0LjAlMkYlMEElMkYlMkYlMjBlZV8yJTIwLiUyME1VTFRJVkVSU0UlMjAuJTIwdGltZSUyMGFuZCUyMGZlZWRiYWNrJTBBJTJGJTJGJTIwZV9lJTIwJTJGJTJGJTIwJTQwZWVyaWVfZWFyJTBBJTBBYS5zZXRCaW5zKDEwKSUwQWEuc2hvdygpJTBBYS5zZXRTbW9vdGgoMC4xKSUwQSUwQXBhdCUyMCUzRCUyMCgpJTNEJTNFJTBBc29saWQoKSUwQS5sYXllcihzb2xpZCgpLmRpZmYoJTBBJTIwJTIwb3NjKCh0aW1lJTJGMTYpJTIwKiUyMDElMkMlMjAodGltZSUyRjEwMDApJTIwKiUyMDAuMiUyMCUyMCklMEElMjAlMjAlMjAlMjAubXVsdChvc2MoKHRpbWUlMkY4KSUyMColMjAxJTJDJTIwKHRpbWUlMkYxMDA2KSUyMColMjAwLjIlMjAlMjApLnJvdGF0ZSgoKSUyMCUzRCUzRSUyMChhLmZmdCU1QjAlNUQlMjAqJTIwMS41NykpKSUwQSUyMCUyMCUyMCUyMC5tb2R1bGF0ZSgoc2hhcGUoMTA2JTJDMSUyQzAuMDUpKSklMEElMjAlMjAlMjAlMjAubXVsdChzaGFwZSgoKSUyMCUzRCUzRSUyMChhLmZmdCU1QjAlNUQlMjAqJTIwMTA2JTIwJTJCJTIwMTApJTJDMSUyQzAuMDUpKSUwQSUyMCUyMCkpJTBBJTIwJTIwLm1vZHVsYXRlU2NhbGUob3NjKDIlMkMwLjEyNSklMkMwLjEyNSklMEElMkYlMkYlMEFzb2xpZCgpJTBBLmxheWVyKHNvbGlkKDElMkMxJTJDMSklMEElMjAlMjAubXVsdChwYXQoKSUwQSUyMCUyMC5kaWZmKHNyYyhvMCkuc2NhbGUoMC4wKS5tdWx0KHNvbGlkKCklMkMlNUIwLjclMkMwLjYlMkMwLjQlMkMwLjYlNUQpLmthbGVpZCgxLjAxKS5zYXR1cmF0ZSgwLjMpKSUwQSklMEEubGF5ZXIoc29saWQoMSUyQzElMkMxKSUwQSUyMCUyMCUyMCUyMC5tYXNrKCUwQSUyMCUyMCUyMCUyMCUyMCUyMG5vaXNlKDIlMkMwLjA1KSUwQSUyMCUyMCUyMCUyMCUyMCUyMC5pbnZlcnQoKS5jb2xvcmFtYSgyKS5wb3N0ZXJpemUoKCklMjAlM0QlM0UlMjAoYS5mZnQlNUI3JTVEJTIwKiUyMDIwKSUyQzQpLmx1bWEoMC4yNSkudGhyZXNoKDAuNSklMEElMjAlMjAlMjAlMjAlMjAlMjAubW9kdWxhdGVSb3RhdGUob3NjKDElMkMwLjUpKSUwQSUyMCUyMCUyMCUyMCklMEElMjAlMjAlMjAlMjAubXVsdChncmFkaWVudCgwLjUpLmthbGVpZCgxKS5jb2xvcmFtYSgyKS5zYXR1cmF0ZSgxLjEpLmNvbnRyYXN0KDEuNikubXVsdChzb2xpZCgpJTJDMC40NSkpJTBBJTIwJTIwKSklMEElMjAlMjAub3V0KCklMEElMkYlMkYlMEFzcGVlZCUyMCUzRCUyMDAuNSUwQSUwQXJlbmRlcihvMCklMEElMEE%3D)

``` javascript
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// ee_2 . MULTIVERSE . time and feedback
// e_e // @eerie_ear

a.setBins(10)
a.show()
a.setSmooth(0.1)

pat = ()=>
solid()
.layer(solid().diff(
  osc((time/16) * 1, (time/1000) * 0.2  )
    .mult(osc((time/8) * 1, (time/1006) * 0.2  ).rotate(() => (a.fft[0] * 1.57)))
    .modulate((shape(106,1,0.05)))
    .mult(shape(() => (a.fft[0] * 106 + 10),1,0.05))
  ))
  .modulateScale(osc(2,0.125),0.125)
//
solid()
.layer(solid(1,1,1)
  .mult(pat()
  .diff(src(o0).scale(0.0).mult(solid(),[0.7,0.6,0.4,0.6]).kaleid(1.01).saturate(0.3))
)
.layer(solid(1,1,1)
    .mask(
      noise(2,0.05)
      .invert().colorama(2).posterize(() => (a.fft[7] * 20),4).luma(0.25).thresh(0.5)
      .modulateRotate(osc(1,0.5))
    )
    .mult(gradient(0.5).kaleid(1).colorama(2).saturate(1.1).contrast(1.6).mult(solid(),0.45))
  ))
  .out()
//
speed = 0.5

render(o0)
```

## 4: dreiaction

nur wenig reaktiv

[code](http://localhost:8080/?code=JTJGJTJGJTIwbGljZW5zZWQlMjB3aXRoJTIwQ0MlMjBCWS1OQy1TQSUyMDQuMCUyMGh0dHBzJTNBJTJGJTJGY3JlYXRpdmVjb21tb25zLm9yZyUyRmxpY2Vuc2VzJTJGYnktbmMtc2ElMkY0LjAlMkYlMEElMkYlMkYlMjBQZXJwZXR1YWwlMjBlbGV2YXRvciUyMGJ1dHRvbnMlMEElMkYlMkYlMjBCeSUyMEtob3BhcnppJTBBJTJGJTJGJTIwaHR0cCUzQSUyRiUyRmtob3BhcnppLmNvbSUwQSUwQWEuc2V0QmlucygxMCklMEFhLnNob3coKSUwQWEuc2V0U21vb3RoKDAuMSklMEElMEFzaGFwZSgzKS5hZGQob3NjKDElMkMlNUIwLjUlMkMlMjAxLjUlMkMlMjAyLjUlMkMlMjAzLjUlNUQuc21vb3RoJTJDMSklMkMlMjAoKSUyMCUzRCUzRSUyMChhLmZmdCU1QjglNUQpKSUwQSUwOS5hZGQobzElMkMlMjAoKSUyMCUzRCUzRSUyMChNYXRoLnNpbih0aW1lJTJGNCklMjAqJTIwMC43JTIwJTJCJTIwMC4zKSklMEElMDklMkYlMkYucmVwZWF0KDUpJTBBJTIwJTIwJTA5LnNjYWxlKCgpJTNEJTNFTWF0aC5zaW4odGltZSUyMCUyRiUyMDE2KSkucm90YXRlKCgpJTIwJTNEJTNFJTIwKGEuZmZ0JTVCMyU1RCUyMCowLjUpJTJDJTIwKCklMjAlM0QlM0UlMjAoYS5mZnQlNUIwJTVEJTIwKjAuMDUpKSUwQSUwOS5vdXQobzEpJTBBJTBBc3JjKG8xKSUwQSUyMCUyMC5yb3RhdGUoMCUyQzAuMSklMEElMjAlMjAub3V0KCklMEElMEFyZW5kZXIobzApJTBB)

``` javascript
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// Perpetual elevator buttons
// By Khoparzi
// http://khoparzi.com

a.setBins(10)
a.show()
a.setSmooth(0.1)

shape(3).add(osc(1,[0.5, 1.5, 2.5, 3.5].smooth,1), () => (a.fft[8]))
	.add(o1, () => (Math.sin(time/4) * 0.7 + 0.3))
	//.repeat(5)
  	.scale(()=>Math.sin(time / 16)).rotate(() => (a.fft[3] *0.5), () => (a.fft[0] *0.05))
	.out(o1)

src(o1)
  .rotate(0,0.1)
  .out()

render(o0)


```

## 5: roter Kreistanz cinema

[code](http://localhost:8081/?code=JTJGJTJGJTIwbGljZW5zZWQlMjB3aXRoJTIwQ0MlMjBCWS1OQy1TQSUyMDQuMCUyMGh0dHBzJTNBJTJGJTJGY3JlYXRpdmVjb21tb25zLm9yZyUyRmxpY2Vuc2VzJTJGYnktbmMtc2ElMkY0LjAlMkYlMEElMkYlMkZGbG9yJTIwZGUlMjBGdWVnbyUwQSUwQWEuc2V0QmlucygxMCklMEFhLnNob3coKSUwQWEuc2V0U21vb3RoKDAuOCklMEElMEFhcnJheSUyMCUzRCUyMCgpJTIwJTNEJTNFJTIwJTVCMC4xJTJDMC4yJTJDMC44JTVELmZhc3QoMiklMEElMEFzaGFwZSgyMDAlMkMlMjAwLjUlMkMlMjAxLjUpJTBBJTA5LnNjYWxlKCgpJTIwJTNEJTNFJTIwKDAuNSUyMCUyQiUyMGEuZmZ0JTVCMCU1RCUyMColMjAyKSUyQyUyMDAuNSklMEElMDkuY29sb3IoJTVCMC41JTJDJTIwMiU1RC5zbW9vdGgoMSklMkMlMjAwLjMlMkMlMjAwKSUwQSUwOS5yZXBlYXQoMiUyQyUyMDIpJTBBJTA5Lm1vZHVsYXRlU2NhbGUob3NjKDMlMkMlMjAwLjUpJTJDJTIwLTAuNiklMEElMDkuYWRkKG8wJTJDJTIwKCklMjAlM0QlM0UlMjAoYS5mZnQlNUIxJTVEJTIwKiUyMDAuNzIpKSUwQSUwOS5zY2FsZSgoKSUyMCUzRCUzRSUyMCgwLjYlMjAlMkIlMjBhLmZmdCU1QjclNUQlMjAqJTIwMC4xNSkpJTBBJTA5Lm91dCgpJTBBJTBBcmVuZGVyKG8wKQ)

``` javascript
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
//Flor de Fuego

a.setBins(10)
a.show()
a.setSmooth(0.8)

array = () => [0.1,0.2,0.8].fast(2)

shape(200, 0.5, 1.5)
	.scale(() => (0.5 + a.fft[0] * 2), 0.5)
	.color([0.5, 2].smooth(1), 0.3, 0)
	.repeat(2, 2)
	.modulateScale(osc(3, 0.5), -0.6)
	.add(o0, () => (a.fft[1] * 0.72))
	.scale(() => (0.6 + a.fft[7] * 0.15))
	.out()

render(o0)
```

## 6: bunte Amöben / Hühneraugensuppe

[code](https://hydra.ojack.xyz/?code=JTJGJTJGJTIwbGljZW5zZWQlMjB3aXRoJTIwQ0MlMjBCWS1OQy1TQSUyMDQuMCUyMGh0dHBzJTNBJTJGJTJGY3JlYXRpdmVjb21tb25zLm9yZyUyRmxpY2Vuc2VzJTJGYnktbmMtc2ElMkY0LjAlMkYlMEElMkYlMkYlMjAzLjAlMEElMkYlMkYlMjBieSUyMCVDRSU5NE5EUjBNM0QlQ0UlOTQlMEElMkYlMkYlMjBodHRwcyUzQSUyRiUyRnd3dy5pbnN0YWdyYW0uY29tJTJGYW5kcm9tM19kYSUyRiUwQSUwQWEuc2V0QmlucygxMCklMEFhLnNob3coKSUwQWEuc2V0U21vb3RoKDAuOCklMEElMEFub2lzZSgzJTJDMC4zJTJDMykudGhyZXNoKDAuMyUyQzAuMDMpLmRpZmYobzMlMkMwLjMpLm91dChvMSklMEFncmFkaWVudCglNUIwLjMlMkMwLjMlMkMzJTVEKS5kaWZmKG8wKS5ibGVuZChvMSkub3V0KG8zKSUwQXZvcm9ub2koKCklMjAlM0QlM0UlMjAoMTUlMjAlMkIlMjBhLmZmdCU1QjUlNUQlMjAqJTIwMTUpJTJDMyUyQzMwKS5yb3RhdGUoKCklMjAlM0QlM0UlMjAoYS5mZnQlNUI3JTVEJTIwKiUyMDMpJTJDMC4zJTJDMCkubW9kdWxhdGVTY2FsZShvMiUyQygpJTIwJTNEJTNFJTIwKGEuZmZ0JTVCMCU1RCUyMColMjAxMCkpLmNvbG9yKC0zJTJDMyUyQzApLmJyaWdodG5lc3MoMykub3V0KG8wKSUwQXNoYXBlKDMwJTJDMC4zJTJDMSkuaW52ZXJ0KCglN0J0aW1lJTdEKSUzRCUzRU1hdGguc2luKHRpbWUpKjMpLm91dChvMiklMEElMEFyZW5kZXIobzMpJTBBJTBB)

``` javascript
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// 3.0
// by ΔNDR0M3DΔ
// https://www.instagram.com/androm3_da/

a.setBins(10)
a.show()
a.setSmooth(0.8)

noise(3,0.3,3).thresh(0.3,0.03).diff(o3,0.3).out(o1)
gradient([0.3,0.3,3]).diff(o0).blend(o1).out(o3)
voronoi(() => (15 + a.fft[5] * 15),3,30).rotate(() => (a.fft[7] * 3),0.3,0).modulateScale(o2,() => (a.fft[0] * 10)).color(-3,3,0).brightness(3).out(o0)
shape(30,0.3,1).invert(({time})=>Math.sin(time)*3).out(o2)

render(o3)

```

## 7: schwarzes sternenkleid ✓

[code](http://localhost:8080/?code=JTJGJTJGJTIwbGljZW5zZWQlMjB3aXRoJTIwQ0MlMjBCWS1OQy1TQSUyMDQuMCUyMGh0dHBzJTNBJTJGJTJGY3JlYXRpdmVjb21tb25zLm9yZyUyRmxpY2Vuc2VzJTJGYnktbmMtc2ElMkY0LjAlMkYlMEElMkYlMkYlMjBNYWhhbGlhJTIwSC1SJTBBJTJGJTJGJTIwSUclM0ElMjAlNDBtbV9ocl8lMEElMEFhLnNldEJpbnMoMTApJTBBYS5zaG93KCklMEFhLnNldFNjYWxlKDAuMyklMEElMEFzaGFwZSgyMCUyQzAuMSUyQzAuMDEpJTBBJTIwJTIwLnNjYWxlKCgpJTIwJTNEJTNFJTIwKDElMkJhLmZmdCU1QjIlNUQqMykpJTBBJTIwJTIwLnJlcGVhdCgoKSUyMCUzRCUzRSUyMCgxJTJCYS5mZnQlNUIwJTVEKjEwKSklMEElMjAlMjAubW9kdWxhdGVSb3RhdGUobzApJTBBJTIwJTIwLnNjYWxlKCgpJTIwJTNEJTNFJTIwKDAuMSUyQmEuZmZ0JTVCMyU1RCoyKSklMEElMjAlMjAubW9kdWxhdGUobm9pc2UoMiUyQzApKSUwQSUyMCUyMC5yb3RhdGUoMC4xJTJDJTIwKGEuZmZ0JTVCMSU1RCowLjkpKSUwQS5vdXQobzApJTBBJTBBc3JjKG8wKSUwQS5tb2R1bGF0ZShvc2MoNTAwJTJDMCUyQzApKSUwQS5vdXQobzEpJTBBJTBBc3JjKG8xKSUwQS5tb2R1bGF0ZUthbGVpZCh2b3Jvbm9pKCgpJTIwJTNEJTNFJTIwKDAuMDElMkJhLmZmdCU1QjQlNUQpJTJDMC4xJTJDMC4wMSklMkMoKSUyMCUzRCUzRSUyMCgwLjElMkJhLmZmdCU1QjYlNUQpKSUwQS5zY2FsZSgoKSUyMCUzRCUzRSUyMCgxJTJCYS5mZnQlNUI4JTVEKSklMEEub3V0KG8yKSUwQSUwQXJlbmRlcihvMiklMEE%3D)

``` javascript
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// Mahalia H-R
// IG: @mm_hr_

a.setBins(10)
a.show()
a.setScale(0.3)

shape(20,0.1,0.01)
  .scale(() => (1+a.fft[2]*3))
  .repeat(() => (0.1+a.fft[0]*4))
  .modulateRotate(o0)
  .scale(() => (0.1+a.fft[3]*2))
  .modulate(noise(2,0))
  .rotate(0.1, (a.fft[1]*0.9))
.out(o0)

src(o0)
.modulate(osc(500,0,0))
.out(o1)

src(o1)
.modulateKaleid(voronoi(() => (0.01+a.fft[4]),0.1,0.01),() => (0.1+a.fft[6]))
.scale(() => (1+a.fft[8]))
.out(o2)

render(o2)
```

## 8: lila VHS

[code](http://localhost:8080/?code=JTJGJTJGJTIwbGljZW5zZWQlMjB3aXRoJTIwQ0MlMjBCWS1OQy1TQSUyMDQuMCUyMGh0dHBzJTNBJTJGJTJGY3JlYXRpdmVjb21tb25zLm9yZyUyRmxpY2Vuc2VzJTJGYnktbmMtc2ElMkY0LjAlMkYlMEElMkYlMkYlMjBieSUyME1haGFsaWElMjBILVIlMEElMkYlMkYlMjBJRyUzQSUyMG1tX2hyXyUwQSUwQXNoYXBlKCgpJTNEJTNFTWF0aC5zaW4odGltZSklMkIxKjMlMkMlMjAuNSUyQy4wMSklMEEucmVwZWF0KDUlMkMzJTJDJTIwKCklM0QlM0VhLmZmdCU1QjAlNUQqMiUyQyUyMCgpJTNEJTNFYS5mZnQlNUIxJTVEKjIpJTBBLnNjcm9sbFkoLjUlMkMwLjEpJTBBLmxheWVyKCUwQSUyMCUyMHNyYyhvMSklMEElMjAlMjAubWFzayhvMCklMEElMjAlMjAubHVtYSguMDElMkMlMjAuMSklMEElMjAlMjAuaW52ZXJ0KC4yKSUwQSklMEEubW9kdWxhdGUobzElMkMuMDIpJTBBLm91dChvMCklMEElMEFvc2MoNDAlMkMlMjAwLjA5JTJDJTIwMC45KSUwQS5jb2xvciguOSUyQzAlMkM1KSUwQS5tb2R1bGF0ZShvc2MoMTApLnJvdGF0ZSgxJTJDJTIwMC41KSklMEEucm90YXRlKDElMkMlMjAwLjIpJTBBLm91dChvMSklMEElMEFyZW5kZXIobzApJTBBJTBBJTBB)

``` javascript
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// by Mahalia H-R
// IG: mm_hr_

shape(()=>Math.sin(time)+1*3, .5,.01)
.repeat(5,3, ()=>a.fft[0]*2, ()=>a.fft[1]*2)
.scrollY(.5,0.1)
.layer(
  src(o1)
  .mask(o0)
  .luma(.01, .1)
  .invert(.2)
)
.modulate(o1,.02)
.out(o0)

osc(40, 0.09, 0.9)
.color(.9,0,5)
.modulate(osc(10).rotate(1, 0.5))
.rotate(1, 0.2)
.out(o1)

render(o0)
```

## 9: [rotes Höllenauge](https://hydra.ojack.xyz/?code=JTJGJTJGJTIwbGljZW5zZWQlMjB3aXRoJTIwQ0MlMjBCWS1OQy1TQSUyMDQuMCUyMGh0dHBzJTNBJTJGJTJGY3JlYXRpdmVjb21tb25zLm9yZyUyRmxpY2Vuc2VzJTJGYnktbmMtc2ElMkY0LjAlMkYlMEElMkYlMkYlMjBlZV8xJTIwLiUyMEVZRSUyMElOJTIwVEhFJTIwU0tZJTBBJTJGJTJGZXhhbXBsZSUyMG9mJTIwbWFzayUyMGFuZCUyMGZ1bmN0aW9uJTIwbW9kdWxhdGlvbiUwQSUyRiUyRiUyMGVfZSUyMCUyRiUyRiUyMCU0MGVlcmllX2VhciUwQSUwQWEuc2hvdygpJTBBYS5zZXRTY2FsZSgxKSUwQSUwQW5vaXNlKDE4KSUwQSUyMCUyMC5jb2xvcmFtYSgxKSUwQSUyMCUyMC5wb3N0ZXJpemUoMiklMEElMjAlMjAua2FsZWlkKCgpJTIwJTNEJTNFJTIwKDElMjAlMkIlMjBhLmZmdCU1QjAlNUQlMjAqJTIwNSkpJTBBJTIwJTIwLm1hc2soJTBBJTIwJTIwJTIwJTIwc2hhcGUoMjUlMkMlMjAwLjI1KS5tb2R1bGF0ZVNjYWxlKCUwQSUyMCUyMCUyMCUyMCUyMCUyMG5vaXNlKCgpJTIwJTNEJTNFJTIwKDAuNSUyMCUyQiUyMGEuZmZ0JTVCMyU1RCUyMColMjA0MDApJTJDJTIwMC41KSUwQSUyMCUyMCUyMCUyMCklMEElMjAlMjApJTBBJTIwJTIwLm1hc2soc2hhcGUoNDAwJTJDJTIwMSUyQyUyMDIuMTI1KSklMEElMjAlMjAubW9kdWxhdGVTY2FsZShvc2MoNiUyQyUyMDAuMTI1JTJDJTIwMC4wNSkua2FsZWlkKDUwKSklMEElMjAlMjAubXVsdChvc2MoMjAlMkMlMjAwLjA1JTJDJTIwMi40KS5rYWxlaWQoNTApJTJDJTIwMC4yNSklMEElMjAlMjAuc2NhbGUoMS43NSUyQyUyMDAuNjUlMkMlMjAwLjUpJTBBJTIwJTIwLm1vZHVsYXRlKG5vaXNlKDAuNSkpJTBBJTIwJTIwLnNhdHVyYXRlKDYpJTBBJTIwJTIwLnBvc3Rlcml6ZSg0JTJDJTIwMC4yKSUwQSUyMCUyMC5zY2FsZSgxLjUpJTBBJTIwJTIwLm91dCgpJTNCJTBBJTBB)

``` javascript
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// ee_1 . EYE IN THE SKY
//example of mask and function modulation
// e_e // @eerie_ear

a.show()
a.setScale(1)

noise(18)
  .colorama(1)
  .posterize(2)
  .kaleid(() => (1 + a.fft[0] * 5))
  .mask(
    shape(25, 0.25).modulateScale(
      noise(() => (0.5 + a.fft[3] * 400), 0.5)
    )
  )
  .mask(shape(400, 1, 2.125))
  .modulateScale(osc(6, 0.125, 0.05).kaleid(50))
  .mult(osc(20, 0.05, 2.4).kaleid(50), 0.25)
  .scale(1.75, 0.65, 0.5)
  .modulate(noise(0.5))
  .saturate(6)
  .posterize(4, 0.2)
  .scale(1.5)
  .out();


```

## [10](https://hydra.ojack.xyz/?code=JTJGJTJGJTIwbGljZW5zZWQlMjB3aXRoJTIwQ0MlMjBCWS1OQy1TQSUyMDQuMCUyMGh0dHBzJTNBJTJGJTJGY3JlYXRpdmVjb21tb25zLm9yZyUyRmxpY2Vuc2VzJTJGYnktbmMtc2ElMkY0LjAlMkYlMEElMEElMkYlMkZjbG91ZHMlMjBvZiUyMHBhc3NhZ2UlMEElMkYlMkZieSUyME5lc3NvJTBBJTJGJTJGd3d3Lm5lc3NvLnh5eiUwQSUwQWEuc2hvdygpJTBBYS5zZXRTY2FsZSgxKSUwQSUwQXNoYXBlKCU1QjQlMkM1JTJDNiU1RC5mYXN0KDAuMSkuc21vb3RoKDEpJTJDMC4wMDAwMDElMkMlNUIwLjIlMkMwLjclNUQuc21vb3RoKDEpKSUwQS5jb2xvcigwLjIlMkMwLjQlMkMwLjMpJTBBLnNjcm9sbFgoKCklM0QlM0VNYXRoLnNpbih0aW1lKjAuMjcpKSUwQS5hZGQoJTBBJTIwJTIwc2hhcGUoJTVCNCUyQzUlMkM2JTVELmZhc3QoMC4xKS5zbW9vdGgoMSklMkMwLjAwMDAwMSUyQyU1QjAuMiUyQzAuNyUyQzAuNSUyQzAuMyU1RC5zbW9vdGgoMSkpJTBBJTIwJTIwLmNvbG9yKCgpJTIwJTNEJTNFJTIwKDAuMSUyMCUyQiUyMGEuZmZ0JTVCMCU1RCUyMColMjAwLjYpJTJDJTIwKCklMjAlM0QlM0UlMjAoMC4xJTIwJTJCJTIwYS5mZnQlNUIwJTVEJTIwKiUyMDAuMiklMkMlMjAoKSUyMCUzRCUzRSUyMCgwLjElMjAlMkIlMjBhLmZmdCU1QjAlNUQlMjAqJTIwMC41KSklMEElMjAlMjAuc2Nyb2xsWSgwLjM1KSUwQSUyMCUyMC5zY3JvbGxYKCgpJTNEJTNFTWF0aC5zaW4odGltZSowLjMzKSkpJTBBLmFkZCglMEElMjAlMjBzaGFwZSglNUI0JTJDNSUyQzYlNUQuZmFzdCgwLjEpLnNtb290aCgxKSUyQzAuMDAwMDAxJTJDJTVCMC4yJTJDMC43JTJDMC4zJTVELnNtb290aCgxKSklMEElMjAlMjAuY29sb3IoMC4yJTJDMC40JTJDMC42KSUwQSUyMCUyMC5zY3JvbGxZKC0wLjM1KSUwQSUyMCUyMC5zY3JvbGxYKCgpJTNEJTNFTWF0aC5zaW4odGltZSowLjQxKSotMSkpJTBBLmFkZCglMEElMjAlMjAlMjAlMjAlMjAlMjBzcmMobzApLnNoaWZ0KDAuMDAxJTJDMC4wMSUyQzAuMDAxKSUwQSUyMCUyMCUyMCUyMCUyMCUyMC5zY3JvbGxYKCU1QjAuMDUlMkMtMC4wNSU1RC5mYXN0KDAuMSkuc21vb3RoKDEpKSUwQSUyMCUyMCUyMCUyMCUyMCUyMC5zY2FsZSglNUIxLjA1JTJDMC45JTVELmZhc3QoMC4zKS5zbW9vdGgoMSklMkMlNUIxLjA1JTJDMC45JTJDMSU1RC5mYXN0KDAuMjkpLnNtb290aCgxKSklMEElMjAlMjAlMjAlMjAlMjAlMjAlMkMwLjg1KSUwQS5tb2R1bGF0ZSh2b3Jvbm9pKDEwJTJDMiUyQzIpKSUwQS5vdXQoKSUwQQ)

## [11](https://hydra.ojack.xyz/?code=JTJGJTJGJTIwbGljZW5zZWQlMjB3aXRoJTIwQ0MlMjBCWS1OQy1TQSUyMDQuMCUyMGh0dHBzJTNBJTJGJTJGY3JlYXRpdmVjb21tb25zLm9yZyUyRmxpY2Vuc2VzJTJGYnktbmMtc2ElMkY0LjAlMkYlMEElMkYlMkZlZV81JTIwLiUyMEZVR0lUSVZFJTIwR0VPTUVUUlklMjBWSFMlMjAuJTIwYXVkaW9yZWFjdGl2ZSUyMHNoYXBlcyUyMGFuZCUyMGdyYWRpZW50cyUwQSUyRiUyRiUyMGVfZSUyMCUyRiUyRiUyMCU0MGVlcmllX2VhciUwQSUyRiUyRiUwQXMlMjAlM0QlMjAoKSUyMCUzRCUzRSUwQSUwOXNoYXBlKDQpJTBBJTA5LnNjcm9sbFgoJTVCLTAuNSUyQyUyMC0wLjIlMkMlMjAwLjMlMkMlMjAtMC4xJTJDJTIwLTAuMSU1RC5zbW9vdGgoMC4xKSUwQSUwOSUwOS5mYXN0KDAuMykpJTBBJTA5LnNjcm9sbFkoJTVCMC4yNSUyQyUyMC0wLjIlMkMlMjAwLjMlMkMlMjAtMC4xJTJDJTIwMC4yJTVELnNtb290aCgwLjkpJTBBJTA5JTA5LmZhc3QoMC4xNSkpJTBBJTJGJTJGJTBBc29saWQoKSUwQSUwOS5hZGQoZ3JhZGllbnQoMyUyQyUyMDAuMDUpJTBBJTA5JTA5LnJvdGF0ZSgwLjA1JTJDJTIwLTAuMiklMEElMDklMDkucG9zdGVyaXplKDIpJTBBJTA5JTA5LmNvbnRyYXN0KDAuNiklMkMlMjAlNUIxJTJDJTIwMCUyQyUyMDElMkMlMjAwLjUlMkMlMjAwJTJDJTIwMC42JTVELnNtb290aCgwLjkpKSUwQSUwOS5hZGQocygpKSUwQSUwOS5tdWx0KHMoKSUwQSUwOSUwOS5zY2FsZSgwLjgpJTBBJTA5JTA5LnNjcm9sbFgoMC4wMSklMEElMDklMDkuc2Nyb2xsWSgtMC4wMSklMEElMDklMDkucm90YXRlKDAuMiUyQyUyMDAuMDYpJTBBJTA5JTA5LmFkZChncmFkaWVudCgzKSUwQSUwOSUwOSUwOS5jb250cmFzdCgwLjYpJTJDJTIwJTVCMSUyQyUyMDAlMkMlMjAxJTJDJTIwMC41JTVELnNtb290aCgwLjkpJTJDJTIwMC41KSUwQSUwOSUwOS5tdWx0KHNyYyhvMCklMEElMDklMDklMDkuc2NhbGUoMC45OCklMkMlMjAoKSUyMCUzRCUzRSUyMGEuZmZ0JTVCMCU1RCUyMColMjA5KSUwQSUwOSklMEElMDkuZGlmZihzKCklMEElMDklMDkubW9kdWxhdGUoc2hhcGUoNTAwKSklMEElMDklMDkuc2NhbGUoJTVCMS43JTJDJTIwMS4yJTVELnNtb290aCgwLjkpJTBBJTA5JTA5JTA5LmZhc3QoMC4wNSkpKSUwQSUwOS5hZGQoZ3JhZGllbnQoMiklMEElMDklMDkuaW52ZXJ0KCklMkMlMjAoKSUyMCUzRCUzRSUyMGEuZmZ0JTVCMiU1RCklMEElMDkubXVsdChncmFkaWVudCgoKSUyMCUzRCUzRSUyMGEuZmZ0JTVCMyU1RCUyMColMjA4KSklMEElMDkuYmxlbmQoc3JjKChvMCklMkMlMjAoKSUyMCUzRCUzRSUyMGEuZmZ0JTVCMSU1RCUyMColMjA0MCkpJTBBJTA5LmFkZCh2b3Jvbm9pKCgpJTIwJTNEJTNFJTIwYS5mZnQlNUIxJTVEJTJDJTIwKCklMjAlM0QlM0UlMjBhLmZmdCU1QjMlNUQlMkMlMjAoKSUyMCUzRCUzRSUyMGEuZmZ0JTVCMCU1RCklMEElMDklMDkudGhyZXNoKDAuNyklMEElMDklMDkucG9zdGVyaXplKDIlMkMlMjA0KSUwQSUwOSUwOS5sdW1hKDAuOSklMEElMDklMDkuc2Nyb2xsWSgxJTJDJTIwKCklMjAlM0QlM0UlMjBhLmZmdCU1QjAlNUQlMjAlMkYlMjAzMCklMEElMDklMDkuY29sb3JhbWEoMyklMEElMDklMDkudGhyZXNoKCgpJTIwJTNEJTNFJTIwYS5mZnQlNUIxJTVEKSUwQSUwOSUwOS5zY2FsZSgoKSUyMCUzRCUzRSUyMGEuZmZ0JTVCMyU1RCUyMColMjAyKSUyQyUyMCgpJTIwJTNEJTNFJTIwYS5mZnQlNUIwJTVEJTIwJTJGJTIwMiklMEElMDkub3V0KCklMEElMkYlMkYlMEFzcGVlZCUyMCUzRCUyMDElMEElMEFhLnNldFNtb290aCgwLjk2KQ)

``` javascript
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
//ee_5 . FUGITIVE GEOMETRY VHS . audioreactive shapes and gradients
// e_e // @eerie_ear
//
s = () =>
	shape(4)
	.scrollX([-0.5, -0.2, 0.3, -0.1, -0.1].smooth(0.1)
		.fast(0.3))
	.scrollY([0.25, -0.2, 0.3, -0.1, 0.2].smooth(0.9)
		.fast(0.15))
//
solid()
	.add(gradient(3, 0.05)
		.rotate(0.05, -0.2)
		.posterize(2)
		.contrast(0.6), [1, 0, 1, 0.5, 0, 0.6].smooth(0.9))
	.add(s())
	.mult(s()
		.scale(0.8)
		.scrollX(0.01)
		.scrollY(-0.01)
		.rotate(0.2, 0.06)
		.add(gradient(3)
			.contrast(0.6), [1, 0, 1, 0.5].smooth(0.9), 0.5)
		.mult(src(o0)
			.scale(0.98), () => a.fft[0] * 9)
	)
	.diff(s()
		.modulate(shape(500))
		.scale([1.7, 1.2].smooth(0.9)
			.fast(0.05)))
	.add(gradient(2)
		.invert(), () => a.fft[2])
	.mult(gradient(() => a.fft[3] * 8))
	.blend(src((o0), () => a.fft[1] * 40))
	.add(voronoi(() => a.fft[1], () => a.fft[3], () => a.fft[0])
		.thresh(0.7)
		.posterize(2, 4)
		.luma(0.9)
		.scrollY(1, () => a.fft[0] / 30)
		.colorama(3)
		.thresh(() => a.fft[1])
		.scale(() => a.fft[3] * 2), () => a.fft[0] / 2)
	.out()
//
speed = 1

a.setSmooth(0.96)
```

``` javascript
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/

//clouds of passage
//by Nesso
//www.nesso.xyz

a.show()
a.setScale(1)

shape([4,5,6].fast(0.1).smooth(1),0.000001,[0.2,0.7].smooth(1))
.color(0.2,0.4,0.3)
.scrollX(()=>Math.sin(time*0.27))
.add(
  shape([4,5,6].fast(0.1).smooth(1),0.000001,[0.2,0.7,0.5,0.3].smooth(1))
  .color(() => (0.1 + a.fft[0] * 0.6), () => (0.1 + a.fft[0] * 0.2), () => (0.1 + a.fft[0] * 0.5))
  .scrollY(0.35)
  .scrollX(()=>Math.sin(time*0.33)))
.add(
  shape([4,5,6].fast(0.1).smooth(1),0.000001,[0.2,0.7,0.3].smooth(1))
  .color(0.2,0.4,0.6)
  .scrollY(-0.35)
  .scrollX(()=>Math.sin(time*0.41)*-1))
.add(
      src(o0).shift(0.001,0.01,0.001)
      .scrollX([0.05,-0.05].fast(0.1).smooth(1))
      .scale([1.05,0.9].fast(0.3).smooth(1),[1.05,0.9,1].fast(0.29).smooth(1))
      ,0.85)
.modulate(voronoi(10,2,2))
.out()
```

---

## (wabergrid-fläche) OHNE REAKTION

[code](http://localhost:8080/?code=JTJGJTJGJTIwbGljZW5zZWQlMjB3aXRoJTIwQ0MlMjBCWS1OQy1TQSUyMDQuMCUyMGh0dHBzJTNBJTJGJTJGY3JlYXRpdmVjb21tb25zLm9yZyUyRmxpY2Vuc2VzJTJGYnktbmMtc2ElMkY0LjAlMkYlMEElMkYlMkZyYW5kb20lMjB0cnlwb3Bob2JpYSUyMC0lMjBjaGFuZ2VzJTIwZXZlcnl0aW1lJTIweW91JTIwbG9hZCUyMGl0ISUwQSUyRiUyRmJ5JTIwUml0Y2hzZSUwQSUyRiUyRmluc3RhZ3JhbS5jb20lMkZyaXRjaHNlJTBBJTBBYS5zZXRTY2FsZSgwLjEpJTBBYS5zaG93KCklMEElMEFmdW5jdGlvbiUyMGxvdygpJTIwJTdCJTIwcmV0dXJuJTIwKCgpJTIwJTNEJTNFJTIwKGEuZmZ0JTVCMCU1RCkpJTdEJTBBJTIwJTBBZnVuY3Rpb24lMjByKG1pbiUzRDAlMkNtYXglM0QxKSUyMCU3QiUyMHJldHVybiUyME1hdGgucmFuZG9tKCkqKG1heC1taW4pJTJCbWluJTNCJTIwJTdEJTBBJTIwJTBBc29saWQoMSUyQzElMkMxKSUwQSUyMCUyMCUwOS5kaWZmKHNoYXBlKCU1QjQlMkM0JTJDNCUyQzI0JTVELnNtb290aCgpLmZhc3QoLjUpJTJDcigwLjYlMkMwLjkzKSUyQy4wOSkucmVwZWF0KDIwJTJDMTApKSUwQSUwOS5tb2R1bGF0ZVNjYWxlKG9zYyg4KS5yb3RhdGUocigtLjUlMkMuNSkpJTJDLjUyKSUwQSUwOS5hZGQoJTBBJTIwJTIwJTA5JTA5c3JjKG8wKS5zY2FsZSgwLjk2NSkucm90YXRlKC4wMTIqKE1hdGgucm91bmQocigtMiUyQzEpKSkpJTBBJTIwJTIwJTA5JTA5LmNvbG9yKHIoKSUyQ3IoKSUyQ3IoKSklMEElMjAlMjAlMjAlMjAlMDkubW9kdWxhdGVSb3RhdGUobzAlMkNyKDAlMkMwLjUpKSUwQSUyMCUyMCUwOSUwOS5icmlnaHRuZXNzKC4xNSklMEElMjAlMjAlMDklMDklMkMwLjcpJTBBJTA5Lm91dCgpJTBB)

``` javascript
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
//random trypophobia - changes everytime you load it!
//by Ritchse
//instagram.com/ritchse

a.setScale(0.1)
a.show()

function low() { return (() => (a.fft[0]))}

function r(min=0,max=1) { return Math.random()*(max-min)+min; }

solid(1,1,1)
  	.diff(shape([4,4,4,24].smooth().fast(.5),r(0.6,0.93),.09).repeat(20,10))
	.modulateScale(osc(8).rotate(r(-.5,.5)),.52)
	.add(
  		src(o0).scale(0.965).rotate(.012*(Math.round(r(-2,1))))
  		.color(r(),r(),r())
    	.modulateRotate(o0,r(0,0.5))
  		.brightness(.15)
  		,0.7)
	.out()
```