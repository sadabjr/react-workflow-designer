import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';

function WorkflowList() {
  const [workflowData, setWorkflowData] = useState([]);

  useEffect(() => {
    fetch('https://64307b10d4518cfb0e50e555.mockapi.io/workflow')
      .then(response => response.json())
      .then(data => setWorkflowData(data))
      .catch(error => console.log(error))
  }, []);

  return (
    <table className="table table-bordered table-striped">
      <thead className="thead-dark">
        <tr>
          <th>Name</th>
          <th>Created At</th>
          <th>Input Type</th>
        </tr>
      </thead>
      <tbody>
        {workflowData.map(item => (
          <tr key={item.id}>
            <td>
              <Link to="/workflowDesignerPage" >
                {item.name}
              </Link>
            </td>
            <td>{item.createdAt}</td>
            <td>{item.input_type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default WorkflowList;
