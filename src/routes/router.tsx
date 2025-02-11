import { BrowserRouter, Route, Routes } from "react-router-dom";

import BaseLayout from "../components/Base-layout";
//import Comnponentes Pages
import Home from "../pages/1-HOME/home";
import PIB from "../pages/2-PIB/pib";
import Ministerios from "../pages/3-MINISTERIOS/ministerios";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/PIB" element={<PIB />} />
          <Route path="/ministerios" element={<Ministerios />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
