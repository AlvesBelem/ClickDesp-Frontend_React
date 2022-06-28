import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";
import { Clients } from "../pages/Clients";
import { Vehicles } from "../pages/Vehicles";
import { Services } from "../pages/Services";
import { Budgets } from "../pages/Budgets";

export const AppRouters = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/Vehicles" element={<Vehicles />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/budgets" element={<Budgets />} />
      </Routes>
    </Layout>
  );
};
