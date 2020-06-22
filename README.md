# espruinoRelayControl
Espruino Script to Control Relays

Hardware Model: Espruino Pico 
Software Version: 2v06 (c) 2019 G.Williams

Wiring:
1) Close the "FET Jumper", granting 5v on VCC (VBAT) port
2) Connect A5 port on the board into IN port on "Relay 1"
3) Connect A6 port on the board into IN port on "Relay 2"
4) Connect GND port on the board into GND port on "Relay 1" and "Relay 2"
5) Connect VCC (VBAT) port on the board into 5V port on "Relay 1" and "Relay 2"

Relay and LED State Control:

| Value | LED1(RED) | LED2(GREEN) | A5 (Relay 1) | A6 (Relay 2) |
| ----- | --------- | ----------- | ------------ | ------------ |
| 0     | ON        | OFF         | OFF          | OFF          |
| 1     | OFF       | ON          | ON           | OFF          |
| 2     | OFF       | ON          | OFF          | ON           |
| 3     | OFF       | ON          | ON           | ON           |