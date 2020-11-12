# Block-hill
This repository contains the source code of block-hill \
With block-hill, you can code your brick-hill games with coding blocks (scratch) \
This was created for the people that don't have any coding experience and don't have the time to learn JS \
Happy coding!
## Contributing
If you would like to give me a helping hand by making/designing new blocks, here is how you can
#### Step 1 - designing the block
You'll need to explain to blockly what the block looks like, for that you'll have to use a tool which you can find here \
https://blockly-demo.appspot.com/static/demos/blockfactory/index.html \
There is a video explaining how you can use the blockfactory \
[![](https://img.youtube.com/vi/s2_xaEvcVI0/0.jpg)](https://www.youtube.com/watch?v=s2_xaEvcVI0&feature=emb_logo) \
Blocks have to be exported in json, and be added to the array in definitions.js \
Make sure it has a correct name such as **bot_new**, **brick_collision**, **player_get**
#### Step 2 - coding the block
Blockly needs to know how the blocks is code to then convert it back to javascript \
To do this, in the block factory, you'll have "Generator stub" \
Use the *Generator stub* as a template for your code \
You'll see `var code = "...\n";` \
Put the code in the ... using the variables given \
After making your code, transform it into an array. Like this \
```var code = `Game.${dropdown_position}PrintAll(${value_text},${value_duration});\n` ``` \ 
becomes \
```var code = [`Game.${dropdown_position}PrintAll(${value_text},${value_duration});\n`,Blockly.JavaScript.ORDER_NONE] ``` \
Now, here is the difficult part \
You'll have to replace Blockly.JavaScript.ORDER_NONE with a correct value \
Here is a page explaining why and how https://developers.google.com/blockly/guides/create-custom-blocks/operator-precedence
#### Step 3 - Commiting it
Done? Great! \
Make a pull request on the github explaining all the blocks you added \
I'll merge it and the blocks will be added! \
If you contributed, thanks!