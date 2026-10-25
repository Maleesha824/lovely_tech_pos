package pos.service;

import pos.entity.Sale;
import pos.repository.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SaleService {

    @Autowired
    private SaleRepository saleRepository;

    // මේ Transactional Annotation එක නිසා මැදදි කරන්ට් එක ගියත් භාගෙට සේව් වෙන්නේ නෑ[cite: 2]
    @Transactional(rollbackFor = Exception.class)
    public Sale completeSale(Sale sale) {

        // Sale එකට අදාල Lines සහ Payments වලට Sale object එක සෙට් කිරීම
        if(sale.getSaleLines() != null) {
            sale.getSaleLines().forEach(line -> line.setSale(sale));
        }
        if(sale.getPayments() != null) {
            sale.getPayments().forEach(payment -> payment.setSale(sale));
        }

        // සම්පූර්ණ දත්තයම එකවර Database එකේ Save කිරීම
        return saleRepository.save(sale);
    }
}