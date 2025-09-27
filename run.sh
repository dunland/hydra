#!/bin/bash
set -e

pkill -f serial_server || true
pkill -f http-server || true
pkill -f hydra-web-editor || true
pkill -f chrome || true

while ! lsusb | grep -q "Teensyduino"; do
    sleep 1  # Wait for 1 second before checking again
    echo "waiting for Teensy Serial connection.."
done

# python3 serial_to_hydra_url.py

npm run dev > /dev/null & # 8080
node utils/serial_server.js --name serial_server & # ws on 8081
google-chrome --app="http://localhost:8080" --kiosk &

while lsusb | grep -q "Teensyduino"; do
    sleep 1
done

exit 0
