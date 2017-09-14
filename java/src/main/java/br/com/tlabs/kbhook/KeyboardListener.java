package br.com.tlabs.kbhook;

import com.google.gson.Gson;
import org.jnativehook.keyboard.NativeKeyEvent;
import org.jnativehook.keyboard.NativeKeyListener;

import java.io.*;

public class KeyboardListener implements NativeKeyListener {

    private OutputStream output;

    private boolean isControlPressed;
    private boolean isShiftPressed;
    private boolean isAltPressed;
    private boolean isMetaPressed;


    public KeyboardListener(OutputStream output) {
        this.output = output;
    }

    @Override
    public void nativeKeyTyped(NativeKeyEvent nativeKeyEvent) {

        sendResponse(EventActionEnum.TYPED, nativeKeyEvent);

    }

    @Override
    public void nativeKeyPressed(NativeKeyEvent nativeKeyEvent) {

        boolean modifier = catchModifierPressed(nativeKeyEvent);

        if (modifier) {
            return;
        }

        sendResponse(EventActionEnum.PRESSED, nativeKeyEvent);
    }

    @Override
    public void nativeKeyReleased(NativeKeyEvent nativeKeyEvent) {

        boolean modifier = catchModifierReleased(nativeKeyEvent);

        if (modifier) {
            return;
        }

        sendResponse(EventActionEnum.RELEASED, nativeKeyEvent);

    }

    private Boolean catchModifierPressed(NativeKeyEvent nativeKeyEvent) {

        switch (nativeKeyEvent.getKeyCode()) {

            case NativeKeyEvent.VC_CONTROL:
                isControlPressed = true;
                return true;

            case NativeKeyEvent.VC_SHIFT:
                isShiftPressed = true;
                return true;

            case NativeKeyEvent.VC_ALT:
                isAltPressed = true;
                return true;

            case NativeKeyEvent.VC_META:
                isMetaPressed = true;
                return true;
        }

        return false;

    }

    private Boolean catchModifierReleased(NativeKeyEvent nativeKeyEvent) {

        switch (nativeKeyEvent.getKeyCode()) {

            case NativeKeyEvent.VC_CONTROL:
                isControlPressed = false;
                return true;

            case NativeKeyEvent.VC_SHIFT:
                isShiftPressed = false;
                return true;

            case NativeKeyEvent.VC_ALT:
                isAltPressed = false;
                return true;

            case NativeKeyEvent.VC_META:
                isMetaPressed = false;
                return true;
        }

        return false;

    }

    private void sendResponse(EventActionEnum action, NativeKeyEvent nativeKeyEvent) {

        try {

            KeyboardResponse response = new KeyboardResponse(action, nativeKeyEvent);
            response.shift = isShiftPressed;
            response.ctrl = isControlPressed;
            response.alt = isAltPressed;
            response.meta = isMetaPressed;

            String json = new Gson().toJson(response);

            output.write(json.getBytes());

            output.flush();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
