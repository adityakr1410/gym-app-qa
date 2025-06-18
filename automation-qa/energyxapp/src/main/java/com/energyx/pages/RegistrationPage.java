package com.energyx.pages;


import com.energyx.constants.ConstantProvider;
import com.energyx.utils.ConfigReader;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.List;

public class RegistrationPage extends BasePage {
    @FindBy(name = "firstName")
    private WebElement firstNameInput;

    @FindBy(name = "lastName")
    private WebElement lastNameInput;

    @FindBy(name = "email")
    private WebElement emailInput;

    @FindBy(name = "password")
    private WebElement passwordInput;

    @FindBy(name = "confirmPassword")
    private WebElement confirmPasswordInput;

    @FindBys({@FindBy(xpath = "//img[@alt='Dropdown']/parent::button")})
    private List<WebElement> dropDowns;

    @FindBy(id = "login-button")
    private WebElement signUpButton;

    public RegistrationPage getOnRegistrationPage(){
        driver.get(ConfigReader.getFrontendURI()+ ConstantProvider.signUpEndpoint);
        return this;
    }

    public RegistrationPage enterFirstName(String firstName){
        enterData(firstNameInput,firstName);
        return this;
    }

    public RegistrationPage enterLastName(String lastName){
        enterData(lastNameInput,lastName);
        return this;
    }

    public RegistrationPage enterEmail(String email){
        enterData(emailInput,email);
        return this;
    }

    public RegistrationPage enterPassword(String password){
        enterData(passwordInput,password);
        return this;
    }

    public RegistrationPage enterConfirmPassword(String confirmPassword){
        enterData(confirmPasswordInput,confirmPassword);
        return this;
    }

    public RegistrationPage selectYourTarget(String option){
        dropDowns.get(0).click();
        dropDowns.get(0).findElement(By.xpath(".//following-sibling::ul/li/span[text()='"+option+"']")).click();
        return this;
    }

    public RegistrationPage selectYourPreference(String option){
        dropDowns.get(1).click();
        dropDowns.get(1).findElement(By.xpath(".//following-sibling::ul/li/span[text()='"+option+"']")).click();
        return this;
    }

    public RegistrationPage clickOnCreateAnAccountBtn(){
        signUpButton.click();
        return this;
    }

    private String getInputFieldError(WebElement inputField){
        WebElement errorMessage = inputField.findElement(
                By.xpath("./ancestor::fieldset/following-sibling::p")
        );
        return  errorMessage.getText();
    }


    public String getDuplicateRegistrationError(){
        WebElement toast = driver.findElement(
                By.xpath("//img[@alt='Error Icon']/parent::div/following-sibling::div/p")
        );
        new WebDriverWait(driver,Duration.ofSeconds(10))
                .until(ExpectedConditions.visibilityOf(toast));
        return toast.getText();
    }

    public String verifyRegistrationPassed(){
        WebElement toast = driver.findElement(
                By.xpath("//img[@alt='Success Icon']/parent::div/following-sibling::div/p")
        );
        new WebDriverWait(driver,Duration.ofSeconds(10))
                .until(ExpectedConditions.visibilityOf(toast));
        return toast.getText();
    }

    public String getSuccessToastMessage(){
        WebElement toast = driver.findElement(
                By.xpath("//img[@alt='Success Icon']/parent::div/following-sibling::div/p")
        );
        new WebDriverWait(driver,Duration.ofSeconds(10))
                .until(ExpectedConditions.visibilityOf(toast));
        return toast.getText();
    }


    public String getFailedMessage(String field){
        return switch (field.toLowerCase().trim()){
            case "first name" -> getInputFieldError(firstNameInput);
            case "last name" -> getInputFieldError(lastNameInput);
            case "password" -> getInputFieldError(passwordInput);
            case "email"-> getInputFieldError(emailInput);
            case "confirm password" -> getInputFieldError(confirmPasswordInput);
            default -> "";
        };
    }

}
