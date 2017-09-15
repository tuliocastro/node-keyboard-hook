package br.com.tlabs.kbhook;

import javafx.scene.input.KeyCode;
import org.jnativehook.keyboard.NativeKeyEvent;

import java.io.Serializable;

public class KeyboardResponse implements Serializable {

    public EventActionEnum action;
    public Integer code;
    public Character key;
    public String name;
    public boolean shift;
    public boolean alt;
    public boolean ctrl;
    public boolean meta;

    public KeyboardResponse() {

    }


    public KeyboardResponse(EventActionEnum action, NativeKeyEvent event) {

        this.action = action;
        this.code = event.getKeyCode();
        this.key = event.getKeyChar();
        this.name = NativeKeyEvent.getKeyText(event.getKeyCode());

    }

}
