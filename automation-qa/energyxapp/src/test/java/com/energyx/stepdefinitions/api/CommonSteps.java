package com.energyx.stepdefinitions.api;

import com.energyx.contexts.APITestContext;
import com.energyx.models.Workout;
import com.energyx.utils.ConfigReader;
import io.cucumber.java.en.*;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;
import org.testng.Assert;

import java.util.List;

import static io.restassured.RestAssured.given;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;
import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.equalTo;

public class CommonSteps {

    private final APITestContext testContext;

    public CommonSteps(APITestContext context) {
        this.testContext = context;
    }

    @Given("Using base URL")
    public void setBaseUrl() {
        String baseUrl = ConfigReader.getBackendURI();

        if (baseUrl == null || baseUrl.trim().isEmpty()) {
            System.out.println(baseUrl);
            throw new IllegalArgumentException("Base URI cannot be null or empty. Please check your configuration.");
        }

        testContext.setBaseUrl(baseUrl);

        RequestSpecification requestSpec = new RequestSpecBuilder()
                .setBaseUri(baseUrl)
                .setContentType(ContentType.JSON)
                .build();

        testContext.setRequestSpec(requestSpec);
    }

    @Given("User sets header {string} to {string}")
    public void setHeader(String headerName, String headerValue) {
        RequestSpecification requestSpec = testContext.getRequestSpec();
        requestSpec = requestSpec.header(headerName, headerValue);
        testContext.setRequestSpec(requestSpec);
    }

    @Given("User sets request body to {string}")
    public void setRequestBody(String requestBody) {
        testContext.setRequestPayload(requestBody);
        RequestSpecification requestSpec = testContext.getRequestSpec();
        requestSpec = requestSpec.body(requestBody);
        testContext.setRequestSpec(requestSpec);
    }

    @When("User sends a GET request to {string}")
    public void sendGetRequest(String endpoint) {
        Response response = given().spec(testContext.getRequestSpec()).get(endpoint);
        testContext.setResponse(response);
    }

    @When("User sends a GET request to {string} with the token")
    public void sendGetRequestWithToken(String endpoint) {
        Response response = given().spec(testContext.getRequestSpec())
                .header("Authorization", "Bearer " + testContext.getToken())
                .get(endpoint);
        testContext.setResponse(response);
    }

    @When("User sends a POST request to {string} with the request payload")
    public void sendPostRequest(String endpoint) {
        Response response = given().spec(testContext.getRequestSpec())
                .body(testContext.getRequestPayload())
                .post(endpoint);
        testContext.setResponse(response);
    }

    @When("User sends a POST request to {string} with the request payload and token")
    public void sendPostRequestWithToken(String endpoint) {
        Response response = given().spec(testContext.getRequestSpec())
                .header("Authorization", "Bearer " + testContext.getToken())
                .body(testContext.getRequestPayload())
                .post(endpoint);
        testContext.setResponse(response);
        response.prettyPrint();
    }

    @When("User sends a PUT request to {string} with the request payload and the stored token")
    public void sendPutRequestWithToken(String endpoint) {
        Response response = given().spec(testContext.getRequestSpec())
                .header("Authorization", "Bearer " + testContext.getToken())
                .body(testContext.getRequestPayload())
                .put(endpoint);
        testContext.setResponse(response);
        response.then().log().all();
    }

    @When("User sends a PUT request to {string} with the request payload")
    public void sendPutRequest(String endpoint) {
        Response response = given().spec(testContext.getRequestSpec())
                .body(testContext.getRequestPayload())
                .put(endpoint);
        testContext.setResponse(response);
        response.then().log().all();
    }

    @Then("Response status code should be {int}")
    public void verifyStatusCode(int statusCode) {
        ResponseSpecification responseSpec = new ResponseSpecBuilder()
                .expectStatusCode(statusCode)
                .build();
        testContext.getResponse().then().spec(responseSpec);
    }

    @Then("Success message should be {string}")
    public void verifySuccessMessage(String message) {
        testContext.getResponse().then().body("message", equalTo(message));
    }

    @And("Error message should contain {string}")
    public void verifyErrorMessage(String message) {
        testContext.getResponse().then().body("message", containsString(message));
    }

    @Then("Response should contain the {string} role")
    public void verifyRole(String role) {
        testContext.getResponse().then().body("data.userData.role", equalTo(role));
    }

    @Then("Response should contain a valid token")
    public void verifyToken() {
        String token = testContext.getResponse().jsonPath().getString("data.token");
        Assert.assertNotNull(token, "Token should not be null");
        testContext.setToken(token);
    }

    @And("Status of the workout with id {int} should be {string}")
    public void verifyWorkoutStatus(int workoutId, String status) {
        Response response = given().spec(testContext.getRequestSpec())
                .header("Authorization", "Bearer " + testContext.getToken())
                .get("/client/workouts");

        List<Workout> workouts = response.jsonPath().getList("data.workouts", Workout.class);
        for (Workout w : workouts) {
            if (w.getWorkout_id() == workoutId) {
                Assert.assertEquals(w.getStatus(), status);
            }
        }
    }

    @And("Response should match the {string}schema")
    public void responseShouldMatchTheSchema(String schemaName) {
        testContext.getResponse().then().assertThat()
                .body(matchesJsonSchemaInClasspath("schemas/"+schemaName + ".json"));
    }
}