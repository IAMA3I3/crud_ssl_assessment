import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import AddItem from "./screens/AddItem";
import EditItem from "./screens/EditItem";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<AddItem />} path="/add-item" />
        <Route element={<EditItem />} path="/edit-item/:id" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
