package com.energyx.stepdefinitions.ui;

import com.energyx.pages.HomePage;
import io.cucumber.java.bs.A;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.apache.poi.ss.formula.functions.T;
import org.testng.Assert;

public class HomePageStep {

    HomePage homePage = new HomePage();

    @Given("User is on the Home Page")
    public void userIsOnTheHomePage() {
        homePage.getOnHomePage();
    }

    @When("User selects sport {string}")
    public void userSelectSport(String sport) {
        homePage.selectTypeOfSport(sport);
    }

    @And("User selects date {string}")
    public void userSelectDate(String date) {
        String[] dateArr = date.split(" ");
        homePage.setDateDropDown(dateArr[0], dateArr[1], dateArr[2]);
    }

    @And("User selects time {string}")
    public void userSelectTime(String time) {
        homePage.selectTime(time);
    }

    @And("User selects coach {string}")
    public void userSelectCoach(String coach) {
        homePage.selectCoach(coach);
    }

    @Then("Available workouts should be visible")
    public void availableWorkoutsShouldBeVisible() {
        Assert.assertTrue(true);
    }

    @And("User clicks Find Workout button")
    public void userClicksFindWorkoutButton() throws InterruptedException {
        homePage.clickFindWorkoutButton();
    }

    @Then("Available workouts should have sport {string}")
    public void availableWorkoutsShouldHaveSport(String sport){
        Assert.assertTrue(homePage.checkSport(sport));
    }

    @Then("Available workouts should have date {string}")
    public void availableWorkoutsShouldHaveDate(String date){
        String[] dateArr = date.split(" ");
        Assert.assertTrue(homePage.checkDate(dateArr[0], dateArr[1], dateArr[2]));
    }

    @Then("Available workouts should have time {string}")
    public void availableWorkoutsShouldHaveTime(String time){
        Assert.assertTrue(homePage.checkTime(time));
    }

    @Then("Available workouts should have coach {string}")
    public void availableWorkoutsShouldHaveCoach(String coach) {
        Assert.assertTrue(homePage.checkCoach(coach));
    }



    @And("It should show message No workouts available")
    public void itShouldShowMessageNoWorkoutsAvailable() {
        Assert.assertTrue(homePage.checkNoWorkoutsMessage());
    }

    @And("User clicks Book Workout button")
    public void userClicksBookWorkoutButton() {
        homePage.clickBookWorkoutButton();
    }


}
