package pos.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "repairs")
@Data
public class Repair {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id; // Primary Key ලෙස UUID භාවිතා කිරීම[cite: 2]

    @Column(name = "rep_no", unique = true, nullable = false)
    private String repNo; // උදා: REP-000001[cite: 1, 2]

    @Column(name = "customer_name")
    private String customerName;

    @Column(name = "contact_no")
    private String contactNo;

    @Column(name = "device_brand")
    private String deviceBrand;

    private String model;

    @Column(name = "reported_fault", columnDefinition = "TEXT")
    private String reportedFault;

    @Column(name = "given_accessories", columnDefinition = "TEXT")
    private String givenAccessories;

    @Column(name = "estimate_amount")
    private BigDecimal estimateAmount; // මුදල් සඳහා BigDecimal[cite: 2]

    @Column(name = "final_amount")
    private BigDecimal finalAmount;

    @Column(nullable = false)
    private String status; // RECEIVED, CHECKING, WAITING FOR PART, ආදිය[cite: 1, 2]

    @Column(name = "date_in", insertable = false, updatable = false)
    private LocalDateTime dateIn;

    @Column(name = "hand_over_date")
    private LocalDateTime handOverDate;
}