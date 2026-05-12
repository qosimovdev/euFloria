
import { Route, Routes, Navigate } from 'react-router-dom'
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Delivery from "./components/pages/Delivery/Delivery";
import Home from "./components/pages/Home/Home";
import Pickup from "./components/pages/Pickup/Pickup";
import Catalog from "./components/pages/Catalog/Catalog";
import Cart from "./components/pages/Cart/Cart";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Navigate to="/Catalog" replace />} />
          <Route path="/Home/*" element={<Home/>} />
          <Route path="/Delivery/*" element={<Delivery/>} />
          <Route path="/Pickup/*" element={<Pickup/>} />
          <Route path="/Catalog/*" element={<Catalog/>} />
          <Route path="/Cart/*" element={<Cart/>} />
        </Routes>
      </main>
    </>
  );
}

export default App;