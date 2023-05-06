import { Route, Routes } from "react-router-dom";
import Home from "./FirstPage/Home";
import About from "./FirstPage/About";
import AppHeader from "./FirstPage/AppHeader";
function App() {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
