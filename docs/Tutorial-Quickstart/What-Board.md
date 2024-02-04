---
sidebar_position: 20
---

# What board should I get?
There are lots of different flight controller boards designed for Betaflight. Most of these are compatible with Rotorflight; however, there are some issues to be aware of before you make a purchase.          

:::info
There are currently three ways to get a controller suitable for Rotorflight. 
1. Build a DIY controller based on a Drone flight controller.
2. Purchase a 'Wing' controller **Must have a Betaflight Target. Not just iNav or Ardupilot**.
3. Purchase one of the ready built Rotorflight Controllers such as: 
* [FlyDragon F722 V2](https://www.aliexpress.us/item/3256805414004383.html) (built-in ELRS receiver)
* [FLYWING Heli 405 3D](https://www.aliexpress.us/item/3256805063564797.html)
* [MATEKSYS G474-HELI](https://www.aliexpress.us/item/3256806032945009.html) 

:::
## Processors
We recommend use of a board that has an H743, F7 (F745, F722 etc) or F405 processor for best results. An F411 can (and has) been used but may not be able to run all of the newer features. The newest H7 processors are yet to be supported/fully tested. Please avoid these (or help us with the testing!!) 

## Gyros
Rotorflight 2.xx is built on the Betaflight 4.3 platform. This is several releases behind the current Betaflight version so as a result there may be some new hardware additions that are not yet supported. 
Currently the gyros on all common boards designed for Betaflight are supported. These include:
### MPU6000, MPU6050, MPU6500
The MPU6000, MPU6050, and MPU6500 are all Inertial Measurement Units (IMUs) manufactured by InvenSense, a company that produces sensors and sensor-related products. These devices are commonly used in various applications, including robotics, drones, and motion sensing.
1. **MPU6000:**
   - The MPU6000 is a 3-axis gyroscope and a 3-axis accelerometer integrated into a single chip.
   - It is commonly used to measure angular rate (gyroscopic data) and acceleration.
   - It communicates with the host microcontroller using the I2C (Inter-Integrated Circuit) or SPI (Serial Peripheral Interface) communication protocols.
   - While the MPU6000 was widely used, it has been succeeded by newer models like the MPU6050 and MPU6500.
2. **MPU6050:**
   - The MPU6050 is an improved version of the MPU6000, featuring a 3-axis gyroscope and a 3-axis accelerometer, just like its predecessor.
   - In addition to the gyroscope and accelerometer, the MPU6050 also includes a Digital Motion Processor (DMP) unit, which offloads some sensor fusion calculations from the host microcontroller.
3. **MPU6500:**
   - The MPU6500 is another iteration, offering improvements over the MPU6050.
   - Like the previous models, it integrates a 3-axis gyroscope and a 3-axis accelerometer.
   - The MPU6500 features lower noise levels, improved sensitivity, and better temperature stability compared to its predecessors.
   - It is also equipped with a Digital Motion Processor (DMP) unit for sensor fusion.
* BMI270
he BMI270 is a sensor module produced by Bosch Sensortec. The combination of a 6-axis sensor, low power consumption, sensor fusion capabilities, and compact design makes the BMI270 suitable for a variety of applications where motion sensing and orientation tracking are essential.
* ICM42688
The ICM-42688 is an Inertial Measurement Unit (IMU) manufactured by TDK InvenSense. Similar to other IMUs, the ICM-42688 is designed for motion sensing and orientation tracking applications. It includes both a gyroscope and an accelerometer, providing data on angular rate and linear acceleration.


## Size
How large is the space available for the flight controller? The amount of space may affect the size of boards you choose to use. Standard sizes are 16mmx16mm, 20mmx20mm, 25.5mm.25.5mm (whoop), 30.5mmx30.5mm. There are also AIO (All in one) boards which contain the flight controller and 4x ESC's on the one board.

## How many pads are available?
We need to have pads available on the board to connect to our devices such as Servos, Motors, Frequency input, External logger, Receiver etc (GPS in the future).

**Receiver:** This will require a UART RX and TX if we want to use telemetry (this will be documented by the manufacturer) 

**Servos, Motor, Frequency:** These items can be allocated to any free UART RX, UART TX, SDA, SCL, LED or Motor pad. 

**Logger:** An OpenLarger requires on free UART RX 
     

You will need to choose a board that has enough pins to enable all of your connections. 
