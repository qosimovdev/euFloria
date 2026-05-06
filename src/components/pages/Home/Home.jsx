import React from "react";
import heroImg from "../../../assets/imgs/png/hero.png";
import fastShippingIcon from "../../../assets/imgs/png/fast-shipping.png";
import plantIcon from "../../../assets/imgs/png/gul.png";
import supportIcon from "../../../assets/imgs/png/phone.png";

export default function Home() {
  return (
    <div style={{gap:"10px"}} className="home-page min-h-screen px-6 py-10 text-slate-900 gap-1.5 bg-white ">
      <div className="mx-auto flex max-w-10xl flex-col gap-10 rounded-[50px] bg-linear-to-r from-[#c2e9b5] via-[#1f5a3a] to-[#1f5a3a] p-10 text-black shadow-[0_35px_80px_rgba(0,0,0,0.18)] lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-black">
            Buy your dream plants
          </p>
          <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Buy your
            <br />
            dream plants.
          </h1>
          <br />
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <div className="rounded-[28px]  ">
              <h2 className="text-4xl font-semibold">50+</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-black">
                Plant Species
              </p>
            </div>
            <div className="rounded-[28px] ">
              <h2 className="text-4xl font-semibold">1M+</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-black">
                Customers
              </p>
            </div>
          </div>
        </div>
         <br />
        <div className="relative flex items-center justify-center">
          <div className="absolute -left-8 top-8 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
          <div className="relative rounded-full ">
            <img src={heroImg} alt="Plant hero" className="h-90 w-120 object-contain" />
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-6xl rounded-[36px]  p-10 text-slate-900 ">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
            About us
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            About us
          </h2>
          <p className="mt-3 text-sm text-slate-500 sm:text-base">
            Life is short, buy the plants.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-[28px]  p-8 text-center ">
            <div className="mx-auto mb-6 flex h-20 w-65 items-center justify-center rounded-full ">
              <img src={fastShippingIcon} alt="Fast Shipping" className="h-16 w-16 object-contain" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Fast Shipping</h3>
            <p className="text-sm text-slate-500">
              4-day delivery time and an expedited delivery option.
            </p>
          </div>

          <div className="rounded-[28px]  p-8 text-center ">
            <div className="mx-auto mb-6 flex h-20 w-65 items-center justify-center rounded-full ">
              <img src={plantIcon} alt="Fern-tastic Selection" className="h-16 w-16 object-contain" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Fern-tastic Selection</h3>
            <p className="text-sm text-slate-500">
              Many different species and variations in each category.
            </p>
          </div>

          <div className="rounded-[28px]  p-8 text-center ">
            <div className="mx-auto mb-6 flex h-20 w-65 items-center justify-center rounded-full ">
              <img src={supportIcon} alt="24/5 Support" className="h-16 w-16 object-contain" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">24/5 Support</h3>
            <p className="text-sm text-slate-500">
              We can answer your plant related questions, kinda.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
