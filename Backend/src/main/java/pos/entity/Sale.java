package pos.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;
import java.util.List;

@Entity
@Table(name = "sales")
@Data
public class Sale {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "invoice_no", unique = true, nullable = false)
    private String invoiceNo;

    @Column(name = "sale_datetime", insertable = false, updatable = false)
    private LocalDateTime saleDatetime;

    @Column(name = "document_type", nullable = false)
    private String documentType;

    private BigDecimal subtotal;

    @Column(name = "discount_total")
    private BigDecimal discountTotal;

    @Column(name = "grand_total")
    private BigDecimal grandTotal;

    private String status; // DRAFT, COMPLETED, VOID

    @OneToMany(mappedBy = "sale", cascade = CascadeType.ALL)
    private List<SaleLine> saleLines;

    @OneToMany(mappedBy = "sale", cascade = CascadeType.ALL)
    private List<Payment> payments;
}
