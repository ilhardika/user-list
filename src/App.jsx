import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./pages/UserList";
import UserDetail from "./pages/UserDetail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "../routes/ProtectedRoutes";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <UserList />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/:id"
            element={
              <ProtectedRoute>
                <UserDetail />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/login/" element={<Login />}></Route>
          <Route path="/register/" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
