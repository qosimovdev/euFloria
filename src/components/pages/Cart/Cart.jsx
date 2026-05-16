import { useState } from "react";
import Kaktus from "../../../assets/imgs/png/kaktus.png"
import Crop from "../../../assets/imgs/png/crop.png"
import Minikaktus from "../../../assets/imgs/png/mini-kaktus.png"

const orderItems = [
  { id: 1, img: Kaktus, name: "Cactus", price: 8.0 },
  { id: 2, img: Crop, name: "Plant", price: 8.0 },
  { id: 3, img: Minikaktus, name: "Green", price: 8.0 },
];

export default function Cart() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [discount, setDiscount] = useState("");
  const [cardName, setCardName] = useState("John Smith");
  const [cardNumber, setCardNumber] = useState("123 - 456 -");
  const [expMonth, setExpMonth] = useState("03");
  const [expYear, setExpYear] = useState("24");
  const [cvc, setCvc] = useState("123");

  const subtotal = 18.0;
  const tax = 1.0;
  const shipping = 0;
  const total = subtotal + tax + shipping;

  return (
    <div className="h-11/12 bg-gray-50 flex items-center justify-center p-8 font-sans rounded-2xl">
      <div className="flex gap-10 max-w-4xl w-full">
       
        <div className="flex-1">
         
          <div className="flex items-center gap-3 mb-8 text-sm font-medium">
            <span className="text-gray-500">Account</span>
            <div className="flex items-center gap-1">
              <div className="w-8 h-px bg-gray-300" />
              <div className="w-5 h-5 rounded-full bg-[#1a5c38] flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="w-8 h-px bg-gray-300" />
            </div>
            <span className="text-gray-500">Shipping</span>
            <div className="flex items-center gap-1">
              <div className="w-8 h-px bg-gray-300" />
              <div className="w-5 h-5 rounded-full bg-[#1a5c38] flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="w-8 h-px bg-gray-300" />
            </div>
            <span className="text-[#1a5c38] font-semibold">Payment</span>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Details</h2>

          
          <div className="flex items-center justify-between mb-5">
            <label className="text-sm text-gray-700">Use saved card</label>
            <div className="relative">
              <select className="appearance-none bg-[#e8f5e9] text-gray-700 text-sm px-4 py-2 pr-8 rounded-lg border-none outline-none cursor-pointer">
                <option>Mastercard ending 234</option>
                <option>Visa ending 567</option>
              </select>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-xs">▼</div>
            </div>
          </div>

         =
          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">Name on card</label>
            <div className="relative">
              <input
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                className="w-full bg-[#e8f5e9] text-gray-700 text-sm px-4 py-3 rounded-lg outline-none pr-10"
                placeholder="John Smith"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#1a5c38] flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>

         
          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">Card number</label>
            <input
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full bg-[#e8f5e9] text-gray-700 text-sm px-4 py-3 rounded-lg outline-none"
              placeholder="123 - 456 - 789 - 000"
            />
          </div>

         
          <div className="flex gap-4 mb-8">
            <div className="flex-1">
              <label className="block text-sm text-gray-700 mb-1">Expiration</label>
              <div className="flex items-center bg-[#e8f5e9] rounded-lg px-4 py-3 gap-2">
                <input
                  value={expMonth}
                  onChange={(e) => setExpMonth(e.target.value)}
                  className="w-8 bg-transparent text-sm text-gray-700 outline-none text-center"
                  maxLength={2}
                />
                <span className="text-gray-400">/</span>
                <input
                  value={expYear}
                  onChange={(e) => setExpYear(e.target.value)}
                  className="w-8 bg-transparent text-sm text-gray-700 outline-none text-center"
                  maxLength={2}
                />
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-700 mb-1 flex items-center gap-1">
                CVC
                <span className="w-4 h-4 rounded-full border border-gray-400 text-gray-400 text-xs flex items-center justify-center cursor-help">?</span>
              </label>
              <input
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                className="w-full bg-[#e8f5e9] text-gray-700 text-sm px-4 py-3 rounded-lg outline-none"
                maxLength={3}
                placeholder="123"
              />
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 flex items-center justify-between">
            <button className="text-sm text-gray-600 hover:text-gray-800 transition-colors">
              Cancel order
            </button>
            <button className="bg-[#1a5c38] text-white text-sm font-semibold px-8 py-3 rounded-lg hover:bg-[#154d30] transition-colors">
              Complete order
            </button>
          </div>
        </div>

       
        <div style={{marginLeft: "4rem"}} className="  w-82 bg-[#1a5c38] rounded-2xl p-5 text-white ">
          <h3 className="font-semibold text-lg mb-4">Order Summary</h3>

        
          <div className="relative bg-white rounded-xl overflow-hidden h-40 mb-3">
            {orderItems.map((item, i) => (
              <img
                key={item.id}
                src={item.img}
                alt={item.name}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                  i === activeSlide ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          
            <div className="absolute inset-0 flex">
              <div className="w-8 bg-black/10 rounded-l-xl" />
              <div className="flex-1" />
              <div className="w-8 bg-black/10 rounded-r-xl" />
            </div>
          </div>

          
          <div className="flex justify-center gap-2 mb-4">
            {orderItems.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === activeSlide ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>

          
          <div className="flex items-center justify-between mb-4">
            <span className="font-semibold text-sm">
              {orderItems[activeSlide]?.name || "Cactus"}
            </span>
            <div className="flex items-center gap-3">
              <span className="font-bold">$ 8.00</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-6 h-6 rounded bg-white/20 hover:bg-white/30 flex items-center justify-center text-sm font-bold"
                >
                  -
                </button>
                <span className="text-sm w-4 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-6 h-6 rounded bg-white/20 hover:bg-white/30 flex items-center justify-center text-sm font-bold"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-2 mb-5">
            <input
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              placeholder="Discount code"
              className="flex-1 bg-white/20 placeholder-white/50 text-white text-sm px-3 py-2 rounded-lg outline-none"
            />
            <button className="border border-white text-white text-sm px-4 py-2 rounded-lg hover:bg-white/10 transition-colors">
              Apply
            </button>
          </div>

         
          <div className="space-y-2 text-sm border-t border-white/20 pt-4">
            <div className="flex justify-between text-white/80">
              <span>Sub total</span>
              <span>$ {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-white/80">
              <span>Tax</span>
              <span>$ {tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-white/80">
              <span>Shipping</span>
              <span className="text-green-300 font-medium">Free</span>
            </div>
            <div className="flex justify-between font-bold text-base pt-1">
              <span>Total — {orderItems.length} items</span>
              <span>$ {total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}