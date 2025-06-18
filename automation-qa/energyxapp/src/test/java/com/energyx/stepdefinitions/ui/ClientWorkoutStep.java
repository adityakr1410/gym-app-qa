package com.energyx.stepdefinitions.ui;

import com.energyx.pages.ClientDashboardPage;
import com.energyx.pages.ClientWorkoutPage;
import com.energyx.pages.CoachesPage;
import com.energyx.pages.HomePage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.testng.Assert;

public class ClientWorkoutStep {

    ClientDashboardPage clientDashboardPage = new ClientDashboardPage();
    HomePage homePage = new HomePage();
    CoachesPage coachesPage = new CoachesPage();
    ClientWorkoutPage clientWorkoutPage = new ClientWorkoutPage();

    @And("User clicks on Home navbar button")
    public void userClicksOnHomeNavbarButton(){
        clientDashboardPage.clickNavhomeButton();
    }
    @Then("Login popup should appear")
    public void loginPopupShouldAppear() {
        Assert.assertTrue(homePage.checkLoginPopUp());
    }

    @Then("Confirm your booking pops up")
    public void confirmYourBookingPopsUp() {
        Assert.assertTrue(homePage.checkConfirmBookingPopup());
    }

    @When("User clicks confirm button on confirm pop up")
    public void userClicksConfirmButtonOnConfirmPopUp() {
        homePage.clickConfirmPopupButton();
    }

    @Then("Workout booking success message should appear")
    public void workoutBookingSuccessMessageShouldAppear(){
        Assert.assertTrue(homePage.checkBookingSuccessPopup());
    }

    @And("User clicks on Coaches navbar button")
    public void userClicksOnCoachesNavbarButton(){
        clientDashboardPage.clientNavCoachesButton();
    }

    @And("User chooses coach {string} Book Workout button")
    public void userChoosesCoachBookWorkoutButton(String coach){
        coachesPage.clickOnCoachBookWorkoutButton(coach);}

    @And("User selects date on coach page {string}")
    public void userSelectsDate(String date)    {
        String []dateArr = date.split(" ");
        coachesPage.setDate(dateArr[0], dateArr[1], dateArr[2]);
    }

    @And("User selects time on coach page {string}")
    public void userSelectsTime(String time){
        coachesPage.setTime(time);
    }

    @And("User clicks coach page Book workout button")
    public void userClicksCoachPageBookWorkoutButton(){
        coachesPage.clickBookWorkoutButton();
    }

    @Then("Coach page confirm booking pops up with {string}, {string} and {string}")
    public void coachPageConfirmBookingPopsUp(String date, String time, String coach){
        Assert.assertTrue(coachesPage.checkBookingConfirmationPopup(date, time, coach));
    }

    @And("User clicks confirm on coach page")
    public void userClicksConfirm(){
        coachesPage.clickBookWorkoutPopupConfirmButton();
    }

    @And("Booking confirmed pops up")
    public void bookingConfirmedPopsUp(){
        Assert.assertTrue(coachesPage.checkCoachBookedSuccessfullyPopup());
    }

    @Then("Workout page should have card with {string} and {string}")
    public void workoutPageShouldHaveCardWithAnd(String date, String time) {
        Assert.assertTrue(clientWorkoutPage.checkCardIsPresent(date, time));
    }
}
