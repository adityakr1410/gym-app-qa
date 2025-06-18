package com.energyx.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class DashboardPage extends BasePage {
    @FindBy(xpath = "//section[@id='dashboard-form']/div/div[2]/span")
    private WebElement userName;

    public String getUserName(){
        return userName.getText();
    }
}
