import React from "react";
import {
  Users,
  RouteIcon as Road,
  Building,
  Award,
  UserCheck,
  ThumbsUp,
  CalendarCog,
  Puzzle,
  Target,
  Footprints,
  SignpostBig,
} from "lucide-react";
import {
  CountUp,
  FocusCard,
  Histories,
  Maps,
  RotatingText,
} from "../component";
import {
  hero,
  His1,
  His2,
  His3,
  ISO1,
  ISO2,
  ISO3,
  OHSAS,
  SMK3,
} from "../assets";

export const Home = () => {
  return (
    <div className="flex min-h-screen flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[100vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop className="object-cover w-full h-full">
            <source src={hero} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <div className="animate-fade-in-up">
            <h1 className="mb-4 text-2xl font-bold tracking-tight sm:text-5xl md:text-6xl ">
              Menghubungkan Indonesia Melalui{" "}
              <p className="flex justify-center mt-5 gap-5">
                Infrastruktur
                <RotatingText
                  texts={["Berkualitas", "Nyaman", "Aman", "Terjangkau"]}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-400 text-black overflow-hidden py-0.5 sm:py-1 md:py-2.5 justify-center rounded-lg  max-w-sm text-xl font-bold tracking-tight sm:text-5xl md:text-6xl "
                />
              </p>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-md text-gray-200 sm:text-xl">
              Membangun jalan tol berkualitas tinggi untuk mendukung pertumbuhan
              ekonomi dan konektivitas nasional
            </p>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="bg-primary p-5 md:p-8 text-white">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center">
            <Road className="mb-4 lg:h-10 lg:w-10 w-8 h-8" />
            <h3 className="mb-2 sm:text-2xl text-xl font-bold">
              <CountUp end={1500} suffix="+" />
            </h3>
            <p className="text-lg">Kilometer Jalan Tol</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Building className="mb-4 lg:h-10 lg:w-10 w-8 h-8" />
            <h3 className="mb-2 sm:text-2xl text-xl font-bold">
              <CountUp end={100} suffix="+" />
            </h3>
            <p className="text-lg">Proyek Selesai / Tahun</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users className="mb-4 lg:h-10 lg:w-10 w-8 h-8" />
            <h3 className="mb-2 sm:text-2xl text-xl font-bold">
              <CountUp end={2000} suffix="+" />
            </h3>
            <p className="text-lg">Karyawan</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <SignpostBig className="mb-4 lg:h-10 lg:w-10 w-8 h-8" />
            <h3 className="mb-2 sm:text-2xl text-xl font-bold">
              <CountUp end={35} suffix="" />
            </h3>
            <p className="text-lg">Ruas Jalan Tol</p>
          </div>
        </div>
      </section>
      <div className="z-0 w-full">
        <Maps />
      </div>
      {/* About Section */}
      <section id="tentang" className="md:my-10 my-5">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-xl font-bold sm:text-3xl">Tentang Kami</h2>
            <div
              className="  w-32 mx-auto bg-primary"
              style={{ height: "3px" }}
            ></div>
            <div
              className="  w-32 mx-auto bg-secondary"
              style={{ height: "4px" }}
            ></div>
          </div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="flex  justify-end relative">
              <p className="font-semibold absolute sm:-top-8 -top-10 end-1/2 text-lg md:text-2xl">
                Histori
              </p>
              <Histories images={[His1, His2, His3]} />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="mb-4 text-mdluc md:text-2xl font-bold text-primary">
                PT CITRA PERSADA INFRASTRUKTUR
              </h3>
              <p className="mb-6 text-gray-500">
                Didirikan pada 2002, PT. Citra Persada Infrastruktur ("CPI")
                adalah anak perusahaan PT Citra Marga Nusaphala Persada Tbk
                ("CMNP") yang bergerak di bidang operasi dan pemeliharaan
                infrastruktur, khususnya jalan tol. Kami berkomitmen untuk terus
                meningkatkan efisiensi dan responsivitas melalui sistem modern
                dan SDM unggul. Dengan layanan terintegrasi, CPI berkontribusi
                pada kemajuan infrastruktur nasional.
              </p>
              <div className="flex flex-col justify-start items-start">
                <p className=" text-gray-500 flex justify-center items-center">
                  <span className="text-sky-600 font-bold me-5">Visi</span>
                  <span>
                    Menjadi perusahaan berbasis teknologi yang terpercaya dan
                    berkelanjutan, melalui layanan operasional, pemelihara- an,
                    dan teknik pembangunan yang inovatif dan solutif
                  </span>
                </p>
                <p className="mb-8 flex justify-center items-center text-gray-500">
                  <span className="text-sky-600 font-bold me-5">Misi</span>
                  <div className="">
                    <p>
                      1. Menghadirkan layananbernilai tambah dengan standar mutu
                      tinggi{" "}
                    </p>
                    <p>
                      2. Mengadopsi inovasi teknologi untuk mendukung
                      transformasi operasional
                    </p>
                    <p>
                      3. Mengutamakan etika, sinergi tim, dan layanan prima
                      dalam setiap aspek kerja
                    </p>
                  </div>
                </p>
              </div>
              <p className="text-sky-600 font-bold"> Nilai Perusahaan</p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="flex items-center sm:space-x-3 space-x-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <UserCheck className="h-5 w-5" />
                  </div>
                  <span className="font-medium">Integritas</span>
                </div>
                <div className="flex items-center sm:space-x-3 space-x-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Award className="h-5 w-5" />
                  </div>
                  <span className="font-medium">Profesional</span>
                </div>
                <div className="flex items-center sm:space-x-3 space-x-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Puzzle className="h-5 w-5" />
                  </div>
                  <span className="font-medium">Kerjasama</span>
                </div>
                <div className="flex items-center sm:space-x-3 space-x-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CalendarCog className="h-5 w-5" />
                  </div>
                  <span className="font-medium">Efesien</span>
                </div>
                <div className="flex items-center sm:space-x-3 space-x-0 col-span-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <ThumbsUp className="h-5 w-5" />
                  </div>
                  <span className="font-medium">Layanan Unggul</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-xl font-bold sm:text-3xl">Sertifikasi</h2>
        <div
          className=" w-32 mx-auto bg-primary"
          style={{ height: "3px" }}
        ></div>
        <div
          className="  w-32 mx-auto bg-secondary"
          style={{ height: "4px" }}
        ></div>

        <div className="mt-5 md:mt-10">
          <FocusCard
            cards={[
              {
                title: "ISO 9001",
                src: ISO1,
              },
              {
                title: "ISO 140001",
                src: ISO2,
              },
              {
                title: "ISO 45001",
                src: ISO3,
              },
              {
                title: "SMK3",
                src: SMK3,
              },
              {
                title: "OHSAS",
                src: OHSAS,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
