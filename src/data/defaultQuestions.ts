import { Question } from '../types';
import imgApelJeruk from '../assets/images/rasio_apel_jeruk_1795665443610.jpg';
import imgSirupAir from '../assets/images/rasio_sirup_air_1795665443687.jpg';
import imgDenahKolam from '../assets/images/denah_kolam_taman_1795665445430.jpg';
import imgCatWarna from '../assets/images/rasio_cat_warna_1795665445387.jpg';
import imgLarutanGula from '../assets/images/rasio_larutan_gula_1795665445586.jpg';

export const INITIAL_QUESTIONS: Question[] = [
  // --- PILIHAN GANDA (10 SOAL) ---
  // Lingkup Materi: Rasio (Matematika Kelas VI - KKTP 66)
  {
    id: 1,
    type: 'pg',
    topic: 'Menyederhanakan Rasio',
    difficulty: 'Mudah',
    imageUrl: imgApelJeruk,
    imageCaption: 'Ilustrasi keranjang berisi buah apel dan buah jeruk',
    text: 'Perhatikan ilustrasi keranjang buah di atas! Di dalam keranjang tersebut terdapat 18 buah apel dan 24 buah jeruk. Bentuk paling sederhana dari rasio banyak buah apel terhadap buah jeruk adalah...',
    options: [
      { id: 'A', text: '2 : 3' },
      { id: 'B', text: '3 : 4' },
      { id: 'C', text: '4 : 3' },
      { id: 'D', text: '6 : 8' },
    ],
    correctAnswer: 'B',
    explanation:
      'Rasio banyak apel terhadap jeruk = 18 : 24.\nFPB dari 18 dan 24 adalah 6.\nBagi kedua bilangan dengan 6:\n18 ÷ 6 = 3 dan 24 ÷ 6 = 4.\nJadi, bentuk paling sederhana dari rasio tersebut adalah 3 : 4.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Rasio Bagian terhadap Keseluruhan',
    difficulty: 'Mudah',
    text: 'Di kelas VI SD Negeri 2 Cupel terdapat 14 siswa laki-laki dan 21 siswa perempuan. Rasio banyak siswa laki-laki terhadap seluruh siswa di kelas VI tersebut adalah...',
    options: [
      { id: 'A', text: '2 : 3' },
      { id: 'B', text: '2 : 5' },
      { id: 'C', text: '3 : 5' },
      { id: 'D', text: '5 : 2' },
    ],
    correctAnswer: 'B',
    explanation:
      'Jumlah seluruh siswa = 14 + 21 = 35 siswa.\nRasio siswa laki-laki terhadap seluruh siswa = 14 : 35.\nSederhanakan dengan membagi kedua bilangan dengan FPB(14, 35) = 7:\n14 ÷ 7 = 2 dan 35 ÷ 7 = 5.\nJadi, rasionya adalah 2 : 5.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Rasio Ekuivalen (Campuran)',
    difficulty: 'Mudah',
    imageUrl: imgSirupAir,
    imageCaption: 'Ilustrasi campuran sirup jeruk dan air matang dengan rasio 2 : 5',
    text: 'Perhatikan gambar bahan minuman jeruk di atas! Untuk membuat minuman jeruk segar, Ibu mencampurkan sirup dan air matang dengan rasio 2 : 5. Jika Ibu menggunakan 60 ml sirup, berapa ml air matang yang dibutuhkan agar rasanya tetap sama?',
    options: [
      { id: 'A', text: '120 ml' },
      { id: 'B', text: '140 ml' },
      { id: 'C', text: '150 ml' },
      { id: 'D', text: '180 ml' },
    ],
    correctAnswer: 'C',
    explanation:
      'Rasio sirup : air matang = 2 : 5.\n2 bagian sirup = 60 ml, maka nilai 1 bagian = 60 ÷ 2 = 30 ml.\nAir matang yang dibutuhkan = 5 bagian × 30 ml = 150 ml.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Rasio dengan Jumlah Diketahui',
    difficulty: 'Sedang',
    text: 'Rasio banyak kelereng Arman dan Budi adalah 4 : 5. Jika jumlah kelereng mereka berdua adalah 54 butir, berapakah banyak kelereng Budi?',
    options: [
      { id: 'A', text: '24 butir' },
      { id: 'B', text: '27 butir' },
      { id: 'C', text: '30 butir' },
      { id: 'D', text: '36 butir' },
    ],
    correctAnswer: 'C',
    explanation:
      'Jumlah perbandingan = 4 + 5 = 9 bagian.\nNilai 1 bagian = 54 butir ÷ 9 = 6 butir.\nBanyak kelereng Budi = 5 × 6 butir = 30 butir.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Rasio dengan Selisih Diketahui',
    difficulty: 'Sedang',
    text: 'Rasio umur Ayah dan umur Rina adalah 8 : 3. Jika selisih umur mereka berdua adalah 25 tahun, berapakah umur Rina saat ini?',
    options: [
      { id: 'A', text: '12 tahun' },
      { id: 'B', text: '15 tahun' },
      { id: 'C', text: '20 tahun' },
      { id: 'D', text: '40 tahun' },
    ],
    correctAnswer: 'B',
    explanation:
      'Selisih perbandingan = 8 - 3 = 5 bagian.\nNilai 1 bagian = 25 tahun ÷ 5 = 5 tahun.\nUmur Rina = 3 × 5 tahun = 15 tahun.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Laju Satuan (Rasio Harga)',
    difficulty: 'Mudah',
    text: 'Sebuah toko alat tulis menjual 4 buah buku tulis yang sama seharga Rp18.000,00. Jika Edo ingin membeli 7 buah buku tulis tersebut, berapa rupiah uang yang harus dibayar Edo?',
    options: [
      { id: 'A', text: 'Rp27.000,00' },
      { id: 'B', text: 'Rp28.500,00' },
      { id: 'C', text: 'Rp31.500,00' },
      { id: 'D', text: 'Rp36.000,00' },
    ],
    correctAnswer: 'C',
    explanation:
      'Laju satuan (harga 1 buku tulis) = Rp18.000,00 ÷ 4 = Rp4.500,00.\nHarga 7 buah buku tulis = 7 × Rp4.500,00 = Rp31.500,00.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Rasio Skala pada Denah',
    difficulty: 'Sedang',
    imageUrl: imgDenahKolam,
    imageCaption: 'Denah taman sekolah (Skala 1 : 200 • Panjang kolam pada denah = 4,5 cm)',
    text: 'Perhatikan gambar denah taman sekolah di atas! Pada denah yang menggunakan skala 1 : 200 tersebut, panjang kolam ikan digambar sepanjang 4,5 cm. Berapakah panjang kolam ikan sebenarnya dalam satuan meter?',
    options: [
      { id: 'A', text: '0,9 meter' },
      { id: 'B', text: '9 meter' },
      { id: 'C', text: '45 meter' },
      { id: 'D', text: '90 meter' },
    ],
    correctAnswer: 'B',
    explanation:
      'Skala 1 : 200 berarti 1 cm pada denah mewakili 200 cm sebenarnya.\nPanjang sebenarnya = 4,5 cm × 200 = 900 cm.\nUbah ke meter (dibagi 100): 900 ÷ 100 = 9 meter.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Rasio Tiga Besaran',
    difficulty: 'Sedang',
    text: 'Rasio uang tabungan Ani, Beni, dan Cici berturut-turut adalah 2 : 3 : 5. Jika uang tabungan Ani sebesar Rp24.000,00, berapakah jumlah uang tabungan Beni dan Cici?',
    options: [
      { id: 'A', text: 'Rp60.000,00' },
      { id: 'B', text: 'Rp84.000,00' },
      { id: 'C', text: 'Rp96.000,00' },
      { id: 'D', text: 'Rp120.000,00' },
    ],
    correctAnswer: 'C',
    explanation:
      'Bagian Ani = 2 bagian = Rp24.000,00.\nNilai 1 bagian = Rp24.000,00 ÷ 2 = Rp12.000,00.\nJumlah bagian Beni dan Cici = 3 + 5 = 8 bagian.\nJumlah uang Beni dan Cici = 8 × Rp12.000,00 = Rp96.000,00.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Membandingkan Rasio (Harga Satuan)',
    difficulty: 'Sukar',
    text: 'Toko A menjual 5 kg beras seharga Rp67.500,00, sedangkan Toko B menjual 8 kg beras dengan kualitas yang sama seharga Rp104.000,00. Pernyataan manakah yang paling tepat mengenai harga satuan beras di kedua toko tersebut?',
    options: [
      { id: 'A', text: 'Harga beras per kg di Toko A lebih murah Rp500,00 daripada Toko B' },
      { id: 'B', text: 'Harga beras per kg di Toko B lebih murah Rp500,00 daripada Toko A' },
      { id: 'C', text: 'Harga beras per kg di Toko A dan Toko B sama yaitu Rp13.500,00' },
      { id: 'D', text: 'Harga beras per kg di Toko B adalah Rp13.500,00 sehingga lebih mahal' },
    ],
    correctAnswer: 'B',
    explanation:
      'Harga per kg di Toko A = Rp67.500,00 ÷ 5 = Rp13.500,00/kg.\nHarga per kg di Toko B = Rp104.000,00 ÷ 8 = Rp13.000,00/kg.\nSelisih harga = Rp13.500,00 - Rp13.000,00 = Rp500,00.\nJadi, harga beras per kg di Toko B lebih murah Rp500,00 daripada Toko A.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Rasio Berbalik Nilai (Kecepatan & Waktu)',
    difficulty: 'Sukar',
    text: 'Untuk menempuh jarak dari rumah ke sekolah dengan kecepatan rata-rata 30 km/jam, Ayah membutuhkan waktu 20 menit. Jika suatu hari Ayah berkendara dengan kecepatan rata-rata 40 km/jam, berapa menit waktu yang dibutuhkan Ayah untuk menempuh jarak yang sama?',
    options: [
      { id: 'A', text: '12 menit' },
      { id: 'B', text: '15 menit' },
      { id: 'C', text: '18 menit' },
      { id: 'D', text: '25 menit' },
    ],
    correctAnswer: 'B',
    explanation:
      'Semakin besar kecepatan, semakin singkat waktu tempuh (perbandingan berbalik nilai).\nKecepatan₁ × Waktu₁ = Kecepatan₂ × Waktu₂\n30 × 20 = 40 × Waktu₂\n600 = 40 × Waktu₂\nWaktu₂ = 600 ÷ 40 = 15 menit.',
  },

  // --- PILIHAN GANDA KOMPLEKS (5 SOAL) ---
  // Ketentuan: Kemungkinan lebih dari 1 pilihan jawaban benar, setiap soal memiliki 3 pilihan jawaban
  {
    id: 11,
    type: 'pgk',
    topic: 'Rasio Ekuivalen (Campuran Cat)',
    difficulty: 'Mudah',
    imageUrl: imgCatWarna,
    imageCaption: 'Ilustrasi campuran cat warna biru dan cat warna putih dengan rasio 3 : 4',
    text: 'Perhatikan gambar campuran cat warna di atas! Untuk mengecat dinding kelas, Pak Guru mencampurkan cat warna biru dan cat warna putih dengan rasio 3 : 4. Pilihlah SEMUA perbandingan campuran berikut yang menghasilkan warna yang sama (rasio ekuivalen) dengan campuran Pak Guru! (Pilihan benar bisa lebih dari satu)',
    options: [
      { id: 'A', text: '6 liter cat biru dicampur dengan 8 liter cat putih' },
      { id: 'B', text: '9 liter cat biru dicampur dengan 12 liter cat putih' },
      { id: 'C', text: '12 liter cat biru dicampur dengan 15 liter cat putih' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Rasio acuan = 3 : 4.\n- Opsi A: 6 : 8 disederhanakan (dibagi 2) = 3 : 4 (Benar - A).\n- Opsi B: 9 : 12 disederhanakan (dibagi 3) = 3 : 4 (Benar - B).\n- Opsi C: 12 : 15 disederhanakan (dibagi 3) = 4 : 5, bukan 3 : 4 (Salah - C).\nJadi, pilihan yang benar adalah A dan B.',
  },
  {
    id: 12,
    type: 'pgk',
    topic: 'Rasio Bagian, Keseluruhan, & Selisih',
    difficulty: 'Sedang',
    text: 'Di taman sekolah terdapat 20 pot bunga mawar dan 35 pot bunga melati. Pilihlah SEMUA pernyataan yang BENAR berdasarkan data rasio tersebut! (Pilihan benar bisa lebih dari satu)',
    options: [
      { id: 'A', text: 'Rasio banyak pot bunga mawar terhadap pot bunga melati adalah 4 : 7' },
      { id: 'B', text: 'Rasio banyak pot bunga melati terhadap seluruh pot bunga di taman adalah 7 : 11' },
      { id: 'C', text: 'Rasio selisih banyak pot melati dan mawar terhadap pot bunga mawar adalah 3 : 5' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Total seluruh pot = 20 + 35 = 55 pot.\n- Opsi A: Rasio mawar : melati = 20 : 35 = 4 : 7 (Benar - A).\n- Opsi B: Rasio melati : seluruh pot = 35 : 55 = 7 : 11 (Benar - B).\n- Opsi C: Selisih = 35 - 20 = 15 pot. Rasio selisih : mawar = 15 : 20 = 3 : 4, bukan 3 : 5 (Salah - C).\nJadi, pilihan yang benar adalah A dan B.',
  },
  {
    id: 13,
    type: 'pgk',
    topic: 'Laju Satuan & Proporsi Harga',
    difficulty: 'Sedang',
    text: 'Ibu membeli 3 kg buah mangga dengan harga Rp45.000,00. Pilihlah SEMUA pernyataan yang BENAR mengenai rasio harga dan berat buah mangga tersebut! (Pilihan benar bisa lebih dari satu)',
    options: [
      { id: 'A', text: 'Harga 1 kg buah mangga adalah Rp15.000,00' },
      { id: 'B', text: 'Harga untuk membeli 5 kg buah mangga yang sama adalah Rp75.000,00' },
      { id: 'C', text: 'Dengan uang Rp105.000,00, Ibu dapat membeli sebanyak 7 kg buah mangga' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      'Perhitungan rasio harga dan berat mangga:\n- Opsi A: Harga 1 kg = Rp45.000,00 ÷ 3 = Rp15.000,00 (Benar - A).\n- Opsi B: Harga 5 kg = 5 × Rp15.000,00 = Rp75.000,00 (Benar - B).\n- Opsi C: Berat untuk Rp105.000,00 = 105.000 ÷ 15.000 = 7 kg (Benar - C).\nKetiga pernyataan (A, B, dan C) bernilai benar.',
  },
  {
    id: 14,
    type: 'pgk',
    topic: 'Skala Denah & Rasio Ukuran',
    difficulty: 'Sukar',
    text: 'Sebuah ruang kelas digambar pada denah dengan skala 1 : 150. Pada denah, ruang kelas tersebut berbentuk persegi panjang dengan panjang 6 cm dan lebar 4 cm. Pilihlah SEMUA pernyataan yang BENAR! (Pilihan benar bisa lebih dari satu)',
    options: [
      { id: 'A', text: 'Panjang ruang kelas sebenarnya adalah 9 meter' },
      { id: 'B', text: 'Rasio panjang terhadap lebar ruang kelas sebenarnya adalah 2 : 3' },
      { id: 'C', text: 'Luas ruang kelas sebenarnya adalah 54 meter persegi (m²)' },
    ],
    correctAnswer: ['A', 'C'],
    explanation:
      'Perhitungan ukuran sebenarnya (skala 1 : 150):\n- Panjang sebenarnya = 6 cm × 150 = 900 cm = 9 meter (Benar - A).\n- Lebar sebenarnya = 4 cm × 150 = 600 cm = 6 meter.\n- Rasio panjang : lebar sebenarnya = 9 : 6 = 3 : 2, bukan 2 : 3 (Salah - B).\n- Luas sebenarnya = 9 m × 6 m = 54 m² (Benar - C).\nJadi, pilihan yang benar adalah A dan C.',
  },
  {
    id: 15,
    type: 'pgk',
    topic: 'Perbandingan Rasio Konsentrasi Larutan',
    difficulty: 'Sukar',
    imageUrl: imgLarutanGula,
    imageCaption: 'Ilustrasi tiga gelas percobaan larutan gula (dari kiri ke kanan: Gelas P, Gelas Q, dan Gelas R)',
    text: 'Perhatikan gambar percobaan tiga gelas larutan gula di atas! Siswa kelas VI membuat larutan gula menggunakan tiga gelas berbeda:\n• Gelas P: 2 sendok gula dicampur 100 ml air\n• Gelas Q: 3 sendok gula dicampur 120 ml air\n• Gelas R: 4 sendok gula dicampur 200 ml air\nPilihlah SEMUA pernyataan yang BENAR berdasarkan rasio campuran tersebut! (Pilihan benar bisa lebih dari satu)',
    options: [
      { id: 'A', text: 'Larutan pada Gelas P lebih manis daripada larutan pada Gelas Q' },
      { id: 'B', text: 'Tingkat kemanisan larutan pada Gelas P sama dengan larutan pada Gelas R' },
      { id: 'C', text: 'Larutan yang paling manis di antara ketiga gelas tersebut adalah Gelas Q' },
    ],
    correctAnswer: ['B', 'C'],
    explanation:
      'Sederhanakan rasio gula : air untuk setiap gelas:\n- Gelas P = 2 : 100 = 1 : 50 (1 sendok gula dalam 50 ml air).\n- Gelas Q = 3 : 120 = 1 : 40 (1 sendok gula dalam 40 ml air).\n- Gelas R = 4 : 200 = 1 : 50 (1 sendok gula dalam 50 ml air).\nSemakin sedikit air untuk 1 sendok gula, semakin manis rasanya:\n- Opsi A: Gelas Q lebih manis daripada Gelas P (Salah - A).\n- Opsi B: Gelas P dan Gelas R sama-sama memiliki rasio 1 : 50 sehingga sama manis (Benar - B).\n- Opsi C: Gelas Q paling manis karena rasionya 1 : 40 (Benar - C).\nJadi, pilihan yang benar adalah B dan C.',
  },
];
