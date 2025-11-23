import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Blogs from "./pages/Blogs";
import FreeInvoicing from "./pages/FreeInvoicing";
import RequestDemo from "./pages/RequestDemo";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";

import SalesManagement from "./pages/SalesManagement";
import PurchaseManagement from "./pages/PurchaseManagement";
import InventoryManagement from "./pages/InventoryManagement";
import ProductionManagement from "./pages/ProductionManagement";
import MaterialPlanning from "./pages/MaterialPlanning";
import JobWorkManagement from "./pages/JobWorkManagement";
import ServiceManagement from "./pages/ServiceManagement";
import PaymentManagement from "./pages/PaymentManagement";
import BillOfMaterials from "./pages/BillOfMaterials";

import BlogDetailAutomation from "./pages/BlogDetailAutomation";
import BlogDetailBOM from "./pages/BlogDetailBOM";
import BlogDetailCostReduction from "./pages/BlogDetailCostReduction";
import BlogDetailInventory from "./pages/BlogDetailInventory";
import BlogDetailMultiLevelBOM from "./pages/BlogDetailMultiLevelBOM";
import BlogDetailSemiconductor from "./pages/BlogDetailSemiconductor";




// LAYOUT WRAPPER
const Layout = ({ children }) => {
  const location = useLocation();

  const isHome = location.pathname === "/";

  // Add body class (VERY IMPORTANT)
  document.body.className = isHome ? "page-home" : "page-other";

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<AboutUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/free-invoicing" element={<FreeInvoicing />} />
          <Route path="/request-demo" element={<RequestDemo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />

          {/* Modules */}
          <Route path="/sales" element={<SalesManagement />} />
          <Route path="/purchase" element={<PurchaseManagement />} />
          <Route path="/inventory" element={<InventoryManagement />} />
          <Route path="/production" element={<ProductionManagement />} />
          <Route path="/material-planning" element={<MaterialPlanning />} />
          <Route path="/jobwork" element={<JobWorkManagement />} />
          <Route path="/service" element={<ServiceManagement />} />
          <Route path="/payments" element={<PaymentManagement />} />
          <Route path="/bom" element={<BillOfMaterials />} />

 <Route path="/blogs/automation" element={<BlogDetailAutomation />} />
<Route path="/blogs/bom" element={<BlogDetailBOM />} />
<Route path="/blogs/cost-reduction" element={<BlogDetailCostReduction />} />
<Route path="/blogs/inventory" element={<BlogDetailInventory />} />
<Route path="/blogs/multilevel-bom" element={<BlogDetailMultiLevelBOM />} />
<Route path="/blogs/semiconductor" element={<BlogDetailSemiconductor />} />




          {/* Legal */}
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/refund" element={<RefundPolicy />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
