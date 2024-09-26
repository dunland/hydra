const express = require('express');
const { SerialPort } = require('serialport');
const { MockBinding } = require('@serialport/binding-mock')
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

MockBinding.createPort('/dev/ROBOT', { echo: true, record: true })

const port = new SerialPort({
    binding: MockBinding,
    path: '/dev/ROBOT',
    baudRate: 14400
}, function (err) {
    if (err) {
        return console.log('Error: ', err.message);
    }
});

port.on('open', function () {
    console.log('Serial port opened');
});

port.on('data', function (data) {
    console.log('Data received:', data.toString(), data);
    // Send the serial data to the browser via WebSocket
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(data.toString());
        }
    });
});

wss.on('connection', (ws) => {
    console.log('Client connected via WebSocket');
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

setInterval(next, 7000)

const sketches = ['theodolit', 'kupferUndGold', 'besen']

var idx = 0;
function next() {
    console.log('sending', sketches[idx]);
    port.write(sketches[idx]);
    idx = (idx + 1) % sketches.length;
}