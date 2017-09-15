# Node Keyboard Hook
This Module help you to listen for Keyboard Actions natively. It uses a Java Module (JNativeHook) to intercept the keyboard events. That way you don't need node-gyp to rebuild this module.

## Install

    npm install --save nkb-hook

## How to Use

## Examples

[Examples](examples): All the examples are available at 'examples' folder.

### On Key Pressed

    var hook = require('../nkb-hook.js');
    
    var onPressed = function (pressed) {
    
        console.log(pressed);
        console.log('You pressed the key with code ' + pressed.code);
    
    };
    
    hook.start().onPressed(onPressed);
    


    

