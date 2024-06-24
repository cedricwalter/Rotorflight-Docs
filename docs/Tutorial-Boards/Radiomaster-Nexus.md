# Radiomaster Nexus

## Features
https://www.radiomasterrc.com/products/nexus-helicopter-flight-controller

## ELRS
* non-ELRS users don't need to deal with dangling antennas. 
* ELRS users have a plug-and-play option with the RP3-H. 

### Update ELRS
Using the WiFi method is the easiest.
1. Plug the NEXUS with USB-C without LiPo and wait for 60s
3. Download ExpressLRS configurator
4. Build 
5. Connect to "ExpressLrs RX"
6. Upload bin ffile

## Mouting

## F.Port Support
If you want to connect f.port to sbus port then you need to switch the resources from rx to tx
F.port is one wire only
You connect it to SBUS slot
Then in CLI you switch the resources

```
resource SERIAL_RX 2 NONE
resource SERIAL_TX 2 A03
```
![f-port](https://github.com/cedricwalter/Rotorflight-Docs/assets/763491/ce4b6dc5-9908-4d38-a8de-bf97ef964bee)

Then in configurator you enable these two

# Setup

14 min setup
https://www.youtube.com/watch?v=WxYWBPVDbu0

https://www.youtube.com/live/VcOebsyBGqM
https://www.youtube.com/watch?v=YdfZgF5WKuQ



## Tips
- A, B, C are nearly identical expansion ports
- You can use the S.BUS port for ESC telemetry, if you are not using it for S.BUS or F.Port. You can use the S.BUS port for F.Port, and use the DSM port for ESC telemetry Or you can use any of the expansion ports for ESC telemetry
