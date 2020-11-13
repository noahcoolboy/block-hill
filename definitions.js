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
}]

Blockly.defineBlocksWithJsonArray(definitions)