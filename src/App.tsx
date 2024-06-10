import "./AppCSS.css"
import { ComponentPrimaryPage } from "./components/PRINCIPAL_COMPONENTS/ComponentPrimaryRoute";
import { ComponentAdminRoute } from "./components/PRINCIPAL_COMPONENTS/ComponentAdminRoute";
import { ComponentDrinkRoute } from "./components/PRINCIPAL_COMPONENTS/ComponentDrinkRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ComponentLimpezaRoute } from "./components/PRINCIPAL_COMPONENTS/ComponentLimpezaRoute";
import { ComponentCarnesRoute } from "./components/PRINCIPAL_COMPONENTS/ComponentCarnesRoute";
import { ComponentFrutasRoute } from "./components/PRINCIPAL_COMPONENTS/ComponentFrutasRoute";
import { ComponentLoginRoute } from "./components/PRINCIPAL_COMPONENTS/ComponentLoginRoute";
import { ComponentChekoutRoute } from "./components/PRINCIPAL_COMPONENTS/ComponentChekoutRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComponentPrimaryPage />}/>
        <Route path="/admin" element={<ComponentAdminRoute />}/>
        <Route path="/admin/login" element={<ComponentLoginRoute />}/>
        <Route path="/bebidas" element={<ComponentDrinkRoute />}/>
        <Route path="/limpeza" element={<ComponentLimpezaRoute />}/>
        <Route path="/carnes" element={<ComponentCarnesRoute />}/>
        <Route path="/frutas" element={<ComponentFrutasRoute />}/>
        <Route path="/checkout" element={<ComponentChekoutRoute />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
