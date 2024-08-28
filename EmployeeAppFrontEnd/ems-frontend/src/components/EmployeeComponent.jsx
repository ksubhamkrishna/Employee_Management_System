import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

const EmployeeComponent = () => {
  
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')    
    const [address, setAddress] = useState('')

    const {id} = useParams();

   const [errors,setErrors] =  useState({
        firstName: '',
        lastName:'',
        email: '',
        phoneNumber:'',
        address:''
    })
    
    const navigator = useNavigate();

    useEffect(()=>{

        if(id){
            getEmployee(id).then((response)=>{
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
                setPhoneNumber(response.data.phoneNumber);
                setAddress(response.data.address);
            }).catch(error => {
                console.error(error);
            })
        }

    }, [id])

    function handleFirstName(e){
        setFirstName(e.target.value);
    }

    function handleLastName(e){
        setLastName(e.target.value);
    }

    function handleEmail(e){
        setEmail(e.target.value);
    }

    function handlePhone(e){
        setPhoneNumber(e.target.value);
    }

    function handleAddress(e){
        setAddress(e.target.value);
    }

    

    function saveOrUpdateEmployee(e){
        e.preventDefault();

        if(validateForm()){

            const employee = {firstName, lastName,email,phoneNumber,address}
            console.log(employee);
            if(id){
                updateEmployee(id).then((response) =>{
                console.log(response.data);
                navigator('/employees');
                }).catch(error => {
                    console.error(error);
                })
            }else{
                createEmployee(employee).then((response) => {
                    console.log(response.data);
                    navigator('/employees')
                                }).catch(error =>{
                                   console.error(error); 
                                })
                    }
                
                
                }

            }

        

       

    function validateForm(){
        let valid = true;

        const errorsCopy = {... errors}

        if(firstName.trim()){
            errorsCopy.firstName = '';
        }
        else{
            errorsCopy.firstName='First name is required';
            valid = false;
        }

        if(lastName.trim()){
            errorsCopy.lastName = '';
        }
        else{
            errorsCopy.lastName='First name is required';
            valid = false;
        }
        if(email.trim()){
            errorsCopy.email = '';
        }else {
            errorsCopy.email = 'Email is required';
            valid = false;
        }

        if(phoneNumber.trim()){
            errorsCopy.phoneNumber = '';
        }else {
            errorsCopy.phoneNumber = 'Phone Number is required';
            valid = false;
        }

        if(address.trim()){
            errorsCopy.address = '';
        }else {
            errorsCopy.address = 'address is required';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;

    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Employee</h2>
        }else{
            return <h2 className='text-center'>Add Employee</h2>
        }
    }
    return (
    <div className='container'>
        <br/> <br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    pageTitle()
                }
                <div className='= card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name:</label>
                            <input type = 'text'
                            placeholder = 'Enter Employee First Name'
                            name = 'firstName'
                            value = {firstName}
                            className={`form-control ${errors.firstName? 'is-invalid': '' }`}
                            onChange = {handleFirstName}
                            >
                            </input>
                            {errors.firstName && < div className='invalid-feedback'>{errors.firstName} </div>}
                            </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Last Name:</label>
                            <input type = 'text'
                            placeholder = 'Enter Employee Last Name'
                            name = 'lastName'
                            value = {lastName}
                            className={`form-control ${errors.lastName? 'is-invalid': '' }`}
                            onChange = {handleLastName}
                            >
                            </input>
                            {errors.lastName && < div className='invalid-feedback'>{errors.lastName} </div>}


                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Email:</label>
                            <input type = 'text'
                            placeholder = 'Enter Employee Email'
                            name = 'email'
                            value = {email}
                            className={`form-control ${errors.email? 'is-invalid': '' }`}
                            onChange = {handleEmail}
                            >
                            </input>
                            {errors.email && < div className='invalid-feedback'>{errors.email} </div>}

                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Phone Number:</label>
                            <input type = 'text'
                            placeholder = 'Enter Employee Phone'
                            name = 'phone'
                            value = {phoneNumber}
                            className={`form-control ${errors.phoneNumber? 'is-invalid': '' }`}
                            onChange = {handlePhone}
                            >
                            </input>
                            {errors.phoneNumber && < div className='invalid-feedback'>{errors.phoneNumber} </div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Address:</label>
                            <input type = 'text'
                            placeholder = 'Enter Employee Address'
                            name = 'address'
                            value = {address}
                            className={`form-control ${errors.address? 'is-invalid': '' }`}
                            onChange = {handleAddress}
                            >
                            </input>
                            {errors.address && < div className='invalid-feedback'>{errors.address} </div>}

                        </div>

                        <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>

                    </form>

                </div>
            </div>
        </div>
    
    </div>
  )
}

export default EmployeeComponent;