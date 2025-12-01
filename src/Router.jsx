import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import CreateTodo from "./pages/CreateTodo";
import ViewTodo from "./pages/ViewTodo";
import Terms from "./pages/Terms";
import Rgpd from "./pages/Rgpd";
import NotFound from "./pages/404";


export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />

                    <Route path="create-todo" element={<CreateTodo />} />
                    <Route path="view-todo" element={<ViewTodo />} />

                    <Route path="privacy" element={<Privacy />} />
                    <Route path="terms" element={<Terms />} />
                    <Route path="rgpd" element={<Rgpd />} />

                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}