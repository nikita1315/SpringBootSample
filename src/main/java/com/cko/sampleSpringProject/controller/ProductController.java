package com.cko.sampleSpringProject.controller;


import com.cko.sampleSpringProject.model.Film;
import com.cko.sampleSpringProject.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import java.util.List;

@Controller

@RequestMapping("/products")
public class ProductController {


    @GetMapping("/all")
    public String showAllProductsPage() {
        return "allProducts";
    }


    @GetMapping("/create")
    public String showCreateProductPage() {
        return "createProduct";
    }


    @GetMapping("/edit")
    public String  showEditProductPage() {

        return "editProduct";
    }
}



