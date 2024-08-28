package com.app.employee.controller;

import com.app.employee.entity.Employee;
import com.app.employee.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/employees")
public class EmployeeController {

private EmployeeService employeeService;

@Autowired
public EmployeeController(EmployeeService employeeService){
    this.employeeService = employeeService;
}

@GetMapping("/list")
    public List<Employee> allEmployees(){

    //Employee save_employee = new Employee("Subham", "Krishna","ksubham@email.com", "9875220645", "Patna");

//    employeeService.saveEmployee(save_employee);

    List<Employee> all_employees = employeeService.getAllEmployees();

    return all_employees;
}

@GetMapping("/single/{id}")
public Optional<Employee> getEmployeeById(@PathVariable Long id){
    Optional<Employee> singleEmployee = employeeService.getSingleEmployee(id);

    if(singleEmployee.isPresent()) {
        return singleEmployee;
    }
    else{
        throw new RuntimeException("Employee id not Found!");
    }
}

@PostMapping("/save")
public void saveEmployee(@RequestBody Employee employee){

        employeeService.saveEmployee(employee);
}

    @PutMapping("/update/{id}")
    public ResponseEntity<Employee> updateEmployee(@RequestBody Employee employeeDetails, @PathVariable Long id) {
        try {
            Employee updatedEmployee = employeeService.updateEmployee( employeeDetails,id);
            return ResponseEntity.ok(updatedEmployee);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }


    @DeleteMapping("/delete/{id}")
    public void deleteEmployee(@PathVariable Long id) throws RuntimeException {


            try {
                employeeService.deleteEmployee(id);
            }
            catch(RuntimeException r){
                System.out.println("Employee Not Found!");
            }

    }

}
