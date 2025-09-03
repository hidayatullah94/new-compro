import React from "react";
import { HoverCard } from "../component";
import { Layanan } from "../lib/data";
import { Building2, Cpu, TrafficCone } from "lucide-react";
import { servis } from "../assets";

export const Servis = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 ">
      {/* hero */}
      <section className="relative h-[100vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0 ">
          <img
            src={servis}
            alt="Jalan Tol"
            className="h-full w-full  brightness-[0.40]  object-cover object-[30%_60%] "
          />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <div className="animate-fade-in-up">
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Memberi solusi melalui teknologi dan inovasi
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-200 sm:text-xl">
              Membangun jalan tol berkualitas tinggi untuk mendukung pertumbuhan
              ekonomi dan konektivitas nasional
            </p>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="servis" className="bg-gray-100 pt-10">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-xl font-bold sm:text-3xl">Layanan Kami</h2>
            <div
              className="mx-auto  w-32 bg-primary"
              style={{ height: "3px" }}
            ></div>
            <div
              className="mx-auto  w-32 bg-secondary"
              style={{ height: "4px" }}
            ></div>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Kami menyediakan berbagai layanan dalam pengembangan dan
              pengelolaan infrastruktur jalan tol
            </p>
          </div>
          <div className=" bg-white  p-2 md:p-8 flex flex-col gap-5 rounded shadow ">
            <div className="">
              <h3 className="text-xl font-bold  ps-2 mb-5 flex">
                Teknologi Informasi <Cpu className="text-rose-700 ms-2" />
              </h3>
              <HoverCard items={Layanan} />
            </div>
            <div className="">
              <h3 className="text-xl font-bold  ps-2 mb-5 flex">
                Layanan Jalan TOL <TrafficCone className="text-rose-700 ms-2" />
              </h3>
              <HoverCard items={Layanan} />
            </div>
            <div className="">
              <h3 className="text-xl font-bold  ps-2 mb-5 flex">
                Teknik <Building2 className="text-rose-700 ms-2" />
              </h3>
              <HoverCard items={Layanan} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
