package fake.google.fake.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String google(){
        return "main";
    }

    @GetMapping("/pass")
    public String google2(){
        return "main2";
    }

    @GetMapping("/aaaaaaaaaa")
    public String admin(){
        return "admin";
    }

}
