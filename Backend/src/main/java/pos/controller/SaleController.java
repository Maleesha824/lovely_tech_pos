package pos.controller;

import pos.entity.Sale;
import pos.service.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/sales")
public class SaleController {

    @Autowired
    private SaleService saleService;

    // විකුණුමක් සම්පූර්ණ කිරීම
    @PostMapping
    public Sale createSale(@RequestBody Sale sale) {
        return saleService.completeSale(sale);
    }
}