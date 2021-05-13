#!/bin/env python

#This is a function that uses i2c protocol to communicate with the MCP4725
#DAC in order to provide dimming funtion

import board
import busio
import adafruit_mcp4725
import time

i2c = busio.I2C(board.SCL, board.SDA)
dac = adafruit_mcp4725.MCP4725(i2c)

dac.raw_value = 4095

while True:
	dac.raw_value = 2048
	print("V = 2.5")
	time.sleep(3)
	dac.raw_value = 1
	print("V = 0")
	time.sleep(3)

