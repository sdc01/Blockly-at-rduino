
//http://www.seeedstudio.com/wiki/GROVE_System
//http://www.seeedstudio.com/depot/index.php?main_page=advanced_search_result&search_in_description=1&keyword=grovefamily
//support starter bundle example http://www.seeedstudio.com/wiki/GROVE_-_Starter_Kit_V1.1b
// aded Grove GBK 9 August 2020

/**
 * Visual Blocks Language
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating seeeduino grove blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */

'use strict';
 
goog.provide('Blockly.Arduino.groveGBK');

goog.require('Blockly.Arduino');

//Grove Beginner Kit outputs

Blockly.Arduino.grove_gbk_led = function() {
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_grove_gbk_led'] = 'pinMode(4, OUTPUT);';
  var code = 'digitalWrite(4,'+dropdown_stat+');\n';
  return code;
};

Blockly.Arduino.grove_gbk_piezo_buzzer = function() {
  var pitch = this.getFieldValue('tone');
  var oct = this.getFieldValue('scale');
  var del = this.getFieldValue('dur');
  
  var code = 'tone(5,'+pitch*oct+','+ del+');\n delay ('+del*2+');\n';
  return code; 
};

Blockly.Arduino.grove_gbk_oled = function() {
  Blockly.Arduino.includes_['oled'] = '#include <U8x8lib.h>\n'
  Blockly.Arduino.definitions_['define_oled'] = 'U8X8_SSD1306_128X64_ALT0_HW_I2C u8x8(U8X8_PIN_NONE);\n'
  Blockly.Arduino.setups_['setup_oled'] = 'u8x8.begin();\n'+ 
                                           '  u8x8.setFlipMode(1);\n'+
                                           '  u8x8.setFont(u8x8_font_chroma48medium8_r);'; 
  var refresh = this.getFieldValue('ref');                                 
  var text = Blockly.Arduino.valueToCode(this, 'input',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  var col = Blockly.Arduino.valueToCode(this, 'col',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';
  var line = Blockly.Arduino.valueToCode(this, 'line',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0'; 
  
  var base =   'u8x8.setCursor('+line+','+col+');\n'+
  'u8x8.print('+text+');\n';
    if (refresh =="FALSE")
  {
    var code = base;
  } else
     code = 'u8x8.setCursor('+line+','+col+');\n'+
  'u8x8.print('+text+');\n'+ 'u8x8.print("                ");\n';
  return code;
};

//Grove Beginner Kit inputs
Blockly.Arduino.grove_gbk_button = function() {
  Blockly.Arduino.setups_['setup_button'] = 'pinMode(6, INPUT);';
  var code = 'digitalRead(D6)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.grove_gbk_rotary_angle = function() {
  var code = 'analogRead(A0)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.grove_gbk_ldr = function() {
  var code = 'analogRead(A6)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.grove_gbk_sound_sensor = function() {
  var code = 'analogRead(A2)'
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.grove_gbk_dht_read = function() {

 var type = this.getFieldValue('TYPE');

  var code = '';
  switch(type){
      case 'h':
        code += 'dht.readHumidity()';
      break;
      case 'C':
          code += 'dht.readTemperature()';
      break;
      case 'F':
          code += 'dht.readTemperature(true)';
      break;
  }
  Blockly.Arduino.includes_['dht_D3'] = '#include <DHT.h>\n'
  Blockly.Arduino.definitions_['define_dht_D3'] = 'DHT dht(3, DHT11);\n'
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.grove_gbk_baro = function() {
    
  var type = this.getFieldValue('TYPE');

  var code = '';
  switch(type){
      case 'prs':
        code += 'bmp280.getPressure()';
      break;
      case 'alt':
          code += 'float presTmp;\n'+
                  'presTmp = bmp280.getPressure();\n'+
                  'bmp280.calcAltitude(presTmp)';
      break;
  }
    
 Blockly.Arduino.includes_['baro'] =  '#include "Seeed_BMP280.h"\n'
 Blockly.Arduino.includes_['baro_IIC'] = '#include <Wire.h>\n'
 Blockly.Arduino.definitions_['define_BMP'] = 'BMP280 bmp280;\n'
 Blockly.Arduino.setups_['setup_baro'] = 'bmp280.init();'

 
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.grove_gbk_accel = function(){
   
Blockly.Arduino.includes_['acc'] =  '#include "LIS3DHTR.h"\n'+'#include <Wire.h>\n'+' LIS3DHTR<TwoWire> LIS;';
Blockly.Arduino.definitions_['define_acc'] = '#define WIRE Wire';

Blockly.Arduino.setups_['setup_acc'] = 'LIS.begin(WIRE,0x19);\n'+'  delay(100);\n'
                                        +'  LIS.setOutputDataRate(LIS3DHTR_DATARATE_50HZ);\n'+
                                        '  LIS.setHighSolution(true);';

  var axs = this.getFieldValue('axis'); 
     if (axs == 'x')
    {
      var  code = 'LIS.getAccelerationX()'
     }
     else if (axs == 'y')
     {
         code = 'LIS.getAccelerationY()'
     }
     else
     {
         code = 'LIS.getAccelerationZ()'
     }
 return [code, Blockly.Arduino.ORDER_ATOMIC];
};





