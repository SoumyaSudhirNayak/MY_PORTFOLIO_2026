import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProjectCaseStudy from "./pages/ProjectCaseStudy/ProjectCaseStudy";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:projectId" element={<ProjectCaseStudy />} />
        </Routes>
      </SmoothScroll>
    </BrowserRouter>
  );
}
