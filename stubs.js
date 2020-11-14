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

Blockly.JavaScript['game_get'] = function (block) {
    var dropdown_prop = block.getFieldValue('prop');
    var code = `Game.${dropdown_prop}`;
    return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['game_set'] = function (block) {
    var dropdown_prop = block.getFieldValue('prop');
    var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ASSIGNMENT);
    var code = `Game.${dropdown_prop} = ${value_value};\n`;
    return code;
};

Blockly.JavaScript['game_clearmap'] = function(block) {
    var code = `Game.clearMap();\n`;
    return code;
  };
  
  Blockly.JavaScript['game_deletebricks'] = function(block) {
    var value_bricks = Blockly.JavaScript.valueToCode(block, 'bricks', Blockly.JavaScript.ORDER_NONE);
    var code = `Game.deleteBricks(${value_bricks});\n`;
    return code;
  };
  
  Blockly.JavaScript['game_findplayer'] = function(block) {
    var value_player = Blockly.JavaScript.valueToCode(block, 'player', Blockly.JavaScript.ORDER_NONE);
    var code = `Game.findPlayerWithName(${value_player});\n`;
    return code;
  };
  
  Blockly.JavaScript['game_loadbricks'] = function(block) {
    var value_bricks = Blockly.JavaScript.valueToCode(block, 'bricks', Blockly.JavaScript.ORDER_NONE);
    var code = `Game.loadBricks(${value_bricks});\n`;
    return code;
  };
  
  Blockly.JavaScript['game_loadbrk'] = function(block) {
    var value_bricks = Blockly.JavaScript.valueToCode(block, 'bricks', Blockly.JavaScript.ORDER_NONE);
    var code = `Game.loadBrk(${value_bricks});\n`;
    return code;
  };
  
  Blockly.JavaScript['game_messageall'] = function(block) {
    var value_bricks = Blockly.JavaScript.valueToCode(block, 'bricks', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = `Game.messageAll(${value_bricks});\n`;
    return code;
  };
  
  Blockly.JavaScript['game_newbot'] = function(block) {
    var value_bot = Blockly.JavaScript.valueToCode(block, 'bot', Blockly.JavaScript.ORDER_NONE);
    var code = `Game.newBot(${value_bot});\n`;
    return code;
  };
  
  Blockly.JavaScript['game_newbrick'] = function(block) {
    var value_brick = Blockly.JavaScript.valueToCode(block, 'brick', Blockly.JavaScript.ORDER_NONE);
    var code = `Game.newBot(${value_brick});\n`;
    return code;
  };
  
  Blockly.JavaScript['game_newteam'] = function(block) {
    var value_team = Blockly.JavaScript.valueToCode(block, 'team', Blockly.JavaScript.ORDER_NONE);
    var code = `Game.newTeam(${value_team});\n`;
    return code;
  };
  
  Blockly.JavaScript['game_distance'] = function(block) {
    var value_vec1 = Blockly.JavaScript.valueToCode(block, 'vec1', Blockly.JavaScript.ORDER_NONE);
    var value_vec2 = Blockly.JavaScript.valueToCode(block, 'vec2', Blockly.JavaScript.ORDER_COMMA);

    var code = `Game.pointDistance3D(${value_vec1},${value_vec2})`;
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };
  
  Blockly.JavaScript['game_setenvironment'] = function(block) {
    var value_env = Blockly.JavaScript.valueToCode(block, 'env', Blockly.JavaScript.ORDER_NONE);
    var code = `Game.setEnvironment(${value_env});\n`;
    return code;
  };
  
  Blockly.JavaScript['game_environment'] = function(block) {
    var value_ambient = Blockly.JavaScript.valueToCode(block, 'ambient', Blockly.JavaScript.ORDER_ASSIGNMENT);
    var value_basecolor = Blockly.JavaScript.valueToCode(block, 'basecolor', Blockly.JavaScript.ORDER_ASSIGNMENT);
    var value_basesize = Blockly.JavaScript.valueToCode(block, 'basesize', Blockly.JavaScript.ORDER_ASSIGNMENT);
    var value_skycolor = Blockly.JavaScript.valueToCode(block, 'skycolor', Blockly.JavaScript.ORDER_ASSIGNMENT);
    var value_sunintensity = Blockly.JavaScript.valueToCode(block, 'sunintensity', Blockly.JavaScript.ORDER_ASSIGNMENT);
    var dropdown_weather = block.getFieldValue('weather');
    var code = `{ambient:${value_ambient||"#000000"},baseColor:${value_basecolor||"#248233"},baseSize:${value_basesize||100},skyColor:${value_skycolor||"#71b1e6"},sunIntensity:${value_sunintensity||400},weather:${dropdown_weather||"sun"}}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  
  Blockly.JavaScript['game_shutdown'] = function(block) {
    var code = `Game.shutdown();\n`;
    return code;
  };

  Blockly.JavaScript['game_playerjoin'] = function(block) {
    var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
    var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
    // TODO: Assemble JavaScript into code variable.
    console.log(statements_code)
    var code = '...;\n';
    return code;
  };
  
  Blockly.JavaScript['game_playerleave'] = function(block) {
    var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
    var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
  
  Blockly.JavaScript['game_initialspawn'] = function(block) {
    var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
    var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
  
  Blockly.JavaScript['game_chat'] = function(block) {
    var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
    var variable_var2 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var2'), Blockly.Variables.NAME_TYPE);
    var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
  
  Blockly.JavaScript['game_chatted'] = function(block) {
    var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
    var variable_var2 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var2'), Blockly.Variables.NAME_TYPE);
    var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };