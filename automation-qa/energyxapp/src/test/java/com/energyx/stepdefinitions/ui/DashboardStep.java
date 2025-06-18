package com.energyx.stepdefinitions.ui;

import com.energyx.pages.DashboardPage;
import io.cucumber.java.en.Then;
import org.testng.Assert;

public class DashboardStep {
    DashboardPage dashboardPage = new DashboardPage();

    @Then("Username in dashboard is showing {string}")
    public void usernameInDashboardIsShowing(String expectedRole){
        String actualName = dashboardPage.getUserName();
        Assert.assertTrue(actualName.contains(expectedRole),expectedRole+" is not there in \""+actualName+"\" in dashboard");
    }
}
