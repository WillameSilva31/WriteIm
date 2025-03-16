package javaProjects.ProjetSecret.t1.users.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @GetMapping
    public ResponseEntity<String> getUser(){
        return ResponseEntity.ok("sucesso");
    }
}

