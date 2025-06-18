package com.energyx.stepdefinitions.ui;

import com.energyx.constants.ConstantProvider;
import com.energyx.pages.CoachPage;
import com.energyx.utils.ConfigReader;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

public class CoachStep {
    CoachPage coachPage = new CoachPage();

    @Given("User is on the Coaches page")
    public void userIsOnTheCoachesPage() {
        coachPage.getOnCoachPage();
    }

    @When("User clicks on the Book Workout button for {string} coach")
    public void userClicksOnTheButtonForAnyCoach(String coach) {
        coachPage.clickOnBookWorkoutOf(coach);
    }

    @Then("Login modal pops up")
    public void loginModalPopsUp() {
        Assert.assertTrue(coachPage.isLoginModalVisible(), "Login Modal doesn't show up");
    }

    @When("User clicks on Coaches in Nav")
    public void userClicksOnCoachesInNav() {
        coachPage.clickOnCoachesInNav();
    }

    @When("User clicks on Login Button in Login modal")
    public void userClicksOnLoginButtonInLoginModal() {
        coachPage.clickOnLoginBtnInLoginModal();
    }

    @When("User clicks on Cancel Button in Login modal")
    public void userClicksOnCancelButtonInLoginModal() {
        coachPage.clickOnCancelBtnInLoginModal();
    }

    @Then("Modal gets disappear")
    public void modalGetsDisappear() {
        Assert.assertTrue(coachPage.isLoginModalDisabled(), "Modal doesn't get disappear");
    }

    @Then("User remains in Coaches page")
    public void userRemainsInCoachesPage() {
        String expectedUrl = ConfigReader.getFrontendURI() + ConstantProvider.coachEndpoint;
        Assert.assertEquals(coachPage.waitForAndGetCurrentUrl(ConstantProvider.coachEndpoint), expectedUrl);
    }

    @Then("User views the list of coaches")
    public void userViewsTheListOfCoaches() {
        Assert.assertTrue(coachPage.getNumberOfCoach() > 0, "There is no coach card in coach page");
    }

    @Then("each coach card should display the name, bio and Book Workout button")
    public void eachCoachCardShouldDisplayTheNameBioAndButton() {
        SoftAssert softAssert = new SoftAssert();
        softAssert.assertTrue(coachPage.isNameDisplayed(), "Name is not displayed in coach card");
        softAssert.assertTrue(coachPage.isBioDisplayed(), "Bio is not displayed in coach card");
        softAssert.assertTrue(coachPage.isBtnDisplayed(), "Book Workout Button is not displayed in coach card");
        softAssert.assertAll();
    }

    @Then("User redirects to coach profile page")
    public void userRedirectsToCoachProfilePage() {
        String expectedRegex = ConfigReader.getFrontendURI() + ConstantProvider.coachEndpoint + "/.*";
        System.out.println(expectedRegex);
        System.out.println(coachPage.waitForAndGetCurrentUrl(null));
        Assert.assertTrue(coachPage.waitForAndGetCurrentUrl(null).matches(expectedRegex), "User is not in Coach Profile page");
    }
}