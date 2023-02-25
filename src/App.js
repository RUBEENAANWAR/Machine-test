import React from "react";
import "./components/Table/Table"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import DataTable from './components/Table/Table'
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<DataTable/>}/>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
