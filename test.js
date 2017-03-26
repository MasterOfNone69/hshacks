var m = require('mraa'); //require mraa
console.log('MRAA Version: ' + m.getVersion()); //write the mraa version to the console

var analogPin0 = new m.Aio(0); //setup access analog inpuput pin 0
var lcd = require('jsupm_i2clcd');
var display = new lcd.Jhd1313m1(0, 0x3E, 0x62);
var trueVoltage
var degreesC
var degreesF
var redTrue=true

function readValue() {
  if(redTrue){
    redTrue=false
    display.setColor(0,204,153)
  }
  else {
    redTrue=true
    display.setColor(255,0,0)
  }
    var analogValue = analogPin0.read(); //read the value of the analog pin
    var analogValueFloat = analogPin0.readFloat(); //read the pin value as a float
    console.log(analogValue); //write the value of the analog pin to the console
    console.log(analogValueFloat.toFixed(5)); //write the value in the float format
    display.setCursor(0, 0);
    display.write('Pollution Level:');
    display.setCursor(1,1);

    display.write((analogValue/7).toString()+" of 100");
}
setInterval(
    function(){
      readValue()
    },
    250
)
