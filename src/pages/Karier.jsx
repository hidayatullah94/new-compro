import React from "react";
import { loker } from "../assets";
import { TextWrite } from "../component/TextWrite";
import { SpotlightCard } from "../component/SpotlightCard";

export const Karier = () => {
  return (
    <SpotlightCard className="w-full h-full">
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-col justify-center items-center">
          <img src={loker} alt="" className="sm:h-[70vh] w-full" />
        </div>
        <TextWrite
          words={[
            {
              text: "Maaf",
            },
            {
              text: "Lowongan",
            },
            {
              text: "Pekerjaan",
            },
            {
              text: "Belum",
            },
            {
              text: "Tersedia !!",
            },
          ]}
        />
      </main>
    </SpotlightCard>
  );
};
