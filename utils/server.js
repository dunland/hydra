const express = require('express');
const { SerialPort } = require('serialport');
const { MockBinding } = require('@serialport/binding-mock')
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

MockBinding.createPort('/dev/ROBOT', { echo: true, record: true })

let port = new SerialPort({
    binding: MockBinding,
    path: '/dev/ROBOT',
    // path: '/dev/ttyACM0',
    baudRate: 115200
}, function (err) {
    if (err) {
        console.log('Error: ', err.message);
        // try test setup:
        port = new SerialPort({
            binding: MockBinding,
            path: '/dev/ROBOT',
            baudRate: 115200
        })
        // for test purposes: automatic messages
        setInterval(next, 7000)

        console.log("Creating mock server instead with", port.path);
    }
});
setInterval(next, 7000)

port.on('open', function () {
    console.log('Serial port opened');
});

const songList = ["monitoring", "sturmUndDrang", "mrWimbledon", "pogoNumberOne", "hutschnur", "randomVoice", "besen", "roeskur", "sloJam", "kupferUndGold", "triathlon", "sattelstein", "donnerwetter", "theodolit"];

port.on('data', function (data) {
    // data must be contained in songList:
    let dataString = data.toString().trim();

    // console.log('data:', data, dataString, songList.indexOf(dataString));
    console.log(dataString);
    if (songList.indexOf(dataString) == -1) return;

    if (dataString)
        // Send the serial data to the browser via WebSocket
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(dataString);
            }
        });
});

wss.on('connection', (ws) => {
    console.log('Client connected via WebSocket');
});

server.listen(8081, () => {
    console.log('Serial Server is listening on port 8081');
});

var idx = 0;

function next() {
    console.log('sending', songList[idx]);
    port.write(songList[idx]);
    idx = (idx + 1) % songList.length;
}