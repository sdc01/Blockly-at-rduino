//***********************************************************************************
//								Blockly
//***********************************************************************************

//---------------------------------logic--------------------------------------------
Blockly.Blocks.logic_compare.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.logic_operation.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.logic_negate.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.logic_boolean.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.logic_null.getBlockType = function() {
	return Blockly.Types.NULL;
};
Blockly.Blocks.logic_ternary.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.controls_switch.getVars = function() {
	return [this.getFieldValue('SWVAR')];	
};
Blockly.Blocks.controls_switch.getVarType = function() {
	return this.inputList[1].connection.targetBlock().getBlockType();
};
//---------------------------------maths--------------------------------------------
Blockly.Blocks['math_number']['getBlockType'] = function() {
    var numString = this.getFieldValue('NUM');
    return Blockly.Types.identifyNumber(numString);
};
Blockly.Blocks['inout_pulsein']['getBlockType'] = function() {
	return Blockly.Types.LARGE_NUMBER;
};
Blockly.Blocks.math_constant.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};