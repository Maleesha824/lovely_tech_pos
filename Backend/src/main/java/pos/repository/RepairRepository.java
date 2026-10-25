package pos.repository;

import pos.entity.Repair;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.UUID;

@Repository
public interface RepairRepository extends JpaRepository<Repair, UUID> {
    // Repair අංකයෙන් සෙවීමට
    Repair findByRepNo(String repNo);
}