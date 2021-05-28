import RPi.GPIO as GPIO
import time
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
GPIO.setup(13, GPIO.OUT)

p = GPIO.PWM(13, 100)
p.start(0)

while(True):
        x = input('type l for low, m for medium and h for high:')
        if(x == 'l'):
            p.ChangeDutyCycle(50)
        elif(x == 'm'):
            p.ChangeDutyCycle((75)
        elif (x == 'h'):
            p.ChangeDutyCycle(100)
        elif (x == 's'):
            p.ChangeDutyCycle(0)
            break
            
        else:
            print('Please enter either l, m, h or s')

#input('Press return to stop:')
p.stop()
GPIO.cleanup()
