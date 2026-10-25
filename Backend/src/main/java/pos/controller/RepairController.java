package pos.controller;

import pos.entity.Repair;
import pos.repository.RepairRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/repairs")
public class RepairController {

    @Autowired
    private RepairRepository repairRepository;

    @GetMapping
    public List<Repair> getAllRepairs() {
        return repairRepository.findAll();
    }

    @PostMapping
    public Repair createRepair(@RequestBody Repair repair) {
        if (repair.getRepNo() == null || repair.getRepNo().isEmpty()) {
            repair.setRepNo("REP-" + System.currentTimeMillis());
        }
        if (repair.getStatus() == null || repair.getStatus().isEmpty()) {
            repair.setStatus("RECEIVED");
        }
        return repairRepository.save(repair);
    }

    // දත්ත Update කිරීම සඳහා අලුතින් එකතු කළ කොටස
    @PutMapping("/{id}")
    public Repair updateRepair(@PathVariable UUID id, @RequestBody Repair updatedRepair) {
        return repairRepository.findById(id).map(existingRepair -> {
            existingRepair.setCustomerName(updatedRepair.getCustomerName());
            existingRepair.setContactNo(updatedRepair.getContactNo());
            existingRepair.setDeviceBrand(updatedRepair.getDeviceBrand());
            existingRepair.setModel(updatedRepair.getModel());
            existingRepair.setReportedFault(updatedRepair.getReportedFault());
            existingRepair.setEstimateAmount(updatedRepair.getEstimateAmount());

            // අලුතින් යාවත්කාලීන කළ හැකි දේවල්
            existingRepair.setFinalAmount(updatedRepair.getFinalAmount());
            existingRepair.setStatus(updatedRepair.getStatus());

            return repairRepository.save(existingRepair);
        }).orElseThrow(() -> new RuntimeException("Repair job not found"));
    }
}
