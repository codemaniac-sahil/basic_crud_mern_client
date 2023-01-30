import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser";
import AllUser from "./components/AllUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/alluser" element={<AllUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
