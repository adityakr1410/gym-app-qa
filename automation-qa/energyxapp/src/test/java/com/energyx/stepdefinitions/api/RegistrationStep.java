package com.energyx.stepdefinitions.api;

import com.energyx.contexts.APITestContext;
import com.energyx.models.User;
import com.github.javafaker.Faker;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class RegistrationStep {

    private final APITestContext apiTestContext;
    private static Faker faker = new Faker();

    public RegistrationStep(APITestContext context){apiTestContext=context;}

    private User getRandomUser()
    {
        User user = User.builder()
                .firstName(faker.name().firstName())
                .lastName(faker.name().lastName())
                .email(faker.name().firstName()+"@"+faker.color().name().split(" ")[0]+".com")
                .password(faker.gameOfThrones().character()+"@1aA")
                .preferableActivity("Climbing")
                .target("Lose weight")
                .build();

        System.out.println(user);

        return user;
    }

    @Given("User registration with correct data")
    public void userRegistrationWithCorrectData() {
        apiTestContext.setRequestPayload( getRandomUser());
    }


    @Given("User registration with data:")
    public void userRegistrationWithData(DataTable dataTable) {
        List<Map<String, String>> data = dataTable.asMaps(String.class, String.class);
    }

    @Given("User registration with data email {string}, firstName {string}, lastName {string}, password {string}, preferableActivity {string}, target {string}")
    public void userRegistrationWithDataEmailFirstNameLastNamePasswordPreferableActivityTarget(String email, String firstName, String lastName, String password, String preferableActivity, String target) {
        User user = User.builder()
                .email(email)
                .firstName(firstName)
                .lastName(lastName)
                .password(password)
                .preferableActivity(preferableActivity)
                .target(target)
                .build();
        apiTestContext.setRequestPayload(user);
    }
}
