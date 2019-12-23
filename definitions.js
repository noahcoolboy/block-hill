Blockly.Blocks['brick_new'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("New brick");
    this.appendValueInput("POSITION")
        .setCheck("Vector3")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Position");
    this.appendValueInput("SIZE")
        .setCheck("Vector3")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Size");
    this.appendValueInput("COLOR")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Color");
    this.appendValueInput("CLICKABLE")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Clickable");
    this.setInputsInline(false);
    this.setOutput(true, "Brick");
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['vector_new'] = {
  init: function() {
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("New vector3 with X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("Y");
    this.appendValueInput("Z")
        .setCheck("Number")
        .appendField("Z");
    this.setInputsInline(true);
    this.setOutput(true, "Vector3");
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bot_new'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("New bot with name");
    this.setInputsInline(false);
    this.setOutput(true, "Bot");
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['outfit_new'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(["Player","Bot"])
        .appendField("New outfit for the player or bot");
    this.setInputsInline(false);
    this.setOutput(true, "Outfit");
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['team_new'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("New team with name");
    this.appendValueInput("COLOR")
        .setCheck("String")
        .appendField("And color");
    this.setInputsInline(true);
    this.setOutput(true, "Team");
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['tool_new'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("New tool with name");
    this.setInputsInline(true);
    this.setOutput(true, "Tool");
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bot_interact'] = {
  init: function() {
    this.appendValueInput("INPUT")
        .setCheck("Bot")
        .appendField("Get the property")
        .appendField(new Blockly.FieldDropdown([["position","POS"], ["rotation","ROT"], ["scale","SCA"]]), "PROPERTY")
        .appendField("from bot");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bot_get'] = {
  init: function() {
    this.appendValueInput("INPUT")
        .setCheck("Bot")
        .appendField("Get the property")
        .appendField(new Blockly.FieldDropdown([["assets","ASS"], ["colors","COL"], ["name","NAM"], ["netId","NET"], ["position","POS"], ["rotation","ROT"], ["scale","SCA"], ["speech","SPE"], ["botId","BOT"]]), "PROPERTY")
        .appendField("from bot");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bot_set'] = {
  init: function() {
    this.appendValueInput("INPUT")
        .setCheck("Bot")
        .appendField("Set the property")
        .appendField(new Blockly.FieldDropdown([["assets","ASS"], ["colors","COL"], ["name","NAM"], ["netId","NET"], ["position","POS"], ["rotation","ROT"], ["scale","SCA"], ["speech","SPE"], ["botId","BOT"]]), "PROPERTY")
        .appendField("from bot");
    this.appendValueInput("INPUT2")
        .setCheck(null)
        .appendField("to");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bot_findnearestplayer'] = {
  init: function() {
    this.appendValueInput("Bot")
        .setCheck("Bot")
        .appendField("Find nearest player to bot");
    this.setInputsInline(true);
    this.setOutput(true, "Player");
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bot_lookatplayer'] = {
  init: function() {
    this.appendValueInput("BOT")
        .setCheck("Bot")
        .appendField("Make bot");
    this.appendValueInput("PLAYER")
        .setCheck("Player")
        .appendField("look at player");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bot_lookatpoint'] = {
  init: function() {
    this.appendValueInput("BOT")
        .setCheck("Bot")
        .appendField("Make bot");
    this.appendValueInput("POINT")
        .setCheck("Vector3")
        .appendField("look at point");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bot_movetowardsplayer'] = {
  init: function() {
    this.appendValueInput("BOT")
        .setCheck("Bot")
        .appendField("Make bot");
    this.appendValueInput("PLAYER")
        .setCheck("Player")
        .appendField("move towards player");
    this.appendValueInput("SPEED")
        .setCheck("Number")
        .appendField("at a speed of");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bot_movetowardspoint'] = {
  init: function() {
    this.appendValueInput("BOT")
        .setCheck("Bot")
        .appendField("Make bot");
    this.appendValueInput("POINT")
        .setCheck("Vector3")
        .appendField("move towards point");
    this.appendValueInput("SPEED")
        .setCheck("Number")
        .appendField("at a speed of");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bot_setavatar'] = {
  init: function() {
    this.appendValueInput("BOT")
        .setCheck("Bot")
        .appendField("Set avatar of bot");
    this.appendValueInput("ID")
        .setCheck("Number")
        .appendField("to player with player Id");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bot_setoutfit'] = {
  init: function() {
    this.appendValueInput("BOT")
        .setCheck("Bot")
        .appendField("Set outfit of bot");
    this.appendValueInput("OUTFIT")
        .setCheck("Outfit")
        .appendField("to");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bot_setposition'] = {
  init: function() {
    this.appendValueInput("BOT")
        .setCheck("Bot")
        .appendField("Set position of bot");
    this.appendValueInput("POSITION")
        .setCheck("Vector3")
        .appendField("to");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bot_setrotation'] = {
  init: function() {
    this.appendValueInput("BOT")
        .setCheck("Bot")
        .appendField("Set rotation of bot");
    this.appendValueInput("ROTATION")
        .setCheck("Vector3")
        .appendField("to");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bot_setscale'] = {
  init: function() {
    this.appendValueInput("BOT")
        .setCheck("Bot")
        .appendField("Set scale of bot");
    this.appendValueInput("SCALE")
        .setCheck("Vector3")
        .appendField("to");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bot_setspeech'] = {
  init: function() {
    this.appendValueInput("BOT")
        .setCheck("Bot")
        .appendField("Set speechbubble of bot");
    this.appendValueInput("SPEECH")
        .setCheck("String")
        .appendField("to");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['outfit_set'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Apply outfit");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['outfit_copy'] = {
  init: function() {
    this.appendValueInput("PLAYER")
        .setCheck("Player")
        .appendField("copy outfit from player");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['outfit_prop'] = {
  init: function() {
    this.appendValueInput("OUTFIT")
        .setCheck("Outfit")
        .appendField("Set property")
        .appendField(new Blockly.FieldDropdown([["all body colors","body"], ["face","face"], ["hat1","hat1"], ["hat2","hat2"], ["hat3","hat3"], ["head","head"], ["left arm color","leftArm"], ["left leg color","leftLeg"], ["right arm color","rightArm"], ["right leg color","rightLeg"], ["torso color","torso"]]), "PROP")
        .appendField("of outfit");
    this.appendValueInput("INPUT")
        .setCheck(null)
        .appendField("to");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};