package com.portfolio.api.HomePage.model;

public class HomePage {
    private String fullName;
    private String title;
    private String aboutMe;
    private String profilePictureUrl;
    // Add more fields as needed

    // Constructors, getters, and setters
    // (You can use Lombok or IDE-generated getters/setters for brevity)

    public HomePage() {
    }

    public HomePage(String fullName, String title, String aboutMe, String profilePictureUrl) {
        this.fullName = fullName;
        this.title = title;
        this.aboutMe = aboutMe;
        this.profilePictureUrl = profilePictureUrl;
    }

    // Getters and Setters
    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAboutMe() {
        return aboutMe;
    }

    public void setAboutMe(String aboutMe) {
        this.aboutMe = aboutMe;
    }

    public String getProfilePictureUrl() {
        return profilePictureUrl;
    }

    public void setProfilePictureUrl(String profilePictureUrl) {
        this.profilePictureUrl = profilePictureUrl;
    }
}
