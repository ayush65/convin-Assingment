import { Routes, Route } from "react-router-dom";

import History from "./Component/History/History";
import Homepage from "./Component/Homepage";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}
