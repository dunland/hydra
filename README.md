# Custom Hydra

## Usage

1. `npm run dev` bzw. `yarn dev`
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