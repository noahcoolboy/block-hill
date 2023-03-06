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

Blockly.JavaScript['game_clearmap'] = function (block) {
    var code = `Game.clearMap();\n`;
    return code;
};

Blockly.JavaScript['game_deletebricks'] = function (block) {
    var value_bricks = Blockly.JavaScript.valueToCode(block, 'bricks', Blockly.JavaScript.ORDER_NONE);
    var code = `Game.deleteBricks(${value_bricks});\n`;
    return code;
};

Blockly.JavaScript['game_findplayer'] = function (block) {
    var value_player = Blockly.JavaScript.valueToCode(block, 'player', Blockly.JavaScript.ORDER_NONE);
    var code = `Game.findPlayerWithName(${value_player});\n`;
    return code;
};

Blockly.JavaScript['game_loadbricks'] = function (block) {
    var value_bricks = Blockly.JavaScript.valueToCode(block, 'bricks', Blockly.JavaScript.ORDER_NONE);
    var code = `Game.loadBricks(${value_bricks});\n`;
    return code;
};

Blockly.JavaScript['game_loadbrk'] = function (block) {
    var value_bricks = Blockly.JavaScript.valueToCode(block, 'bricks', Blockly.JavaScript.ORDER_NONE);
    var code = `Game.loadBrk(${value_bricks});\n`;
    return code;
};

Blockly.JavaScript['game_messageall'] = function (block) {
    var value_bricks = Blockly.JavaScript.valueToCode(block, 'bricks', Blockly.JavaScript.ORDER_NONE);

    var code = `Game.messageAll(${value_bricks});\n`;
    return code;
};

Blockly.JavaScript['game_newbot'] = function (block) {
    var value_bot = Blockly.JavaScript.valueToCode(block, 'bot', Blockly.JavaScript.ORDER_NONE);
    var code = `Game.newBot(${value_bot});\n`;
    return code;
};

Blockly.JavaScript['game_newbrick'] = function (block) {
    var value_brick = Blockly.JavaScript.valueToCode(block, 'brick', Blockly.JavaScript.ORDER_NONE);
    var code = `Game.newBrick(${value_brick});\n`;
    return code;
};

Blockly.JavaScript['game_newteam'] = function (block) {
    var value_team = Blockly.JavaScript.valueToCode(block, 'team', Blockly.JavaScript.ORDER_NONE);
    var code = `Game.newTeam(${value_team});\n`;
    return code;
};

