package pos.controller;

import pos.entity.Item;
import pos.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/items")
public class ItemController {

    @Autowired
    private ItemRepository itemRepository;

    // Database එකේ තියෙන ඔක්කොම Items ටික React එකට යවන්න
    @GetMapping
    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    // අලුත් Item එකක් සේව් කරන්න
    @PostMapping
    public Item createItem(@RequestBody Item item) {
        return itemRepository.save(item);
    }

    // Item Code එකෙන් භාණ්ඩයක් හොයන්න (උදා: /api/items/code/LVT0001)
    @GetMapping("/code/{itemCode}")
    public Item getItemByCode(@PathVariable String itemCode) {
        return itemRepository.findByItemCode(itemCode);
    }
}