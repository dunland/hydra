const express = require('express');
const { SerialPort } = require('serialport');
const { MockBinding } = require('@serialport/binding-mock')
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const portPath = '/dev/ttyACM0';
const baudRate = 9600;

MockBinding.createPort(portPath, { echo: true, record: true })

function openPort() {
    port = new SerialPort({
        path: portPath,
        baudRate: baudRate
    }, function (err) {
        if (err) {
            console.log('Error: ', err.message);
            console.log(`Retrying to open port in ${retryInterval / 1000} seconds...`);
            setTimeout(openPort, retryInterval); // Versuche es nach retryInterval erneut
        } else {
            console.log(`Port ${portPath} opened successfully.`);
            // Hier kannst du weitere Logik hinzufügen, um mit dem Port zu arbeiten
        }
    });
}

// Starte den ersten Versuch, den Port zu öffnen
openPort();
// setInterval(next, 7000)

port.on('open', function () {
    console.log('Serial port opened');
});

const songList = ["monitoring", "sturmUndDrang", "mrWimbledon", "pogoNumberOne", "hutschnur", "randomVoice", "besen", "roeskur", "nosferatu", "kupferUndGold", "norbert", "sattelstein", "donnerwetter", "theodolit"]; // TODO: fetch songList.json directly; list of sketch_id then

port.on('data', function (data) {
    // data must be contained in songList:
    let dataString = data.toString().trim();
    
//	console.log('data:', data, dataString, songList.indexOf(dataString));
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