Blockly.JavaScript['game_distance'] = function (block) {
    var value_vec1 = Blockly.JavaScript.valueToCode(block, 'vec1', Blockly.JavaScript.ORDER_NONE);
    var value_vec2 = Blockly.JavaScript.valueToCode(block, 'vec2', Blockly.JavaScript.ORDER_COMMA);

    var code = `Game.pointDistance3D(${value_vec1},${value_vec2})`;
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['game_setenvironment'] = function (block) {
    var value_env = Blockly.JavaScript.valueToCode(block, 'env', Blockly.JavaScript.ORDER_NONE);
    var code = `Game.setEnvironment(${value_env});\n`;
    return code;
};

Blockly.JavaScript['game_environment'] = function (block) {
    var value_ambient = Blockly.JavaScript.valueToCode(block, 'ambient', Blockly.JavaScript.ORDER_ASSIGNMENT);
    var value_basecolor = Blockly.JavaScript.valueToCode(block, 'basecolor', Blockly.JavaScript.ORDER_ASSIGNMENT);
    var value_basesize = Blockly.JavaScript.valueToCode(block, 'basesize', Blockly.JavaScript.ORDER_ASSIGNMENT);
    var value_skycolor = Blockly.JavaScript.valueToCode(block, 'skycolor', Blockly.JavaScript.ORDER_ASSIGNMENT);
    var value_sunintensity = Blockly.JavaScript.valueToCode(block, 'sunintensity', Blockly.JavaScript.ORDER_ASSIGNMENT);
    var dropdown_weather = block.getFieldValue('weather');
    var code = `{ambient:${value_ambient || "#000000"},baseColor:${value_basecolor || "#248233"},baseSize:${value_basesize || 100},skyColor:${value_skycolor || "#71b1e6"},sunIntensity:${value_sunintensity || 400},weather:${dropdown_weather || "sun"}}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['game_shutdown'] = function (block) {
    var code = `Game.shutdown();\n`;
    return code;
};

Blockly.JavaScript['game_playerjoin'] = function (block) {
    var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
    var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
    var code = `Game.on("playerJoin", ${variable_var}=>{\n${statements_code}});\n`;
    return code;
};

Blockly.JavaScript['game_playerleave'] = function (block) {
    var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
    var statements_code = Blockly.JavaScript.statementToCode(block, 'code');

    var code = `Game.on("playerLeave", ${variable_var}=>{\n${statements_code}});\n`;
    return code;
};

Blockly.JavaScript['game_initialspawn'] = function (block) {
    var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
    var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
    var code = `Game.on("initialSpawn", ${variable_var}=>{\n${statements_code}});\n`;
    return code;
};

Blockly.JavaScript['game_chat'] = function (block) {
    var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
    var variable_var2 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var2'), Blockly.Variables.NAME_TYPE);
    var statements_code = Blockly.JavaScript.statementToCode(block, 'code');

    var code = `Game.on("chat",(${variable_var}, ${variable_var2})=>{\n${statements_code}});\n`;
    return code;
};

Blockly.JavaScript['game_chatted'] = function (block) {
    var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
    var variable_var2 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var2'), Blockly.Variables.NAME_TYPE);
    var statements_code = Blockly.JavaScript.statementToCode(block, 'code');

    var code = `Game.on("chatted",(${variable_var}, ${variable_var2})=>{\n${statements_code}});\n`;
    return code;
};

Blockly.JavaScript['player_get'] = function (block) {
    var dropdown_prop = block.getFieldValue('prop');
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_MEMBER);
    var code = value_name + '.' + dropdown_prop;
    return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['player_set'] = function (block) {
    var dropdown_prop = block.getFieldValue('prop');
    var value_player = Blockly.JavaScript.valueToCode(block, 'player', Blockly.JavaScript.ORDER_MEMBER);
    var value_val = Blockly.JavaScript.valueToCode(block, 'val', Blockly.JavaScript.ORDER_NONE);
    var code = `${value_player}.set${dropdown_prop}(${value_val});\n`;
    return code;
};

Blockly.JavaScript['player_addtool'] = function (block) {
    var value_tool = Blockly.JavaScript.valueToCode(block, 'tool', Blockly.JavaScript.ORDER_NONE);
    var value_player = Blockly.JavaScript.valueToCode(block, 'player', Blockly.JavaScript.ORDER_MEMBER);

    var code = `${value_player}.addTool(${value_tool});\n`;
    return code;
};

Blockly.JavaScript['player_print'] = function (block) {
    var value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_NONE);
    var value_duration = Blockly.JavaScript.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_COMMA);
    var value_player = Blockly.JavaScript.valueToCode(block, 'player', Blockly.JavaScript.ORDER_MEMBER);
    var dropdown_position = block.getFieldValue('position');

    var code = `${value_player}.${dropdown_position}Print(${value_message || "hi"},${value_duration || 2});\n`;
    return code;
};

Blockly.JavaScript['player_clearmap'] = function (block) {
    var value_player = Blockly.JavaScript.valueToCode(block, 'player', Blockly.JavaScript.ORDER_MEMBER);

    var code = `${value_player}.clearMap();\n`;
    return code;
};

Blockly.JavaScript['player_deletebricks'] = function (block) {
    var value_bricks = Blockly.JavaScript.valueToCode(block, 'bricks', Blockly.JavaScript.ORDER_NONE);
    var value_player = Blockly.JavaScript.valueToCode(block, 'player', Blockly.JavaScript.ORDER_MEMBER);

    var code = `${value_player}.deleteBricks(${value_bricks});\n`;
    return code;
};

Blockly.JavaScript['player_destroytool'] = function (block) {
    var value_tool = Blockly.JavaScript.valueToCode(block, 'tool', Blockly.JavaScript.ORDER_NONE);
    var value_player = Blockly.JavaScript.valueToCode(block, 'player', Blockly.JavaScript.ORDER_MEMBER);

    var code = `${value_player}.destroyTool(${value_tool});\n`;
    return code;
};

Blockly.JavaScript['player_equiptool'] = function (block) {
    var value_tool = Blockly.JavaScript.valueToCode(block, 'tool', Blockly.JavaScript.ORDER_NONE);
    var value_player = Blockly.JavaScript.valueToCode(block, 'player', Blockly.JavaScript.ORDER_MEMBER);

    var code = `${value_player}.equipTool(${value_tool});\n`;
    return code;
};

Blockly.JavaScript['player_kick'] = function (block) {
    var value_player = Blockly.JavaScript.valueToCode(block, 'player', Blockly.JavaScript.ORDER_MEMBER);
    var value_reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_NONE);

    var code = `${value_player}.kick(${value_reason || "You have been kicked"});\n`;
    return code;
};

Blockly.JavaScript['player_kill'] = function (block) {
    var value_player = Blockly.JavaScript.valueToCode(block, 'player', Blockly.JavaScript.ORDER_MEMBER);

    var code = `${value_player}.kill();\n`;
    return code;
};

Blockly.JavaScript['player_message'] = function (block) {
    var value_player = Blockly.JavaScript.valueToCode(block, 'player', Blockly.JavaScript.ORDER_MEMBER);
    var value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_NONE);

    var code = `${value_player}.message(${value_message});\n`;
    return code;
};

Blockly.JavaScript['player_prompt'] = function (block) {
    var value_player = Blockly.JavaScript.valueToCode(block, 'player', Blockly.JavaScript.ORDER_MEMBER);
    var value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_NONE);

    var code = `${value_player}.prompt(${value_message});\n`;
    return code;
};

Blockly.JavaScript['player_respawn'] = function (block) {
    var value_player = Blockly.JavaScript.valueToCode(block, 'player', Blockly.JavaScript.ORDER_MEMBER);

    var code = `${value_player}.respawn();\n`;
    return code;
};

Blockly.JavaScript['player_unequiptool'] = function (block) {
    var value_tool = Blockly.JavaScript.valueToCode(block, 'tool', Blockly.JavaScript.ORDER_NONE);
    var value_player = Blockly.JavaScript.valueToCode(block, 'player', Blockly.JavaScript.ORDER_MEMBER);

    var code = `${value_player}.unequipTool(${value_tool});\n`;
    return code;
};

Blockly.JavaScript['team_new'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_NONE);
    var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_COMMA);
    var code = `new Team(${value_name || "\"team\""},${value_color});\n`
    return [code, Blockly.JavaScript.ORDER_NEW];
};

Blockly.JavaScript['team_get'] = function (block) {
    var dropdown_prop = block.getFieldValue('prop');
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_MEMBER);
    var code = `${value_name}.${dropdown_prop}`;
    return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['brick_new'] = function (block) {
    var value_position = Blockly.JavaScript.valueToCode(block, 'position', Blockly.JavaScript.ORDER_NONE);
    var value_scale = Blockly.JavaScript.valueToCode(block, 'scale', Blockly.JavaScript.ORDER_COMMA);
    var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_COMMA);
    var code = `new Brick(${value_position || "new Vector3(0,0,0)"}, ${value_scale || "new Vector3(4,4,4)"}, ${value_color || "#FFFFFF"})`;
    return [code, Blockly.JavaScript.ORDER_NEW];
};

Blockly.JavaScript['brick_get'] = function (block) {
    var dropdown_prop = block.getFieldValue('prop');
    var value_brick = Blockly.JavaScript.valueToCode(block, 'brick', Blockly.JavaScript.ORDER_MEMBER);
    var code = `${value_brick}.${dropdown_prop}`;
    return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['brick_set'] = function (block) {
    var dropdown_prop = block.getFieldValue('prop');
    var value_brick = Blockly.JavaScript.valueToCode(block, 'brick', Blockly.JavaScript.ORDER_MEMBER);
    var value_to = Blockly.JavaScript.valueToCode(block, 'to', Blockly.JavaScript.ORDER_ASSIGNMENT);
    var code = `${value_brick}.${dropdown_prop == "LightEnabled" ? "lightEnabled" + " = " + value_to : "set" + dropdown_prop + `(${value_to})`};\n`; // wat
    return code;
};

Blockly.JavaScript['brick_clone'] = function (block) {
    var value_brick = Blockly.JavaScript.valueToCode(block, 'brick', Blockly.JavaScript.ORDER_MEMBER);
    var code = `${value_brick}.clone()`;
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['brick_destroy'] = function (block) {
    var value_brick = Blockly.JavaScript.valueToCode(block, 'brick', Blockly.JavaScript.ORDER_MEMBER);
    var code = `${value_brick}.destroy();\n`;
    return code;
};

Blockly.JavaScript['brick_intersects'] = function (block) {
    var value_brick = Blockly.JavaScript.valueToCode(block, 'brick', Blockly.JavaScript.ORDER_MEMBER);
    var value_brick2 = Blockly.JavaScript.valueToCode(block, 'brick2', Blockly.JavaScript.ORDER_NONE);
    var code = `${value_brick}.intersects(${value_brick2})`;
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['brick_clicked'] = function (block) {
    var value_brick = Blockly.JavaScript.valueToCode(block, 'brick', Blockly.JavaScript.ORDER_MEMBER);
    var variable_player = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('player'), Blockly.Variables.NAME_TYPE);
    var variable_secure = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('secure'), Blockly.Variables.NAME_TYPE);
    var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
    var code = `${value_brick}.clicked((${variable_player}, ${variable_secure})=>{\n${statements_code}\n});\n`;
    return code;
};

Blockly.JavaScript['brick_touching'] = function (block) {
    var value_brick = Blockly.JavaScript.valueToCode(block, 'brick', Blockly.JavaScript.ORDER_ATOMIC);
    var variable_player = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('player'), Blockly.Variables.NAME_TYPE);
    var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
    var code = `${value_brick}.touching((${variable_player})=>{\n${statements_code}\n});\n`;
    return code;
};

Blockly.JavaScript['brick_touchingended'] = function (block) {
    var value_brick = Blockly.JavaScript.valueToCode(block, 'brick', Blockly.JavaScript.ORDER_ATOMIC);
    var variable_player = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('player'), Blockly.Variables.NAME_TYPE);
    var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
    var code = `${value_brick}.touchingEnded((${variable_player})=>{\n${statements_code}\n});\n`;
    return code;
};

Blockly.JavaScript['vec3_new'] = function (block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_NONE);
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_COMMA);
    var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_COMMA);
    var code = `new Vector3(${value_x || 0}, ${value_y || 0}, ${value_z || 0})`;
    return [code, Blockly.JavaScript.ORDER_NEW];
};

Blockly.JavaScript['vec3_get'] = function (block) {
    var dropdown_prop = block.getFieldValue('prop');
    var value_vec = Blockly.JavaScript.valueToCode(block, 'vec', Blockly.JavaScript.ORDER_MEMBER);
    var code = `${value_vec}.${dropdown_prop}`;
    return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['vec3_add'] = function (block) {
    var value_vec = Blockly.JavaScript.valueToCode(block, 'vec', Blockly.JavaScript.ORDER_MEMBER);
    var value_vec2 = Blockly.JavaScript.valueToCode(block, 'vec2', Blockly.JavaScript.ORDER_NONE);
    var code = `${value_vec}.addVector(${value_vec2})`;
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['vec3_sub'] = function (block) {
    var value_vec = Blockly.JavaScript.valueToCode(block, 'vec', Blockly.JavaScript.ORDER_MEMBER);
    var value_vec2 = Blockly.JavaScript.valueToCode(block, 'vec2', Blockly.JavaScript.ORDER_NONE);
    var code = `${value_vec}.subVector(${value_vec2})`;
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['vec3_equ'] = function (block) {
    var value_vec = Blockly.JavaScript.valueToCode(block, 'vec', Blockly.JavaScript.ORDER_MEMBER);
    var value_vec2 = Blockly.JavaScript.valueToCode(block, 'vec2', Blockly.JavaScript.ORDER_NONE);
    var code = `${value_vec}.equalsVector(${value_vec2})`;
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
Blockly.JavaScript['game_on'] = function(block) {

  var statements_game_on = Blockly.JavaScript.statementToCode(block, 'Game.on');
    var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
    var code = `Game.on("scriptsLoaded",=>{\n${statements_code}});\n`;
  return code;
};
