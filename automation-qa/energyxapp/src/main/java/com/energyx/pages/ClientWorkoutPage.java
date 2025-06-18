package com.energyx.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

public class ClientWorkoutPage extends BasePage{

    @FindBy(xpath = "//p/following-sibling::div//span")
    List<WebElement> workoutDates;

    boolean verifyDateTime(String date, String time) {
        try {
            String inputMonth = date.split(" ")[1];
            String inputDay = date.split(" ")[0];

            String[] timeArr = time.split(" ");
            String inputStartTime = timeArr[0];
            String inputMeridiem = timeArr[3];

            List<WebElement> workoutDateTimes = driver.findElements(By.xpath("//p/following-sibling::div//span"));

            SimpleDateFormat timeFormat = new SimpleDateFormat("hh:mm a");

            for (WebElement element : workoutDateTimes)
            {
                String[] dateTime = element.getText().split(", ");
                String targetMonth = dateTime[0].split(" ")[0];
                int targetDay = Integer.parseInt(dateTime[0].split(" ")[1]);
                String targetStartTime = dateTime[1].split(" ")[0];
                String targetMeridiem = dateTime[1].split(" ")[1];

                if(
                        targetMonth.equals(inputMonth) &&
                        (targetDay+"").equals(inputDay) &&
                        targetStartTime.equals(inputStartTime) &&
                        targetMeridiem.equals(inputMeridiem)
                ){
                    return true;
                }
            }
            return false;
        } catch (Exception e) {
            System.out.println("Error parsing date/time: " + e.getMessage());
            return false;
        }
    }

    public boolean checkCardIsPresent(String date, String time)
    {
        return verifyDateTime(date, time);
    }

}
