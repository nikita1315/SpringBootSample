package com.cko.sampleSpringProject.controller;


import com.cko.sampleSpringProject.dao.FilmDAO;
import com.cko.sampleSpringProject.dao.ProductDAO;
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
    @Autowired
    ProductDAO productDAO;

    @GetMapping("/all")
    public ModelAndView showAllProductsPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("allProducts");
    List<Product> productlist = productDAO.findAll();
        modelAndView.addObject("products",productlist);

        return modelAndView;
    }


    @GetMapping("/create")
    public String showCreateProductPage() {
        return "createProduct";
    }


    @GetMapping("/edit")
    public ModelAndView showEditProductPage(@RequestParam Long id){
        ModelAndView modelAndView = new ModelAndView();

       Product product = productDAO.findProductById(id);
        modelAndView.addObject("product",product);
        modelAndView.setViewName("editProduct");
        return modelAndView;
    }
    @PostMapping("/edit")
    public RedirectView editProduct(Product product){
        productDAO.save(product);

        return new RedirectView("/products/all");

    }
    @PostMapping("/create")
    public RedirectView createProduct(Product product){
        productDAO.save(product);
        return new RedirectView("/products/all");
    }
    @GetMapping("/buy")
    public RedirectView showBuyPage(@RequestParam Long id){

        Product product = productDAO.findProductById(id);
       product.setAmount(productDAO.findProductById(id).getAmount()-1);
       productDAO.save(product);

        return new RedirectView("/products/all");

    }
}



