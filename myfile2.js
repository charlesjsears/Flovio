const bleno = require('bleno');
const Gpio = require('onoff').Gpio;
const Fan = new Gpio(4, 'out');

 
const DEVICE_NAME = 'flovio';
 
function fanOn() { //function to start fan
  if (Fan.readSync() === 0) { //check the pin state, if the state is 0 (or off)
    Fan.writeSync(1); //set pin state to 1 (turn LED on)
  } else {
    Fan.writeSync(0); //set pin state to 0 (turn LED off)
  }
}

function fanOff() { //function to stop fan
  clearInterval(fanInterval); // Stop fan intervals
  Fan.writeSync(0); // Turn fan off
  Fan.unexport(); // Unexport GPIO to free resources
}
 
bleno.on('stateChange', function(state) {
  if (state === 'poweredOn') {
    bleno.startAdvertising(DEVICE_NAME, ['1803']);
  } else {
    bleno.stopAdvertising;
  }
});
 
bleno.on('advertisingStart', function(error) {
  if (!error) {
    bleno.setServices([
      // link loss service  
      new bleno.PrimaryService({
        uuid: '1803', 
        characteristics: [
          // Alert Level
          new bleno.Characteristic({
            value: 0, 
            uuid: '2A06',
            properties: ['read', 'write'],
            onReadRequest(offset, callback) {
              callback(this.RESULT_SUCCESS, octets);
            },
            onWriteRequest(data, offset, withoutResponse, callback) {
              callback(this.RESULT_SUCCESS);
            },
          }),
        ],
      }),
      // immediate alert service
      new bleno.PrimaryService({
        uuid: '1802',
        characteristics: [
          // Alert Level
          new bleno.Characteristic({
            value: 0,
            uuid: '2A06',
            properties: ['writeWithoutResponse'],
            onWriteRequest(data, offset, withoutResponse, callback) {
              fanOn(); //toggles fan state immediatley upon write
              callback(this.RESULT_SUCCESS);
            },
          }),
        ],
      }),
    ]);
  }
});
