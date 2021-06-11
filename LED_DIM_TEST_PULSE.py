
#!/bin/env python

import board
import busio
import adafruit_mcp4725
import time
import sys as exit

i2c = busio.I2C(board.SCL, board.SDA)
dac = adafruit_mcp4725.MCP4725(i2c)




while True:
	dac.raw_value = 0
	print("Beginning Pulse")
	time.sleep(2)
	for i in range(1023):
		dac.raw_value = (i*4)
		print(dac.value)
		time.sleep(0.01)
	for i in range(1023, 0, -1):
		dac.raw_value = (i*4)
		print(dac.value)
		time.sleep(0.01)
	break

