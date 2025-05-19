import { Routes, Route } from "react-router";
import { Layout } from "../Layout/Layout";
import { HomePage } from "../../pages/Home/HomePage";
import { MorePage } from "../../pages/More/MorePage";
import { MedСardPage } from "../../pages/MedСard/MedСardPage";
function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="medicalCard" element={<MedСardPage />} />
                <Route path="more" element={<MorePage />} />
            </Route>
        </Routes>
    );
}

export default AppRouter;
