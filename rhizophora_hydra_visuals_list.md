# Rhizophora Hydra-Visuals

## 1: drehendes Rechteck, trance

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

## 2: warpende pixelfläche

[code](http://localhost:8080/?code=JTJGJTJGJTIwbGljZW5zZWQlMjB3aXRoJTIwQ0MlMjBCWS1OQy1TQSUyMDQuMCUyMGh0dHBzJTNBJTJGJTJGY3JlYXRpdmVjb21tb25zLm9yZyUyRmxpY2Vuc2VzJTJGYnktbmMtc2ElMkY0LjAlMkYlMEElMkYlMkYlMjBieSUyME9saXZpYSUyMEphY2slMEElMkYlMkYlMjBodHRwcyUzQSUyRiUyRm9qYWNrLmdpdGh1Yi5pbyUwQSUwQWEuc2V0QmlucygxMCklMEFhLnNob3coKSUwQWEuc2V0U21vb3RoKDAuNDApJTBBJTBBaGlnaCUyMCUzRCUyMCgpJTIwJTNEJTNFJTIwJTdCYS5mZnQlNUI3JTVEJTdEJTBBJTBBb3NjKDMlMkMlMjAwLjElMkMlMjAwLjgpJTBBJTA5LmNvbG9yKDAuNCUyQyUyMDAuMiUyQyUyMC0wLjEpJTBBJTA5LnJvdGF0ZSgzLjMwJTJDJTIwMC4xKSUwQSUwOS5waXhlbGF0ZShoaWdoJTJDJTIwaGlnaCklMEElMjAlMjAlMkYlMkYoKSUyMCUzRCUzRSUyMChhLmZmdCU1QjAlNUQlMjAlMkIlMjAxKSUyQyUyMDIwKSUwQSUwOS5tb2R1bGF0ZShub2lzZSgyLjUpJTJDJTIwKCklMjAlM0QlM0UlMjAoNSUyMColMjBhLmZmdCU1QjElNUQpKSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRk1hdGguc2luKDAuMDglMjAqJTIwdGltZSkpJTBBJTA5Lm91dChvMCk%3D)

``` javascript
a.setBins(10)
a.show()
a.setSmooth(0.40)

high = () => {a.fft[7]}

osc(3, 0.1, 0.8)
	.color(0.4, 0.2, -0.1)
	.rotate(3.30, 0.1)
	.pixelate(high, high)
  //() => (a.fft[0] + 1), 20)
	.modulate(noise(2.5), () => (5 * a.fft[1]))
	.out(o0)
```

## 3: frequenzbänder-kreis-o-rama
[code](http://localhost:8080/?code=JTJGJTJGJTIwbGljZW5zZWQlMjB3aXRoJTIwQ0MlMjBCWS1OQy1TQSUyMDQuMCUyMGh0dHBzJTNBJTJGJTJGY3JlYXRpdmVjb21tb25zLm9yZyUyRmxpY2Vuc2VzJTJGYnktbmMtc2ElMkY0LjAlMkYlMEElMkYlMkYlMjAlMjJlZ2clMjBvZiUyMHRoZSUyMHBob2VuaXglMjIlMEElMkYlMkYlMjBBbGV4YW5kcmUlMjBSYW5nZWwlMEElMkYlMkYlMjB3d3cuYWxleGFuZHJlcmFuZ2VsLmFydC5iciUyRmh5ZHJhLmh0bWwlMEElMEFhLnNldEJpbnMoMTApJTBBYS5zaG93KCklMEFhLnNldFNtb290aCgwLjEpJTBBJTBBc3BlZWQlM0QxLjIlMEFzaGFwZSg5OSUyQy4xNSUyQy41KS5jb2xvcigwJTJDMSUyQzIpJTBBJTBBLmRpZmYoJTIwc2hhcGUoMjQwJTJDLjUlMkMwKS5zY3JvbGxYKCgpJTIwJTNEJTNFJTIwKC4yNSUyMColMjBhLmZmdCU1QjAlNUQpKS5yb3RhdGUoJTIwKCklM0QlM0V0aW1lJTJGMTAlMjApLmNvbG9yKDElMkMwJTJDLjc1KSUyMCklMEEuZGlmZiglMjBzaGFwZSg5OSUyQy40JTJDLjAwMikuc2Nyb2xsWCgoKSUyMCUzRCUzRSUyMCguMzUlMjAqJTIwYS5mZnQlNUIyJTVEKSkucm90YXRlKCUyMCgpJTNEJTNFdGltZSUyRjIwJTIwKS5jb2xvcigxJTJDMCUyQy43NSklMjApJTBBLmRpZmYoJTIwc2hhcGUoOTklMkMuMyUyQy4wMDIpLnNjcm9sbFgoKCklMjAlM0QlM0UlMjAoLjQ1JTIwKiUyMGEuZmZ0JTVCNCU1RCkpLnJvdGF0ZSglMjAoKSUzRCUzRXRpbWUlMkYzMCUyMCkuY29sb3IoMSUyQzAlMkMuNzUpJTIwKSUwQS5kaWZmKCUyMHNoYXBlKDk5JTJDLjIlMkMuMDAyKS5zY3JvbGxYKCgpJTIwJTNEJTNFJTIwKC41NSUyMColMjBhLmZmdCU1QjYlNUQpKS5yb3RhdGUoJTIwKCklM0QlM0V0aW1lJTJGNDAlMjApLmNvbG9yKDElMkMwJTJDLjc1KSUyMCklMEEuZGlmZiglMjBzaGFwZSg5OSUyQy4xJTJDLjAwMikuc2Nyb2xsWCgoKSUyMCUzRCUzRSUyMCguNjUlMjAqJTIwYS5mZnQlNUI4JTVEKSkucm90YXRlKCUyMCgpJTNEJTNFdGltZSUyRjUwJTIwKS5jb2xvcigxJTJDMCUyQy43NSklMjApJTBBJTBBLm1vZHVsYXRlU2NhbGUoJTBBJTIwJTIwc2hhcGUoMjQwJTJDLjUlMkMwKS5zY3JvbGxYKC4wNSkucm90YXRlKCUyMCgpJTNEJTNFdGltZSUyRjEwJTIwKSUwQSUyMCUyMCUyQyUyMCgpJTNEJTNFKE1hdGguc2luKHRpbWUlMkYzKSouMiklMkIuMiUyMCklMEElMEEuc2NhbGUoMS42JTJDLjYlMkMxKSUwQS5vdXQoKSUwQQ%3D%3D)

``` javascript
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// "egg of the phoenix"
// Alexandre Rangel
// www.alexandrerangel.art.br/hydra.html

a.setBins(10)
a.show()
a.setSmooth(0.1)

speed=1.2
shape(99,.15,.5).color(0,1,2)

.diff( shape(240,.5,0).scrollX(() => (.25 * a.fft[0])).rotate( ()=>time/10 ).color(1,0,.75) )
.diff( shape(99,.4,.002).scrollX(() => (.35 * a.fft[2])).rotate( ()=>time/20 ).color(1,0,.75) )
.diff( shape(99,.3,.002).scrollX(() => (.45 * a.fft[4])).rotate( ()=>time/30 ).color(1,0,.75) )
.diff( shape(99,.2,.002).scrollX(() => (.55 * a.fft[6])).rotate( ()=>time/40 ).color(1,0,.75) )
.diff( shape(99,.1,.002).scrollX(() => (.65 * a.fft[8])).rotate( ()=>time/50 ).color(1,0,.75) )

.modulateScale(
  shape(240,.5,0).scrollX(.05).rotate( ()=>time/10 )
  , ()=>(Math.sin(time/3)*.2)+.2 )

.scale(1.6,.6,1)
.out()
```

## 4: neuronale netzwerke / schwarzweißkreis + glibberglitzer

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

## 5: dreiaction

[code](https://hydra.ojack.xyz/?code=JTJGJTJGJTIwbGljZW5zZWQlMjB3aXRoJTIwQ0MlMjBCWS1OQy1TQSUyMDQuMCUyMGh0dHBzJTNBJTJGJTJGY3JlYXRpdmVjb21tb25zLm9yZyUyRmxpY2Vuc2VzJTJGYnktbmMtc2ElMkY0LjAlMkYlMEElMkYlMkYlMjBQZXJwZXR1YWwlMjBlbGV2YXRvciUyMGJ1dHRvbnMlMEElMkYlMkYlMjBCeSUyMEtob3BhcnppJTBBJTJGJTJGJTIwaHR0cCUzQSUyRiUyRmtob3BhcnppLmNvbSUwQSUwQWEuc2V0QmlucygxMCklMEFhLnNob3coKSUwQWEuc2V0U21vb3RoKDAuMSklMEElMEFzaGFwZSgzKS5hZGQob3NjKDElMkMlNUIwLjUlMkMlMjAxLjUlMkMlMjAyLjUlMkMlMjAzLjUlNUQuc21vb3RoJTJDMSklMkMlMjAoKSUyMCUzRCUzRSUyMChhLmZmdCU1QjglNUQpKSUwQSUwOS5hZGQobzElMkMlMjAoKSUyMCUzRCUzRSUyMChNYXRoLnNpbih0aW1lJTJGNCklMjAqJTIwMC43JTIwJTJCJTIwMC4zKSklMEElMDklMkYlMkYucmVwZWF0KDUpJTBBJTIwJTIwJTA5LnNjYWxlKCgpJTNEJTNFTWF0aC5zaW4odGltZSUyMCUyRiUyMDE2KSkucm90YXRlKCgpJTIwJTNEJTNFJTIwKGEuZmZ0JTVCMyU1RCUyMCowLjA1KSUyQyUyMCgpJTIwJTNEJTNFJTIwKGEuZmZ0JTVCMCU1RCUyMCowLjAwMDUpKSUwQSUwOS5vdXQobzEpJTBBJTBBc3JjKG8xKSUwQSUyMCUyMC5yb3RhdGUoMCUyQzAuMSklMEElMjAlMjAub3V0KCklMEElMEFyZW5kZXIobzApJTBB)

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
  	.scale(()=>Math.sin(time / 16)).rotate(() => (a.fft[3] *0.05), () => (a.fft[0] *0.0005))
	.out(o1)

src(o1)
  .rotate(0,0.1)
  .out()

render(o0)
```

## 6: roter Kreistanz cinema

[code](https://hydra.ojack.xyz/?code=JTJGJTJGJTIwbGljZW5zZWQlMjB3aXRoJTIwQ0MlMjBCWS1OQy1TQSUyMDQuMCUyMGh0dHBzJTNBJTJGJTJGY3JlYXRpdmVjb21tb25zLm9yZyUyRmxpY2Vuc2VzJTJGYnktbmMtc2ElMkY0LjAlMkYlMEElMkYlMkZGbG9yJTIwZGUlMjBGdWVnbyUwQSUwQWEuc2V0QmlucygxMCklMEFhLnNob3coKSUwQWEuc2V0U21vb3RoKDAuOCklMEElMEFhcnJheSUyMCUzRCUyMCgpJTIwJTNEJTNFJTIwJTVCMC4xJTJDMC4yJTJDMC44JTVELmZhc3QoMiklMEElMEFzaGFwZSgyMDAlMkMlMjAwLjUlMkMlMjAxLjUpJTBBJTA5LnNjYWxlKDAuNSUyQyUyMDAuNSklMEElMDkuY29sb3IoJTVCMC41JTJDJTIwMiU1RC5zbW9vdGgoMSklMkMlMjAwLjMlMkMlMjAwKSUwQSUwOS5yZXBlYXQoMiUyQyUyMDIpJTBBJTA5Lm1vZHVsYXRlU2NhbGUob3NjKDMlMkMlMjAwLjUpJTJDJTIwLTAuNiklMEElMDkuYWRkKG8wJTJDJTIwKCklMjAlM0QlM0UlMjAoYS5mZnQlNUIwJTVEJTIwKiUyMDAuNzIpKSUwQSUwOS5zY2FsZSgoKSUyMCUzRCUzRSUyMCgwLjYlMjAlMkIlMjBhLmZmdCU1QjclNUQlMjAqJTIwMC4xNSkpJTBBJTA5Lm91dCgpJTBBJTBBcmVuZGVyKG8wKQ%3D%3D)

``` javascript
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
//Flor de Fuego

a.setBins(10)
a.show()
a.setSmooth(0.8)

array = () => [0.1,0.2,0.8].fast(2)

shape(200, 0.5, 1.5)
	.scale(0.5, 0.5)
	.color([0.5, 2].smooth(1), 0.3, 0)
	.repeat(2, 2)
	.modulateScale(osc(3, 0.5), -0.6)
	.add(o0, () => (a.fft[0] * 0.72))
	.scale(() => (0.6 + a.fft[7] * 0.15))
	.out()

render(o0)
```

## 7: bunte Amöben / Hühneraugensuppe

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

## 8: verflossene webcam

[code](https://hydra.ojack.xyz/?code=JTJGJTJGJTIwbGljZW5zZWQlMjB3aXRoJTIwQ0MlMjBCWS1OQy1TQSUyMDQuMCUyMGh0dHBzJTNBJTJGJTJGY3JlYXRpdmVjb21tb25zLm9yZyUyRmxpY2Vuc2VzJTJGYnktbmMtc2ElMkY0LjAlMkYlMEElMkYlMkZIeWRyYSUyMEdsaXRjaHklMjBTbGl0JTIwU2NhbiUwQSUyRiUyRkZsb3IlMjBkZSUyMEZ1ZWdvJTBBJTJGJTJGaHR0cHMlM0ElMkYlMkZmbG9yZGVmdWVnby5naXRodWIuaW8lMkYlMjAlMEFzMC5pbml0Q2FtKCklMEFzcmMoczApLnNhdHVyYXRlKDIpLmNvbnRyYXN0KDEuMykubGF5ZXIoc3JjKG8wKS5tYXNrKHNoYXBlKDQlMkMyKS5zY2FsZSgwLjUlMkMwLjcpLnNjcm9sbFgoMC4yNSkpLnNjcm9sbFgoMC4wMDEpKS5tb2R1bGF0ZShvMCUyQzAuMDAxKS5vdXQobzApJTBBJTBBJTBB)

``` javascript
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
//Hydra Glitchy Slit Scan
//Flor de Fuego
//https://flordefuego.github.io/ 
s0.initCam()
src(s0).saturate(2).contrast(1.3).layer(src(o0).mask(shape(4,2).scale(0.5,0.7).scrollX(0.25)).scrollX(0.001)).modulate(o0,0.001).out(o0)
```

## 9: schwarzes sternenkleid

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

## 10: lila VHS

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