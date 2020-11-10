package fake.google.fake.controller;

import fake.google.fake.model.Victim;
import fake.google.fake.service.VictimService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@org.springframework.web.bind.annotation.RestController
@RequestMapping("api")
public class RestController {
    private final VictimService victimService;

    public RestController(VictimService victimService) {
        this.victimService = victimService;
    }

    @PostMapping("/addvictim")
    public ResponseEntity save(@RequestBody Victim victim){
        return ResponseEntity.ok(victimService.save(victim));
    }



}
