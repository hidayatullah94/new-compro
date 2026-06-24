import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
//url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
export const Maps = () => {
  const data = [
    {
      id: 1,
      nama: "Banda Aceh",
      posisi: [4.695135, 96.7493993],
    },
    {
      id: 2,
      nama: "Pekanbaru",
      posisi: [-3.3194374, 103.914399],
    },
    {
      id: 3,
      nama: "Kemayoran Jakarta",
      posisi: [-6.2088, 106.8456],
    },
    {
      id: 4,
      nama: "Sunter Jakarta",
      posisi: [-6.138415, 106.863956],
    },
    {
      id: 5,
      nama: "Depok Antasari",
      posisi: [-6.39, 106.83],
    },
    {
      id: 7,
      nama: "Bogor",
      posisi: [-6.6, 106.8],
    },
    {
      id: 8,
      nama: "Sumedang",
      posisi: [-6.8048, 108.1139],
    },
    {
      id: 9,
      nama: "Bandung",
      posisi: [-6.914744, 107.60981],
    },
    {
      id: 10,
      nama: "Surabaya",
      posisi: [
        -7.250445,

        112.768845,
      ],
    },
  ];

  const [visibleMarkers, setVisibleMarkers] = useState([]);
  const [isBlinking, setIsBlinking] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  // Menunggu 3 detik sebelum mulai menampilkan marker
  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsStarted(true);
    }, 3000); // Tunggu 3 detik sebelum mulai

    return () => clearTimeout(startTimeout);
  }, []);

  // Menampilkan marker satu per satu setiap 1.5 detik setelah 3 detik awal
  useEffect(() => {
    if (!isStarted) return; // Jangan mulai jika belum waktunya

    data.forEach((_, i) => {
      setTimeout(() => {
        setVisibleMarkers((prev) => [...prev, i]);
      }, i * 1500);
    });
  }, [isStarted]);

  // Efek berkedip setiap 500ms
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  // Fungsi membuat ikon berwarna
  const createIcon = (color) =>
    new L.Icon({
      iconUrl: `data:image/svg+xml;base64,${btoa(`
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
          <path fill="${color}" d="M12 2C8.1 2 5 5.1 5 9c0 4.4 6 12 7 12s7-7.6 7-12c0-3.9-3.1-7-7-7m0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5"/>
        </svg>
      `)}`,
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30],
    });

  const blinkingIcon = createIcon("#e0070a"); // Berkedip merah
  const defaultIcon = createIcon("#0761e0"); // Default biru

  return (
    <MapContainer
      center={[-2.5489, 118.0149]}
      zoom={5}
      className="w-full h-96 md:h-[500px] "
      preferCanvas={true}
      zoomControl={false}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png" />
      {data.map(
        (e, idx) =>
          visibleMarkers.includes(idx) && (
            <Marker
              key={e.id}
              position={e.posisi}
              icon={isBlinking ? blinkingIcon : defaultIcon}
            >
              <Popup>{e.nama}</Popup>
            </Marker>
          ),
      )}
    </MapContainer>
  );
};
