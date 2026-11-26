import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas VI) Mata Pelajaran Matematika
 * Lingkup Materi: Rasio
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 15 butir soal Kurikulum Merdeka (Lingkup Materi: Rasio)
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyatakan dan menyederhanakan rasio dua besaran dalam bentuk paling sederhana.',
    indikatorSoal:
      'Disajikan jumlah dua jenis buah dalam keranjang, peserta didik dapat menentukan bentuk paling sederhana dari rasio banyak kedua buah tersebut.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan rasio bagian terhadap keseluruhan (part-to-whole) dari suatu kelompok objek.',
    indikatorSoal:
      'Disajikan banyak siswa laki-laki dan siswa perempuan dalam satu kelas, peserta didik dapat menentukan rasio banyak siswa laki-laki terhadap jumlah seluruh siswa.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan nilai besaran menggunakan konsep rasio ekuivalen dalam konteks campuran.',
    indikatorSoal:
      'Disajikan rasio campuran sirup dan air matang serta takaran sirup yang digunakan, peserta didik dapat menghitung volume air matang yang dibutuhkan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah rasio dua besaran apabila jumlah keseluruhan diketahui.',
    indikatorSoal:
      'Disajikan rasio kelereng dua anak dan jumlah seluruh kelereng mereka, peserta didik dapat menghitung banyak kelereng salah satu anak.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah rasio dua besaran apabila selisih nilainya diketahui.',
    indikatorSoal:
      'Disajikan rasio umur dua anggota keluarga beserta selisih umurnya, peserta didik dapat menentukan umur salah satu orang tersebut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan konsep laju satuan (unit rate) untuk menghitung harga pembelian barang.',
    indikatorSoal:
      'Disajikan harga sejumlah buku tulis yang sama, peserta didik dapat menentukan harga untuk jumlah buku tulis yang berbeda.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menggunakan rasio skala pada denah atau peta untuk menentukan ukuran sebenarnya.',
    indikatorSoal:
      'Disajikan skala denah taman sekolah dan panjang objek pada denah dalam cm, peserta didik dapat menghitung panjang objek sebenarnya dalam satuan meter.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah perbandingan bertingkat atau rasio tiga besaran dalam konteks uang tabungan.',
    indikatorSoal:
      'Disajikan rasio uang tabungan tiga anak dan nominal tabungan salah satu anak, peserta didik dapat menghitung jumlah tabungan dua anak lainnya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat membandingkan dua rasio harga satuan untuk menentukan penawaran yang lebih hemat.',
    indikatorSoal:
      'Disajikan dua paket penjualan beras dengan berat dan harga berbeda di dua toko, peserta didik dapat menganalisis dan membandingkan harga per kilogram di kedua toko.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis permasalahan rasio berbalik nilai yang melibatkan kecepatan dan waktu tempuh.',
    indikatorSoal:
      'Disajikan kecepatan dan waktu tempuh perjalanan pertama serta kecepatan baru pada jarak yang sama, peserta didik dapat menentukan waktu tempuh yang dibutuhkan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi berbagai pasangan bilangan yang membentuk rasio ekuivalen.',
    indikatorSoal:
      'Disajikan rasio campuran cat warna biru dan putih serta 3 pilihan kombinasi takaran, peserta didik dapat memilih semua kombinasi yang memiliki rasio ekuivalen.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi rasio bagian terhadap bagian, bagian terhadap keseluruhan, serta selisih dari suatu kumpulan data.',
    indikatorSoal:
      'Disajikan data jumlah pot dua jenis bunga dan 3 pernyataan rasio, peserta didik dapat memilih semua pernyataan rasio yang bernilai benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan konsep laju satuan dan proporsi senilai dalam transaksi jual beli.',
    indikatorSoal:
      'Disajikan harga untuk 3 kg mangga dan 3 pernyataan terkait harga satuan serta total pembelian, peserta didik dapat memilih semua pernyataan yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis skala denah untuk menentukan ukuran sebenarnya, rasio sisi, dan luas bangun datar.',
    indikatorSoal:
      'Disajikan denah ruang kelas berskala 1 : 150 dengan ukuran panjang dan lebar pada gambar, peserta didik dapat memilih semua pernyataan benar terkait ukuran sebenarnya, rasio sisi, dan luasnya.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat membandingkan rasio konsentrasi beberapa campuran untuk menarik kesimpulan yang tepat.',
    indikatorSoal:
      'Disajikan data takaran gula dan air pada tiga gelas percobaan, peserta didik dapat membandingkan tingkat kemanisan larutan dan memilih semua pernyataan yang benar.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  // Gunakan data dari definisi atau field internal question, atau inferensi logis
  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu menerapkan konsep materi ${q.topic} dalam menyelesaikan permasalahan matematika.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus masalah tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('skala') || t.includes('denah') || t.includes('kecepatan') || t.includes('ukuran')) {
    return 'Pengukuran';
  }
  if (t.includes('selisih') || t.includes('jumlah') || t.includes('tiga besaran') || t.includes('proporsi') || t.includes('campuran')) {
    return 'Aljabar';
  }
  if (t.includes('rasio') || t.includes('laju') || t.includes('bilangan')) {
    return 'Bilangan';
  }
  return 'Bilangan';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  // Distribusi Elemen
  const elemenCountMap: Record<string, number> = {};
  // Distribusi Level Kognitif
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  // Distribusi Tingkat Kesukaran
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  // Distribusi Bentuk Soal
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    // Elemen
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    // Level
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    // Diff
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
