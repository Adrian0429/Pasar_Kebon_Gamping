"use client";
import React from "react";
import img from "../../public/pasar.jpeg";
import bamboo from "../../public/bamboo.jpeg";
import foods from "../../public/Makanan.jpeg";
import rotan from "../../public/Rotan.jpeg";
import bg1 from "../../public/bgpresent.jpeg";
import { motion } from "framer-motion";
import Image from "next/image";
import Carousel from "./components/Carousel";
const text = [
  {
    judul: "Pelatihan Kreasi Bambu (Kerajinan Tangan)",
    img: "/content1.jpeg",
    time: "dilaksanakan pada 23 Desember 2023",
    konten:
      "Pelatihan kreasi bambu ini merupakan pelatihan kelompok masyarakat Padukuhan Bintaran Wetan guna meningkatkan hard-skill dalam memanfaatkan tumbuhan bambu. Pelatihan ini tidak hanya bertujuan untuk memberikan keterampilan teknis dalam mengolah bambu, tetapi juga untuk menginspirasi peserta agar dapat mengekspresikan diri mereka melalui karya-karya yang unik, sehingga dari bahan yang mungkin bernilai rendah dapat menjadi barang dengan nilai jual tinggi. Peserta akan diajak memahami berbagai teknik dasar dalam mengolah bambu, mulai dari pemotongan, perakitan, hingga finishing. Selain itu, pelatihan ini akan memberikan wadah bagi para peserta untuk berkolaborasi dan berbagi ide, menciptakan lingkungan yang kreatif dan mendukung pertumbuhan Padukuhan Bintaran Wetan. Melalui pelatihan ini, diharapkan peserta tidak hanya menjadi mahir dalam mengolah kerajinan bambu, tetapi juga mampu mengaplikasikan imajinasi mereka untuk menciptakan produk-produk kerajinan tangan yang mampu beradaptasi dengan era modern saat ini. Setiap hasil karya yang dihasilkan tidak hanya mencerminkan keontentikan dan kearifan lokal, tetapi juga menjadi bukti nyata dari potensi kreatif bernilai jual tinggi yang dapat dihasilkan dari bahan alam yang sederhana seperti bambu.",
  },
  {
    judul: "Pelatihan Olahan Rebung (Inovasi Kuliner)",
    img: "/content2.jpeg",
    time: "dilaksanakan pada 23 Desember 2023",
    konten:
      "Pelatihan olahan rebung menjadi salah satu upaya yang dapat digunakan dalam menyaingi makanan modern saat ini, makanan cepat saji misalnya. Tentu bukan itu tujuan utama dari pelatihan ini, di mana pelatihan ini diberikan guna menyalurkan ide kepada kelompok masyarakat untuk dapat mengembangkan potensi kuliner otentik di Padukuhan Bintaran Wetan. Peserta akan dibimbing dalam proses pengolahan juga inovasi dalam menyajikan hidangan olahan rebung. Melalui kolaborasi dan pertukaran ide, diharapkan peserta dapat membuat hidangan-hidangan yang tidak hanya lezat tetapi juga memiliki kesan otentik yang mencerminkan ciri khas wilayah.   Dengan mengikuti pelatihan olahan rebung ini, peserta diharapkan mendapatkan ide inovasi olahan rebung yang baru dan tentunya menarik, serta mampu mengembangkan keterampilan yang dapat meningkatkan daya tarik kuliner di Padukuhan Bintaran Wetan. ",
  },
  {
    judul: "Pelatihan Digital Marketing",
    img: "/content3.jpeg",
    time: "dilaksanakan pada 18 November 2023",
    konten:
      "Pelatihan pemasaran secara digital menjadi salah satu upaya untuk meningkatkan perekonomian dan akses penjualan hasil karya olahan bambu menjadi lebih luas. Kelompok masyarakat diberikan pelatihan untuk dapat mengakses / menggunakan media sosial secara bijak sebagai media pemasaran maupun promosi.   Pemanfaatan seperti media sosial Facebook, Instragram, dan bahkan Tiktok sebagai media pemasaran dan juga promosi hasil olahan khas Padukuhan Bintaran Wetan. Era kaum milenial seperti saat ini pastinya akan sangat mudah untuk mencapai target pemasaran, semisal anda punya teman maupun kerabat yang sangat aktif di media sosial, maka kita dapat mencoba untuk mempromosikannya terlebih dahulu kepada mereka. Tidak hanya itu, dengan adanya website ini juga diharapkan menjadi media informasi yang lebih luas dan informatif. Hampir 70% dari 26 peserta yang hadir dalam acara pelatihan ini sudah memiliki akun media sosial sendiri, namun banyak dari mereka yang masih belum dapat memanfaatkan akun media sosial mereka dengan bijak dalam hal pemasaran maupun promosi hasil olahan mereka. Oleh karena itu, dengan adanya pelatihan ini selain untuk memberikan ilmu Digital Marketring namun juga untuk mengajak kepada mereka yang belum memiliki akun media sosial khususnya sebagai media pemasaran.",
  },
  {
    judul: "Pelatihan Mitigasi Bencana",
    img: "/content4.jpeg",
    time: "dilaksanakan pada 18 November 2023",
    konten:
      "Bencana menjadi hal yang tidak dapat diprediksi dan terkadang bencana itu sendiri tidak dapat dihindari. Oleh karena itu, pelatihan mitigasi bencana menjadi salah satu upaya peningkatan kapasitas masyarakat dalam menghadapi bencana.  Banjir menjadi bencana utama di Padukuan Bintaran Wetan ini, khusunya daerah pinggiran sungai. Yang mana letak dari lokasi - lokasi pariwisata sangat dekat dengan badan sungai, bahkan ada beberapa lokasi wisata yang memang menyajikan wisata bermain air di aliran sungai-nya.  Wilayah Padukuhan Bintaran Wetan memiliki tingkat potensi terdampak banjir yang lumayan (sedang) terutama di lokasi - lokasi wisata yang memang sangat dekat dengan badan sungai. Informasi tersebut diperoleh berdasarkan hasil penelitian dalam menentukan wilayah berpotensi banjir, dengan menggunakan metode skoring dan pembobotan. Namun, dari hasil penelitian saja tidaklah dapat membuktikan tingkat risiko yang akurat karena bencana apapun itu dapat terjadi diluar perhitungan manusia.  Dengan adanya pelatihan mitigasi bencana banjir ini, diharapkan pengurus tempat wisata dan khususnya masyarakat setempat dapat memiliki pemahaman lebih dalam menghadapi bencana banjir yang sewaktu - waktu dapat terjadi.",
  },
  {
    judul: "Penyuluhan Pariwisata Berkelanjutan",
    img: "/bgpresent.jpeg",
    time: "dilaksanakan pada 18 November 2023",
    konten:
      "Spot wisata tidak hanya dibangun dan viralkan saja, namun perlu adanya pemberdayaan yang berkelanjutan. Terkadang tempat wisata akan sangat ramai dikunjungi para wisatawan disaat sedang naik pamor atau bahasa kekiniannya viral. Dari hal tersebut tidak menjamin bahwa tempat wisata tersebut akan selalu ramai pengunjung maupun tetap viral, semua pasti akan ter-update dengan hal - hal yang lebih baru. Oleh karena itu, penyuluhaan pariwisata berkelanjutan diberikan kepada kelompok masyarakat untuk dapat membangun dan merencanakan bersama tentang masa depan desa wisata yang tidak terpengaruh oleh waktu. Artinya tempat wisata yang ada tidak hanya ramai wisatawan disaat sedang viral saja, namun juga tetap eksis dan mampu memberikan hal - hal baru di setiap perubahan yang ada.  Dalam penyuluhan ini, ada beberapa hal yang diberikan dan diajarkan agar dapat membangun tempat wisata yang selalu mengikuti perkembangan zaman. Akulturasi antara budaya tradional dengan hal - hal baru yang lebih modern menjadi salah satu upaya yang dapat diterapkan pada tempat - tempat pariwisata yang ada. Pemberdayaan sosial seperti pemahaman umum masyarakat terhadap perbedaan budaya lokal dan luar juga menjadi kunci dalam program pariwisata berjelanjutan ini. Dengan pengetahuan masyarakat yang lebih terbuka namun selektif, dapat mendorong peningkatan desa pariwisata yang lebih baik dan berkelanjutan tentunya. Implementasi pariwisata berkelanjutan di desa wisata membutuhkan kerjasama antara pemerintah, masyarakat lokal, dan pelaku industri pariwisata. Dengan pendekatan yang holistik dan berkelanjutan, desa wisata dapat menjadi contoh sukses bagi pariwisata yang memberikan manfaat ekonomi dan sosial tanpa merusak  lingkungan dan budaya lokal Ujar Bapak Agus Jati Kumara dari FORKOM Desa Wisata Bantul.",
  },
];

