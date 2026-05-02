
import { NavLink } from "react-router-dom";
import { Home, User, Settings, ShoppingCart, BookOpen } from "lucide-react";
import Barg from "../../assets/imgs/svg/barg.svg"
import Ut from "../../assets/imgs/svg/ut.svg"
function Sidebar() {
  const navItems = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/delivery", icon: User, label: "Delivery" },
    { to: "/pickup", icon: Settings, label: "Pickup" },
    { to: "/catalog", icon: BookOpen, label: "Catalog" },
    { to: "/cart", icon: ShoppingCart, label: "Cart" },
  ];

  return (
    <div className="w-78 h-screen text-white flex flex-col p-9">

      <h1 className="text-3xl mb-8 font-medium" style={{ marginTop: "3rem", marginLeft: "2rem" }} >EUFLORIA</h1>
      <nav className="flex flex-col gap-4 " style={{ marginTop: "4rem", marginLeft: "2rem" }}>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-2xl ${isActive
                ? "text-black bg-white w-60"
                : "text-gray-400 hover:text-white"
              }`
            }
          >
            <item.icon size={20} />
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="flex flex-col items-center">
        <img className="w-48" src={Barg} alt="" />
        <img src={Ut} alt="" />
      </div>
    </div>
  );
}

export default Sidebar;
