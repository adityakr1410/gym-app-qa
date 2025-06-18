package com.energyx.contexts;

public class UITestContext {
    private static String browserType;

    private UITestContext(){}

    public static void setBrowser(String browser){
        browserType = browser;
    }

    public static String getBrowser(){
        return browserType;
    }

}
