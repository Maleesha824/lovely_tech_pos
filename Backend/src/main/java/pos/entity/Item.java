package pos.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "items")
@Data // Lombok භාවිතා කරන්නේ නම් getter/setter අවශ්‍ය නැත
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "item_code", unique = true, nullable = false)
    private String itemCode;

    @Column(nullable = false)
    private String description;

    @Column(name = "category_1")
    private String category1;

    @Column(name = "category_2")
    private String category2;

    @Column(name = "master_sale_price", precision = 15, scale = 2)
    private BigDecimal masterSalePrice; // මුදල් සඳහා BigDecimal[cite: 2]

    @Column(name = "created_at", insertable = false, updatable = false)
    private LocalDateTime createdAt;
}
