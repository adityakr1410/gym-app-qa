package com.energyx.utils;

import com.energyx.exceptions.IncorrectBrowserException;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;


import java.util.Optional;


public class DriverFactory {
    private static final ThreadLocal<WebDriver> threadLocalDriver = new ThreadLocal<>();
    private static final Logger log = LogManager.getLogger(DriverFactory.class);

    private DriverFactory(){}

    public static WebDriver createDriver(String browser){
        if(browser==null){
            throw new IncorrectBrowserException();
        }
        ChromeOptions options = new ChromeOptions();
        if(threadLocalDriver.get()==null){
            try {
                WebDriver driver;
                switch (browser.trim().toLowerCase()) {
                    case "chrome" -> driver = new ChromeDriver();
                    case "edge" -> driver = new EdgeDriver();
                    default -> throw new IncorrectBrowserException();
                }
                log.info("Driver created successfully");
                threadLocalDriver.set(driver);
            } catch (Exception e) {
                log.error("Error in creating driver");
            }
        }

        return threadLocalDriver.get();
    }


    public static Optional<WebDriver> getDriver(){
        return Optional.ofNullable(threadLocalDriver.get());
    }

    public static void removeDriver() {
        WebDriver driver = threadLocalDriver.get();
        if (driver != null) {
            driver.quit();
            threadLocalDriver.remove();
        }
    }
}
