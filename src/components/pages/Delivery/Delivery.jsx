import { useState } from "react";

export default function Delivery() {
  const [selectedDay, setSelectedDay] = useState(4);
  const [ampm, setAmpm] = useState("AM");
  const [address, setAddress] = useState("");

  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const firstDay = new Date(2020, 4, 1).getDay();
  const totalDays = 31;

  return (
    <div className="bg-gray-100 p-8 w-full">
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg w-full">

        {/* Green banner */}
        <div className="px-16 pt-14 pb-16" style={{ background: "linear-gradient(135deg, #7ecb7e 0%, #2d6a2d 55%, #1a4a1a 100%)" }}>
          <h1 className="text-[52px] font-black text-white leading-none mb-8">
            Deliver<br />anywhere.
          </h1>
          <div className="flex items-center bg-white rounded-xl px-5 w-[480px] shadow-md">
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter delivery address"
              className="flex-1 text-base text-gray-500 outline-none py-4 bg-transparent placeholder-gray-400"
            />
            <button className="w-10 h-10 bg-[#5cb85c] rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex px-16 py-12 gap-12">

          {/* Calendar */}
          <div className="flex-1">
            <p className="text-xl font-bold text-gray-900 mb-6">May 2020</p>

            <div className="grid grid-cols-7 gap-y-2">
              {days.map((d) => (
                <div key={d} className="text-center text-xs font-semibold text-gray-300 pb-3">{d}</div>
              ))}

              {Array(firstDay).fill(null).map((_, i) => <div key={i} />)}

              {Array.from({ length: totalDays }, (_, i) => i + 1).map((d) => (
                <button
                  key={d}
                  onClick={() => setSelectedDay(d)}
                  className={`w-11 h-11 mx-auto flex items-center justify-center rounded-full text-base font-medium ${
                    selectedDay === d ? "bg-[#5cb85c] text-white" : "text-gray-700 hover:bg-green-50"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>

            {/* Time */}
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-100">
              <span className="text-base font-semibold text-gray-800">Time</span>
              <span className="bg-[#5cb85c] text-white font-bold px-4 py-2 rounded-lg">11:38</span>
              <button
                onClick={() => setAmpm("AM")}
                className={`px-5 py-2 text-sm font-semibold border border-gray-200 ${ampm === "AM" ? "bg-gray-800 text-white" : "bg-white text-gray-500"}`}
              >
                AM
              </button>
              <button
                onClick={() => setAmpm("PM")}
                className={`px-5 py-2 text-sm font-semibold border border-gray-200 ${ampm === "PM" ? "bg-gray-800 text-white" : "bg-white text-gray-500"}`}
              >
                PM
              </button>
            </div>
          </div> {/* ✅ flex-1 yopildi */}

          {/* Right */}
          <div className="w-64 flex flex-col justify-center">
            <h2 className="text-[42px] font-black text-gray-900 leading-tight mb-8">
              Deliver<br />anytime.
            </h2>
            <button className="w-full py-4 border-2 border-[#2d5a2d] rounded-xl text-base font-bold text-[#2d5a2d] hover:bg-[#5cb85c] hover:text-white hover:border-[#5cb85c] transition-all">
              I'm ready
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}