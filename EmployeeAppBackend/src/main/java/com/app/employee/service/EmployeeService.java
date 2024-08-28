package com.app.employee.service;

import com.app.employee.entity.Employee;

import java.util.List;
import java.util.Optional;

public interface EmployeeService {

    List<Employee> getAllEmployees();

    Optional<Employee> getSingleEmployee(Long id);

    Employee saveEmployee(Employee employee);

    Employee updateEmployee(Employee employee,Long id);

    void deleteEmployee(Long id);

}
