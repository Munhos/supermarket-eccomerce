import "./AppCSS.css"
import { ComponentPrimaryPage } from "./components/PRINCIPAL_COMPONENTS/ComponentPrimaryRouteFolder/ComponentPrimaryRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComponentPrimaryPage />}/>
        <Route path="/bebidas">
        </Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
