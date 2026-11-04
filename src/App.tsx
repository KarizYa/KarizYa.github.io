import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import ExperienceDetail from "./sections/ExperienceDetail";
import Home from "./sections/Home";
import Resume from "./sections/Resume";
import Sertifikasi from "./sections/Sertifikasi";
import TrainingDetail from "./sections/TrainingDetail";
import Work from "./sections/Work";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="resume" element={<Resume />} />
          <Route path="resume/pengalaman/:slug" element={<ExperienceDetail />} />
          <Route path="resume/pelatihan/:slug" element={<TrainingDetail />} />
          <Route path="work" element={<Work />} />
          <Route path="sertifikasi" element={<Sertifikasi />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
