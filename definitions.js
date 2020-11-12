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
    "colour": 65,
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
}]

Blockly.defineBlocksWithJsonArray(definitions)