const image = [
  {
    img: "/3d1.jpeg",
    judul: "Museum Bambu",
    konten:
      "Museum Bambu ini benar-benar istimewa adalah konsepnya yang terus berjalan. Seiring dengan langkah pengunjung, lantai di bawah mereka menyala dengan lampu yang melambangkan pertumbuhan bambu. Ini memberikan nuansa magis yang membuat perjalanan di museum ini tidak hanya pendidikan tetapi juga menyenangkan. Pameran yang menampilkan berbagai jenis bambu dari seluruh dunia. Dari bambu hitam yang kokoh hingga bambu kuning yang ringan, setiap varietas memiliki cerita uniknya sendiri. Informasi yang ditempatkan dengan cerdas di sepanjang rute menjelaskan asal-usul, sifat, dan kegunaan masing-masing jenis bambu. Museum Bambu ini tidak hanya bertujuan untuk menyampaikan pengetahuan, tetapi juga menginspirasi pengunjung untuk lebih memahami dan menghargai kekayaan alam yang terkandung dalam tanaman serba guna ini. Dengan konsep terus berjalan, museum ini menciptakan pengalaman yang mendalam dan tak terlupakan, merangkul pesan keberlanjutan dan keindahan alam melalui keajaiban bambu.",
  },
  {
    img: "/3d2.jpeg",
    judul: "Resto Bambu",
    konten:
      "Resto unik yang mengusung desain berbasis bambu. Dengan model panggung yang dapat mengntisipasi dari bahaya banjir dengan sentuhan daya tarik material alami, interior resto ini didominasi oleh nuansa hangat dan ramah, menciptakan atmosfer yang cocok untuk bersantap santai. Dinding-dinding bambu yang elegan memberikan sentuhan alam yang segar, sementara furnitur yang terbuat dari bambu memberikan kenyamanan ekstra. Ornamen angklung bambu mempercantik setiap sudut ruangan, menggambarkan keindahan seni tradisional lokal.",
  },
  {
    img: "/3d3.jpeg",
    judul: "Studio Bambu",
    konten:
      "Ruang utama studio terbuka, dikelilingi oleh pohon-pohon bambu yang menjulang tinggi dan menyatu dengan langit biru. Cahaya matahari menyusup di antara rimbunnya daun bambu, menciptakan bayangan yang indah di atas tanah yang ditutupi oleh lumut dan rerumputan hijau. Pemandangan paling menakjubkan terletak di pusat studio ini: sebuah area bambu yang melengkung membentuk struktur yang menyerupai goa alami. Bambu-bambu yang lentur dan elegan menyatu membentuk langit-langit yang indah, menciptakan ruang yang ajaib dan memukau. Di dalam goa bambu ini, cahaya matahari masuk melalui celah-celah bambu, menciptakan efek cahaya yang memainkan bayangan indah di sepanjang dinding alami. Setiap sudut studio alam ini dirancang dengan cermat untuk menciptakan spot foto yang menawan. Ada tempat-tempat di mana sinar matahari menembus daun bambu dengan sempurna, menciptakan kontras yang menakjubkan antara cahaya dan bayangan. Di sisi lain, terdapat spot di mana goa bambu menciptakan latar belakang yang menakjubkan untuk potret-potret artistik.",
  },
  {
    img: "/3d4.jpeg",
    judul: "Peternakan",
    konten:
      "Peternakan ini memiliki fasilitas pengolahan limbah yang canggih, dimulai dari sistem pemisahan kotoran hewan secara efisien. Kotoran tersebut dikumpulkan dan dialirkan ke unit pengolahan khusus, di mana dimulai proses transformasi yang menakjubkan. Para ahli agronomi dan teknisi lingkungan bekerja sama untuk menciptakan kondisi optimal bagi dekomposisi bahan organik. Dalam fasilitas tersebut, kotoran hewan dicampur dengan bahan tambahan organik seperti sisa-sisa tanaman dan bahan hijau lainnya. Proses perombakan limbah ini terjadi di dalam komposter yang dikendalikan dengan cermat untuk memastikan suhu, kelembaban, dan sirkulasi udara yang ideal. Hal ini memungkinkan mikroorganisme baik untuk berkembang biak dengan optimal, merubah kotoran menjadi pupuk kompos berkualitas tinggi. Hasil akhir dari proses ini adalah pupuk kompos yang kaya akan nutrisi dan mikroorganisme berguna. Selain manfaat agronomis, pendekatan ramah lingkungan ini juga menciptakan lingkungan peternakan yang lebih sehat. Dengan mengelola kotoran hewan secara efisien, peternakan ini telah mengurangi dampak negatifnya terhadap air tanah dan udara, menciptakan model berkelanjutan yang dapat diadopsi oleh peternakan lain di seluruh wilayah.",
  },
];

