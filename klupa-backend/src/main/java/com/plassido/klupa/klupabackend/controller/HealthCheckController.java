package com.plassido.klupa.klupabackend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hc")
public class HealthCheckController {

    @GetMapping("/")
    ResponseEntity check() {
        return ResponseEntity.ok().build();
    }
}
