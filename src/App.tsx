
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReportPage from './SampleReport/ReportPage';


function App() {
  return (
    <div >
    <Router>
<Routes>
  <Route path="/" element={<ReportPage/>} />
</Routes>
</Router>
    </div>
  );
}

export default App;
