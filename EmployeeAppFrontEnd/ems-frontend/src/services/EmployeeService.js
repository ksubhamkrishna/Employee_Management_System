import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/employees/list';

export const listEmployees = () => axios.get(REST_API_BASE_URL);

const REST_API_BASE_URL_SAVE = 'http://localhost:8080/employees/save';

export const createEmployee = (employee) => axios.post(REST_API_BASE_URL_SAVE, employee);

const REST_API_BASE_URL_GET = 'http://localhost:8080/employees/single';

export const getEmployee = (employeeId) => axios.get(REST_API_BASE_URL_GET + '/' + employeeId);

const REST_API_BASE_URL_UPDATE = 'http://localhost:8080/employees/update';

export const updateEmployee = (employeeId,employee) => axios.put(REST_API_BASE_URL_UPDATE+ '/' + employeeId, employee);

const REST_API_BASE_URL_DELETE = 'http://localhost:8080/employees/delete';

export const deleteEmployee = (employeeId) => axios.delete(REST_API_BASE_URL_DELETE +'/' + employeeId);