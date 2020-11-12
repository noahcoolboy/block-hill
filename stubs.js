Blockly.JavaScript['game_print'] = function (block) {
    var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_position = block.getFieldValue('position');
    var value_duration = Blockly.JavaScript.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    var code = [`Game.${dropdown_position}PrintAll(${value_text},${value_duration});\n`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    return code;
};

Blockly.JavaScript['text_log'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var code = [`console.log(${value_name});\n`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    return code;
};