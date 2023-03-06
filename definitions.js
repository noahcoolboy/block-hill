var definitions = [{
    "type": "game_print",
    "message0": "Show %1 at %2 %3 for %4 seconds",
    "args0": [
        {
            "type": "input_value",
            "name": "text",
            "check": "String"
        },
        {
            "type": "field_dropdown",
            "name": "position",
            "options": [
                [
                    "top",
                    "top"
                ],
                [
                    "center",
                    "center"
                ],
                [
                    "bottom",
                    "bottom"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "duration",
            "check": "Number"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "text_log",
    "message0": "log %1",
    "args0": [
        {
            "type": "input_value",
            "name": "NAME"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 160,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "game_get",
    "message0": "Get property %1 of the game",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "prop",
            "options": [
                [
                    "MOTD",
                    "MOTD"
                ],
                [
                    "assign random team",
                    "assignRandomTeam"
                ],
                [
                    "disabled core scripts",
                    "disabledCoreScripts"
                ],
                [
                    "environment",
                    "environment"
                ],
                [
                    "game id",
                    "gameId"
                ],
                [
                    "local",
                    "local"
                ],
                [
                    "map",
                    "map"
                ],
                [
                    "map name",
                    "mapName"
                ],
                [
                    "modules",
                    "modules"
                ],
                [
                    "player count",
                    "playerCount"
                ],
                [
                    "player spawning",
                    "playerSpawning"
                ],
                [
                    "players",
                    "players"
                ],
                [
                    "port",
                    "port"
                ],
                [
                    "recursive loading",
                    "recursiveLoading"
                ],
                [
                    "send bricks",
                    "sendBricks"
                ],
                [
                    "server settings",
                    "serverSettings"
                ],
                [
                    "system messages",
                    "systemMessages"
                ],
                [
                    "user scripts",
                    "userScripts"
                ],
                [
                    "version",
                    "version"
                ],
                [
                    "world",
                    "world"
                ]
            ]
        }
    ],
    "output": null,
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "game_set",
    "message0": "Set property %1 of the game to %2",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "prop",
            "options": [
                [
                    "MOTD",
                    "MOTD"
                ],
                [
                    "assign random team",
                    "assignRandomTeam"
                ],
                [
                    "disabled core scripts",
                    "disabledCoreScripts"
                ],
                [
                    "environment",
                    "environment"
                ],
                [
                    "game id",
                    "gameId"
                ],
                [
                    "local",
                    "local"
                ],
                [
                    "map",
                    "map"
                ],
                [
                    "map name",
                    "mapName"
                ],
                [
                    "modules",
                    "modules"
                ],
                [
                    "player count",
                    "playerCount"
                ],
                [
                    "player spawning",
                    "playerSpawning"
                ],
                [
                    "players",
                    "players"
                ],
                [
                    "port",
                    "port"
                ],
                [
                    "recursive loading",
                    "recursiveLoading"
                ],
                [
                    "send bricks",
                    "sendBricks"
                ],
                [
                    "server settings",
                    "serverSettings"
                ],
                [
                    "system messages",
                    "systemMessages"
                ],
                [
                    "user scripts",
                    "userScripts"
                ],
                [
                    "version",
                    "version"
                ],
                [
                    "world",
                    "world"
                ]
            ]
        },
        {
            "type": "input_value",
            "name": "value"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "game_clearmap",
    "message0": "Clear the map",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "game_deletebricks",
    "message0": "Delete list of bricks %1",
    "args0": [
        {
            "type": "input_value",
            "name": "bricks",
            "check": "Array"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "game_findplayer",
    "message0": "Find player with name %1",
    "args0": [
        {
            "type": "input_value",
            "name": "player",
            "check": "String"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "game_loadbricks",
    "message0": "Load bricks from list of bricks %1",
    "args0": [
        {
            "type": "input_value",
            "name": "bricks",
            "check": "Array"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "game_loadbrk",
    "message0": "Load map from %1",
    "args0": [
        {
            "type": "input_value",
            "name": "bricks",
            "check": "String"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "game_messageall",
    "message0": "Message everyone %1",
    "args0": [
        {
            "type": "input_value",
            "name": "bricks",
            "check": "String"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "game_newbot",
    "message0": "Register bot %1",
    "args0": [
        {
            "type": "input_value",
            "name": "bot",
            "check": "Bot"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "game_newbrick",
    "message0": "Register brick %1",
    "args0": [
        {
            "type": "input_value",
            "name": "brick",
            "check": "Brick"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "game_newteam",
    "message0": "Register team %1",
    "args0": [
        {
            "type": "input_value",
            "name": "team",
            "check": "Team"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "game_distance",
    "message0": "Distance between %1 and %2",
    "args0": [
        {
            "type": "input_value",
            "name": "vec1",
            "check": "Vector3"
        },
        {
            "type": "input_value",
            "name": "vec2",
            "check": "Vector3"
        }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "game_setenvironment",
    "message0": "Set environment to %1",
    "args0": [
        {
            "type": "input_value",
            "name": "env",
            "check": "Environment"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "game_environment",
    "lastDummyAlign0": "RIGHT",
    "message0": "New environment with %1 ambient color %2 baseplate color %3 baseplate size %4 sky color %5 sun intensity %6 weather %7",
    "args0": [
        {
            "type": "input_dummy",
            "align": "RIGHT"
        },
        {
            "type": "input_value",
            "name": "ambient",
            "check": "String",
            "align": "RIGHT"
        },
        {
            "type": "input_value",
            "name": "basecolor",
            "check": "String",
            "align": "RIGHT"
        },
        {
            "type": "input_value",
            "name": "basesize",
            "check": "Number",
            "align": "RIGHT"
        },
        {
            "type": "input_value",
            "name": "skycolor",
            "check": "String",
            "align": "RIGHT"
        },
        {
            "type": "input_value",
            "name": "sunintensity",
            "check": "Number",
            "align": "RIGHT"
        },
        {
            "type": "field_dropdown",
            "name": "weather",
            "options": [
                [
                    "rain",
                    "rain"
                ],
                [
                    "snow",
                    "snow"
                ],
                [
                    "sun",
                    "sun"
                ]
            ]
        }
    ],
    "inputsInline": false,
    "output": null,
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "game_shutdown",
    "message0": "Shutdown game",
    "inputsInline": false,
    "previousStatement": null,
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "game_playerjoin",
    "message0": "Player joined %1 %2 %3",
    "args0": [
        {
            "type": "field_variable",
            "name": "var",
            "variable": "player"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "code"
        }
    ],
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "game_playerleave",
    "message0": "Player left %1 %2 %3",
    "args0": [
        {
            "type": "field_variable",
            "name": "var",
            "variable": "player"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "code"
        }
    ],
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "game_initialspawn",
    "message0": "Player loaded in %1 %2 %3",
    "args0": [
        {
            "type": "field_variable",
            "name": "var",
            "variable": "player"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "code"
        }
    ],
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "game_chat",
    "message0": "Intercept chat messages %1 %2 %3 %4",
    "args0": [
        {
            "type": "field_variable",
            "name": "var",
            "variable": "player"
        },
        {
            "type": "field_variable",
            "name": "var2",
            "variable": "message"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "code"
        }
    ],
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "game_chatted",
    "message0": "Player chatted %1 %2 %3 %4",
    "args0": [
        {
            "type": "field_variable",
            "name": "var",
            "variable": "player"
        },
        {
            "type": "field_variable",
            "name": "var2",
            "variable": "message"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "code"
        }
    ],
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
}, {
    "type": "player_get",
    "message0": "Get property %1 of player %2",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "prop",
            "options": [
                [
                    "admin",
                    "admin"
                ],
                [
                    "alive",
                    "alive"
                ],
                [
                    "option",
                    "OPTIONNAME"
                ],
                [
                    "worn assets",
                    "assets"
                ],
                [
                    "authenticated",
                    "authenticated"
                ],
                [
                    "blocked users",
                    "blockedUsers"
                ],
                [
                    "camera distance",
                    "cameraDistance"
                ],
                [
                    "camera subject",
                    "cameraObject"
                ],
                [
                    "camera position",
                    "cameraPosition"
                ],
                [
                    "camera rotation",
                    "cameraRotation"
                ],
                [
                    "camera type",
                    "cameraType"
                ],
                [
                    "chat color",
                    "chatColor"
                ],
                [
                    "body colors",
                    "colors"
                ],
                [
                    "left",
                    "destroyed"
                ],
                [
                    "health",
                    "health"
                ],
                [
                    "inventory",
                    "inventory"
                ],
                [
                    "jump power",
                    "jumpPower"
                ],
                [
                    "load avatar",
                    "loadAvatar"
                ],
                [
                    "load tool",
                    "loadTool"
                ],
                [
                    "local bricks",
                    "localBricks"
                ],
                [
                    "max health",
                    "maxHealth"
                ],
                [
                    "membership type",
                    "membershipType"
                ],
                [
                    "muted",
                    "muted"
                ],
                [
                    "net id",
                    "netId"
                ],
                [
                    "position",
                    "position"
                ],
                [
                    "rotation",
                    "rotation"
                ],
                [
                    "scale",
                    "scale"
                ],
                [
                    "score",
                    "score"
                ],
                [
                    "socket",
                    "socket"
                ],
                [
                    "spawn handler",
                    "spawnHandler"
                ],
                [
                    "spawn position",
                    "spawnPosition"
                ],
                [
                    "speech bubble",
                    "speech"
                ],
                [
                    "speed",
                    "speed"
                ],
                [
                    "team",
                    "team"
                ],
                [
                    "equipped tool",
                    "toolEquipped"
                ],
                [
                    "user id",
                    "userId"
                ],
                [
                    "username",
                    "username"
                ],
                [
                    "player id",
                    "playerId"
                ]
            ]
        },
        {
            "type": "input_value",
            "name": "NAME"
        }
    ],
    "output": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "player_set",
    "message0": "set %1 of player %2 to %3",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "prop",
            "options": [
                [
                    "avatar",
                    "Avatar"
                ],
                [
                    "camera distance",
                    "CameraDistance"
                ],
                [
                    "camera FOV",
                    "CameraFOV"
                ],
                [
                    "camera subject",
                    "CameraObject"
                ],
                [
                    "camera position",
                    "CameraPosition"
                ],
                [
                    "camera type",
                    "CameraType"
                ],
                [
                    "environment",
                    "Environment"
                ],
                [
                    "health",
                    "Health"
                ],
                [
                    "jump power",
                    "JumpPower"
                ],
                [
                    "outfit",
                    "Outfit"
                ],
                [
                    "position",
                    "Position"
                ],
                [
                    "scale",
                    "Scale"
                ],
                [
                    "score",
                    "Score"
                ],
                [
                    "speech bubble",
                    "Speech"
                ],
                [
                    "team",
                    "Team"
                ]
            ]
        },
        {
            "type": "input_value",
            "name": "player"
        },
        {
            "type": "input_value",
            "name": "val"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "player_addtool",
    "message0": "add tool %1 to player %2",
    "args0": [
        {
            "type": "input_value",
            "name": "tool"
        },
        {
            "type": "input_value",
            "name": "player"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "player_print",
    "message0": "print %1 for %2 seconds for player %3 at %4",
    "args0": [
        {
            "type": "input_value",
            "name": "message"
        },
        {
            "type": "input_value",
            "name": "duration"
        },
        {
            "type": "input_value",
            "name": "player"
        },
        {
            "type": "field_dropdown",
            "name": "position",
            "options": [
                [
                    "top",
                    "top"
                ],
                [
                    "center",
                    "center"
                ],
                [
                    "bottom",
                    "bottom"
                ]
            ]
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "player_clearmap",
    "message0": "clear map for player %1",
    "args0": [
        {
            "type": "input_value",
            "name": "player"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "player_deletebricks",
    "message0": "delete list of bricks %1 for player %2",
    "args0": [
        {
            "type": "input_value",
            "name": "bricks"
        },
        {
            "type": "input_value",
            "name": "player"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "player_destroytool",
    "message0": "remove tool %1 from player %2",
    "args0": [
        {
            "type": "input_value",
            "name": "tool"
        },
        {
            "type": "input_value",
            "name": "player"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "player_equiptool",
    "message0": "force equip tool %1 for player %2",
    "args0": [
        {
            "type": "input_value",
            "name": "tool"
        },
        {
            "type": "input_value",
            "name": "player"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "player_kick",
    "message0": "kick player %1 for reason %2",
    "args0": [
        {
            "type": "input_value",
            "name": "player"
        },
        {
            "type": "input_value",
            "name": "reason"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "player_kill",
    "message0": "kill player %1",
    "args0": [
        {
            "type": "input_value",
            "name": "player"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "player_message",
    "message0": "message player %1 message %2",
    "args0": [
        {
            "type": "input_value",
            "name": "player"
        },
        {
            "type": "input_value",
            "name": "message"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "player_prompt",
    "message0": "prompt player %1 message %2",
    "args0": [
        {
            "type": "input_value",
            "name": "player"
        },
        {
            "type": "input_value",
            "name": "message"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "player_respawn",
    "message0": "respawn player %1",
    "args0": [
        {
            "type": "input_value",
            "name": "player"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "player_unequiptool",
    "message0": "unequip tool %1 from player %2",
    "args0": [
        {
            "type": "input_value",
            "name": "tool"
        },
        {
            "type": "input_value",
            "name": "player"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "team_new",
    "message0": "New team with name %1 color %2",
    "args0": [
        {
            "type": "input_value",
            "name": "name"
        },
        {
            "type": "input_value",
            "name": "color",
            "align": "RIGHT"
        }
    ],
    "output": "Team",
    "colour": 75,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "team_get",
    "message0": "Get property %1 of team %2",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "prop",
            "options": [
                [
                    "color",
                    "color"
                ],
                [
                    "name",
                    "name"
                ],
                [
                    "id",
                    "teamId"
                ]
            ]
        },
        {
            "type": "input_value",
            "name": "NAME"
        }
    ],
    "output": null,
    "colour": 75,
    "tooltip": "",
    "helpUrl": ""
}, {
    "type": "brick_new",
    "message0": "New brick with %1 position %2 scale %3 color %4",
    "args0": [
        {
            "type": "input_dummy",
            "align": "RIGHT"
        },
        {
            "type": "input_value",
            "name": "position",
            "align": "RIGHT"
        },
        {
            "type": "input_value",
            "name": "scale",
            "align": "RIGHT"
        },
        {
            "type": "input_value",
            "name": "color",
            "align": "RIGHT"
        }
    ],
    "output": "Brick",
    "colour": 135,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "brick_get",
    "message0": "Get property %1 of brick %2",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "prop",
            "options": [
                [
                    "click distance",
                    "clickDistance"
                ],
                [
                    "clickable",
                    "clickable"
                ],
                [
                    "collision enabled",
                    "collision"
                ],
                [
                    "color",
                    "color"
                ],
                [
                    "deleted",
                    "destroyed"
                ],
                [
                    "light color",
                    "lightColor"
                ],
                [
                    "light enabled",
                    "lightEnabled"
                ],
                [
                    "light range",
                    "lightRange"
                ],
                [
                    "model",
                    "model"
                ],
                [
                    "name",
                    "name"
                ],
                [
                    "position",
                    "position"
                ],
                [
                    "rotation",
                    "rotation"
                ],
                [
                    "scale",
                    "scale"
                ],
                [
                    "shape",
                    "shape"
                ],
                [
                    "visibility",
                    "visibility"
                ],
                [
                    "id",
                    "id"
                ]
            ]
        },
        {
            "type": "input_value",
            "name": "brick"
        }
    ],
    "output": null,
    "colour": 135,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "brick_set",
    "message0": "Set property %1 of brick %2 to %3",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "prop",
            "options": [
                [
                    "collision enabled",
                    "Collision"
                ],
                [
                    "color",
                    "Color"
                ],
                [
                    "light color",
                    "LightColor"
                ],
                [
                    "light enabled",
                    "LightEnabled"
                ],
                [
                    "light range",
                    "lightRange"
                ],
                [
                    "model",
                    "Model"
                ],
                [
                    "position",
                    "Position"
                ],
                [
                    "rotation",
                    "Rotation"
                ],
                [
                    "scale",
                    "Scale"
                ],
                [
                    "visibility",
                    "Visibility"
                ]
            ]
        },
        {
            "type": "input_value",
            "name": "brick"
        },
        {
            "type": "input_value",
            "name": "to"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 135,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "brick_clone",
    "message0": "clone brick %1",
    "args0": [
        {
            "type": "input_value",
            "name": "brick"
        }
    ],
    "inputsInline": true,
    "output": "Brick",
    "colour": 135,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "brick_destroy",
    "message0": "destroy brick %1",
    "args0": [
        {
            "type": "input_value",
            "name": "brick"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 135,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "brick_intersects",
    "message0": "brick %1 touches other brick %2",
    "args0": [
        {
            "type": "input_value",
            "name": "brick"
        },
        {
            "type": "input_value",
            "name": "brick2"
        }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 135,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "brick_clicked",
    "message0": "brick was clicked %1 %2 %3 %4 %5",
    "args0": [
        {
            "type": "input_value",
            "name": "brick"
        },
        {
            "type": "field_variable",
            "name": "player",
            "variable": "player"
        },
        {
            "type": "field_variable",
            "name": "secure",
            "variable": "secure"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "code"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 135,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "brick_touching",
    "message0": "brick was touched %1 %2 %3 %4",
    "args0": [
        {
            "type": "input_value",
            "name": "brick"
        },
        {
            "type": "field_variable",
            "name": "player",
            "variable": "player"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "code"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 135,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "brick_touchingended",
    "message0": "brick isn't touched anymore %1 %2 %3 %4",
    "args0": [
        {
            "type": "input_value",
            "name": "brick"
        },
        {
            "type": "field_variable",
            "name": "player",
            "variable": "player"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "code"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 135,
    "tooltip": "",
    "helpUrl": ""
}, {
    "type": "vec3_new",
    "message0": "New vector3 with %1 x %2 y %3 z %4",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "x"
        },
        {
            "type": "input_value",
            "name": "y"
        },
        {
            "type": "input_value",
            "name": "z"
        }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 240,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "vec3_get",
    "message0": "Get property %1 of vector3 %2",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "prop",
            "options": [
                [
                    "x",
                    "x"
                ],
                [
                    "y",
                    "y"
                ],
                [
                    "z",
                    "z"
                ]
            ]
        },
        {
            "type": "input_value",
            "name": "vec"
        }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 240,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "vec3_add",
    "message0": "Add vector3 %1 with other vector3 %2",
    "args0": [
        {
            "type": "input_value",
            "name": "vec"
        },
        {
            "type": "input_value",
            "name": "vec2"
        }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 240,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "vec3_sub",
    "message0": "subtract vector3 %1 with other vector3 %2",
    "args0": [
        {
            "type": "input_value",
            "name": "vec"
        },
        {
            "type": "input_value",
            "name": "vec2"
        }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 240,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "vec3_equ",
    "message0": "vector3 %1 equals vector3 %2",
    "args0": [
        {
            "type": "input_value",
            "name": "vec"
        },
        {
            "type": "input_value",
            "name": "vec2"
        }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 240,
    "tooltip": "",
    "helpUrl": ""
},
{
  "type": "game_on",
  "message0": "On Game Start %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "code"
    }
  ],
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
}]

Blockly.defineBlocksWithJsonArray(definitions)
