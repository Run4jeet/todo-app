package com.app.todos.todoapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {

	@GetMapping("/")
	public String index() {
		
		System.out.println("index page");
	    return "index";
	}
	
	@GetMapping("/home")
	public ModelAndView home() {
		ModelAndView mv= new ModelAndView();
		mv.setViewName("index.html");//("index");
		System.out.println("index page2");
	    return mv;
	}
}
