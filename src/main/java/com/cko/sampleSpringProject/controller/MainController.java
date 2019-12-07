package com.cko.sampleSpringProject.controller;

import com.cko.sampleSpringProject.model.Film;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MainController {
    @GetMapping("/testT")
    public String showTestTPage(){
        return "testT";

    }
    @GetMapping("/loginPage")
    public String showLoginPage(){
        return "login";
    }

    @GetMapping("/")
    public String showMainPage(){
        return "mainPage";
    }

    @GetMapping("/game")
    public String showGamePage(){
        return "Page";
    }

    @GetMapping("/test")
    public String testing(@RequestParam String name){
        System.out.println(name);
        return "test";
    }
}
