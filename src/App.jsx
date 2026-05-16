import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Delivery from "./components/pages/Delivery/Delivery";
import Home from "./components/pages/Home/Home";
import Pickup from "./components/pages/Pickup/Pickup";
import Catalog from "./components/pages/Catalog/Catalog";
import Cart from "./components/pages/Cart/Cart";
import Header from "./components/layout/Header";
function App() {
  return (
    <>
      <div className="flex min-h-screen overflow-hidden">
        <Sidebar />
      <main className="main flex-1 overflow-y-auto h-screen">
      <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/pickup" element={<Pickup />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      </div>
    </>
  );
}

export default App;