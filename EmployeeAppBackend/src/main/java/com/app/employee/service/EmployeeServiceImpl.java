package com.app.employee.service;

import com.app.employee.dao.EmployeeDao;
import com.app.employee.entity.Employee;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeDao employeeDao;

    @Autowired
    public EmployeeServiceImpl(EmployeeDao employeeDao){
        this.employeeDao = employeeDao;
    }

    @Override
    public List<Employee> getAllEmployees() {
        List<Employee> employees = employeeDao.findAll();

        return employees;
    }

    @Override
    public Optional<Employee> getSingleEmployee(Long id) throws RuntimeException {
        Optional<Employee> single_employee = employeeDao.findById(id);

        if(single_employee.isPresent()){
        return single_employee;
        }
        else {
            throw new RuntimeException("Invalid Employee_id");
        }
    }

    @Override
    public Employee saveEmployee(Employee employee) {


        return employeeDao.save(employee);

    }

    public Employee updateEmployee(Employee employeeDetails,Long id) {
        Employee employee = employeeDao.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found"));

        employee.setFirstName(employeeDetails.getFirstName());
        employee.setLastName(employeeDetails.getLastName());
        employee.setEmail(employeeDetails.getEmail());
        employee.setPhoneNumber(employeeDetails.getPhoneNumber());
        employee.setAddress(employeeDetails.getAddress());

        return employeeDao.save(employee);
    }

    @Override
    public void deleteEmployee(Long id) throws RuntimeException{

        Optional<Employee> deletingEmployee = employeeDao.findById(id);



        if(deletingEmployee.isPresent()) {
            employeeDao.delete(deletingEmployee.get());
        }
        else{
            throw new RuntimeException("Invalid Id");
        }
    }


}
