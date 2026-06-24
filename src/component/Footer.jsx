import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

import { ClipText } from "./ClipText";
import {

  P1,
  P10,
  P2,
  P3,
  P5,
  P6,
  P8,
  P9,
  W10,
  W2,
  W3,
  W4,
  W5,
  W6,
  W7,
  W8,
  W9,
  P4,
  logoW,
} from "../assets";

const images1 = [P1, P2, P3, P8, P4, W3, W2, W4];
const images2 = [P5, P6, P10, P5, P9, W5, W6, W7, W8, W9, W10];
const Footer = () => {
  return (
    <footer className="">
      <div className="flex justify-center items-center my-5 flex-wrap  gap-5 ">
        <ClipText texts={"terus BERTUMBUH"} images={images1} />
        <ClipText texts={"untuk MAJU"} images={images2} />
      </div>
      <div className="bg-primary text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 ">
            <div>
              <Link to="/" className="mb-4 flex items-center space-x-2">
                <img src={logoW} alt="" className="w-full h-12 sm:h-14 max-w-sm" />
              
              </Link>
              <p className="mb-6 text-gray-300">
                Membangun infrastruktur jalan tol berkualitas untuk
                menghubungkan Indonesia dan mendukung pertumbuhan ekonomi
                nasional.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100078506880276"
                  className="text-gray-300 transition-colors hover:text-white cursor-pointer"
                  target="_blank"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="https://x.com/i/flow/login?redirect_after_login=%2Fofficial_ptcpi"
                  target="_blank"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="https://www.instagram.com/official_cpi/"
                  target="_blank"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/pt-citra-persada-infrastruktur/posts/?feedView=all"
                  target="_blank"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="https://www.youtube.com/@ptcitrapersadainfrastruktu2383/featured"
                  target="_blank"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </a>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <h3 className="mb-6 text-lg font-bold">Tautan Cepat</h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="/"
                      className="text-gray-300 transition-colors hover:text-white "
                    >
                      Beranda
                    </a>
                  </li>

                  <li>
                    <a
                      href="/servis"
                      className="text-gray-300 transition-colors hover:text-white "
                    >
                      Layanan
                    </a>
                  </li>
                  <li>
                    <a
                      href="/proyek"
                      className="text-gray-300 transition-colors hover:text-white "
                    >
                      Proyek
                    </a>
                  </li>
                  <li>
                    <a
                      href="/kontak"
                      className="text-gray-300 transition-colors hover:text-white "
                    >
                      Hubungi Kami
                    </a>
                  </li>
                  <li>
                    <a
                      href="/karir"
                      className="text-gray-300 transition-colors hover:text-white "
                    >
                      Karir
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-6 text-lg font-bold">Layanan</h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="/servis"
                      className="text-gray-300 transition-colors hover:text-white "
                    >
                      Operasi & Pemeliharaan TOL
                    </a>
                  </li>
                  <li>
                    <a
                      href="/servis"
                      className="text-gray-300 transition-colors hover:text-white "
                    >
                      Konsultasi Teknis
                    </a>
                  </li>
                  <li>
                    <a
                      href="/servis"
                      className="text-gray-300 transition-colors hover:text-white "
                    >
                      Pengembangan Software dan Hardware
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-100 pt-8">
            <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0">
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Citra Persada Infrasruktur.
                Hak Cipta Dilindungi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
