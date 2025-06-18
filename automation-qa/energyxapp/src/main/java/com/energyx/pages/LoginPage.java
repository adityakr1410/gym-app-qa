package com.energyx.pages;

import com.energyx.constants.ConstantProvider;
import com.energyx.utils.ConfigReader;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class LoginPage extends BasePage {
    @FindBy(name = "email")
    private WebElement emailInput;

    @FindBy(name = "password")
    private WebElement passwordInput;

    @FindBy(id = "login-button")
    private WebElement loginButton;

    public LoginPage getOnLoginPage(){
        driver.get(ConfigReader.getFrontendURI()+ ConstantProvider.logInEndpoint);
        return this;
    }

    public LoginPage enterEmail(String email){
        enterData(emailInput,email);
        return this;
    }

    public LoginPage enterPassword(String password){
        enterData(passwordInput,password);
        return this;
    }

    public LoginPage clickOnLoginBtn(){
        loginButton.click();
        return this;
    }

    public String getErrorMessage(){
        WebElement errorMessage = driver.findElement(By.xpath("//form/p"));
        new WebDriverWait(driver, Duration.ofSeconds(10))
                .until(ExpectedConditions.visibilityOf(errorMessage));
        return errorMessage.getText();
    }

    public String getSuccessToastMessage(){
        WebElement toast = driver.findElement(
                By.xpath("//img[@alt='Success Icon']/parent::div/following-sibling::div/p")
        );
        new WebDriverWait(driver,Duration.ofSeconds(10))
                .until(ExpectedConditions.visibilityOf(toast));
        return toast.getText();
    }

    public String getErrorToastMessage(){
        WebElement toast = driver.findElement(
                By.xpath("//img[@alt='Error Icon']/parent::div/following-sibling::div/p[1]")
        );
        new WebDriverWait(driver,Duration.ofSeconds(10))
                .until(ExpectedConditions.visibilityOf(toast));
        return toast.getText();
    }

    public String getErrorToastDetail(){
        WebElement toast = driver.findElement(
                By.xpath("//img[@alt='Error Icon']/parent::div/following-sibling::div/p[2]")
        );
        new WebDriverWait(driver,Duration.ofSeconds(10))
                .until(ExpectedConditions.visibilityOf(toast));
        return toast.getText();
    }
}

