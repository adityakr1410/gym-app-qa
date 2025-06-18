package com.energyx.utils.ui;


import com.energyx.exceptions.IncorrectPathException;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

public class ScreenShotTaker {


    public static void getScreenShot(WebDriver driver) throws IOException {
        getScreenShot(driver,"");
    }

    public static String getScreenShot(WebDriver driver,String resultName){
        String imgPath = System.getProperty("user.dir")+"\\target\\screenshots\\\screenshot-"+resultName+ CurrentTimeUtil.getCurrentTime()+".png";
        try{
            TakesScreenshot ts = (TakesScreenshot) driver;
            File f = ts.getScreenshotAs(OutputType.FILE);
            File dir = new File("target\\screenshots");
            if(!dir.exists()){
                dir.mkdir();
            }
            File fp = new File(imgPath);
            Files.copy(f.toPath(),fp.toPath());
        }catch (IOException exception){
            throw new IncorrectPathException();
        }
        return imgPath;
    }
}
