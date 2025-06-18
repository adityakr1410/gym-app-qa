package com.energyx.pages;

import com.energyx.exceptions.IncorrectBrowserException;
import com.energyx.utils.ConfigReader;
import com.energyx.utils.DriverFactory;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public abstract class BasePage {
    WebDriver driver;
    protected static final Logger log = LogManager.getLogger(BasePage.class);

    public BasePage() {
        this.driver = DriverFactory.getDriver().orElseThrow(()->new IncorrectBrowserException("Driver is null"));
        PageFactory.initElements(driver,this);
        implicitlyWait(10);
    }

    public void implicitlyWait(int second){
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(second));
    }

    public void waitForTextToBePresent(WebElement element, String text)
    {
        Wait<WebDriver> fluentWait = new FluentWait<>(driver)
                .withTimeout(Duration.ofSeconds(2))
                .pollingEvery(Duration.ofMillis(400))
                .ignoring(NoSuchElementException.class)
                .ignoring(StaleElementReferenceException.class);

        fluentWait.until(ExpectedConditions.textToBePresentInElement(element, text));
    }

    public void moveToElementAndClick(WebElement element){
        new WebDriverWait(driver,Duration.ofSeconds(3)).until(ExpectedConditions.elementToBeClickable(element));
        new Actions(driver)
                .moveToElement(element)
                .click()
                .perform();
    }

    public void enterData(WebElement element,String data){
        element.clear();
        if(data!=null&&!data.isEmpty()){
            element.sendKeys(data);
        }
    }

    public String waitForAndGetCurrentUrl(String desiredEndPoint){
        String expectedUrl = ConfigReader.getFrontendURI()+desiredEndPoint;
        if(desiredEndPoint==null){
            implicitlyWait(3);
            return driver.getCurrentUrl();
        }
        try{
            new WebDriverWait(driver,Duration.ofSeconds(10))
                    .until(ExpectedConditions.urlToBe(expectedUrl));
            log.info("Successfully navigate to -> {}",expectedUrl);
        }catch (Exception e){
            String actualUrl = driver.getCurrentUrl();
            log.warn("Failed to navigate -> actual:{} , expected:{}",actualUrl,expectedUrl);
        }
        return driver.getCurrentUrl();
    }

    public void clickElementOnClickable(WebElement element){
        new WebDriverWait(driver,Duration.ofSeconds(5))
                .until(ExpectedConditions.elementToBeClickable(element))
                .click();
    }

}

