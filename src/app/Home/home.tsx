"use client";
import Image from "next/image";
import banner from "../../public/banner.jpeg";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const isScrolled = window.scrollY > 10;
    setScrolled(isScrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-screen min-h-screen">
      <div
        className={`sticky h-[5vh] top-0 flex items-center px-10 text-lg ${
          scrolled ? "bg-gray-700 text-white" : ""
        }`}
        style={{
          backgroundImage: `url(${banner.src})`,
          width: "100%",
          height: "100%",
        }}
      >
        Pasar Kebon Empring
      </div>
      <div className=" w-full h-[35vh] mx-auto flex items-center justify-center bg-cover text-white bg-[url('https://i.pinimg.com/736x/bb/6f/57/bb6f577ca1aa358539931299651bb71b.jpg')]">
        <h1 className="text-6xl font-normal w-[50%] h-fit text-center">
          Pasar Kebon Empring
        </h1>
      </div>

      <div className="md:px-[8rem] my-10 px-5 flex flex-col md:flex-row">
        <div className="md:w-[35%]">
          <Image src={"/pasarKiri.png"} alt="pasar" height={500} width={500} />
        </div>
        <div className="md:w-[65%] flex flex-col px-10">
          <h3 className="w-full text-blue-500 text-3xl pt-5 md:pt-0 md:text-5xl font-light pb-10 ">
            Wisata Sungai dengan pemandangan bambu yang menyejukkan
          </h3>
          <p className="text-xl font-light">
            Pasar Kebon Empring berada di dusun Bintaro wetan RT 05 desa
            Srimulyo kecamatan Piyungan kabupaten Bantuk di jalan Jogja Wonosari
            KM 12. Lokasi ini tepat berada di bantaran sungai Gawe
          </p>
        </div>
      </div>

      <div className="font-semibold text-xl text-center py-10 mt-5">
        Keunggulan Pasar Kebon Empring
      </div>

      <div className="grid md:grid-cols-3">
        <div className="flex flex-col px-5 text-center my-5">
          <Image src={"/media.png"} alt="media" height={500} width={500} />
          <h3 className="w-full text-blue-500 text-3xl pt-5 md:pt-0 md:text-3xl font-light my-5 ">
            Jembatan Warna
          </h3>
          <p className="text-lg font-light">
            Tempat wisata ini menghadirkan sensasi menjelajar melewati jembatan
            sepanjang 1 KM yang penuh dengan warna yang menarik.
          </p>
        </div>

        <div className="flex flex-col px-5 text-center my-5">
          <Image src={"/media2.png"} alt="media" height={500} width={500} />
          <h3 className="w-full text-blue-500 text-3xl pt-5 md:pt-0 md:text-3xl font-light my-5 ">
            Panorama Fotogenik
          </h3>
          <p className="text-lg font-light">
            Terdapat beberapa spot foto yang terbuat dari seni bambu,
            menghasilkan dokumentasi wisata yang instagrammable.
          </p>
        </div>

        <div className="flex flex-col px-5 text-center my-5">
          <Image src={"/media3.png"} alt="media" height={500} width={500} />
          <h3 className="w-full text-blue-500 text-3xl pt-5 md:pt-0 md:text-3xl font-light my-5 ">
            Kuliner Tradisional
          </h3>
          <p className="text-lg font-light">
            Tersedia makanan tradisional yang sehat seperti sego wader, sego
            wiwit, serabi kocor, dan dawet batok.
          </p>
        </div>
      </div>

      <div className="font-semibold text-xl text-center py-10">
        Liputan Media
      </div>

      <iframe
        width="auto"
        height="auto"
        src="https://www.youtube.com/embed/1cfZ9twAZmU"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="mx-auto w-[80%] h-[25vh] md:h-[80vh]"
      ></iframe>

      <div className="font-semibold text-xl text-center py-10">
        Lokasi Pasar Kebon Empring
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.55983948294!2d110.45500567531543!3d-7.836320492184844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a513fa770f185%3A0x3874fadb62779c9e!2sPASAR%20KEBON%20EMPRING%20BINTARAN!5e0!3m2!1sen!2sid!4v1703750924787!5m2!1sen!2sid"
        width="600"
        height="450"
        loading="lazy"
        className="w-[80%] h-[25vh] md:h-[80vh] mx-auto"
      ></iframe>
    </div>
  );
}
