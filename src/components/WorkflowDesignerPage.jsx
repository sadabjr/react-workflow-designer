import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactFlow, { Controls, Background } from 'reactflow';

function WorkflowDesignerPage() {
  const [elements, setElements] = useState([]);
  const nodeTypes = {
    start: {
      type: 'input',
      label: 'Start',
      color: '#3d3d3d',
    },
    task: {
      type: 'default',
      label: 'Task',
      color: '#ffbd46',
    },
    end: {
      type: 'output',
      label: 'End',
      color: '#f44336',
    },
  };
  const nodes = [
    {
      id: '1',
      type: 'start',
      data: { label: 'Start' },
      position: { x: 50, y: 50 },
    },
    {
      id: '2',
      type: 'task',
      data: { label: 'Task 1' },
      position: { x: 200, y: 50 },
    },
    {
      id: '3',
      type: 'task',
      data: { label: 'Task 2' },
      position: { x: 200, y: 150 },
    },
    {
      id: '4',
      type: 'end',
      data: { label: 'End' },
      position: { x: 350, y: 100 },
    },
  ];

  return (
    <div className="container" >
       
{/* <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand">Navbar</Link>
  </div>
</nav> */}
      <div className="row">
        <div className="col-4">
          <div className="card border border-danger-subtle">
            <div className="card-header">Node Types</div>
            <div className="card-body">
              {Object.keys(nodeTypes).map((type) => (
                <div key={type} className="node-type">
                  <div className={`node-type-icon ${type}`} />
                  <div className="node-type-label">{nodeTypes[type].label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="card">
            <div className="card-header">Design Area</div>
            <div className="card-body">
              <ReactFlow elements={elements} onElementsRemove={setElements} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkflowDesignerPage;
