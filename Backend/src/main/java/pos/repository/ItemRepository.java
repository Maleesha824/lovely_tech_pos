package pos.repository;

import pos.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.UUID;

@Repository
public interface ItemRepository extends JpaRepository<Item, UUID> {
    // අයිතම කේතයෙන් භාණ්ඩ සෙවීමට[cite: 1]
    Item findByItemCode(String itemCode);
}