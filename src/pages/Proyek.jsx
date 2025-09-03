import React, { useState } from "react";
import { EffectCard, ScrolImage } from "../component";
import { ChevronRight } from "lucide-react";
import { Project } from "../lib/data";
import {
  cisumdau,
  CKJT,
  CMLJ,
  CMNP,
  CMS,
  DCM,
  GI,
  HK,
  HKTS,
  JLB,
  JM,
  KKDM,
  LMS,
  MSJ,
  WASCO,
} from "../assets";

export const Proyek = () => {
  const images = [
    CMNP,
    HK,
    MSJ,
    HKTS,
    CKJT,
    GI,
    CMLJ,
    DCM,
    CMLJ,
    LMS,
    CMS,
    JLB,
    JM,
    KKDM,
    WASCO,
  ];
  const [show, setShow] = useState(false);
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      {/* HERO */}
      <section className="relative h-[100vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop className="object-cover w-full h-full">
            <source src={cisumdau} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <div className="animate-fade-in-up">
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Membangun negri tanpa henti dengan berkelanjutan
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-100 font-bold sm:text-xl">
              Membangun jalan tol berkualitas tinggi untuk mendukung pertumbuhan
              ekonomi dan konektivitas nasional
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyek" className="pt-10">
        <div className="container mx-auto px-4">
          <div className=" text-center">
            <h2 className="mb-4 text-xl font-bold sm:text-3xl">
              Proyek Unggulan
            </h2>
            <div
              className="mx-auto  w-32 bg-primary"
              style={{ height: "3px" }}
            ></div>
            <div
              className="mx-auto  w-32 bg-secondary"
              style={{ height: "4px" }}
            ></div>

            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Beberapa proyek jalan tol terkemuka yang telah kami kembangkan di
              seluruh Indonesia
            </p>
          </div>
          <div className="my-5">
            <EffectCard item={Project} />
            {show ? <EffectCard item={Project} /> : null}
            <div className="mt-8  w-full flex justify-center">
              <button
                onClick={() => setShow(!show)}
                size="lg"
                className="group flex justify-center items-center border py-1.5 px-6 rounded border-rose-700 cursor-pointer"
              >
                {show ? " Lihat Lebih Sedikit Proyek" : "Lihat Semua Proyek"}
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="mb-16 bg-white">
        <div className=" text-center my-5">
          <h2 className="mb-4 text-xl font-bold sm:text-3xl">Klien</h2>
          <div
            className="mx-auto  w-32 bg-primary"
            style={{ height: "3px" }}
          ></div>
          <div
            className="mx-auto  w-32 bg-secondary"
            style={{ height: "4px" }}
          ></div>
          <div className="mt-5 ">
            <ScrolImage images={images} />
          </div>
        </div>
      </div>
    </div>
  );
};
