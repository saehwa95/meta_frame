import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectCreate from "./pages/ProjectCreate";
import ProjectContents from "./pages/ProjectContents";
import Asset from './pages/Asset'

function App() {
  return (
<>
<BrowserRouter>
<Routes>
<Route path="/" element={<ProjectCreate />} />
<Route path="/ProjectContents" element={<ProjectContents />} />
<Route path="/Asset" element={<Asset />} />
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
