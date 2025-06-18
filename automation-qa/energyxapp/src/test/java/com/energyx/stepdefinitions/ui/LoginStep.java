package com.energyx.stepdefinitions.ui;

import com.energyx.constants.ConstantProvider;
import com.energyx.pages.LoginPage;
import com.energyx.utils.ConfigReader;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.testng.Assert;

import java.util.Map;

public class LoginStep {
    LoginPage loginPage = new LoginPage();

    @Given("User is on Login Page")
    public void userIsOnLoginPage(){
        loginPage.getOnLoginPage();
    }

    @Given("User sign in with the following details")
    public void userSignInWithTheFollowingDetails(DataTable dataTable) {
        Map<String,String> userCredential = dataTable.asMaps(String.class,String.class).get(0);
        loginPage
                .enterEmail(userCredential.get("email"))
                .enterPassword(userCredential.get("password"));
    }

    @When("User clicks on Login Button")
    public void userClicksOnLoginButton(){
        loginPage.clickOnLoginBtn();
    }

    @Then("User gets error message in Login Page with {string}")
    public void userGetsErrorMessageInLoginPageWith(String expectedError) {
        Assert.assertEquals(loginPage.getErrorMessage(),expectedError);
    }

    @Then("{string} toast pops up")
    public void successfulLoginToastPopsUp(String expectedStatus){
        Assert.assertEquals(loginPage.getSuccessToastMessage(),expectedStatus);
    }

    @Then("User navigates to Dashboard Page")
    public void userNavigatesToDashboardPage(){
        String expectedUrl = ConfigReader.getFrontendURI()+ConstantProvider.dashboardEndpoint;
        Assert.assertEquals(loginPage.waitForAndGetCurrentUrl(""),expectedUrl);
    }

    @Then("{string} toast pops up with message {string}")
    public void toastPopsUpWithMessage(String status, String message) {
        Assert.assertEquals(loginPage.getErrorToastMessage(),status);
        Assert.assertEquals(loginPage.getErrorToastDetail(),message);
    }
}
