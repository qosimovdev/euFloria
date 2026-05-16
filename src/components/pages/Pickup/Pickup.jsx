import React, { useMemo, useState } from "react";

import Search from "../../../assets/imgs/icons/Search.svg"
const stores = [
  {
    name: "Flower Power",
    hours: "8:00 a.m. - 4:00 p.m.",
    status: "Open now",
  },
  {
    name: "Petals to the Metal",
    hours: "10:00 a.m. - 6:00 p.m.",
    status: "Closed",
  },
  {
    name: "Scent-sational",
    hours: "9:00 a.m. - 9:00 p.m.",
    status: "Closed",
  },
];

const statusStyles = {
  "Open now": "bg-emerald-100 text-emerald-900",
  Closed: "bg-rose-100 text-rose-900",
};

export default function Pickup() {
  const [query, setQuery] = useState("");

  const filteredStores = useMemo(
    () =>
      stores.filter((store) =>
        store.name.toLowerCase().includes(query.toLowerCase()) ||
        store.distance.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  return (
    <div className="min-h-screen bg-[#ffff] px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-6xl rounded-2xl bg-white ">
        <div className="rounded-2xl bg-linear-to-r from-[#d8f7d9] via-[#8fc57e] to-[#1f5a3a] px-8 py-10 text-slate-950 sm:px-12 sm:py-14">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-black tracking-[-0.03em] sm:text-5xl">
                Pickup at a<br />
                store near you.
              </h1>
            </div>
    <br />
    <br />

            <div className="rounded-2xl" style={{display:"flex" , justifyContent:"space-between"}}>
              <div className="mt-4 flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm">
                
                <input
                  id="pickup-search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="32114"
                  style={{ width: 246, height: 44 }}
                  className="bg-transparent text-slate-900 outline-none placeholder:text-slate-400 text-sm sm:text-base"
                  
                />
                <button style={{backgroundColor:"#B4E0A0", width:"40px", height:"40px", display:"flex" ,alignItems:"center" , borderRadius:"10px", padding:"12x", paddingLeft:"10px" }}><img src={Search} alt="" /></button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="-mt-8 rounded-b-2xl bg-white px-4 pb-10 pt-8 sm:px-8 sm:pb-12 sm:pt-10">
          <div className="mx-auto max-w-5xl space-y-5">

            {filteredStores.map((store) => (
              <div key={store.name} className="rounded-2xl  gap-1.5" style={{display:"flex", flexDirection:"column", gap:"15px"}}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <br />
                    <div className="flex flex-wrap items-center gap-2">
<span className={` px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${statusStyles[store.status]}`}>
                        {store.status}
                      </span>
                      <span className="text-lg font-semibold text-slate-900">{store.name}</span>
                    </div>
                    <div className="mt-3 grid gap-1 text-sm text-slate-600 sm:grid-cols-2"
                    >
                      <p>Hours: {store.hours}</p>
                      <p>Distance: {store.distance}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="rounded-lg bg-[#1f5a3a] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#163f27]" style={{width:"149px", height:"43px"}}
                  >
                    Pickup Here
                  </button>
                </div>
                <hr />
              </div>
            ))}
          <br />
            <div className="flex justify-center">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg border border-[#1f5a3a] bg-white px-8 py-3 text-sm font-semibold text-[#1f5a3a] transition hover:bg-[#eff6ed]"
              >
                See More
                <span className="text-2xl"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
