import "./App.css";
import WorkflowList from "./components/WorkflowList";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import WorkflowDesignerPage from "./components/WorkflowDesignerPage";



function App() {
  return (
    <div>
      <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workflowList" element={<WorkflowList />} />
        <Route path="/workflowDesignerPage" element={<WorkflowDesignerPage />} />
        {/* <Route path="/workflow/:workflow_id" component={WorkflowDesignerPage} /> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
