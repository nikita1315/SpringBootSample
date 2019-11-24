package com.cko.sampleSpringProject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/films")
public class FilmController {

    @GetMapping("/all")
    public String showAllFilmPage(){
        return "allFilms";
    }

    @GetMapping("/create")
    public String showCreateFilmPage(){
        return "createFIlm";
    }
}
