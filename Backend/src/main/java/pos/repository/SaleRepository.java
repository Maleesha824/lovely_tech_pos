package pos.repository;

import pos.entity.Sale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.UUID;

@Repository
public interface SaleRepository extends JpaRepository<Sale, UUID> {
    // ඉන්වොයිස් අංකයෙන් සෙවීමට[cite: 2]
    Sale findByInvoiceNo(String invoiceNo);
}