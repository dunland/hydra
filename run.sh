#!/bin/bash
pkill node
npm run dev &
while ! lsusb | grep -q "Teensyduino"; do
    sleep 1  # Wait for 1 second before checking again
    echo "waiting for Teensy Serial connection.."
done

python3 serial_to_hydra_url.py
