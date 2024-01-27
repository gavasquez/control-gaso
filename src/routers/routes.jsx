import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { ProtectedRoute } from "../hooks/ProtectedRoute";
import { UserAuth } from "../context/AuthContext";

export const MyRoutes = () => {

    const { user } = UserAuth();

    return (
            <Routes>
                <Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
                    <Route path="/" element={<Home />} />
                </Route>
                <Route path="/login" element={<Login />} />
            </Routes>
    )
}
