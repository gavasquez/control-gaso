import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { ProtectedRoute } from "../hooks/ProtectedRoute";
import { UserAuth } from "../context/AuthContext";
import { Configuracion } from "../pages/Configuracion";

export const MyRoutes = () => {

    const { user } = UserAuth();

    return (
        <Routes>
                <Route path="/login" element={<Login />} />

                <Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/configurar" element={<Configuracion />} />
                </Route>
            </Routes>
    )
}
