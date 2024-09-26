# Custom Hydra

## Usage

**WebMidi muss in Google Chrome gestartet werden!**
In Firefox und Chromium erhalte ich folgenden Fehler: `InvalidStateError: Platform dependent initialization failed.`

1. `npm run dev` bzw. `yarn dev`
    -> Änderungen werden automatisch via `browserify` zu `bundle.js` geschrieben. Seite am besten mit Ctrl+F5 neu laden.
    Entry point ist `./index.js`. `index.html` lädt dann `bundle.js` – `bundle.min.js` wird nur mit `npm run build` erstellt.
2. starte SUPERMUSCLE
3. `python3 serial_to_hydra_url.py`

* `CTRL-Enter`: run a line of code
* `CTRL-Shift-Enter`: run all code on screen
* `ALT-Enter`: run a block
* `CTRL-Shift-H`: hide or show code
* `CTRL-Shift-F`: format code using [Prettier](https://prettier.io/)
* `CTRL-Shift-S`: Save screenshot and download as local file
* `CTRL-Shift-G`: Share to twitter (if available). Shares to [@hydra_patterns](https://twitter.com/hydra_patterns)

- `Shift-Ctrl-L`: 'gallery:saveToURL',
- `Shift-Ctrl-H`: 'hideAll',
- `Shift-Ctrl-S`: 'screencap',
- `Shift-Ctrl-1`: 'gallery:showExample',
- `Shift-Ctrl-2`: 'editor:randomize'

## Code

**store.js** 
- führt Funktionen vom UI aus: randomize, share sketch, evalLine, ...
- dabei werden keymaps in [editor.js](src/views/editor/editor.js) als emitter genutzt, die in [keymaps.js](src/views/editor/keymaps.js) gelistet sind.
- `main.js`:Editor < EditorComponent.js < Editor

**gallery.js**
- `setSketchFromURL()`
- `getExampleById(id)` lädt sketch aus [examples.json](src/stores/examples.json)

## WebMidi
31.05.2024

- nutze webmidi/cjs für commonJS style (`require` statt `import`) – wird ursprünglich so mit Node.js genutzt und v.a. auch mit bundlern

15.06.2024

MIDI ist jetzt implementiert. **Funktionierendes Beispielskript mit Digitakt**:

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

**Digitakt Einstellungen:**

**MIDI Bank A:**
- **TRIG**: Note C5 (entspricht MIDI #60) -> sendet VEL-Wert, wenn MIDI A getrigget wird. Nach Abklingen von LEN wird Wert 0 gesendet.
- **SRC**: CHAN = 1 (stellt MIDI-Channel ein)
- **AMP**: Mapping der Midi-Controls, die von FLTR verschickt werden sollen.
- **FLTR**: hier können (händisch) MIDI-Werte eingestellt & verschickt werden

**Experimental MIDI mode via Console** works like this:

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

--------------------------------------------------------------------

## Serial API

### [Google Chrome Web Serial API](https://developer.chrome.com/docs/capabilities/serial)
29.05.2024

To check if the Web Serial API is supported, use:

``` javascript
if ("serial" in navigator) {
  // The Web Serial API is supported.
}
```

**Usage:**

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

### node SerialPort
https://serialport.io/docs/

``` js
const SerialPort = require('serialport')

// Create a port
const port = new SerialPort({
  path: '/dev/tty-usbserial1',
  baudRate: 9600,
})

/* READ DATA: */

// Read data that is available but keep the stream in "paused mode"
port.on('readable', function () {
  console.log('Data:', port.read())
})

// Switches the port into "flowing mode"
port.on('data', function (data) {
  console.log('Data:', data)
})

// Pipe the data into another stream (like a parser or standard out)
const lineStream = port.pipe(new Readline())
```

16.09.2024:  
**Das Problem** bei Weiterleitung bzw laden von URL scheint die CORS zu sein:

>Access to XMLHttpRequest at 'http://localhost:8000/socket.io/?EIO=3&transport=polling&t=P7v_REV' from origin 'http://localhost:8080' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

**Lösung:**
server-url in in `package.json` für envify eingestellt: `"watch": "watchify ./index.js -t [ envify --SERVER_URL http://localhost:8080] -v -o ./public/bundle.js",`

weitere Referenzen:
- [How to Configure CORS in Node.js With Express](https://dev.to/speaklouder/how-to-configure-cors-in-nodejs-with-express-11h)
- [MDN CORS Documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

### Alternatives

- [Johnny-Five](https://johnny-five.io/)
JavaScript Robotics & IoT Platform
- [RawHID](https://forum.pjrc.com/index.php?threads/making-webusb-work-with-the-teensy-what-is-pluggableusb.60782/page-2#post-247184)
