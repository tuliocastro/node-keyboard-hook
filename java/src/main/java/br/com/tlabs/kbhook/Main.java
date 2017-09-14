package br.com.tlabs.kbhook;

import br.com.tlabs.kbhook.util.SystemUtil;
import org.jnativehook.GlobalScreen;
import org.jnativehook.NativeHookException;

import java.io.File;
import java.io.FilenameFilter;
import java.util.Arrays;
import java.util.logging.Handler;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Main {

    public static void main(String[] args) throws NativeHookException {

        KeyboardListener listener = new KeyboardListener(System.out);

        clearTemporaryFiles();

        disableLogs();

        GlobalScreen.unregisterNativeHook();

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

    private static void clearTemporaryFiles() {

        switch (SystemUtil.getOS()) {

            case WINDOWS:
                removeTemporaryFiles();
                break;
        }
    }

    private static void removeTemporaryFiles() {

        String tempDir = System.getProperty("java.io.tmpdir");

        FilenameFilter filterNativeHook = (dir, name) -> name.startsWith("JNativeHook-") && name.endsWith(".dll");

        File[] list = new File(tempDir).listFiles(filterNativeHook);

        Arrays.stream(list).forEach(f -> f.delete());

    }
}