const page = () => {
  return (
    <main className="">
      <header className="px-5 h-[6vh] flex items-center top-0 sticky z-50 bg-darkBeige">
        Pasar Kebon Empring
      </header>
      <div
        className="hscreen bg-cover w-full flex justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${img.src})`,
        }}
      >
        <div className="text-center w-[60%] text-white bg-slate-600/20 rounded-md p-5">
          <h1 className="text-6xl font-bold my-5">Pasar Kebon Empring</h1>

          <p className="text-xl font-medium">
            Pasar Kebon Empring berada di dusun Bintaro wetan RT 05 desa
            Srimulyo kecamatan Piyungan kabupaten Bantuk di jalan Jogja Wonosari
            KM 12. Lokasi ini tepat berada di bantaran sungai Gawe
          </p>
        </div>
      </div>

      <div className="hscreen flex items-center bg-section1">
        <div className="w-[90%] md:w-[60%] mx-auto text-center">
          <h1 className="text-3xl font-bold my-5">Tentang</h1>
          <p className="text-lg font-normal">
            Bintaran Wetan merupakan salah satu padukuhan yang ada di Kalurahan
            (Desa) Srimulyo Kapanewon Piyungan, Kabupaten Bantul, Yogyakarta.
            Merupakan desa wisata dengan potensi alam berupa hutan bambu (pring)
            yang menjadi ikon utama-nya. Tempat wisata yang cukup terkenal
            adalah &quot;Pasar Kebon Empring&quot;, di mana menjadi spot
            bermain, bersantai, maupun tujuan liburan keluarga.
          </p>

          <h1 className="text-3xl font-bold mt-[10rem]">Program</h1>
          <h3 className="text-lg font-medium mt-[2rem]">
            Pengembangan Potensi Wilayah
          </h3>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.25 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="hscreen flex md:justify-start px-5 md:px-20 items-center bg-center bg-cover"
        style={{
          backgroundImage: `url(${bamboo.src})`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          transition={{ duration: 1.5, delay: 0.25 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -150 }}
          className="md:w-[35%] flex flex-col justify-center px-10 bg-section1/90 rounded-md py-3"
        >
          <h2 className="text-[#C07F00] text-xl md:text-2xl font-bold my-5">
            Pengembangan Potensi Wilayah
          </h2>

          <p className="text-sm md:text-md font-normal my-5">
            Bintaran Wetan menyajikan banyak sekali spot wisata / rekreasi salah
            satunya adalah &quot;Pasar Kebon Empring&quot;. Tidak hanya itu,
            potensi wisata lain seperti Situs Payak dan Taman Nggirli juga layak
            dikunjungi. Terdapat beberapa titik lokasi yang saat ini sedang
            ditujukan untuk menjadi spot wisata dan rekreasi, sebagai salah satu
            langkah nyata mewujudkan desa pariwisata berkelanjutan.
          </p>

          <p className="text-sm md:text-md font-normal my-5">
            Pengembangan kuliner berbahan dasar tunas bambu muda (Rebung)
            menjadi salah satu inovasi yang dapat dijadikan ikon ataupun kuliner
            otentik. Tema yang selaras dengan kondisi alam yang ada, yaitu
            bambu. Sehingga akan menambah ciri khas saat mengunjungi berbagai
            spot wisata / rekreasi di Bintaran Wetan.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -150 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -150 }}
        className="hscreen flex justify-center items-center bg-lightBeige/30"
      >
        <div className="md:h-[75%] w-[85%] flex flex-col md:flex-row ">
          <motion.div
            initial={{ opacity: 0, y: -150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            exit={{ opacity: 0, y: -150 }}
            className="flex flex-col justify-center px-10 my-10"
          >
            <h2 className="text-[#C07F00] text-2xl font-bold my-5">
              Pengembangan Potensi Budaya
            </h2>
            <p className="text-lg font-normal">
              Kerajinan tangan berbahan dasar bambu menjadi salah satu potensi
              untuk meningkatkan kualitas desa wisata di Bintaran Wetan. Produk
              yang akan dijual memiliki kualitas dan keunikan tersendiri,
              sehingga dapat meningkatkan daya jual.
            </p>
          </motion.div>
          <Image
            src={rotan}
            alt="rotan"
            height={500}
            width={500}
            className="w-auto h-auto"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="hscreen flex md:justify-end px-5 md:px-20 items-center bg-center bg-cover"
        style={{
          backgroundImage: `url(${foods.src})`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="md:w-[35%] flex flex-col justify-center px-10 bg-section1/90 rounded-md py-3"
        >
          <h2 className="text-[#C07F00] text-2xl font-bold my-5">
            Pengembangan Potensi Kuliner
          </h2>

          <p className="text-md font-normal my-5">
            Saat ini kuliner yang ditawarkan khususnya di &quot;Pasar Kebon
            Empring&quot; memanglah sangat beragam, namun belum memiliki ciri
            khas yang dapat dijadikan kesan tersendiri saat berada di lokasi.
          </p>

          <p className="text-md font-normal my-5">
            Pengembangan kuliner berbahan dasar tunas bambu muda (Rebung)
            menjadi salah satu inovasi yang dapat dijadikan ikon ataupun kuliner
            otentik. Tema yang selaras dengan kondisi alam yang ada, yaitu
            bambu. Sehingga akan menambah ciri khas saat mengunjungi berbagai
            spot wisata / rekreasi di Bintaran Wetan.
          </p>
        </motion.div>
      </motion.div>

      <div className="h-[20vh] items-center bg-section1 w-full flex justify-center">
        <h1 className="text-3xl md:text-5xl text-center">
          Pelatihan Kelompok Masyarakat
        </h1>
      </div>

      {text.map((item, index) => (
        <div key={index} className="w-[90%] mx-auto my-[2rem]">
          <h1 className="text-xl md:text-3xl py-5">{item.judul}</h1>
          <Image
            src={item.img}
            alt="content"
            height={600}
            width={600}
            className="w-full h-[75%] bg-cover"
          />
          <p className="hidden md:block text-center text-xs py-2">
            {item.time}
          </p>
          <p className="text-sm md:text-lg py-5 text-justify">{item.konten}</p>
        </div>
      ))}

      <div className="w-[90%] md:w-[80%] mx-auto h-fit">
        <Carousel />
      </div>

      <div className="w-[90%] mx-auto grid md:grid-cols-2 gap-y-4 gap-x-10 mt-10">
        {image.map((item, index) => (
          <div key={item.img} className="flex flex-col">
            <Image src={item.img} alt="img" height={720} width={1280} />
            <p className="text-sm md:text-lg py-5 text-justify p-3 md:p-10">
              {item.konten}
            </p>
          </div>
        ))}
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

      <footer>
        <div className="font-semibold text-xl text-center py-10">
          Liputan Media
        </div>

        <iframe
          width="auto"
          height="auto"
          src="https://www.youtube.com/embed/nINhtW3oU9o?si=nIsBPohBoMvOLmuW&amp;controls=0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="mx-auto w-[80%] h-[25vh] md:h-[75vh]"
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
      </footer>
    </main>
  );
};

export default page;
