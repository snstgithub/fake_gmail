package fake.google.fake.repo;

import fake.google.fake.model.Victim;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VictimRepo extends JpaRepository<Victim,Long> {

}
