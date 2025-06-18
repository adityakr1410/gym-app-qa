package com.energyx.models;

public class Workout {
    private String date;
    private String coachProfileLink;
    private String coachName;
    private String workoutType;
    private String timeSlot;
    private String coachTitle;
    private String description;
    private double coachRating;
    private int workout_id;
    private String coachId;
    private String status;

    // Getters and Setters
    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getCoachProfileLink() {
        return coachProfileLink;
    }

    public void setCoachProfileLink(String coachProfileLink) {
        this.coachProfileLink = coachProfileLink;
    }

    public String getCoachName() {
        return coachName;
    }

    public void setCoachName(String coachName) {
        this.coachName = coachName;
    }

    public String getWorkoutType() {
        return workoutType;
    }

    public void setWorkoutType(String workoutType) {
        this.workoutType = workoutType;
    }

    public String getTimeSlot() {
        return timeSlot;
    }

    public void setTimeSlot(String timeSlot) {
        this.timeSlot = timeSlot;
    }

    public String getCoachTitle() {
        return coachTitle;
    }

    public void setCoachTitle(String coachTitle) {
        this.coachTitle = coachTitle;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getCoachRating() {
        return coachRating;
    }

    public void setCoachRating(double coachRating) {
        this.coachRating = coachRating;
    }

    public int getWorkout_id() {
        return workout_id;
    }

    public void setWorkout_id(int workout_id) {
        this.workout_id = workout_id;
    }

    public String getCoachId() {
        return coachId;
    }

    public void setCoachId(String coachId) {
        this.coachId = coachId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Workout{" +
                "date='" + date + '\'' +
                ", coachProfileLink='" + coachProfileLink + '\'' +
                ", coachName='" + coachName + '\'' +
                ", workoutType='" + workoutType + '\'' +
                ", timeSlot='" + timeSlot + '\'' +
                ", coachTitle='" + coachTitle + '\'' +
                ", description='" + description + '\'' +
                ", coachRating=" + coachRating +
                ", workout_id=" + workout_id +
                ", coachId='" + coachId + '\'' +
                ", status='" + status + '\'' +
                '}';
    }
}