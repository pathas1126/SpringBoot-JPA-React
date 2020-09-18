package com.practice.demo.member;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MemberController {

    @GetMapping("/api/sayHello")
    public String sayHello(){
        return "hello Zito, Hello";
    }
}
