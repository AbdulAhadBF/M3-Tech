import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Solutions from "./pages/Solutions";
import Developers from "./pages/Developers";

// Placeholder components for other pages
const Placeholder = ({ title }: { title: string }) => (
  <div className="container mx-auto px-4 py-32 text-center">
    <h1 className="text-4xl font-bold mb-4">{title}</h1>
    <p className="text-muted-foreground">This page is coming soon. We are working hard to bring you the best experience.</p>
  </div>
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products/:id" element={<Products />} />
          <Route path="products" element={<Products />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="solutions/:id" element={<Solutions />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="developers" element={<Developers />} />
          <Route path="demo" element={<Contact />} />
          <Route path="login" element={<Placeholder title="Login" />} />
          <Route path="*" element={<Placeholder title="404 - Not Found" />} />
        </Route>
      </Routes>
    </Router>
  );
}
