/**
 * Data Proyek Portofolio Naufal Rafif
 * Struktur data terorganisasi untuk rendering modal dan detail proyek
 */

const PROJECTS_DATA = {
  wsvisual: {
    title: "WSVisualJKT",
    subtitle: "Website Company Profile Jasa Fotografi, Videografi, Trip & Drone",
    category: "web",
    categoryLabel: "Web Development",
    year: "2026",
    image: "assets/images/wsvisual.jpg",
    techStack: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    description: "Website company profile profesional yang dirancang untuk memamerkan portofolio karya dan paket layanan agensi kreatif WSVisualJKT. Menyediakan etalase digital untuk dokumentasi foto komersial, produksi video cinematic, event gathering, travel trip, serta rekaman aerial drone beresolusi tinggi.",
    features: [
      "Showcase galeri foto dan video beresolusi tinggi dengan tata letak grid responsif.",
      "Formulir reservasi jasa dan estimasi harga yang terintegrasi langsung dengan WhatsApp admin.",
      "Optimasi on-page SEO untuk meningkatkan visibilitas pencarian layanan di area Jabodetabek.",
      "Arsitektur kode modular berbasis PHP dengan waktu muat halaman yang cepat dan ringan."
    ],
    technicalHighlights: "Struktur backend PHP native yang efisien, manipulasi DOM dinamis dengan Vanilla JavaScript, dan tata letak semantik CSS Grid & Flexbox."
  },

  minatbakat: {
    title: "Sistem Pakar Identifikasi Minat & Bakat",
    subtitle: "Implementasi Metode Certainty Factor (CF) untuk Penelusuran Potensi",
    category: "ai",
    categoryLabel: "Sistem Pakar (AI)",
    year: "2026",
    image: "assets/images/expert_system.jpg",
    techStack: ["PHP", "MySQL", "Certainty Factor", "Forward Chaining", "CSS3"],
    description: "Aplikasi sistem pakar cerdas yang mereplikasi pengetahuan psikolog dan konselor pendidikan dalam mengidentifikasi kecenderungan bakat serta minat individu. Menggunakan algoritma Certainty Factor untuk mengolah ketidakpastian data jawaban pengguna.",
    features: [
      "Inferensi berbasis aturan (rule-based reasoning) dengan perhitungan nilai Measure of Belief (MB) dan Measure of Disbelief (MD).",
      "Perhitungan kombinasi nilai Certainty Factor paralel dari serangkaian kuesioner terstruktur.",
      "Laporan hasil klasifikasi potensi karir, jurusan studi lanjutan, dan persentase keyakinan sistem.",
      "Panel administrasi pakar untuk memperbarui daftar gejala, bobot keyakinan, dan basis aturan."
    ],
    technicalHighlights: "Formula Certainty Factor: CF(h,e) = MB(h,e) - MD(h,e), dengan kombinasi berulang CF_combine(CF1, CF2) = CF1 + CF2 * (1 - CF1)."
  },

  spkbazar: {
    title: "Sistem Pendukung Keputusan Kegiatan Bazar",
    subtitle: "Metode Analytical Hierarchy Process (AHP) Berbasis Java",
    category: "ai",
    categoryLabel: "SPK / AHP",
    year: "2025",
    image: "assets/images/expert_system.jpg",
    techStack: ["Java", "NetBeans IDE", "MySQL", "AHP Algorithm", "iReport"],
    description: "Sistem pendukung keputusan multikriteria terstruktur untuk membantu panitia dalam menyeleksi peserta bazar, kelayakan stan, serta evaluasi lokasi kegiatan secara objektif dan matematis.",
    features: [
      "Penyusunan matriks perbandingan berpasangan (Pairwise Comparison Matrix) skala Saaty 1-9.",
      "Kalkulasi nilai Eigenvector untuk penentuan bobot prioritas masing-masing kriteria evaluasi.",
      "Validasi rasio konsistensi otomatis dengan syarat Consistency Ratio (CR) <= 0.10.",
      "Penyimpanan data riwayat seleksi ke database MySQL dan cetak rekapitulasi keputusan via iReport."
    ],
    technicalHighlights: "Implementasi rumus AHP: Penjumlahan kolom matriks, normalisasi matriks, perhitungan bobot kriteria, lambda max, CI = (lambda_max - n)/(n - 1), dan CR = CI / RI."
  },

  apriori: {
    title: "Sistem Analisis Penjualan",
    subtitle: "Market Basket Analysis dengan Algoritma Apriori",
    category: "web",
    categoryLabel: "Data Mining",
    year: "2025",
    image: "assets/images/super_cellular.jpg",
    techStack: ["PHP", "MySQL", "Algoritma Apriori", "HTML5", "CSS3"],
    description: "Sistem analitik data mining yang memproses riwayat transaksi belanja untuk mengidentifikasi pola asosiatif produk yang kerap dibeli secara bersamaan oleh konsumen.",
    features: [
      "Penambangan Frequent Itemset (1-itemset hingga k-itemset) dengan filter Minimum Support kustom.",
      "Pembentukan Association Rules dengan evaluasi ambang batas Minimum Confidence.",
      "Visualisasi rekomendasi penataan tata letak produk dan paket promosi bundling.",
      "Dashboard integrasi data transaksi penjualan berbasis database relasional MySQL."
    ],
    technicalHighlights: "Rumus perhitungan: Support(A) = (Jumlah transaksi mengandung A) / (Total Transaksi); Confidence(A -> B) = Support(A U B) / Support(A)."
  },

  ikannila: {
    title: "Diagnosa Penyakit Ikan Nila",
    subtitle: "Sistem Pakar Desktop Berbasis Certainty Factor & Forward Chaining",
    category: "desktop",
    categoryLabel: "Java Desktop",
    year: "2025",
    image: "assets/images/expert_system.jpg",
    video: "motow.mp4",
    techStack: ["Java (Swing)", "MySQL", "Certainty Factor", "Forward Chaining"],
    description: "Aplikasi desktop yang dikembangkan untuk membantu pembudidaya ikan air tawar dalam mendiagnosis indikasi penyakit pada ikan nila berdasarkan gejala fisik, sirip, sisik, dan perilaku berenang.",
    features: [
      "Mesin inferensi Forward Chaining untuk mencocokkan gejala klinis dengan basis pengetahuan dokter hewan/ahli perikanan.",
      "Perhitungan akurasi diagnosis menggunakan metode Certainty Factor (CF).",
      "Form antarmuka Java Swing yang mudah digunakan oleh masyarakat dan teknisi budidaya.",
      "Penyajian resep obat, takaran desinfektan kolam, serta panduan tindakan pencegahan penularan."
    ],
    technicalHighlights: "Arsitektur Object-Oriented Programming (OOP) Java murni, konektivitas JDBC ke MySQL, dan pemisahan modular antara lapisan GUI dan inference engine."
  },

  supercellular: {
    title: "Super Cellular",
    subtitle: "Aplikasi Kasir (Point of Sale) & Manajemen Inventaris Toko Seluler",
    category: "desktop",
    categoryLabel: "Java Desktop",
    year: "2025",
    image: "assets/images/super_cellular.jpg",
    techStack: ["Java (OOP)", "NetBeans IDE", "MySQL", "JasperReports", "JDBC"],
    description: "Sistem manajemen operasional terintegrasi untuk toko aksesoris dan layanan seluler. Mengelola transaksi penjualan pulsa, kuota data, aksesoris gawai, serta pencatatan stok gudang secara real-time.",
    features: [
      "Modul kasir cepat untuk pencatatan transaksi penjualan harian dan cetak struk belanja.",
      "Manajemen persediaan barang dengan notifikasi stok menipis secara otomatis.",
      "Pengelolaan master data pelanggan, distributor, dan kategori produk.",
      "Laporan berkala pendapatan harian, bulanan, dan margin laba bersih."
    ],
    technicalHighlights: "Penerapan konsep OOP (Inheritance, Polymorphism, Encapsulation), transaksi database ACID dengan JDBC MySQL, dan reporting JasperReports."
  }
};
