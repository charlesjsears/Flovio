import RPi.GPIO as GPIO
import time
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)
GPIO.setup(32, GPIO.OUT)

p = GPIO.PWM(32, 5)
p.ChangeDutyCycle(0)

while(True):
        x = input('type l for low, m for medium and h for high:')
        if(x == 'l'):
            p.ChangeDutyCycle(50)
            break
        elif(x == 'm'):
            p.ChangeDutyCycle((75)
            break
        elif (x == 'h'):
            p.ChangeDutyCycle(100)
            break
        elif (x == 's'):
                p.ChangeDutyCycle(0)
                break
        else:
            print('please enter either 1, m, s and h')

#input('Press return to stop:')
#p.stop()
GPIO.cleanup()
