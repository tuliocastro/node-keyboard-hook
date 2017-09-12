package br.com.tlabs.util.kbhook;

import org.jnativehook.GlobalScreen;
import org.jnativehook.NativeHookException;

import java.io.PrintStream;
import java.util.logging.Handler;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Main {

    public static void main(String[] args) throws NativeHookException {

        KeyboardListener listener = new KeyboardListener(System.out);

        disableLogs();

        GlobalScreen.registerNativeHook();

        GlobalScreen.addNativeKeyListener(listener);

    }

    private static void disableLogs() {

        System.setOut(null);

        Logger logger = Logger.getLogger(GlobalScreen.class.getPackage().getName());
        logger.setLevel(Level.OFF);

        // Change the level for all handlers attached to the default logger.
        Handler[] handlers = Logger.getLogger("").getHandlers();
        for (int i = 0; i < handlers.length; i++) {
            handlers[i].setLevel(Level.OFF);
        }

    }
}
