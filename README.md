# Flovio Home
This repository contains code for the Flovio Home device

The BLE_Server_Code.js is a JavaScript file made with Node.js on the Raspberry Pi to set up the Pi as a Bluetooth Low Energy (BLE) peripheral capable of being connected to and toggling a GPIO pin. This pin can be used to turn the fan system on and off over BLE

The Mobile App code is a TypeScript file and was created using React Native and Expo, this can be seen in the MobileApp.tsx file. Right now, the apps buttons send alerts to the users phone, however, BLE commands can be integrated into the program code using https://github.com/Polidea/react-native-ble-plx which is a BLE package for React Native. 

The FanControl.py file is a Python file that can control the fan speed with 3 different speed levels. This code is run on the Raspberry Pi using the command:
python FanControl.py

The LED_DIM_TEST_PULSE.py code is another Python file that tests the adjustable brightness and color of the lights by sending a pulse from 0-10v for each and showing the changes in the LEDs.

The DAC_1.py and the DAC_TEST.py are additional Python files to be run on the Raspberry Pi which test functions of the DAC to confirm they are working properly.

