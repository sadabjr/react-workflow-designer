import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactFlow, { Controls, MiniMap, Background } from "react-flow-renderer";
import axios from "axios";

function WorkflowDesignerPage() {
  const [workflowData, setWorkflowData] = useState(null);
  const [moduleData, setModuleData] = useState([]);
  const { workflow_id } = useParams();

  useEffect(() => {
    // Fetch workflow data from API
    axios
      .get(
        `https://64307b10d4518cfb0e50e555.mockapi.io/workflow/${workflow_id}`
      )
      .then((response) => {
        setWorkflowData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [workflow_id]);

  useEffect(() => {
    // Fetch module data from API
    axios
      .get("https://64307b10d4518cfb0e50e555.mockapi.io/modules", {
        params: {
          page: 1,
          limit: 5,
        },
      })
      .then((response) => {
        setModuleData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
  };

  const handleNodeDragStop = (event, node) => {
    console.log("Node dragged to:", node.position);
  };

  const handleDelete = (event, elementsToRemove) => {
    console.log("Elements to remove:", elementsToRemove);
  };

  const elements = [
    {
      id: "input",
      type: "input",
      data: {
        label: "Input",
      },
      position: { x: 100, y: 50 },
    },
  ];

  const nodeTypes = {
    input: ({ data }) => {
      return (
        <div>
          <div>{data.label}</div>
          <div>{workflowData && workflowData.inputType}</div>
        </div>
      );
    },
    output: ({ data }) => {
      return (
        <div>
          <div>{data.label}</div>
          <div>{data.outputType}</div>
        </div>
      );
    },
  };

  return (
    <div className="container">
      <nav
        className="navbar m-2 pl-2"
        style={{ borderRadius: "8px", backgroundColor: "#e8e8e6" }}
      >
        <h5 className="container">{workflowData && workflowData.name}</h5>
      </nav>
      <div className="row">
        <div className="col-4">
          <div className="card border border-danger-subtle">
            <div className="card-header">Node Types</div>
            <div className="card-body">
              {moduleData.map((module) => {
                return (
                  <div
                    key={module.id}
                    draggable={true}
                    onDragStart={(event) =>
                      event.dataTransfer.setData(
                        "text/plain",
                        JSON.stringify(module)
                      )
                    }
                  >
                    {module.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="card">
            <div className="card-header">Design Area</div>
            <div className="card-body">
              <ReactFlow
                elements={elements}
                onNodeDragStop={handleNodeDragStop}
                onElementsRemove={handleDelete}
                onLoad={onLoad}
                nodeTypes={nodeTypes}
              >
                <Controls />
              </ReactFlow>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkflowDesignerPage;