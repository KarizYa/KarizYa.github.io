import type { Tone } from "../lib/tone";

export interface Social { id: "linkedin" | "github"; label: string; href: string }
export interface ResumeItem {
  period: string;
  title?: string;
  place?: string;
  slug?: string;
  role?: string;
  company?: string;
  location?: string;
  points?: string[];
}
export interface Service { id: "web" | "app" | "data" | "leadership"; title: string; text: string; tone: Tone }
export interface Work { id: string; category: string; tags: readonly WorkTag[]; title: string; tone: Tone; image?: string; href?: string; description?: string; stack?: readonly string[]; gallery?: readonly string[] }
export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location?: string;
  points: string[];
}
export interface ExperienceDetailItem {
  slug: string;
  role: string;
  company: string;
  department?: string;
  period: string;
  location: string;
  summary: string;
  about: string;
  responsibilities: string[];
  technologies: string[];
  gallery: { src?: string; alt: string }[];
  demoHref?: string;
  githubHref?: string;
  result: string;
  learnings: string;
}
export interface TrainingItem {
  title: string;
  organizer: string;
  program: string;
  period: string;
  description: string;
  slug?: string;
}
export interface TrainingModule {
  name: string;
  description: string;
  tools: string[];
  outcome: string;
}
export interface TrainingProject {
  name: string;
  background: string;
  goal: string;
  solution: string;
  features: string[];
  role: string;
  technologies: string[];
  result: string;
  repoHref?: string;
  demoHref?: string;
}
export interface TrainingDetailItem {
  slug: string;
  title: string;
  organizer: string;
  program: string;
  period: string;
  field: string;
  focusTechnology: string;
  overview: string;
  learningObjectives: string;
  competencyFocus: string[];
  modules: TrainingModule[];
  projects: TrainingProject[];
  gallery: { src?: string; alt: string }[];
  certificate?: {
    title: string;
    organizer: string;
    period: string;
    href?: string;
    image?: string;
  } | null;
}
export interface SkillGroup {
  title: string;
  skills: string[];
}
export interface OrganizationItem {
  title: string;
  role: string;
  period: string;
  description?: string;
}
export interface ProjectItem {
  title: string;
  summary: string;
  stack: string[];
  href?: string;
}
export interface PublicationItem {
  title: string;
  authors: string;
  journal: string;
  volume?: string;
  issue?: string;
  year?: string;
  pages?: string;
  date?: string;
  doi?: string;
  href?: string;
  summary?: string;
  period?: string;
  role?: string;
}

export const profile = {
  firstName: "Rizka",
  lastName: "Annisa",
  credential: "S.Kom",
  role: "Pengembang Sistem dan Pengolah Data",
  phone: "+62 812-7366-0240" as string | undefined,
  phoneHref: "https://wa.me/6281273660240?text=Halo%20Rizka%2C%20saya%20tertarik%20untuk%20berdiskusi%20lebih%20lanjut.",
  email: "rizkaannisa85@gmail.com",
  location: "Palu, Sulawesi Tengah",
  cv: "resume/CV_Rizka Annisa.pdf",
  photo: "images/profile-pic.png",
  socials: [
    { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/rizkaa/" },
    { id: "github", label: "GitHub", href: "https://github.com/KarizYa" },
  ] satisfies Social[],
};

export const about = {
  title: "Tentang Saya",
  text: "Lulusan Teknik Informatika dengan pengalaman dalam pengembangan sistem digital dan pengolahan data. Saya terbiasa menerapkan teknologi, menganalisis masalah, dan mengelola informasi secara terstruktur untuk mendukung proses kerja yang lebih efektif.",
  subtitle: "Keahlian dan Pengalaman",
};

export const services: Service[] = [
  { id: "web", title: "Pengolahan Data", tone: "peach3", text: "Mengolah dan memvalidasi data agar menjadi informasi yang akurat, terstruktur, dan siap dipakai untuk pengambilan keputusan." },
  { id: "app", title: "Pengembangan Sistem", tone: "soft", text: "Merancang dan membangun sistem informasi yang mempermudah proses kerja serta mendigitalisasi alur kerja." },
  { id: "data", title: "Administrasi Digital", tone: "soft", text: "Mengelola dokumen dan proses administrasi secara digital agar lebih tertata, cepat, dan mudah diawasi." },
  { id: "leadership", title: "Kepemimpinan & Koordinasi", tone: "peach3", text: "Mengatur kegiatan, mengoordinasikan tim, dan menjaga komunikasi agar pekerjaan berjalan efektif dan terarah." },
];

export const education: ResumeItem[] = [
  { period: "Agustus 2022 - Mei 2026", title: "S1 Teknik Informatika", place: "Universitas Tadulako, IPK 3,93/4,00" },
];

export const experiences: ResumeItem[] = [
  {
    period: "September 2026 - Sekarang",
    role: "Magang Kemnaker - Substansi Pemeriksaan",
    company: "Balai Besar POM di Palu",
    location: "Palu",
    slug: "bbpom-palu",
    points: [
      "Mengelola data hasil pemeriksaan agar lebih terstruktur dan mudah dipahami.",
      "Mendukung pengelolaan sistem database hasil pengawasan obat dan makanan.",
      "Menjaga integritas data secara berkelanjutan untuk kebutuhan pengawasan.",
    ],
  },
  {
    period: "Juli - Agustus 2026",
    role: "Magang Profesional- Seksi Kehumasan",
    company: "Bank Indonesia Sulawesi Tengah",
    location: "Palu",
    slug: "bank-indonesia",
    points: [
      "Membuat aplikasi monitoring dokumen keuangan berbasis Power Apps.",
      "Mengelola arsip dan dokumentasi administratif secara tertib.",
      "Mendukung koordinasi Smart Youth Competition lintas universitas.",
    ],
  },
  {
    period: "Oktober - November 2025",
    role: "Tenaga Lokal - Pembuatan Zona Nilai Tanah",
    company: "Kanwil BPN Provinsi Sulawesi Tengah",
    location: "Palu",
    slug: "bpn-sulawesi-tengah",
    points: [
      "Mengumpulkan dan memvalidasi data untuk pemetaan Zona Nilai Tanah Kab. Sigi.",
      "Melakukan cleaning data dan rekapitulasi nilai tanah menggunakan Excel.",
      "Menjaga konsistensi data untuk kebutuhan perencanaan wilayah.",
    ],
  },
  {
    period: "Februari - Juni 2025",
    role: "Magang Mandiri - Bidang APTIKA",
    company: "DISKOMINFOSANTIK Sulawesi Tengah",
    location: "Palu",
    slug: "diskominfosantik",
    points: [
      "Mengembangkan sistem terintegrasi backend, website, dan mobile.",
      "Merancang API untuk komunikasi data antar platform.",
      "Menganalisis kebutuhan pengguna dan mendukung layanan publik.",
    ],
  },
  {
    period: "Agustus 2025 - Mei 2026",
    role: "Koordinator Asisten Dosen",
    company: "Program Studi Teknik Informatika, Universitas Tadulako",
    location: "Palu",
    slug: "asisten-dosen",
    points: [
      "Mengoordinasikan jadwal, tugas, dan evaluasi praktikum.",
      "Menyusun modul praktikum dan memfasilitasi komunikasi akademik.",
      "Membantu mahasiswa dan dosen dalam menyelesaikan kendala teknis.",
    ],
  },
];

export const experienceDetails: ExperienceDetailItem[] = [
  {
    slug: "bbpom-palu",
    role: "Magang Kemnaker — Substansi Pemeriksaan",
    company: "Balai Besar POM di Palu",
    department: "Substansi Pemeriksaan",
    period: "September 2026 - Sekarang",
    location: "Palu",
    summary: "Magang sebagai Pengolah Data dan Informasi di Balai Besar POM di Palu, dengan fokus mengelola database hasil pengawasan obat dan makanan. Pekerjaannya mencakup kompilasi, verifikasi, pengolahan, dan pengarsipan data sampling serta pemeriksaan sarana produksi dan distribusi, agar data siap dipakai untuk administrasi, monitoring, dan pelaporan.",
    about: "Balai Besar POM merupakan unit pelaksana teknis Badan POM yang mengawasi peredaran obat dan makanan. Selama magang, saya bergabung dengan tim pengawasan untuk membangun dan merawat database hasil pengawasan yang mencakup sarana distribusi obat (apotek, puskesmas, klinik, toko obat, IFK, PBF), pangan olahan, kosmetik, dan obat bahan alam. Program berjalan enam bulan dan bertahap: dimulai dari mengenal ruang lingkup pengawasan dan struktur data, lalu praktik pengelolaan database sampling dan pemeriksaan sarana, pelacakan tindak lanjut (CAPA), validasi data dan dashboard, hingga penyusunan laporan akhir.",
    responsibilities: [
      "Mengompilasi dan mengolah data hasil sampling serta pengawasan sarana produksi dan distribusi.",
      "Menginput dan memverifikasi data ke sistem basis data pengawasan (SIPT).",
      "Membantu pembagian kategori risiko dan rekapitulasi capaian pengawasan bulanan.",
      "Melacak status tindak lanjut hasil pengawasan (Perbaikan/CAPA) dan melakukan pengarsipan digital.",
      "Menguji konsistensi data entri dan membuat dashboard atau rekap analitik berkala.",
      "Menyusun laporan komprehensif pengelolaan database selama magang.",
    ],
    technologies: ["Microsoft Excel", "Database Internal", "MySQL", "Data Management", "Laravel", "Tailwind CSS", "Git"],
    gallery: [
      {
      src: "images/pengalaman/bbpom/bbpom1.png",
      alt: "Tampilan dashboard pengawasan obat dan makanan di Balai Besar POM di Palu",
      },
      {
      src: "images/pengalaman/bbpom/bbpom2.png",
      alt: "Tampilan kode program",
      },
      {
      src: "images/pengalaman/bbpom/bbpom3.jpeg",
      alt: "dokumentasi",
      },
      {
      src: "images/pengalaman/bbpom/bbpom4.png",
      alt: "maganghub",
      }
    ],
    result: "Selama magang di Balai Besar POM di Palu, saya mengelola database hasil pengawasan obat dan makanan: menginput dan memverifikasi data sampling serta pemeriksaan sarana, merekap capaian bulanan, dan melacak tindak lanjut (CAPA) secara digital. Saya juga menyusun dashboard dan rekap analitik untuk memudahkan monitoring, serta menyelesaikan laporan akhir pengelolaan database.",
    learnings: "Saya memahami alur pengawasan obat dan makanan serta peran data dalam mendukung keputusan instansi. Saya belajar bahwa akurasi dan konsistensi data sangat penting, terbiasa menjaga kerahasiaan data sensitif, dan melatih ketelitian, kerja sama tim, serta manajemen waktu dalam menghadapi tenggat pelaporan.",
  },
  {
    slug: "bank-indonesia",
    role: "Magang Profesional — Seksi Kehumasan",
    company: "Kantor Perwakilan Bank Indonesia Provinsi Sulawesi Tengah",
    department: "Seksi Kehumasan",
    period: "Juli - Agustus 2026",
    location: "Palu",
    summary: "Mengembangkan Aplikasi Monitoring Dokumen Keuangan menggunakan Microsoft Power Apps, mengelola arsip dan data dokumen, serta mendukung Smart Youth Competition melalui koordinasi peserta dari 43 tim dan 15 universitas.",
    about: "Saya terlibat dalam pengelolaan dokumen keuangan, administrasi arsip, dan dukungan aktivitas organisasi yang membutuhkan koordinasi lintas pihak. Pekerjaan ini menuntut kemampuan mengorganisasi data, menjaga dokumentasi, serta mengembangkan solusi sederhana untuk mempercepat proses kerja administratif.",
    responsibilities: [
      "Mengembangkan Aplikasi Monitoring Dokumen Keuangan menggunakan Microsoft Power Apps.",
      "Mengelola arsip termasuk penyusunan Lembar Disposisi Pelaksanaan, pengelompokan dokumen, dan input data arsip.",
      "Mendukung Smart Youth Competition melalui koordinasi peserta dari 43 tim dan 15 universitas di Sulawesi Tengah.",
    ],
    technologies: ["Microsoft Power Apps", "Microsoft Power Automate", "SharePoint", "Microsoft Excel", "Dokumentasi Administrasi"],
    gallery: [
      {
      src: "images/pengalaman/BI/BI1.jpeg",
      alt: "dokumentasi kegaiatan 17 agustus",
      },
      {
      src: "images/pengalaman/BI/BI2.jpeg",
      alt: "dokumentasi",
      },
      {
      src: "images/pengalaman/BI/BI3.png",
      alt: "Tampilan project di Microsoft Power Apps",
      },
      {
      src: "images/pengalaman/BI/BI4.png",
      alt: "dokumentasi konformasi tamu",
      },
      {
      src: "images/pengalaman/BI/BI5.jpeg",
      alt: "dokumentasi",
      },
      {
      src: "images/pengalaman/BI/BI6.jpg",
      alt: "sertifikat",
      }
    ],
    result: "Setiap proses administrasi dan koordinasi yang dilakukan membantu mempercepat pengelolaan dokumen serta meningkatkan keteraturan data di lingkungan kerja.",
    learnings: "Pengalaman ini memperkuat pemahaman saya tentang pentingnya digitalisasi dokumen, sistem pencatatan yang rapi, dan koordinasi yang terstruktur dalam mendukung kegiatan organisasi maupun institusi.",
  },
  {
    slug: "bpn-sulawesi-tengah",
    role: "Tenaga Lokal — Pembuatan Zona Nilai Tanah Skala 1:10.000 Kabupaten Sigi",
    company: "Kanwil BPN Provinsi Sulawesi Tengah",
    department: "Pembuatan Zona Nilai Tanah",
    period: "Oktober - November 2025",
    location: "Palu",
    summary: "Mengumpulkan, mengolah, dan memvalidasi data pertanahan untuk mendukung penyusunan Zona Nilai Tanah Kabupaten Sigi 2025 menggunakan Microsoft Excel dan AppSheet serta proses validasi data yang sistematis.",
    about: "Dalam proyek ini, saya terlibat dalam proses pengumpulan dan validasi data pertanahan yang sangat detail. Pekerjaan ini menuntut ketelitian tinggi karena data yang digunakan harus bersifat akurat, konsisten, dan siap digunakan untuk kepentingan perencanaan serta pengelolaan wilayah.",
    responsibilities: [
      "Mengumpulkan, mengolah, dan memvalidasi data pertanahan untuk mendukung penyusunan Zona Nilai Tanah Kabupaten Sigi 2025.",
      "Melakukan data cleaning, pemeriksaan, dan validasi informasi menggunakan Microsoft Excel dan AppSheet.",
      "Menginput serta merekapitulasi data luas dan nilai tanah secara sistematis menggunakan aplikasi Avenza Maps.",
    ],
    technologies: ["Microsoft Excel", "AppSheet", "Avenza Maps", "Data Cleaning", "Validasi Data", "Pengolahan Data"],
    gallery: [
      {
      src: "images/pengalaman/BPN/bpn1.png",
      alt: "data znt",
      },
      {
      src: "images/pengalaman/BPN/bpn2.jpeg",
      alt: "dokumentasi",
      },
      {
      src: "images/pengalaman/BPN/bpn3.jpeg",
      alt: "dokumentasi",
      },
      {
      src: "images/pengalaman/BPN/bpn4.jpeg",
      alt: "dokumentasi",
      },
      {
      src: "images/pengalaman/BPN/bpn5.jpeg",
      alt: "Appsheet data entry",
      },
      {
      src: "images/pengalaman/BPN/bpn6.jpeg",
      alt: "avenza data",
      }
    ],
    result: "Proses validasi dan pengolahan data yang dilakukan menghasilkan data yang lebih reliabel dan siap digunakan untuk kebutuhan penyusunan zonasi nilai tanah.",
    learnings: "Saya memahami bahwa kualitas data menjadi faktor kunci dalam pengelolaan wilayah dan perencanaan. Ketelitian, evaluasi berulang, serta konsistensi data sangat penting dalam pekerjaan berbasis data spasial.",
  },
  {
    slug: "diskominfosantik",
    role: "Magang Mandiri — Bidang APTIKA",
    company: "DISKOMINFOSANTIK Provinsi Sulawesi Tengah",
    department: "Bidang APTIKA",
    period: "Februari - Juni 2025",
    location: "Palu",
    summary: "Mengembangkan sistem terintegrasi yang mencakup backend API, website, dan aplikasi mobile, serta merancang API dan kebutuhan layanan publik yang berorientasi pada keamanan dan keterpaduan data.",
    about: "Saya mengerjakan sistem yang mencakup aspek backend API, antarmuka website, dan aplikasi mobile untuk mendukung kebutuhan pelayanan publik. Proses kerja dilakukan dengan menganalisis kebutuhan pengguna, mengembangkan arsitektur komunikasi data, dan memastikan alur sistem berjalan secara terstruktur.",
    responsibilities: [
      "Mengembangkan sistem terintegrasi yang mencakup backend API, website, dan aplikasi mobile.",
      "Merancang dan mengimplementasikan API untuk komunikasi data antarplatform.",
      "Mengidentifikasi kendala, menganalisis kebutuhan pengguna, dan berkolaborasi dalam pengembangan sistem pelayanan publik.",
    ],
    technologies: ["Golang", "GORM", "ReactJS", "TypeScript", "React Native", "REST API", "MySQL"],
    gallery: [
      {
      src: "images/pengalaman/aptika/aptika1.png",
      alt: "API testing",
      },
      {
      src: "images/pengalaman/aptika/aptika2.png",
      alt: "ERD Sistem",
      },
      {
      src: "images/pengalaman/aptika/aptika3.png",
      alt: "dokumentasi",
      },
      {
      src: "images/pengalaman/aptika/aptika4.png",
      alt: "mobile design",
      },
      {
      src: "images/pengalaman/aptika/aptika5.jpg",
      alt: "mobile code",
      },
      {
      src: "images/pengalaman/aptika/aptika6.png",
      alt: "web design",
      }
    ],
    result: "Sistem yang dikembangkan membantu proses komunikasi data dan pelayanan publik menjadi lebih terintegrasi, tertata, dan mudah dijalankan dalam lingkungan kerja yang kompleks.",
    learnings: "Pengalaman ini memperkuat kemampuan saya dalam menganalisis kebutuhan pengguna, merancang API yang aman, dan mengintegrasikan berbagai platform dalam satu sistem yang konsisten.",
  },
  {
    slug: "asisten-dosen",
    role: "Koordinator Asisten Dosen — Program Studi Teknik Informatika",
    company: "Universitas Tadulako",
    department: "Program Studi Teknik Informatika",
    period: "Agustus 2025 - Mei 2026",
    location: "Palu",
    summary: "Mengoordinasikan jadwal, pembagian tugas, dan evaluasi praktikum, serta membantu menyelesaikan kendala teknis dan akademis bersama dosen, asisten dosen, dan mahasiswa.",
    about: "Sebagai koordinator, saya berperan dalam menjaga kelancaran pelaksanaan praktikum dan memastikan komunikasi antar pihak berjalan efektif. Pekerjaan ini memerlukan koordinasi yang baik, penyusunan modul praktikum, serta kemampuan merespons kendala teknis dan akademis dengan cepat.",
    responsibilities: [
      "Mengoordinasikan jadwal, pembagian tugas, dan evaluasi praktikum.",
      "Menyusun dan meninjau modul praktikum.",
      "Membantu menyelesaikan kendala teknis dan akademis melalui koordinasi antara dosen, asisten dosen, dan mahasiswa.",
    ],
    technologies: ["Modul Praktikum", "Koordinasi", "Manajemen Jadwal", "Komunikasi Akademik"],
    gallery: [
      {
      src: "images/pengalaman/asdos/asdos1.jpg",
      alt: "sertifikat ToT Asdos",
      },
      {
      src: "images/pengalaman/asdos/asdos2.png",
      alt: "modul praktikum",
      },
      {
      src: "images/pengalaman/asdos/asdos3.png",
      alt: "rekapan nilai praktikan",
      },
      {
      src: "images/pengalaman/asdos/asdos4.jpeg",
      alt: "dokumentasi",
      }
    ],
    result: "Pelaksanaan praktikum menjadi lebih terorganisir dan berjalan lancar karena pembagian tugas, evaluasi, serta koordinasi dilakukan dengan lebih sistematis.",
    learnings: "Saya belajar bahwa keberhasilan kegiatan akademik tidak hanya bergantung pada teknis, tetapi juga pada manajemen jadwal, komunikasi, dan koordinasi antar pihak yang terlibat.",
  },
];

export const training: TrainingItem[] = [
  {
    title: "Golang Mastery for Green Tech Backend Engineers",
    organizer: "Alterra Academy",
    program: "Studi Independen MSIB",
    period: "September - Desember 2024",
    description: "Mempelajari pengembangan backend, Golang, RESTful API, basis data, dan pengujian aplikasi dengan fokus pada sistem yang terstruktur, terintegrasi, dan aman.",
    slug: "alterra-academy",
  },
];

export const trainingDetails: TrainingDetailItem[] = [
  {
    slug: "alterra-academy",
    title: "Golang Mastery for Green Tech Backend Engineers",
    organizer: "Alterra Academy",
    program: "Studi Independen MSIB",
    period: "September - Desember 2024",
    field: "Backend Development",
    focusTechnology: "Golang",
    overview:
      "Golang Mastery for Green Tech Backend Engineers merupakan program pelatihan intensif selama 4 bulan di Alterra Academy melalui program pemerintah Merdeka Belajar Kampus Merdeka (MSIB). Program ini berfokus pada pengembangan kompetensi backend engineering menggunakan bahasa pemrograman Go (Golang), mulai dari fundamental pemrograman, algoritma dan struktur data, pengelolaan database, pengembangan RESTful API, pengujian perangkat lunak, hingga deployment menggunakan Docker dan implementasi CI/CD. Selain keterampilan teknis, program ini juga membekali peserta dengan pemahaman clean architecture, system design, pemanfaatan AI dalam pengembangan Golang, serta penerapan prinsip green economy dan efisiensi energi pada infrastruktur backend.",
    learningObjectives: "Pelatihan ini dirancang untuk membangun kemampuan peserta dalam merancang, mengembangkan, menguji, dan melakukan deployment layanan backend yang terstruktur, efisien, serta mudah dipelihara. Pembelajaran mencakup teori, praktik pemrograman, pemecahan masalah algoritmik, pengelolaan basis data, pengembangan API, dan pengenalan infrastruktur cloud. Program ini juga mengintegrasikan wawasan green technology untuk mendorong pengembangan sistem backend yang tidak hanya andal dan scalable, tetapi juga memperhatikan efisiensi penggunaan sumber daya komputasi dan energi.",
    competencyFocus: [
      "Golang",
      "RESTful API",
      "MySQL & SQL",
      "Echo Framework",
      "Clean Architecture",
      "Git",
      "Docker",
      "CI/CD",
      "Unit Testing",
      "Green Technology",
    ],
    modules: [
      {
        name: "Fundamental Programming",
        description: "Introduction to Algorithm, Basic Programming with Golang, Array, Slice, Map, Function, String, Pointer, Struct, Method, Interface, Package, Error Handling.",
        tools: ["Golang", "Git", "Command Line"],
        outcome: "Mampu membangun program menggunakan Golang dengan menerapkan struktur data, fungsi, penanganan error, dan struktur kode yang terorganisasi.",
      },
      {
        name: "Algorithm & Problem Solving",
        description: "Time Complexity, Space Complexity, Recursion, Number Theory, Sorting & Searching, Brute Force, Greedy, Dynamic Programming.",
        tools: ["Golang", "Command Line"],
        outcome: "Mampu menganalisis kompleksitas algoritma dan memilih pendekatan penyelesaian masalah yang efisien sesuai kebutuhan.",
      },
      {
        name: "Database & Version Control",
        description: "Git, Branch Management, Database Schema, DDL, DML, JOIN, UNION, Aggregation, Subquery, Database Functions.",
        tools: ["Git", "SQL", "DBMS", "Command Line"],
        outcome: "Mampu merancang skema basis data, mengelola data menggunakan SQL, serta mengontrol perubahan kode melalui Git.",
      },
      {
        name: "Backend Development",
        description: "CLI, System Design, RESTful API, Echo Framework, ORM, MVC, Middleware, Clean Code, Clean Architecture.",
        tools: ["Golang", "Echo Framework", "ORM", "RESTful API", "Git"],
        outcome: "Mampu mengembangkan RESTful API menggunakan Golang dengan struktur aplikasi yang modular, terorganisasi, dan mudah dipelihara.",
      },
      {
        name: "Quality Assurance",
        description: "Unit Testing dan validasi fungsi aplikasi.",
        tools: ["Go Testing (testing package)", "Go (Golang)"],
        outcome: "Mampu menulis dan menjalankan unit test untuk memvalidasi fungsi serta membantu menjaga kualitas aplikasi backend.",
      },
      {
        name: "Infrastructure & Deployment",
        description: "Docker, Compute Service, CI/CD.",
        tools: ["Docker", "Compute Service / Cloud Infrastructure", "CI/CD Tools"],
        outcome: "Memahami penggunaan container, infrastruktur komputasi, dan otomatisasi pipeline untuk mendukung proses deployment aplikasi backend.",
      },
      {
        name: "AI & Green Technology",
        description: "Penggunaan AI dalam Golang, Introduction to Green Economy, Energy Efficiency pada Infrastruktur Backend.",
        tools: ["AI-Assisted Development Tools", "Go (Golang)", "Backend Infrastructure"],
        outcome: "Mampu memahami pemanfaatan AI dalam pengembangan backend serta prinsip efisiensi energi dan penggunaan sumber daya komputasi yang berkelanjutan.",
      },
    ],
    projects: [
      {
        name: "Relawanku",
        background: "Kepedulian sosial dan lingkungan masyarakat perlu difasilitasi lewat platform yang memudahkan orang menjadi relawan, mendapat informasi kegiatan sosial, dan berdonasi untuk korban bencana maupun pelestarian lingkungan.",
        goal: "Menyediakan REST API untuk program relawan, artikel, dan donasi, dengan pembagian peran admin dan user serta arsitektur backend yang rapi dan aman.",
        solution: "Membangun backend dengan Golang dan Echo menggunakan clean architecture, GORM dengan MySQL (RDS) untuk data, dan autentikasi JWT dengan peran admin dan user. Proses donasi terintegrasi dengan API pembayaran eksternal agar transaksi berjalan real time, upload foto memakai Firebase, dan API didokumentasikan lewat Swagger. Aplikasi dikemas dengan Docker dan dideploy di AWS EC2.",
        features: [
          "Autentikasi dan otorisasi user dan admin (JWT), termasuk registrasi, update profil, dan update password",
          "Manajemen artikel kegiatan sosial dan lingkungan oleh admin",
          "Manajemen program relawan per kategori dan pendaftaran program oleh user",
          "Manajemen event donasi dan pemantauan transaksi oleh admin",
          "Pembayaran donasi lewat integrasi API eksternal",
          "Dokumentasi API dengan Swagger dan deployment di AWS EC2 dengan CI/CD (GitHub Actions)",
        ],
        role: "Pengembang backend (Tim)",
        technologies: ["Golang", "Echo", "GORM", "MySQL", "JWT", "Docker", "AWS", "Swagger"],
        result: "Proyek capstone Alterra Academy (MSIB 7) ini menjadi implementasi nyata dari pembelajaran backend, mencakup autentikasi, integrasi API pihak ketiga, dokumentasi API, dan deployment cloud.",
        repoHref: "https://github.com/Azmi010/backend_relawanku",
      },
      {
        name: "Reduce Food Waste",
        background: "Banyak sisa bahan makanan di rumah tangga terbuang karena tidak terpantau dan tidak tahu harus diolah menjadi apa. Dibutuhkan layanan yang membantu pengguna mencatat sisa makanan dan memanfaatkannya kembali.",
        goal: "Menyediakan REST API untuk pengelolaan sisa makanan, lengkap dengan rekomendasi resep dan saran berbasis AI, dengan arsitektur backend yang rapi, teruji, dan mudah dikembangkan.",
        solution: "Membangun backend dengan clean architecture (delivery, usecase, repository) menggunakan Golang dan Echo. Sistem terintegrasi dengan database, Gemini AI untuk saran pemanfaatan sisa makanan, dan TheMealDB API untuk rekomendasi resep. Fitur leaderboard dan tips ditambahkan untuk mendorong kebiasaan mengurangi food waste.",
        features: [
          "Manajemen pengguna dan pencatatan sisa makanan",
          "Saran pemanfaatan sisa makanan berbasis AI (Gemini)",
          "Rekomendasi resep dari API eksternal",
          "Leaderboard dan tips pengurangan food waste",
          "Unit test dengan mock dan laporan coverage",
          "Containerization dengan Docker dan CI/CD lewat GitHub Actions",
        ],
        role: "Pengembang backend utama",
        technologies: ["Golang", "Echo", "Gemini API", "TheMealDB API", "Docker", "GitHub Actions"],
        result: "Proyek ini menjadi implementasi nyata dari pembelajaran backend, integrasi API pihak ketiga, unit testing, dan deployment berbasis container selama pelatihan.",
        repoHref: "https://github.com/KarizYa/Mini-Project-Go-Rizka-Annisa",
      },
    ],
    gallery: [
      { src: "images/pelatihan/stupen/stupen1.png", alt: "dokumentasi" },
      { src: "images/pelatihan/stupen/stupen2.jpg", alt: "sertifikat" },
      { src: "images/pelatihan/stupen/stupen3.jpg", alt: "nilai" },
      { src: "images/pelatihan/stupen/stupen4.png", alt: "dokumentasi" },
      { src: "images/pelatihan/stupen/stupen5.png", alt: "modul pembelajaran" },
    ],
    certificate: null,
  },
];

export const skills = {
  workTitle: "Keahlian Teknis",
  work: ["Golang", "TypeScript", "ReactJS", "React Native", "Laravel", "REST API", "MySQL", "Docker", "AWS", "Git", "Power Apps", "Microsoft Excel"],
  softTitle: "Soft Skills",
  soft: ["Kepemimpinan", "Koordinasi", "Komunikasi", "Kolaborasi Tim", "Analisis Masalah", "Adaptif"],
};

export const technicalSkills: SkillGroup[] = [
  {
    title: "Web Development",
    skills: ["Golang", "Laravel", "React.js", "TypeScript", "RESTful API", "Echo Framework", "HTML & CSS", "Tailwind CSS"],
  },
  {
    title: "Database Management",
    skills: ["MySQL", "SQL", "Database Design", "Database Querying", "ORM"],
  },
  {
    title: "DevOps & Software Engineering",
    skills: ["Git & GitHub", "Docker", "CI/CD", "Unit Testing", "Clean Architecture"],
  },
  {
    title: "Data & Productivity Tools",
    skills: ["Microsoft Power Apps", "Microsoft SharePoint", "Microsoft Power Automate", "Microsoft Excel"],
  },
];

export const softSkills = ["Kepemimpinan", "Koordinasi", "Komunikasi", "Kolaborasi Tim", "Pemecahan Masalah", "Berpikir Analitis", "Manajemen Waktu", "Adaptif"];

export const organizations: OrganizationItem[] = [
  {
    title: "Generasi Baru Indonesia (GENBI) Sulawesi Tengah",
    role: "Pengurus Wilayah | Divisi Kemitraan dan Kerja Sama",
    period: "2024 – Sekarang",
    description: "Mendukung perencanaan dan pelaksanaan program sosial masyarakat serta membangun komunikasi dengan pihak eksternal untuk mendukung kerja sama program.",
  },
  {
    title: "Himpunan Mahasiswa Teknik Informatika (HMTI) UNTAD",
    role: "Kepala Departemen | Departemen Intelektual",
    period: "Feb 2025 - Jan 2026",
    description: "Memimpin koordinasi anggota dan program kerja, merancang kelas penalaran ilmiah, serta memberikan mentoring dan informasi kompetisi bagi mahasiswa.",
  },
];

export const publications: PublicationItem[] = [
  {
    title: "Implementasi Algoritma First Come First Serve (FCFS) pada Sistem Manajemen Pengaduan Online APTIKA",
    authors: "Rizka Annisa . Penulis Utama",
    journal: "Jurnal Algoritma",
    volume: "Vol. 23",
    issue: "No. 1",
    year: "2026",
    pages: "1019–1029",
    date: "31 Mei 2026",
    doi: "10.33364/algoritma/v.23-1.3412",
    href: "https://jurnal.itg.ac.id/index.php/algoritma/article/view/3412",
    summary:
      "Penelitian ini mengembangkan sistem manajemen pengaduan berbasis web dan mobile dengan algoritma First Come First Serve (FCFS), kemudian mengevaluasi kinerjanya melalui pengujian fungsional dan perbandingan waktu penyelesaian. Evaluasi menggunakan data simulasi menunjukkan efisiensi 60,9%–91,3% dalam estimasi penyelesaian proses pengaduan.",
  },
];

export const workTags = ["All", "App Development", "Web Development", "API", "Other"] as const;
export type WorkTag = Exclude<(typeof workTags)[number], "All">;

export const works: Work[] = [
  {
    id: "monitoring",
    category: "App Development",
    tags: ["App Development"],
    title: "Monitoring Dokumen Keuangan",
    tone: "peach1",
    image: "images/project/projectBI1.png",
    gallery: ["images/project/projectBI1.png"],
    description: "Aplikasi digital untuk mengelola dan memantau proses pengajuan serta persetujuan dokumen keuangan secara terstruktur melalui alur kerja berbasis peran.",
    stack: ["Microsoft Power Apps", "SharePoint", "Power Automate"],
  },
  {
    id: "reels",
    category: "Other",
    tags: ["Other"],
    title: "Reels BBPOM di Palu",
    tone: "peach4",
    image: "images/project/projectBpom1.png",
    gallery: ["images/project/projectBpom2.png", "images/project/projectBpom3.png", "images/project/projectBpom4.png"],
    description: "Konten edukasi yang menyampaikan informasi publik mengenai pengawasan obat dan makanan dengan tampilan yang lebih ringkas dan menarik.",
    stack: ["Content Planning", "CapCut Desktop", "Social Media"],
    href: "https://www.instagram.com/bpom.palu/"
  },
  {
    id: "data",
    category: "Other",
    tags: ["Other"],
    title: "Zona Nilai Tanah Kabupaten Sigi",
    tone: "peach4",
    image: "images/project/projectbpn1.png",
    gallery: ["images/project/projectbpn2.jpeg", "images/project/projectbpn1.png"],
    description: "Kegiatan pengolahan dan validasi data pertanahan untuk mendukung penyusunan Zona Nilai Tanah Kabupaten Sigi tahun 2025.",
    stack: ["Microsoft Excel", "AppSheet", "Avenza Maps"],
  },
  {
    id: "aptika",
    category: "Web Development",
    tags: ["Web Development"],
    title: "Manajemen Pengaduan APTIKA",
    tone: "peach2",
    image: "images/project/projectAptika2.png",
    gallery: ["images/project/projectAptika1.png", "images/project/projectAptika3.png"],
    description: "Sistem pengaduan berbasis web untuk mengelola laporan, memprioritaskan kebutuhan masyarakat, dan mempercepat penanganan masalah secara terorganisir.",
    stack: ["ReactJS", "TypeScript", "REST API"],
    href: "https://github.com/KarizYa/Web_APTIKA",
  },
  {
    id: "relawanku",
    category: "API",
    tags: ["API"],
    title: "Relawanku",
    tone: "peach1",
    image: "images/project/projectStupen2.png",
    gallery: ["images/project/projectStupen1.png"],
    description: "Backend layanan untuk sistem relawan yang menghubungkan kebutuhan masyarakat dan pengelola event secara terintegrasi melalui API yang mudah dikembangkan.",
    stack: ["Golang", "Echo", "GORM", "MySQL", "JWT", "Docker", "AWS EC2", "Firebase", "Git"],
    href: "https://github.com/Azmi010/backend_relawanku",
  },
  {
    id: "bbpom",
    category: "Web Development",
    tags: ["Web Development"],
    title: "Sistem Database BBPOM",
    tone: "peach2",
    image: "images/project/projectbbpom1.png",
    gallery: ["images/project/projectbbpom1.png", "images/project/projectbbpom2.png"],
    description: "Sistem database yang mempercepat pengelolaan data pemeriksaan serta memudahkan tim dalam melakukan rekap dan monitoring perkembangan kerja.",
    stack: ["Laravel", "MySQL", "Tailwind CSS"],
  },
  {
    id: "foodwaste",
    category: "API",
    tags: ["API"],
    title: "Reduce Food Waste",
    tone: "peach1",
    image: "images/project/projectStupen3.png",
    gallery: ["images/project/projectStupen4.png"],
    description: "Proyek berbasis data dan API untuk mendukung upaya pengurangan limbah makanan melalui pengelolaan informasi dan monitoring kebutuhan.",
    stack: ["Golang", "Echo", "Gemini API", "TheMealDB API", "Docker", "GitHub Actions"],
    href: "https://github.com/KarizYa/Mini-Project-Go-Rizka-Annisa",
  },
  {
    id: "aptika2",
    category: "App Development",
    tags: ["App Development"],
    title: "Sistem Pengaduan APTIKA",
    tone: "peach2",
    image: "images/project/projectAptika7.png",
    gallery: ["images/project/projectAptika5.jpg", "images/project/projectAptika4.jpg", "images/project/projectAptika6.jpg"],
    description: "Aplikasi mobile untuk memudahkan masyarakat menyampaikan dan memantau pengaduan melalui perangkat smartphone.",
    stack: ["React Native", "TypeScript", "REST API"],
    href: "https://github.com/KarizYa/Mobile_APTIKA",
  },
  {
    id: "kolaka",
    category: "Web Development",
    tags: ["Web Development"],
    title: "Website Kolaka Utara",
    tone: "peach2",
    image: "images/project/projectKolaka1.png",
    gallery: ["images/project/projectKolaka1.png"],
    description: "Website profil dan informasi kebutuhan user yang menampilkan layanan dan konten dalam satu tampilan yang lebih komunikatif.",
    stack: ["PHP", "Bootstrap3", "MySQL"],
    href: "https://github.com/KarizYa/Web_Kalola-Utara",
  },
  {
    id: "mantikola",
    category: "Web Development",
    tags: ["Web Development"],
    title: "Website Mantikole",
    tone: "peach2",
    image: "images/project/projectMantikole1.png",
    gallery: ["images/project/projectMantikole1.png"],
    description: "Website profil dan informasi kebutuhan user yang menampilkan layanan dan konten dalam satu tampilan yang lebih komunikatif.",
    stack: ["Laravel", "MySQL", "Tailwind CSS"],
    href: "https://web-mantikole-kknt-112-jvbqbxsra.vercel.app",
  },
  {
    id: "aptika3",
    category: "API",
    tags: ["API"],
    title: "API Layanan APTIKA",
    tone: "peach1",
    image: "images/project/projectAptika8.png",
    gallery: ["images/project/projectAptika8.png", "images/project/projectAptika9.png"],
    description: "Layanan backend API yang menangani pengelolaan data dan proses bisnis sistem pengaduan online APTIKA.",
    stack: ["Golang", "MySQL", "Echo Framework"],
    href: "https://github.com/KarizYa/Backend_APTIKA",
  },
  {
    id: "jurnal",
    category: "Other",
    tags: ["Other"],
    title: "Jurnal Sistem Manajemen Pengaduan APTIKA",
    tone: "peach1",
    image: "images/project/projectJurnal.png",
    gallery: ["images/project/projectJurnal.png"],
    description: "Mengembangkan sistem manajemen pengaduan berbasis web dan mobile dengan algoritma First Come First Serve (FCFS), kemudian mengevaluasi kinerjanya melalui pengujian fungsional dan perbandingan waktu penyelesaian.",
    stack: ["Golang", "MySQL", "Echo Framework", "GORM", "JWT", "ReactJS", "TypeScript", "React Native"], 
    href: "https://jurnal.itg.ac.id/index.php/algoritma/article/view/3412",
  },
];

export interface CertificateItem {
  title: string;
  organizer: string;
  year: string;
  description: string;
  image?: string;
  href?: string;
}

export const certificateItems: CertificateItem[] = [
  {
    title: "Go (Basic)",
    organizer: "HackerRank",
    year: "2024",
    description: "Menguji kemampuan dasar pemrograman Golang, logika dasar, dan penyelesaian masalah menggunakan bahasa Golang.",
    image: "images/sertifikat/Go (Basic) - HackerRank.jpg",
  },
  {
    title: "Golang Mastery For Green Tech Backend Engineers",
    organizer: "Alterra Academy",
    year: "2024",
    description: "Pelatihan intensif backend engineering dengan fokus pada Golang, API, database, Git, Docker, deployment aplikasi, dan unit testing.",
    image: "images/sertifikat/Golang Mastery - Alterra Academy.jpg",
  },
  {
    title: "Prinsip Pemrograman SOLID",
    organizer: "Dicoding",
    year: "2024",
    description: "Mempelajari prinsip desain SOLID untuk membangun kode yang lebih rapi, scalable, dan mudah dipelihara.",
    image: "images/sertifikat/Prinsip Pemrograman SOLID - dicoding.png",
  },
  {
    title: "Problem Solving (Basic)",
    organizer: "HackerRank",
    year: "2024",
    description: "Mengasah kemampuan berpikir logis dalam menyelesaikan masalah algoritmik dengan pendekatan yang efisien.",
    image: "images/sertifikat/Problem Solving (Basic) - HackerRank.jpg",
  },
  {
    title: "RESTful Adonis.js",
    organizer: "CODEPOLITAN",
    year: "2024",
    description: "Pelatihan backend dengan framework Adonis.js serta pengembangan API RESTful yang terstruktur dan aman.",
    image: "images/sertifikat/RESTful Adonis.js - CODEPOLITAN.jpg",
  },
  {
    title: "SQL (Basic)",
    organizer: "HackerRank",
    year: "2024",
    description: "Pemahaman dasar query SQL, manipulasi data, dan struktur basis data untuk kebutuhan pengolahan data.",
    image: "images/sertifikat/SQL (Basic) - HackerRank.jpg",
  },
  {
    title: "Kompetensi Digital Marketing",
    organizer: "BNSP",
    year: "2025",
    description: "Mendukung kemampuan dalam strategi digital marketing, promosi produk, dan pengelolaan konten secara terarah.",
    image: "images/sertifikat/Kompetensi Digital Marketing - BNSP.jpg",
  },
  {
    title: "Karya Tulis Ilmiah",
    organizer: "HMPS TMAT UIN",
    year: "2024",
    description: "Mengembangkan kemampuan menulis karya ilmiah dengan pendekatan riset, analisis, dan penyajian hasil yang sistematis.",
    image: "images/sertifikat/Karya Tulis Ilmiah - HMPS TMAT UIN.jpg",
  },
  {
    title: "Konten Kreatif Inovatif",
    organizer: "GenBI SulTeng",
    year: "2024",
    description: "Pelatihan kreativitas konten dan inovasi digital untuk menghasilkan materi yang komunikatif dan berdampak.",
    image: "images/sertifikat/Konten Kreatif Inovatif - GenBI SulTeng.jpg",
  },
  {
    title: "Magang Profesional",
    organizer: "Bank Indonesia",
    year: "2026",
    description: "Pengalaman magang profesional di bidang pengembangan sistem, administrasi, dan pengelolaan data digital di lembaga keuangan.",
    image: "images/sertifikat/Magang Profesional - Bank Indonesia.jpg",
  },
  {
    title: "Pelatihan Digital Marketing",
    organizer: "Bank Indonesia",
    year: "2025",
    description: "Peningkatan kompetensi dalam digital marketing untuk menyampaikan informasi secara efektif dan terukur.",
    image: "images/sertifikat/Pelatihan Digital Marketing - Bank Indonesia.jpg",
  },
  {
    title: "Sekolah Pasar Modal",
    organizer: "BEI SulTeng",
    year: "2024",
    description: "Pemahaman mengenai pasar modal serta literasi investasi dan produk keuangan yang relevan dengan kebutuhan publik.",
    image: "images/sertifikat/Sekolah Pasar Modal - BEI SulTeng.jpg",
  },
  {
    title: "ToT Asdos",
    organizer: "Teknologi Informasi UNTAD",
    year: "2024",
    description: "Pelatihan calon asisten dosen untuk mendukung pembelajaran, koordinasi, dan pengelolaan praktik di bidang teknologi informasi.",
    image: "images/sertifikat/ToT Asdos - Teknologi Informasi UNTAD.jpg",
  },
  {
    title: "Bendahara Panitia",
    organizer: "HMTI UNTAD",
    year: "2024",
    description: "Peran sebagai bendahara panitia dalam membantu pengelolaan administrasi keuangan dan koordinasi kegiatan organisasi.",
    image: "images/sertifikat/Bendahara Panitia - HMTI UNTAD.jpg",
  },
];

export const certificates = [...certificateItems].sort((a, b) => Number(b.year) - Number(a.year));
