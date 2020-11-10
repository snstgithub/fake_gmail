package fake.google.fake.service;

import fake.google.fake.model.Victim;
import fake.google.fake.repo.VictimRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VictimService {
    private final VictimRepo victimRepo;

    public VictimService(VictimRepo victimRepo) {
        this.victimRepo = victimRepo;
    }

    public Victim save(Victim victim){
        return victimRepo.save(victim);
    }

    public List<Victim> getAll(){
        return victimRepo.findAll();
    }
}
