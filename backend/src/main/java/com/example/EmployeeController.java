package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin
public class EmployeeController {

    @Autowired
    private EmployeeRepository repository;

    @GetMapping // forma tradicional para devolver resultados
    public ResponseEntity<List<Employee>> findAll(){
        return ResponseEntity.ok(repository.findAll());
    }

    @GetMapping("/sorted") // forma ordenada para devolver resultados
    public ResponseEntity<List<Employee>> findAllSorted(@RequestParam(defaultValue = "id,desc") String [] sort){
        List<Sort.Order> orders = extractOrders(sort);
        return ResponseEntity.ok(repository.findAll(Sort.by(orders)));
    }

    @GetMapping("/paged") // forma ordenada y con paginacion para devolver resultados
    public ResponseEntity<Page<Employee>> findAllPagedSorted(
            @RequestParam(defaultValue = "id,desc") String [] sort,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size
    ){
        List<Sort.Order> orders = extractOrders(sort);
        Pageable pageable = PageRequest.of(page, size, Sort.by(orders));
        Page<Employee> employeesPage = this.repository.findAll(pageable);
        return ResponseEntity.ok(employeesPage);
    }


    private List<Sort.Order> extractOrders(String [] sort){
        // Si hay mas de uno en la variable sort -> [0]: id,desc [1]: name,asc
        if(sort[0].contains(","))
            return Arrays.stream(sort).map(this::extractOrder).toList();

        // Si solo hay uno en la variable sort -> [0]: id [1]: desc
        return List.of(extractOrder(sort[0]+ "," + sort[1]));
    }

    private Sort.Order extractOrder(String s) {
        String [] pair = s.split(",");
        String field = pair[0];
        Sort.Direction direction = pair[1].equalsIgnoreCase("asc") ? Sort.Direction.ASC : Sort.Direction.DESC;
        return new Sort.Order(direction, field);
    }
}
