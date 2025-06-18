package com.energyx.utils.ui;

import java.text.SimpleDateFormat;
import java.util.Date;

public class CurrentTimeUtil {
    public static String getCurrentTime(){
        String format = "yyyy.MM.dd.HH.mm.ss.SSSX";
        return new SimpleDateFormat(format).format(new Date());
    }
}
