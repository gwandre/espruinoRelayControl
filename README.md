# Espruino Relay Control
Control Relays with an Espruino Pico board

## Hardware and Software
Hardware Model: Espruino Pico 
Software Version: 2v06 (c) 2019 G.Williams

## Wiring
1) On Espruino board, close the **"FET Jumper"** to enable **5V** on **VCC (VBAT)** port
2) Espruino **A5** port to Relay 1 **IN** port
3) Espruino **A6** port to Relay 2 **IN** port
4) Espruino **GND** port to Relays (1 and 2) **GND*** port
5) Espruino **VCC** (VBAT) port to Relays (1 and 2) **5V** port

## Relay and LED state control

| Value | LED1(RED) | LED2(GREEN) | A5 (Relay 1) | A6 (Relay 2) |
| ----- | --------- | ----------- | ------------ | ------------ |
| 0     | ON        | OFF         | OFF          | OFF          |
| 1     | OFF       | ON          | ON           | OFF          |
| 2     | OFF       | ON          | OFF          | ON           |
| 3     | OFF       | ON          | ON           | ON           |
