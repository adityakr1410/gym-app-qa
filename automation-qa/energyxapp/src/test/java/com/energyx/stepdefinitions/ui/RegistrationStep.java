package com.energyx.stepdefinitions.ui;

import com.energyx.constants.ConstantProvider;
import com.energyx.pages.RegistrationPage;
import com.energyx.utils.ConfigReader;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.testng.Assert;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

public class RegistrationStep {
    RegistrationPage registrationPage = new RegistrationPage();

    @Given("User is on Registration Page")
    public void userIsOnRegistrationPage() {
        registrationPage.getOnRegistrationPage();
    }

    @Given("User sign up with the following details")
    public void userSignUpWithTheFollowingDetails(DataTable dataTable){
        Map<String,String> userDetail = dataTable.asMaps(String.class,String.class).get(0);
        registrationPage
                .enterFirstName(userDetail.get("firstName"))
                .enterLastName(userDetail.get("lastName"))
                .enterEmail(userDetail.get("email"))
                .enterPassword(userDetail.get("password"))
                .enterConfirmPassword(userDetail.get("confirmPassword"))
                .selectYourTarget(userDetail.get("target"))
                .selectYourPreference(userDetail.get("preferableActivity"));
    }

    @When("User clicks on Create An Account Button")
    public void userClicksOnCreateAnAccountButton(){
        registrationPage.clickOnCreateAnAccountBtn();
    }

    @Then("Success toast should pop up")
    public void successToastShouldPopUp(){
        Assert.assertEquals(registrationPage.verifyRegistrationPassed(), "Registration Successful");
    }

    @Then("User redirected to login page")
    public void userRedirectedToLoginPage(){
        String expectedUrl = ConfigReader.getFrontendURI()+ConstantProvider.logInEndpoint;
        Assert.assertEquals(registrationPage.waitForAndGetCurrentUrl(ConstantProvider.logInEndpoint),expectedUrl);
    }

    @Then("User gets error message in {string} field with {string}")
    public void userGetsErrorMessageInFieldWith(String field,String message){
        Assert.assertEquals(registrationPage.getFailedMessage(field),message);
    }

    @Then("User gets duplicate Registration Toast")
    public void userGetsDuplicateRegistrationToast(){
        Assert.assertEquals(registrationPage.getDuplicateRegistrationError(),"Registration Failed");
    }


}
