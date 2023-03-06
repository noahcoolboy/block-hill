var toolbox = {
    "kind": "categoryToolbox",
    "contents": [
        {
            "kind": "category",
            "name": "Logic",
            "colour": "210",
            "contents": [
                {
                    "kind": "block",
                    "type": "controls_if"
                },
                {
                    "kind": "block",
                    "type": "logic_compare"
                },
                {
                    "kind": "block",
                    "type": "logic_operation"
                },
                {
                    "kind": "block",
                    "type": "logic_negate"
                },
                {
                    "kind": "block",
                    "type": "logic_boolean"
                },
                {
                    "kind": "block",
                    "type": "logic_null"
                },
                {
                    "kind": "block",
                    "type": "logic_ternary"
                }
            ]
        },
        {
            "kind": "category",
            "name": "Loops",
            "colour": "120",
            "contents": [
                {
                    "kind":"block",
                    "type":"controls_repeat_ext"
                },
                {
                    "kind":"block",
                    "type":"controls_whileUntil"
                },
                {
                    "kind":"block",
                    "type":"controls_for"
                },
                {
                    "kind":"block",
                    "type":"controls_forEach"
                },
                {
                    "kind":"block",
                    "type":"controls_flow_statements"
                }
            ]
        },
        {
            "kind": "category",
            "name": "Math",
            "colour": "230",
            "contents": [
                {
                    "kind":"block",
                    "type":"math_number"
                },
                {
                    "kind":"block",
                    "type":"math_arithmetic"
                },
                {
                    "kind":"block",
                    "type":"math_single"
                },
                {
                    "kind":"block",
                    "type":"math_trig"
                },
                {
                    "kind":"block",
                    "type":"math_constant"
                },
                {
                    "kind":"block",
                    "type":"math_number_property"
                },
                {
                    "kind":"block",
                    "type":"math_round"
                },
                {
                    "kind":"block",
                    "type":"math_on_list"
                },
                {
                    "kind":"block",
                    "type":"math_modulo"
                },
                {
                    "kind":"block",
                    "type":"math_constrain"
                },
                {
                    "kind":"block",
                    "type":"math_random_int"
                },
                {
                    "kind":"block",
                    "type":"math_random_float"
                },
                {
                    "kind":"block",
                    "type":"math_atan2"
                },
            ]
        },
        {
            "kind":"category",
            "name":"Text",
            "colour": "160",
            "contents":[
                {
                    "kind":"block",
                    "type":"text"
                },
                {
                    "kind":"block",
                    "type":"text_join"
                },
                {
                    "kind":"block",
                    "type":"text_append"
                },
                {
                    "kind":"block",
                    "type":"text_length"
                },
                {
                    "kind":"block",
                    "type":"text_isEmpty"
                },
                {
                    "kind":"block",
                    "type":"text_indexOf"
                },
                {
                    "kind":"block",
                    "type":"text_charAt"
                },
                {
                    "kind":"block",
                    "type":"text_getSubstring"
                },
                {
                    "kind":"block",
                    "type":"text_changeCase"
                },
                {
                    "kind":"block",
                    "type":"text_trim"
                },
                /*{
                    "kind":"block",
                    "type":"text_print"
                },*/ // This uses alert, custom implementation needed
                /*{
                    "kind":"block",
                    "type":"text_prompt_ext"
                },*/ // Not supported
                {
                    "kind":"block",
                    "type":"text_log"
                }
            ]
        },
        {
            "kind":"category",
            "name":"Lists",
            "colour": "260",
            "contents":[
                {
                    "kind":"block",
                    "type":"lists_create_with"
                },
                {
                    "kind":"block",
                    "type":"lists_repeat"
                },
                {
                    "kind":"block",
                    "type":"lists_length"
                },
                {
                    "kind":"block",
                    "type":"lists_isEmpty"
                },
                {
                    "kind":"block",
                    "type":"lists_indexOf"
                },
                {
                    "kind":"block",
                    "type":"lists_getIndex"
                },
                {
                    "kind":"block",
                    "type":"lists_setIndex"
                },
                {
                    "kind":"block",
                    "type":"lists_getSublist"
                },
                {
                    "kind":"block",
                    "type":"lists_split"
                },
                {
                    "kind":"block",
                    "type":"lists_sort"
                }
            ]
        },
        {
            "kind":"category",
            "name":"Colour",
            "colour": "20",
            "contents":[
                {
                    "kind":"block",
                    "type":"colour_picker"
                },
                {
                    "kind":"block",
                    "type":"colour_random"
                },
                {
                    "kind":"block",
                    "type":"colour_rgb"
                },
                {
                    "kind":"block",
                    "type":"colour_blend"
                },
            ]
        },
        {
            "kind":"sep"
        },
        {
            "kind":"category",
            "name":"Variables",
            "colour": "330",
            "custom":"VARIABLE"
        },
        {
            "kind":"category",
            "name":"Functions",
            "colour": "310",
            "custom":"PROCEDURE"
        },
        {
            "kind":"sep"
        },
        {
            "kind":"category",
            "name":"Game",
            "colour":"0",
            "contents":[
                {
                    "kind":"block",
                    "type":"game_print"
                }, 
                {
                    "kind":"block",
                    "type":"game_get"
                },
                {
                    "kind":"block",
                    "type":"game_set"
                },
                {
                    "kind":"block",
                    "type":"game_clearmap"
                },
                {
                    "kind":"block",
                    "type":"game_deletebricks"
                },
                {
                    "kind":"block",
                    "type":"game_findplayer"
                },
                {
                    "kind":"block",
                    "type":"game_loadbricks"
                },
                {
                    "kind":"block",
                    "type":"game_loadbrk"
                },
                {
                    "kind":"block",
                    "type":"game_messageall"
                },
                {
                    "kind":"block",
                    "type":"game_newbot"
                },
                {
                    "kind":"block",
                    "type":"game_newbrick"
                },
                {
                    "kind":"block",
                    "type":"game_newteam"
                },
                {
                    "kind":"block",
                    "type":"game_distance"
                },
                {
                    "kind":"block",
                    "type":"game_setenvironment"
                },
                {
                    "kind":"block",
                    "type":"game_environment"
                },
                {
                    "kind":"block",
                    "type":"game_shutdown"
                },
                {
                    "kind":"block",
                    "type":"game_on"
                },
                {
                    "kind":"block",
                    "type":"game_playerjoin"
                },
                {
                    "kind":"block",
                    "type":"game_playerleave"
                },
                {
                    "kind":"block",
                    "type":"game_initialspawn"
                },
                {
                    "kind":"block",
                    "type":"game_chat"
                },
                {
                    "kind":"block",
                    "type":"game_chatted"
                }
            ]
        },
        {
            "kind":"category",
            "name":"Player",
            "colour":"180",
            "contents":[
                {
                    "kind":"block",
                    "type":"player_get"
                    
                },
                {
                    "kind":"block",
                    "type":"player_set"
                    
                },
                {
                    "kind":"block",
                    "type":"player_addtool"
                    
                },
                {
                    "kind":"block",
                    "type":"player_print"
                    
                },
                {
                    "kind":"block",
                    "type":"player_clearmap"
                    
                },
                {
                    "kind":"block",
                    "type":"player_deletebricks"
                    
                },
                {
                    "kind":"block",
                    "type":"player_destroytool"
                    
                },
                {
                    "kind":"block",
                    "type":"player_equiptool"
                    
                },
                {
                    "kind":"block",
                    "type":"player_kick"
                    
                },
                {
                    "kind":"block",
                    "type":"player_kill"
                    
                },
                {
                    "kind":"block",
                    "type":"player_message"
                    
                },
                {
                    "kind":"block",
                    "type":"player_prompt"
                    
                },
                {
                    "kind":"block",
                    "type":"player_respawn"
                    
                },
                {
                    "kind":"block",
                    "type":"player_unequiptool"
                    
                }
            ]
        },
        {
            "kind":"category",
            "colour":"75",
            "name":"Team",
            "contents":[
                {
                    "kind":"block",
                    "type":"team_new"
                },
                {
                    "kind":"block",
                    "type":"team_get"
                }
            ]    
        },
        {
            "kind":"category",
            "colour":"135",
            "name":"Brick",
            "contents": [
                {
                    "kind":"block",
                    "type":"brick_new"
                },
                {
                    "kind":"block",
                    "type":"brick_get"
                },
                {
                    "kind":"block",
                    "type":"brick_set"
                },
                {
                    "kind":"block",
                    "type":"brick_clone"
                },
                {
                    "kind":"block",
                    "type":"brick_destroy"
                },
                {
                    "kind":"block",
                    "type":"brick_intersects"
                },
                {
                    "kind":"block",
                    "type":"brick_clicked"
                },
                {
                    "kind":"block",
                    "type":"brick_touching"
                },
                {
                    "kind":"block",
                    "type":"brick_touchingended"
                }
            ]
        },
        {
            "kind":"category",
            "colour":"240",
            "name":"Vector 3",
            "contents": [
                {
                    "kind":"block",
                    "type":"vec3_new"
                },
                {
                    "kind":"block",
                    "type":"vec3_get"
                },
                {
                    "kind":"block",
                    "type":"vec3_add"
                },
                {
                    "kind":"block",
                    "type":"vec3_sub"
                },
                {
                    "kind":"block",
                    "type":"vec3_equ"
                },
                
            ]
        }
    ]
}
window.toolbox = toolbox
