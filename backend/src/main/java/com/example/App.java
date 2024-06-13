package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.time.LocalDate;
import java.util.List;

@SpringBootApplication
public class App {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(App.class, args);

		var repo = context.getBean(EmployeeRepository.class);

		repo.saveAll(List.of(
				new Employee("Alvaro", LocalDate.of(2004, 11, 30), 2000.0, false),
				new Employee("Javier", LocalDate.of(2004, 11, 25), 2100.0, true),
				new Employee("Gonzalo", LocalDate.of(1988, 4, 20), 5000.0, false),
				new Employee("Adrian", LocalDate.of(2003, 12, 22), 3100.0, true),
				new Employee("Carlos", LocalDate.of(1970, 6, 10), 1900.0, true),
				new Employee("Candido", LocalDate.of(1980, 6, 29), 6000.0, false),
				new Employee("Alejandro", LocalDate.of(1999, 1, 1), 1200.0, true),
				new Employee("David", LocalDate.of(2000, 2, 11), 1700.0, false)

		));

	}

}
