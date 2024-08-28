import { useState } from 'react'
import './App.css'
import HelloWorld from './HelloWorld'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<BrowserRouter>
    
    <HeaderComponent/>
    
    <Routes>
      
      {/* // http://localhost:3000 */}
      <Route path= '/' element = {<ListEmployeeComponent/>}></Route>

      {/* // http:localhost:3000/employees  */}
      <Route path= '/employees' element = {<ListEmployeeComponent/>}></Route>
    
    {/* // http:localhost:3000/add-employees  */}
    <Route path = '/add-employee' element= {<EmployeeComponent/>}></Route>

{/* // http://localhost:3000/edit-employee/1 */}
<Route path= '/edit-employee/:id' element = {<EmployeeComponent/>}></Route>
    
     </Routes>
    
     <FooterComponent/>
    
     </BrowserRouter>
    
    </>
  )
}

export default App
