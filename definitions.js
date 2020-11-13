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
}]

Blockly.defineBlocksWithJsonArray(definitions)