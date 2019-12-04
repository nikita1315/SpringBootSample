package com.cko.sampleSpringProject.controller;

import com.cko.sampleSpringProject.dao.FilmDAO;
import com.cko.sampleSpringProject.model.Film;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/films")
public class FilmController {
    @Autowired
    FilmDAO filmDAO;

    @GetMapping("/testT")
    public ModelAndView showTestTPage(){
        ModelAndView modelAndView = new ModelAndView();
        Film film = filmDAO.findFilmById((long) 1);
        modelAndView.addObject("film",film);
        modelAndView.setViewName("testT");
        return modelAndView;

    }

    @GetMapping("/all")
    public ModelAndView showAllFilmPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("allFilms");
        List<Film> filmslist = filmDAO.findAll();
        modelAndView.addObject("films",filmslist);

        return modelAndView;
    }

    @GetMapping("/create")
    public String showCreateFilmPage(){
        return "createFIlm";
    }

    @GetMapping("/delete")
    public RedirectView showDeleteFilmPage(@RequestParam Long id){

        filmDAO.deleteById(id);

        return new RedirectView("/films/all");

    }

    @GetMapping("/edit")
    public ModelAndView showEditFilmPage(@RequestParam Long id){
       ModelAndView modelAndView = new ModelAndView();
//       Optional<Film> optional = filmDAO.findById(id);
//        Film film = optional.get();
        Film film = filmDAO.findFilmById(id);
        modelAndView.addObject("film",film);
        modelAndView.setViewName("editFilm");
        return modelAndView;
    }

    @PostMapping("/create")
    public RedirectView createFilm(Film film){
        filmDAO.save(film);
        return new RedirectView("/films/all");
    }

    @PostMapping("/edit")
    public RedirectView editFilm(Film film){
        filmDAO.save(film);

        return new RedirectView("/films/all");

    }

}
