//http://www.seeedstudio.com/wiki/GROVE_System
//http://www.seeedstudio.com/depot/index.php?main_page=advanced_search_result&search_in_description=1&keyword=grovefamily
//support starter bundle example http://www.seeedstudio.com/wiki/GROVE_-_Starter_Kit_V1.1b
// support for Grove GBK stand alone set of blocks https://www.seeedstudio.com/Grove-Beginner-Kit-for-Arduino-p-4549.html

/**
 * @license
 * Visual Blocks Editor
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

goog.provide('Blockly.Blocks.groveGBK');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
//////GBK OUTPUTS
Blockly.Blocks['grove_gbk_led'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_LED_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.grove_gbk_led1);
        //.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/groveGBK/GBK_LED.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));		
    this.setInputsInline(true);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.grove_gbk_led3)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.grove_gbk_led_tooltip);
  }
};

Blockly.Blocks['grove_gbk_piezo_buzzer'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_BUZZER_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.grove_gbk_tone1);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.grove_gbk_tone2)
        .appendField(new Blockly.FieldDropdown([["C", "262"], ["C#", "277"], ["D", "294"], ["D#", "311"],
                                                ["E", "330"], ["F", "349"], ["F#", "370"], ["G", "392"],
                                                ["G#", "415"], ["A", "440"], ["A#", "466"], ["B", "494"]]), "tone")
    //this.setOutput(true, 'Number')
        .appendField(Blockly.Msg.grove_gbk_tone3)
        .appendField(new Blockly.FieldDropdown([["C4", "1"], ["C5", "2"], ["C6", "3"], ["C7", "4"]]), "scale")
        .appendField(Blockly.Msg.grove_gbk_tone4)
        .appendField(new Blockly.FieldDropdown([["1/16", "62.5"], ["1/8", "125"], ["1/4", "250"], ["1/2", "500"],["1/1", "1000"]]), "dur");
        //this.setOutput(true, 'Number');
    
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    
    this.setTooltip(Blockly.Msg.grove_gbk_tone_tooltip);
  }
};


Blockly.Blocks['grove_gbk_oled'] = {
 init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.grove_gbk_oled1);
	//.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/groveGBK/GBK_OLED.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("input")
		//.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.grove_gbk_oled2);	  
    this.appendValueInput("col")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.grove_gbk_oled3);		
    this.appendValueInput("line")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.grove_gbk_oled4);
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.grove_gbk_oled5)     
        .appendField(new Blockly.FieldCheckbox('TRUE'), 'ref'); 
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.grove_gbk_oled_tooltip);
    this.setHelpUrl('');
  }
};



/////GBK INPUTS
Blockly.Blocks['grove_gbk_button'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
    this.setHelpUrl(Blockly.Msg.GROVE_INOUT_BUTTON_HELPURL);
	this.appendDummyInput()
        .appendField(Blockly.Msg.grove_gbk_button1);
       // .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/groveGBK/GBK_Button.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
       //.appendField(Blockly.Msg.grove_gbk_button2);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.grove_gbk_button_tooltip);
  }
};

Blockly.Blocks['grove_gbk_rotary_angle'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_ROT_ANGLE_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.grove_gbk_pot1);
        //.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/groveGBK/GBK_Rotate.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.grove_gbk_pot_tooltip);
  }
};

Blockly.Blocks['grove_gbk_ldr'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_LDR_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.grove_gbk_ldr1);
        //.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/groveGBK/GBK_Light.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.grove_gbk_ldr_tooltip);
  }
};

Blockly.Blocks['grove_gbk_sound_sensor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_SOUND_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.grove_gbk_snd1);
        //.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/groveGBK/GBK_Sound.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.grove_gbk_snd_tooltip);
  }
};

Blockly.Blocks['grove_gbk_dht_read'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
    this.setHelpUrl(Blockly.Msg.GROVE_INOUT_DHT_HELPURL);
    this.appendDummyInput()
      .appendField(Blockly.Msg.grove_gbk_temp1);
      //.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/groveGBK/GBK_Temp.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput()
        .appendField(Blockly.Msg.grove_gbk_temp2)  
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.GROVE_INOUT_DHT_READ_H,"h"],[Blockly.Msg.GROVE_INOUT_DHT_READ_C,"C"],[Blockly.Msg.GROVE_INOUT_DHT_READ_F,"F"]]), "TYPE");
    //this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.grove_gbk_temp_tooltip);
  }
};

Blockly.Blocks['grove_gbk_baro'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
    this.setHelpUrl();
    this.appendDummyInput()
        .appendField(Blockly.Msg.grove_gbk_baro1);
        //.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/groveGBK/GBK_Air_Prs.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));    
    this.appendDummyInput()
      .appendField(Blockly.Msg.grove_gbk_baro2)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.grove_gbk_baro3,"prs"],[Blockly.Msg.grove_gbk_baro4,"alt"]]), "TYPE");
    //this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.grove_gbk_baro_tooltip);
  }
};

Blockly.Blocks['grove_gbk_accel'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl();
    this.appendDummyInput()
        .appendField(Blockly.Msg.grove_gbk_accel1);
       // .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/groveGBK/GBK_Acc.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendDummyInput()
      .appendField(Blockly.Msg.grove_gbk_accel2)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.grove_gbk_accel3,"x"],[Blockly.Msg.grove_gbk_accel4,"y"],[Blockly.Msg.grove_gbk_accel5,"z"]]), "axis");
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.grove_gbk_accel_tooltip);
  }
};
























