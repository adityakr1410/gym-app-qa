package com.energyx.pages;

import com.energyx.constants.ConstantProvider;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class NavPage extends BasePage {
    public NavPage clickOnWorkoutNavLink(){
        driver.findElement(By.cssSelector("a[href="+ConstantProvider.coachEndpoint+"]"));
        return this;
    }

    public NavPage clickOnLogo(){
        driver.findElement(By.cssSelector("a[href="+ConstantProvider.dashboardEndpoint+"]"));
        return this;
    }
}
