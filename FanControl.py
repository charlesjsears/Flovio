import RPi.GPIO as GPIO
import time
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)
GPIO.setup(32, GPIO.OUT)

p = GPIO.PWM(32, 5)
while(True):
        x = input('type l for low, m for medium and h for high:')
        if(x == 'l'):
            p.start(50)
            break
        elif(x == 'm'):
            p.start(75)
            break
        elif (x == 'h'):
            p.start(100)
            break
        else:
            print('please enter either 1, m, and h')

input('Press return to stop:')
p.stop()
GPIO.cleanup()