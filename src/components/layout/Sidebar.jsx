// import { NavLink } from "react-router-dom";

// function Sidebar() {
//   return (
//     <div className="w-3xs h-screen text-white flex flex-col p-9">
//       <h1 className="text-2xl  mb-8">EUFLORIA</h1>
//   <div className="flex gap-10">
//       <nav className="flex flex-col gap-3">
//         <NavLink
//           to="/"
//           className={({ isActive }) =>
//             isActive
//               ? "text-black bg-white px-3 py-2 rounded"
//               : "text-gray-400 hover:text-white px-3 py-2"
//           }
//         >
//           Home
//         </NavLink>

//         <NavLink
//           to="/profile"
//           className={({ isActive }) =>
//             isActive
//               ? "text-black bg-white px-3 py-2 rounded"
//               : "text-gray-400 hover:text-white px-3 py-2"
//           }
//         >
//           Delivery
//         </NavLink>

//         <NavLink
//           to="/settings"
//           className={({ isActive }) =>
//             isActive
//               ? "text-black bg-white px-3 py-2 rounded"
//               : "text-gray-400 hover:text-white px-3 py-2"
//           }
//         >
//           Pickup
//         </NavLink>
//          <NavLink
//           to="/settings"
//           className={({ isActive }) =>
//             isActive
//               ? "text-black bg-white px-3 py-2 rounded"
//               : "text-gray-400 hover:text-white px-3 py-2"
//           }
//         >
//         Catalog
//         </NavLink>
//             <NavLink
//           to="/settings"
//           className={({ isActive }) =>
//             isActive
//               ? "text-black bg-white px-3 py-2 rounded"
//               : "text-gray-400 hover:text-white px-3 py-2"
//           }
//         >
//         Cart
//         </NavLink>
//       </nav>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
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
