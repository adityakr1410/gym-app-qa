package com.energyx.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ClientDashboardPage extends BasePage{

    @FindBy(linkText = "Home")
    private WebElement homeNavButton;

    @FindBy(linkText = "Coaches")
    private WebElement coachesNavButton;

    public ClientDashboardPage clickNavhomeButton()
    {
        homeNavButton.click();
        return this;
    }

    public ClientDashboardPage clientNavCoachesButton(){
        coachesNavButton.click();
        return this;
    }
}
