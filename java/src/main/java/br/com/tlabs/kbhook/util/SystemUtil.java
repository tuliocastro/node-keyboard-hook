package br.com.tlabs.kbhook.util;

import br.com.tlabs.kbhook.constant.OSEnum;
import sun.reflect.generics.reflectiveObjects.NotImplementedException;

public class SystemUtil {

    private static String OS = System.getProperty("os.name").toLowerCase();

    public static OSEnum getOS() {

        if (isWindows()) {
            return OSEnum.WINDOWS;
        }

        if (isMac()) {
            return OSEnum.MAC;
        }

        if (isUnix()) {
            return OSEnum.UNIX;
        }

        if (isSolaris()) {
            return OSEnum.SOLARIS;
        }

        throw new NotImplementedException();
    }

    public static boolean isWindows() {

        return OS.contains("win");

    }

    public static boolean isMac() {

        return OS.contains("mac");

    }

    public static boolean isUnix() {

        return OS.contains("nix") || OS.contains("nux") || OS.contains("aix");

    }

    public static boolean isSolaris() {

        return OS.contains("sunos");

    }


}
