import React from "react";
import { Phone, Mail, Building2, Map } from "lucide-react";
import { FormKontak } from "../component";
import { Patrn } from "../assets";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export const Kontak = () => {
  //send
  const Submit = (data) => {
    confirmAlert({
      title: "Kirim Pesan ",
      message: "Yakin ingin submit data?",
      buttons: [
        {
          label: "Ya",
          onClick: () =>
            axios
              .post(`https://ess.app-citrapersada.net/kontak-compro`, data)
              .then((res) => {
                if (res.status === 201) {
                  toast.success("Pesan berhasil dikirim !!");
                  setTimeout(() => {
                    window.location.reload();
                  }, 1000);
                }
              })
              .catch((err) => {
                if (err.status === 500) {
                  toast.error("Internal server error !!");
                }
              }),
        },
        {
          label: "Batal",
          onClick: () => console.log(""),
        },
      ],
    });
  };
  return (
    <div className="bg-slate-50">
      <Toaster />
      {/* Contact Section */}
      <section id="kontak" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div
            className="mb-16 text-center"
            // style={{
            //   backgroundImage: `url(${Patern2})`,
            // }}
          >
            <h2 className="mb-4 text-xl font-bold sm:text-3xl">Hubungi Kami</h2>
            <div
              className="mx-auto  w-32 bg-primary"
              style={{ height: "3px" }}
            ></div>
            <div
              className="mx-auto  w-32 bg-secondary"
              style={{ height: "4px" }}
            ></div>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan
              atau ingin bekerja sama
            </p>
          </div>
          <div className="relative isolate bg-white  rounded shadow py-5 sm:py-16">
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-y-8">
              <div className="relative px-6  pt-10  lg:static lg:px-8 ">
                <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                  <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-white  lg:w-1/2">
                    <img
                      src={Patrn}
                      alt=""
                      className="absolute inset-0 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    />
                  </div>
                  <h2 className="text-pretty text-xl font-semibold tracking-tight text-gray-700 sm:text-2xl">
                    Informasi Kontak
                  </h2>
                  <p className="mt-6 text-lg/8 text-gray-600">
                    Jika Anda memiliki pertanyaan seputar produk atau bisnis
                    dengan Kami, silakan isi form ini. Kami dengan senang hati
                    untuk berdiskusi membantu Anda.
                  </p>
                  <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Address</span>
                        <Building2
                          aria-hidden="true"
                          className="h-7 w-6 text-gray-400"
                        />
                      </dt>
                      <dd>
                        Jl. Angkasa No.20, RT.12/RW.2, Gn. Sahari Sel., Kec.
                        Kemayoran, Kota Jakarta Pusat, Daerah Khusus Ibukota
                        Jakarta 10610
                      </dd>
                    </div>
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Map</span>
                        <Map
                          aria-hidden="true"
                          className="h-7 w-6 text-rose-400"
                        />
                      </dt>
                      <dd>
                        <a
                          target="_blank"
                          href="https://maps.app.goo.gl/gcaeHWL99EsZBRHb6"
                          className="hover:text-sky-700 text-rose-400 font-bold "
                        >
                          Navigasi
                        </a>
                      </dd>
                    </div>
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Telephone</span>
                        <Phone
                          aria-hidden="true"
                          className="h-7 w-6 text-gray-400"
                        />
                      </dt>
                      <dd>
                        <p className="hover:text-gray-900">(021) 4213333</p>
                      </dd>
                    </div>
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Email</span>
                        <Mail
                          aria-hidden="true"
                          className="h-7 w-6 text-gray-400"
                        />
                      </dt>
                      <dd>
                        <a
                          href="mailto:info@citrapersada.net"
                          className="hover:text-gray-900"
                        >
                          info@citrapersada.net
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <FormKontak Submits={Submit} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
