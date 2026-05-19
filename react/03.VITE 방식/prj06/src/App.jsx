import { Link, Routes, Route } from "react-router-dom";
import "./App.css";

import Ex13 from "./pages/Ex13";
import Ex14 from "./pages/Ex14";
import Ex15 from "./pages/Ex15";

function App() {
  return (
    <>
      <Link to="/ex08">예제13</Link> | <Link to="/ex09">예제14</Link> |{" "}
      <Link to="/ex10">예제15</Link>
      <Routes>
        <Route path="/ex08" element={<Ex13 />}></Route>
        <Route path="/ex09" element={<Ex14 />}></Route>
        <Route path="/ex10" element={<Ex15 />}></Route>
      </Routes>
    </>
  );
}

export default App;
