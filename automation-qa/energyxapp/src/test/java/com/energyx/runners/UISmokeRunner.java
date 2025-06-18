package com.energyx.runners;

import com.energyx.contexts.UITestContext;
import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;
import org.testng.annotations.*;

import java.io.IOException;

@CucumberOptions(
        features = "src/test/resources/features/ui",
        glue = {"com.energyx.hooks.ui.basehook","com.energyx.stepdefinitions.ui"},
        tags ="@smoke",
        plugin = {"io.qameta.allure.cucumber7jvm.AllureCucumber7Jvm"},
        publish = true
)
public class UISmokeRunner extends AbstractTestNGCucumberTests
{
    @BeforeTest
    @Parameters("browser")
    public void setBrowser(@Optional("chrome") String browser){
        UITestContext.setBrowser(browser);
    }

    @DataProvider(parallel = true)
    @Override
    public Object[][] scenarios(){
        return super.scenarios();
    }

    @AfterSuite
    public void openReport() {
        try {
            System.out.println("Starting Allure report server...");

            String command;
            if (System.getProperty("os.name").toLowerCase().contains("windows")) {
                command = "cmd.exe /k cd target && allure serve allure-results";
                ProcessBuilder processBuilder = new ProcessBuilder("cmd.exe", "/c", "start", "cmd.exe", "/k", "cd target && allure serve allure-results");
                processBuilder.start();
            } else {
                if (System.getProperty("os.name").toLowerCase().contains("mac")) {
                    ProcessBuilder processBuilder = new ProcessBuilder("osascript", "-e",
                            "tell application \"Terminal\" to do script \"cd " + System.getProperty("user.dir") + "/target && allure serve allure-results\"");
                    processBuilder.start();
                }
                else {
                    ProcessBuilder processBuilder = new ProcessBuilder("gnome-terminal", "--", "bash", "-c",
                            "cd " + System.getProperty("user.dir") + "/target && allure serve allure-results; exec bash");
                    processBuilder.start();
                }
            }

            System.out.println("Allure report server started in a new terminal window");

        } catch (IOException e) {
            System.err.println("Failed to start Allure report: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
