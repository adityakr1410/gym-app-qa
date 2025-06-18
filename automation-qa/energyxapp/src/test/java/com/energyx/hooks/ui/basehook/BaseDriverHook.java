package com.energyx.hooks.ui.basehook;

import com.energyx.contexts.UITestContext;
import com.energyx.exceptions.IncorrectBrowserException;
import com.energyx.utils.DriverFactory;
import com.energyx.utils.ui.ScreenShotTaker;
import io.cucumber.java.*;
import io.qameta.allure.Allure;

import java.io.FileInputStream;
import java.io.FileNotFoundException;

public class BaseDriverHook {
    @Before
    public void setUp(){
        DriverFactory.createDriver(UITestContext.getBrowser());
    }

    @AfterStep
    public void afterStep(Scenario scenario) throws FileNotFoundException {
        if(scenario.isFailed()){
            String screenshotPath = ScreenShotTaker.getScreenShot(DriverFactory.getDriver().orElseThrow(IncorrectBrowserException::new),scenario.getName());
            Allure.addAttachment("Failed Screenshot -"+scenario.getName(),new FileInputStream(screenshotPath));
        }
    }

    @After
    public void tearDown(Scenario scenario){
        DriverFactory.removeDriver();
    }

}
