Blockly.JavaScript['brick_new'] = function(block) {
  var value_position = Blockly.JavaScript.valueToCode(block, 'POSITION', Blockly.JavaScript.ORDER_ATOMIC);
  var value_size = Blockly.JavaScript.valueToCode(block, 'SIZE', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color = Blockly.JavaScript.valueToCode(block, 'COLOR', Blockly.JavaScript.ORDER_ATOMIC);
  var value_clickable = Blockly.JavaScript.valueToCode(block, 'CLICKABLE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['vector_new'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_z = Blockly.JavaScript.valueToCode(block, 'Z', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['bot_new'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['outfit_new'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['team_new'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color = Blockly.JavaScript.valueToCode(block, 'COLOR', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['tool_new'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['bot_interact'] = function(block) {
  var dropdown_property = block.getFieldValue('PROPERTY');
  var value_input = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['bot_get'] = function(block) {
  var dropdown_property = block.getFieldValue('PROPERTY');
  var value_input = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['bot_set'] = function(block) {
  var dropdown_property = block.getFieldValue('PROPERTY');
  var value_input = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  var value_input2 = Blockly.JavaScript.valueToCode(block, 'INPUT2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['bot_findnearestplayer'] = function(block) {
  var value_bot = Blockly.JavaScript.valueToCode(block, 'Bot', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['bot_lookatplayer'] = function(block) {
  var value_bot = Blockly.JavaScript.valueToCode(block, 'BOT', Blockly.JavaScript.ORDER_ATOMIC);
  var value_player = Blockly.JavaScript.valueToCode(block, 'PLAYER', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['bot_lookatpoint'] = function(block) {
  var value_bot = Blockly.JavaScript.valueToCode(block, 'BOT', Blockly.JavaScript.ORDER_ATOMIC);
  var value_point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['bot_movetowardsplayer'] = function(block) {
  var value_bot = Blockly.JavaScript.valueToCode(block, 'BOT', Blockly.JavaScript.ORDER_ATOMIC);
  var value_player = Blockly.JavaScript.valueToCode(block, 'PLAYER', Blockly.JavaScript.ORDER_ATOMIC);
  var value_speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['bot_movetowardspoint'] = function(block) {
  var value_bot = Blockly.JavaScript.valueToCode(block, 'BOT', Blockly.JavaScript.ORDER_ATOMIC);
  var value_point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  var value_speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['bot_setavatar'] = function(block) {
  var value_bot = Blockly.JavaScript.valueToCode(block, 'BOT', Blockly.JavaScript.ORDER_ATOMIC);
  var value_id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['bot_setoutfit'] = function(block) {
  var value_bot = Blockly.JavaScript.valueToCode(block, 'BOT', Blockly.JavaScript.ORDER_ATOMIC);
  var value_outfit = Blockly.JavaScript.valueToCode(block, 'OUTFIT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['bot_setposition'] = function(block) {
  var value_bot = Blockly.JavaScript.valueToCode(block, 'BOT', Blockly.JavaScript.ORDER_ATOMIC);
  var value_position = Blockly.JavaScript.valueToCode(block, 'POSITION', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['bot_setrotation'] = function(block) {
  var value_bot = Blockly.JavaScript.valueToCode(block, 'BOT', Blockly.JavaScript.ORDER_ATOMIC);
  var value_rotation = Blockly.JavaScript.valueToCode(block, 'ROTATION', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['bot_setscale'] = function(block) {
  var value_bot = Blockly.JavaScript.valueToCode(block, 'BOT', Blockly.JavaScript.ORDER_ATOMIC);
  var value_scale = Blockly.JavaScript.valueToCode(block, 'SCALE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['bot_setspeech'] = function(block) {
  var value_bot = Blockly.JavaScript.valueToCode(block, 'BOT', Blockly.JavaScript.ORDER_ATOMIC);
  var value_speech = Blockly.JavaScript.valueToCode(block, 'SPEECH', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['outfit_set'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['outfit_copy'] = function(block) {
  var value_player = Blockly.JavaScript.valueToCode(block, 'PLAYER', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['outfit_prop'] = function(block) {
  var dropdown_prop = block.getFieldValue('PROP');
  var value_outfit = Blockly.JavaScript.valueToCode(block, 'OUTFIT', Blockly.JavaScript.ORDER_ATOMIC);
  var value_input = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};