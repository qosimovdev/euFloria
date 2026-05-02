import car from "../../assets/imgs/icons/car-icon.svg"
import home from "../../assets/imgs/icons/home-icon.svg"
import savat from "../../assets/imgs/icons/savat2-icon.svg"
import gift from "../../assets/imgs/icons/gift-icon.svg"
function Sidebar() {
  return (
    <aside className="bg-[#1a4d2e] w-[280px] h-screen flex flex-col p-8 text-white m-auto">
      {/* Logo */}
      <div className="text-white text-2xl font-bold mb-16 tracking-wide">
        EUFLORIA
      </div>
    <br />
    
      {/* Menu Items */}
      <nav className="flex flex-col gap-10 flex-1 ">
        <div className="flex items-center gap-4  hover:bg-[white]   hover:text-black px-4 py-3 rounded-lg cursor-pointer transition duration-200">
          <img src={home} alt="" />
          <span className="text-lg font-medium">Home</span>
        </div>
        <div className="flex items-center gap-4 hover:bg-[white]   hover:text-black px-4 py-3 rounded-lg cursor-pointer transition duration-200">
          <img src={car} alt="" />
          <span className="text-lg font-medium ">Delivery</span>
        </div>
        <div className="flex items-center gap-4 hover:bg-[white]   hover:text-black px-4 py-3 rounded-lg cursor-pointer transition duration-200">
          <img src={gift} alt="" />
          <span className="text-lg font-medium">Pickup</span>
        </div>
        <div className="flex items-center gap-4  hover:bg-[white]   hover:text-black px-4 py-3 rounded-lg cursor-pointer transition duration-200">
          <span className="text-2xl">📚</span>
          <span className="text-lg font-medium">Catalog</span>
        </div>
        <div className="flex items-center gap-4  hover:bg-[white]   hover:text-black px-4 py-3 rounded-lg cursor-pointer transition duration-200">
          <img src={savat} alt="" />
          <span className="text-lg font-medium">Cart</span>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
