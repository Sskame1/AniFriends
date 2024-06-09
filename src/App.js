import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
        
        </Route>
      </Routes>
    </div>
  );
}

export default App;
