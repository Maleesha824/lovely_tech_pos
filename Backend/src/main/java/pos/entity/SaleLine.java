package pos.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;
import java.util.UUID;

@Entity
@Table(name = "sale_lines")
@Data
public class SaleLine {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "sale_id")
    private Sale sale;

    @ManyToOne
    @JoinColumn(name = "item_id")
    private Item item;

    private int quantity;

    @Column(name = "actual_unit_price", nullable = false)
    private BigDecimal actualUnitPrice;

    private BigDecimal discount;

    @Column(name = "final_total", nullable = false)
    private BigDecimal finalTotal;
}