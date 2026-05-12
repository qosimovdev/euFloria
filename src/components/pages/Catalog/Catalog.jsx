import { useState } from "react";
import Gul from "../../../assets/imgs/png/hero.png";  
const plants = [
  {
    id: 1,
    name: "Cactus Plant",
    oldPrice: 10,
    price: 8,
    liked: true,
    img: Gul,
  },
  {
    id: 2,
    name: "Not Cactus Plant",
    oldPrice: 10,
    price: 8,
    liked: false,
    active: true,
    img: Gul
  },
  {
    id: 3,
    name: "Not Cactus Plant",
    oldPrice: 10,
    price: 8,
    liked: false,
    img: Gul,
  },
  {
    id: 4,
    name: "Cactus Plant",
    oldPrice: 10,
    price: 8,
    liked: false,
    img: Gul,
  },
  {
    id: 5,
    name: "Not Cactus Plant",
    oldPrice: 10,
    price: 8,
    liked: false,
    img: Gul,
  },
  {
    id: 6,
    name: "Cactus Plant",
    oldPrice: 10,
    price: 8,
    liked: false,
    img: Gul,
  },
];

export default function Catalog() {
  const [liked, setLiked] = useState(
    plants.reduce((acc, p) => ({ ...acc, [p.id]: p.liked }), {})
  );
  const [added, setAdded] = useState({});

  const toggleLike = (id) => setLiked((prev) => ({ ...prev, [id]: !prev[id] }));

  const handleBuy = (id) => {
    setAdded((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => setAdded((prev) => ({ ...prev, [id]: false })), 1200);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        <div className="flex items-center gap-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            Best sellers
          </h1>
          <button className="flex items-center gap-1 border border-gray-300 text-gray-700 text-sm px-4 py-1.5 rounded hover:bg-gray-100 transition-colors">
            See More <span className="text-base">›</span>
          </button>
        </div>

       
        <div className="grid grid-cols-3 gap-5">
          {plants.map((plant) => (
            <div
              key={plant.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
             
              <div className="relative">
                <img
                  src={plant.img}
                  alt={plant.name}
                  className="w-full h-52 object-cover"
                />
                <button
                  onClick={() => toggleLike(plant.id)}
                  className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={liked[plant.id] ? "#1a5c38" : "none"}
                    stroke={liked[plant.id] ? "#1a5c38" : "#9ca3af"}
                    strokeWidth="2"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>
              </div>

             
              <div className="px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {plant.name}
                  </p>
                  <p className="text-sm text-gray-500 mt-0.5">
                    <span className="line-through mr-1">(${plant.oldPrice})</span>
                    <span className="text-gray-900 font-bold">${plant.price}</span>
                  </p>
                </div>
                <button
                  onClick={() => handleBuy(plant.id)}
                  className={`text-xs px-4 py-2 rounded border transition-all duration-200 font-medium whitespace-nowrap ${
                    added[plant.id]
                      ? "bg-green-600 text-white border-green-600"
                      : plant.active
                      ? "bg-[#1a5c38] text-white border-[#1a5c38] hover:bg-[#154d30]"
                      : "bg-white text-gray-800 border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {added[plant.id] ? "Added " : "Buy Now"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}