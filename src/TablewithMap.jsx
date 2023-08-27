import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';

function TablewithMap() {
    const [first, setfirst] = useState([{Name : "Sarath", Job : "FulStack Dev.",salary :50000 },{Name : "Sajid", Job : "FulStack Web Dev.",salary : 60000}])
  return (
    <div>
        <Table striped bordered hover>
        
      <thead>
      
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Last Name</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
      {first.map((display)=>
        <tr>
          <td>1</td>
          <td>{display.Name}</td>
          <td>{display.Job}</td>
          <td>{display.salary}</td>
        </tr>
      )
}
            
            
      </tbody>
        

    </Table>
    </div>
  )
  
}

export default TablewithMap