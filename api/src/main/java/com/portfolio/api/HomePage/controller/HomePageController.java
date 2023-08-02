package com.portfolio.api.HomePage.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.portfolio.api.HomePage.model.HomePage;

@RestController
@RequestMapping("/api")
public class HomePageController {

    @GetMapping("/homepage")
    public HomePage getHomePageData() {

        // Create a HomePage object with the retrieved data
        HomePage homePage = new HomePage();

        return homePage;
    }

    @RequestMapping("/homepage")
    public void setHomePageData(HomePage homePage) {

    }
}