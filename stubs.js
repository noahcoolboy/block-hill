Blockly.JavaScript['game_print'] = function (block) {
    var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_NONE);
    var dropdown_position = block.getFieldValue('position');
    var value_duration = Blockly.JavaScript.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_COMMA);
    var code = `Game.${dropdown_position}PrintAll(${value_text},${value_duration});\n`;
    return code;
};

Blockly.JavaScript['text_log'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE);
    var code = `console.log(${value_name});\n`;
    return code;
};

Blockly.JavaScript['game_get'] = function(block) {
    var dropdown_prop = block.getFieldValue('prop');
    var code = `Game.${dropdown_prop}`;
    return [code, Blockly.JavaScript.ORDER_MEMBER];
  };