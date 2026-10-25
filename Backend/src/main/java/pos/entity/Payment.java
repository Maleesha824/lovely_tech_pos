package pos.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "payments")
@Data
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "sale_id")
    private Sale sale;

    @Column(name = "payment_method", nullable = false)
    private String paymentMethod; // CASH, CARD, ONLINE[cite: 1]

    @Column(nullable = false)
    private BigDecimal amount;

    @Column(name = "payment_time", insertable = false, updatable = false)
    private LocalDateTime paymentTime;
}