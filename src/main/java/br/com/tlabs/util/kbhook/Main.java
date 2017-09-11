package br.com.tlabs.util.kbhook;

import org.jnativehook.GlobalScreen;
import org.jnativehook.NativeHookException;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.logging.Handler;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Main {

    public static void main(String[] args) throws NativeHookException {

        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));

        GlobalScreen.registerNativeHook();

        disableLogs();

        KeyboardListener listener = new KeyboardListener(System.out);

        GlobalScreen.addNativeKeyListener(listener);

    }


    private static void disableLogs() {

        Logger logger = Logger.getLogger(GlobalScreen.class.getPackage().getName());
        logger.setLevel(Level.OFF);

        // Change the level for all handlers attached to the default logger.
        Handler[] handlers = Logger.getLogger("").getHandlers();
        for (int i = 0; i < handlers.length; i++) {
            handlers[i].setLevel(Level.OFF);
        }

    }
}
