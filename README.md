# Custom Hydra

## Usage

**WebMidi muss in Google Chrome gestartet werden!**
In Firefox und Chromium erhalte ich folgenden Fehler: `InvalidStateError: Platform dependent initialization failed.`

1. `npm run dev` bzw. `yarn dev`
    -> Änderungen werden automatisch via `browserify` zu `bundle.js` geschrieben. Entry point ist `./index.js`. `index.html` lädt dann `bundle.js` – `bundle.min.js` wird nur mit `npm run build` erstellt.
2. starte SUPERMUSCLE
3. `python3 serial_to_hydra_url.py`

* CTRL-Enter: run a line of code
* CTRL-Shift-Enter: run all code on screen
* ALT-Enter: run a block
* CTRL-Shift-H: hide or show code
* CTRL-Shift-F: format code using [Prettier](https://prettier.io/)
* CTRL-Shift-S: Save screenshot and download as local file
* CTRL-Shift-G: Share to twitter (if available). Shares to [@hydra_patterns](https://twitter.com/hydra_patterns)

- 'Shift-Ctrl-L': 'gallery:saveToURL',
- 'Shift-Ctrl-H': 'hideAll',
- 'Shift-Ctrl-S': 'screencap',
- 'Shift-Ctrl-1': 'gallery:showExample',
- 'Shift-Ctrl-2': 'editor:randomize'

## Log

31.05.2024

### WebMidi

- nutze webmidi/cjs für commonJS style (`require` statt `import`) – wird ursprünglich so mit Node.js genutzt und v.a. auch mit bundlern

15.06.2024

MIDI ist jetzt implementiert. Funktionierendes Beispielskript:

``` javascript
// example midi mappings - Korg NanoKontrol2 CCs

// color controls with first MIDI TRK (digiTakt sendet Note C5 (Midi #60))
noise(1)
	.color(() => cc[60], () => cc[17], () => cc[18])
	.add(

		// rotate & scale with Digitakt: MIDI A > TRK > VAL1. Hier kann am Knob gedreht werden und darüber händisch MidiControls gesendet werden
		osc(10, 0.2, 0.5)
		.rotate(() => (cc[119] * 6.28) - 3.14)
		.scale(() => (cc[1]))
	).out(o1)

render(o1)
```

Experimental MIDI mode works like this:

https://hydra.ojack.xyz/docs/docs/learning/sequencing-and-interactivity/midi/

1. Paste this code to the console:
``` javascript
// register WebMIDI
navigator.requestMIDIAccess()
    .then(onMIDISuccess, onMIDIFailure);

function onMIDISuccess(midiAccess) {
    console.log(midiAccess);
    var inputs = midiAccess.inputs;
    var outputs = midiAccess.outputs;
    for (var input of midiAccess.inputs.values()){
        input.onmidimessage = getMIDIMessage;
    }
}

function onMIDIFailure() {
    console.log('Could not access your MIDI devices.');
}

//create an array to hold our cc values and init to a normalized value
var cc=Array(128).fill(0.5)

getMIDIMessage = function(midiMessage) {
    var arr = midiMessage.data    
    var index = arr[1]
    //console.log('Midi received on cc#' + index + ' value:' + arr[2])    // uncomment to monitor incoming Midi
    var val = (arr[2]+1)/128.0  // normalize CC values to 0.0 - 1.0
    cc[index]=val
}

```

2. use `cc[]` array in sketch:

``` javascript
// example midi mappings - Korg NanoKontrol2 CCs

// color controls with first three knobs
noise(4).color( ()=>cc[16], ()=>cc[17], ()=>cc[18] ).out()

// rotate & scale with first two faders
osc(10,0.2,0.5).rotate( ()=>(cc[0]*6.28)-3.14 ).scale( ()=>(cc[1]) ).out()
```

29.05.2024

### [Google Chrome Web Serial API](https://developer.chrome.com/docs/capabilities/serial)

To check if the Web Serial API is supported, use:

``` javascript
if ("serial" in navigator) {
  // The Web Serial API is supported.
}
```

Usage:

``` javascript
document.querySelector('button').addEventListener('click', async () => {
  // Prompt user to select any serial port.
  const port = await navigator.serial.requestPort();
});

// Get all serial ports the user has previously granted the website access to.
const ports = await navigator.serial.getPorts();

// Wait for the serial port to open.
await port.open({ baudRate: 9600 });
```

**Problem: Chrome does not detect any devices.**

chrome logs every device it has detected at chrome://device-log  
-> gerät wurde geloggt, wird auf website via `navigator.usb.getDevices()` nicht gefunden

### Alternatives

- [Johnny-Five](https://johnny-five.io/)
JavaScript Robotics & IoT Platform
- [RawHID](https://forum.pjrc.com/index.php?threads/making-webusb-work-with-the-teensy-what-is-pluggableusb.60782/page-2#post-247184)
