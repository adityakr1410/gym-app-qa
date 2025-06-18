package com.energyx.pages;


import com.energyx.utils.ConfigReader;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

public class HomePage extends BasePage
{

    @FindBy(xpath = "//legend[.='Type of sport']/following-sibling::div/button")
    private WebElement typeOfSportDropdownButton;

    @FindBy(xpath = "//legend[.='Date']/following-sibling::div/button")
    private WebElement dateDropdownButton;

    @FindBy(xpath = "//legend[.='Time']/following-sibling::div/button")
    private WebElement timeDropdownButton;

    @FindBy(xpath = "//legend[.='Coach']/following-sibling::div/button")
    private WebElement coachDropdownButton;

    @FindBy(xpath = "//button[.='Find Workout']")
    private WebElement findWorkoutButton;

    @FindBy(xpath = "//div[@id='calendar-dropdown']//h2")
    private WebElement monthYearH2;

    @FindBy(xpath = "//div[@id='calendar-dropdown']/div/div/button[1]")
    private WebElement leftCalenderButton;

    @FindBy(xpath = "//div[@id='calendar-dropdown']/div/div/button[2]")
    private WebElement rightCalenderButton;

    @FindBy(xpath = "//h6[.='Available Workouts']/parent::div//h3")
    private List<WebElement> coachNamesWorkoutCard;

    @FindBy(xpath = "//p[.='Booking details']/following-sibling::div/div[1]/p")
    private List<WebElement> sportWorkoutCard;

    @FindBy(xpath = "//h6[.='Available Workouts']/following-sibling::div/div//p[.='Booking details']/following-sibling::div/div[3]")
    private List<WebElement> timesElement;

    @FindBy(xpath = "//h6[.='Available Workouts']/following-sibling::div/div//p[.='Booking details']/following-sibling::div/div[3]")
    private List<WebElement> datesElement;

    @FindBy(xpath = "//button[.='Book Workout']")
    private WebElement bookWorkoutButton;

    @FindBy(xpath = "//button[.='Confirm']")
    private WebElement confirmPopupButton;

    public HomePage clickFindWorkoutButton()
    {
        findWorkoutButton.click();
        return this;
    }

    public void pageLoadWait()
    {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(4));
        wait.until(
                ExpectedConditions.visibilityOfElementLocated(By.xpath("//img[@alt='Dropdown']"))
        );
    }

    public HomePage selectTypeOfSport(String sport)
    {
        typeOfSportDropdownButton.click();
        driver.findElement(By.xpath("//span[contains(text(),'"+sport+"')]")).click();
        return this;
    }

    private int datePickerChangeCount(String monthTarget, String yearTarget, String month, String year)
    {
        Map<String, Integer> monthMap = new HashMap<>();
        monthMap.put("January", 0);
        monthMap.put("February", 1);
        monthMap.put("March", 2);
        monthMap.put("April", 3);
        monthMap.put("May", 4);
        monthMap.put("June", 5);
        monthMap.put("July", 6);
        monthMap.put("August", 7);
        monthMap.put("September", 8);
        monthMap.put("October", 9);
        monthMap.put("November", 10);
        monthMap.put("December", 11);

        int yearsDifference = Integer.parseInt(yearTarget) - Integer.parseInt(year);
        int monthDifference = monthMap.get(monthTarget) - monthMap.get(month);
        return (yearsDifference * 12)+monthDifference;
    }

    private void clickDay(String day)
    {
        driver.findElement(By.xpath("//button[@name='day' and .='"+day+"' and not(contains(@class,'opacity-30'))]")).click();
    }

    public HomePage setDateDropDown(String day, String month, String year)
    {
        dateDropdownButton.click();
        String monthYear = monthYearH2.getText();
        String monthCurr = monthYear.substring(0, monthYear.length()-5);
        String yearCurr = monthYear.substring(monthYear.length()-4);

        int changeCount = datePickerChangeCount(month, year, monthCurr, yearCurr);

        while(changeCount!=0)
        {
            if(changeCount<0)
            {
                changeCount++;
                leftCalenderButton.click();
            }
            else
            {
                changeCount--;
                rightCalenderButton.click();
            }
        }
        clickDay(day);
        return this;
    }

    public HomePage selectTime(String time)
    {
        timeDropdownButton.click();
        driver.findElement(By.xpath("//span[.='"+time+"']")).click();

        return this;
    }

    public HomePage selectCoach(String coach)
    {
        coachDropdownButton.click();
        driver.findElement(By.xpath("//legend[.='Coach']/following-sibling::div/ul/li[.='"+coach+"']")).click();

        return this;
    }
    public HomePage getOnHomePage(){
        driver.get(ConfigReader.getFrontendURI());
        pageLoadWait();
        return this;
    }

    public Boolean checkDate(String date, String month, String year)
    {
        List<String> dates = datesElement.stream().map(WebElement::getText).toList();

        boolean check = true;

        for(String data: dates)
        {
            data = data.substring(6);
            data = data.split(",")[0];
            String[] dateAndMoth = data.split(" ");
            if(!dateAndMoth[0].equals(month) || !dateAndMoth[1].equals(date))
                check=false;
        }
        return check;
    }

    public Boolean checkTime(String time)
    {
        List<String> times = timesElement.stream().map(WebElement::getText).toList();

        boolean check = true;

        for(String data: times)
        {
            data = data.substring(6);
            data = data.split(",")[1];
            if (!data.substring(1).equals(time)) {
                check = false;
                break;
            }
        }
        return check;
    }
    public boolean checkCoach(String coach)
    {
        List<String> coachNames = coachNamesWorkoutCard.stream().map(WebElement::getText).toList();

        boolean check = true;
        for(String data: coachNames)
        {
            if(!data.equals(coach))
            {
                check=false;
                break;
            }
        }
        return check;
    }

    public boolean checkNoWorkoutsMessage()
    {
        try
        {
            driver.findElement(By.xpath(".//*[.='No workouts available']"));
            return true;
        } catch (Exception element) {
            return false;
        }
    }
    public boolean checkSport(String sport)
    {
        List<String> sportList = sportWorkoutCard.stream().map(WebElement::getText).toList();
        boolean check = true;

        for (String data: sportList)
        {
            data = data.substring(6);
            data = data.split(",")[0];
            if(!data.equals(sport))
            {
                check = false;
                break;
            }
        }
        return check;
    }
    public HomePage clickBookWorkoutButton()
    {
        bookWorkoutButton.click();
        pageLoadWait();
        return this;
    }

    public boolean checkLoginPopUp()
    {
        return (driver.findElements(By.id("radix-:rf:")).size()==0 )?true:false;
    }

    public boolean checkConfirmBookingPopup()
    {
        return (driver.findElements(By.id("radix-:r17:")).size()==0)?true:false;
    }

    public HomePage clickConfirmPopupButton()
    {
        confirmPopupButton.click();
        return this;
    }

    public boolean checkBookingSuccessPopup()
    {
        return (driver.findElements(By.xpath("//p[.='Success']")).size()==1)?true:false;
    }
}
