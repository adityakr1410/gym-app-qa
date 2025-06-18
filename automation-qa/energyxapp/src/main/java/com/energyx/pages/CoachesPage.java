package com.energyx.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class CoachesPage extends BasePage{

    @FindBy(xpath = "//h2[.='Schedule']/following-sibling::div//div[@class='py-4']//h2")
    private WebElement monthYearH2;

    @FindBy(xpath = "//h2[.='Schedule']/following-sibling::div//div[@class='py-4']//button[1]")
    private WebElement leftCalenderButton;

    @FindBy(xpath = "//h2[.='Schedule']/following-sibling::div//div[@class='py-4']//button[2]")
    private WebElement rightCalenderButton;

    @FindBy(xpath = "//button[.='Book Workout']")
    private WebElement bookWorkoutButton;

    public CoachesPage clickOnCoachBookWorkoutButton(String coach)
    {
        driver.findElement(By.xpath("//img[@alt='Kristin Watson']/following-sibling::a/button")).click();
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

    public CoachesPage setDate(String day, String month, String year)
    {
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
    public CoachesPage setTime(String time)
    {
        driver.findElement(By.xpath("//button[.='"+time+"']")).click();
        return this;
    }
    public CoachesPage clickBookWorkoutButton()
    {
        bookWorkoutButton.click();
        return this;
    }

    boolean verifyDateTime(String date, String time) {
        try {
            String inputMonth = date.split(" ")[1];
            String inputDay = date.split(" ")[0];

            String[] timeArr = time.split(" ");
            String inputStartTime = timeArr[0];
            String inputEndTime = timeArr[2];
            String inputMeridiem = timeArr[3];

            WebElement confirmBookingPopupTime = driver.findElement(By.xpath("//h2[.='Confirm your booking']/parent::div/following-sibling::div/div/div[2]/div[2]/span/span"));
            WebElement confirmBookingPopupDateTime = driver.findElement(By.xpath("//h2[.='Confirm your booking']/parent::div/following-sibling::div/div/div[2]/div[3]/span/span"));

            String[] dateTime = confirmBookingPopupDateTime.getText().split(", ");
            String targetMonth = dateTime[0].split(" ")[0];
            int targetDay = Integer.parseInt(dateTime[0].split(" ")[1]);
            String targetStartTime = dateTime[1].split(" ")[0];
            String targetMeridiem = dateTime[1].split(" ")[1];

            SimpleDateFormat timeFormat = new SimpleDateFormat("hh:mm a");

            Date startTime = timeFormat.parse(inputStartTime + " " + targetMeridiem);
            Date endTime = timeFormat.parse(inputEndTime + " " + targetMeridiem);

            long diffInMillies = endTime.getTime() - startTime.getTime();
            long diffInHours = diffInMillies / (60 * 60 * 1000);

            return inputMonth.equals(targetMonth)
                    && inputDay.equals(String.valueOf(targetDay))
                    && inputStartTime.equals(targetStartTime)
                    && inputMeridiem.equals(targetMeridiem)
                    && confirmBookingPopupTime.getText().equals(diffInHours + "h");
        } catch (Exception e) {
            System.out.println("Error parsing date/time: " + e.getMessage());
            return false;
        }
    }
    public boolean checkBookingConfirmationPopup(String date, String time, String coach){
        if (driver.findElements(By.id("radix-:r3:")).size() != 1)
            return false;

        WebElement confirmBookingPopupTimeLable = driver.findElement(By.xpath("//h2[.='Confirm your booking']/parent::div/following-sibling::div/div/div[2]/div[2]/span"));
        waitForTextToBePresent(confirmBookingPopupTimeLable, "Time:");

        boolean check = verifyDateTime(date, time);
        check &= driver.findElements(By.xpath("//img[@class='h-16 w-16 rounded-full object-cover']/following-sibling::div/span[1]")).get(0).getText().equals(coach);
        return check;
    }
    public CoachesPage clickBookWorkoutPopupConfirmButton(){
        driver.findElement(By.xpath("//button[.='Confirm']")).click();
        return this;
    }
    public boolean checkCoachBookedSuccessfullyPopup()
    {
        return driver.findElements(By.xpath("//p[.='Coach Booked successfully']")).size()==1;
    }

}
