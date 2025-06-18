package com.energyx.pages;

import com.energyx.constants.ConstantProvider;
import com.energyx.utils.ConfigReader;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.List;

public class
CoachPage extends BasePage{
    private static final Logger log = LogManager.getLogger(CoachPage.class);

    @FindBy(xpath = "//nav//a[@href='/coaches']")
    private WebElement coachesNav;

    @FindBy(xpath = "//div[contains(@class,'grid')]")
    private WebElement cardContainer;

    @FindBy(xpath = "//div[contains(@id,'radix-')]")
    private WebElement loginModal;

    public CoachPage getOnCoachPage(){
        driver.get(ConfigReader.getFrontendURI()+ ConstantProvider.coachEndpoint);
        return this;
    }

    public CoachPage clickOnBookWorkoutOf(String coachName) {
        WebElement bookWorkoutBtn = driver.findElement(By.xpath("//h3[contains(text(),'"+coachName+"')]/following::button"));
        moveToElementAndClick(bookWorkoutBtn);
        return this;
    }

    public CoachPage clickOnCoachesInNav(){
        coachesNav.click();
        return this;
    }

    public int getNumberOfCoach(){
        List<WebElement> coachList = cardContainer.findElements(By.xpath("./*"));
        return coachList.size();
    }


    public boolean isLoginModalVisible(){
        try{
            new WebDriverWait(driver, Duration.ofSeconds(5))
                    .until(ExpectedConditions.visibilityOf(
                            loginModal
                    ));
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public boolean isLoginModalDisabled(){
        try {
            new FluentWait<>(driver)
                    .withTimeout(Duration.ofSeconds(3))
                    .pollingEvery(Duration.ofMillis(100))
                    .until(ExpectedConditions.invisibilityOf(
                            loginModal
                    ));
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public CoachPage clickOnCancelBtnInLoginModal(){
        clickElementOnClickable(
                loginModal.findElement(By.xpath("./div/button[1]"))
        );
        return this;
    }

    public CoachPage clickOnLoginBtnInLoginModal(){
        clickElementOnClickable(
                loginModal.findElement(By.xpath("./div/button[2]"))
        );
        return this;
    }

    public boolean isNameDisplayed(){
        try{
            cardContainer.findElement(By.xpath("./div//h3"));
            log.info("User finds name in coach card");
            return true;
        } catch (Exception e) {
            log.error("User doesn't find name in coach card");
            return false;
        }
    }

    public boolean isBioDisplayed(){
        try{
            cardContainer.findElement(By.xpath("./div/div/div[2]"));
            log.info("User finds bio in coach card");
            return true;
        } catch (Exception e) {
            log.error("User doesn't find bio in coach card");
            return false;
        }
    }

    public boolean isBtnDisplayed(){
        try{
            cardContainer.findElement(By.xpath("./div//button"));
            log.info("User finds Button in coach card");
            return true;
        } catch (Exception e) {
            log.error("User doesn't find Button in coach card");
            return false;
        }
    }


}
