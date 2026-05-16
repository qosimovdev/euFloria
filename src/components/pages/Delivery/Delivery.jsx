import { useState } from "react";

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];
const DAYS = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

export default function Delivery() {
  const [curDate, setCurDate] = useState(new Date(2020, 5, 1));
  const [selectedDay, setSelectedDay] = useState(4);
  const [ampm, setAmpm] = useState("AM");
  const [address, setAddress] = useState("");

  const firstDay = new Date(curDate.getFullYear(), curDate.getMonth(), 1).getDay();
  const daysInMonth = new Date(curDate.getFullYear(), curDate.getMonth() + 1, 0).getDate();

  const prevMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() - 1, 1));
    setSelectedDay(null);
  };
  const nextMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() + 1, 1));
    setSelectedDay(null);
  };

  const emptyCells = Array(firstDay).fill(null);
  const dayCells = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg w-[620px]">

        <div
          className="  px-10 pt-10 pb-12 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #7ecb7e 0%, #2d6a2d 55%, #1a4a1a 100%)",
          }}
        >
     
          <div className="absolute -right-10 -top-10 w-52 h-52 rounded-full bg-white opacity-5" />
          <div className="absolute right-10 -bottom-16 w-36 h-36 rounded-full bg-white opacity-5" />

          <h1 className="text-[36px] font-black text-white leading-none tracking-tight mb-6">
            Deliver<br />anywhere.
          </h1>

         
          <div className="flex items-center bg-white rounded-lg px-4 py-0 w-72 shadow-md">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter delivery address"
              className="flex-1 text-sm text-gray-500 outline-none py-3 bg-transparent placeholder-gray-400"
            />
            <button className="w-8 h-8 bg-[#5cb85c] rounded-md flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </div>

       
        <div className="flex px-8 py-7">

          <div className="flex-1">
           
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1">
                <span className="text-[13px] font-bold text-gray-900">
                  {MONTHS[curDate.getMonth()]} {curDate.getFullYear()}
                </span>
                <span className="text-[11px] text-gray-400">›</span>
              </div>
              <div className="flex gap-1">
                <button
                  onClick={prevMonth}
                  className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-800 text-sm font-medium"
                >
                  ‹
                </button>
                <button
                  onClick={nextMonth}
                  className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-800 text-sm font-medium"
                >
                  ›
                </button>
              </div>
            </div>

            {/* Days grid */}
            <div className="grid grid-cols-7 gap-y-1">
              {DAYS.map((d) => (
                <div key={d} className="text-center text-[10px] font-semibold text-gray-300 tracking-wide pb-2">
                  {d}
                </div>
              ))}

              {emptyCells.map((_, i) => (
                <div key={`e-${i}`} />
              ))}

              {dayCells.map((d) => {
                const isSelected = d === selectedDay;
                return (
                  <button
                    key={d}
                    onClick={() => setSelectedDay(d)}
                    className={`
                      aspect-square flex items-center justify-center text-[13px] font-medium rounded-full mx-auto w-8 h-8
                      ${isSelected
                        ? "bg-[#5cb85c] text-white font-bold"
                        : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                      }
                    `}
                  >
                    {d}
                  </button>
                );
              })}
            </div>

      
            <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-100">
              <span className="text-[13px] font-semibold text-gray-800">Time</span>
              <span className="bg-[#5cb85c] text-white text-[13px] font-bold px-3 py-1 rounded-md">
                11:38
              </span>
              <div className="flex border border-gray-200 rounded-md overflow-hidden">
                <button
                  onClick={() => setAmpm("AM")}
                  className={`px-3 py-1 text-[12px] font-semibold transition-colors ${
                    ampm === "AM" ? "bg-gray-800 text-white" : "bg-white text-gray-500"
                  }`}
                >
                  AM
                </button>
                <button
                  onClick={() => setAmpm("PM")}
                  className={`px-3 py-1 text-[12px] font-semibold transition-colors ${
                    ampm === "PM" ? "bg-gray-800 text-white" : "bg-white text-gray-500"
                  }`}
                >
                  PM
                </button>
              </div>
            </div>
          </div>

  
          <div className="w-44 flex flex-col justify-center items-start pl-8">
            <h2 className="text-[30px] font-black text-gray-900 leading-[1.05] tracking-tight mb-6">
              Deliver<br />anytime.
            </h2>
            <button className="w-full py-3 border-2 border-[#2d5a2d] rounded-xl text-[13px] font-bold text-[#2d5a2d] bg-white hover:bg-[#5cb85c] hover:text-white hover:border-[#5cb85c] transition-all duration-200">
              I'm ready
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}