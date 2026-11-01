document.getElementById('btnCalculate').addEventListener('click', function() {
    // Mengambil nilai input
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);

    // Validasi input kosong
    if (!weight || !heightCm) {
        alert("Mohon masukkan berat dan tinggi badan dengan benar.");
        return;
    }

    // Konversi tinggi dari cm ke meter
    const heightM = heightCm / 100;
    
    // Rumus BMI = Berat (kg) / (Tinggi (m) * Tinggi (m))
    const bmi = (weight / (heightM * heightM)).toFixed(1);

    let category = "";
    let tips = [];

    // 1. STRUKTUR PERCABANGAN (Minimal 5 Kondisi berdasarkan standar Kemenkes)
    if (bmi < 17.0) {
        category = "Sangat Kurus (Kekurangan berat badan tingkat berat)";
        tips = [
            "Tingkatkan frekuensi makan dengan porsi kecil tapi sering.",
            "Konsumsi makanan kaya protein seperti telur, dada ayam, dan tempe.",
            "Lakukan olahraga angkat beban ringan untuk membentuk massa otot.",
            "Konsultasikan dengan dokter spesialis gizi jika diperlukan."
        ];
    } else if (bmi >= 17.0 && bmi < 18.5) {
        category = "Kurus (Kekurangan berat badan tingkat ringan)";
        tips = [
            "Tambah camilan sehat di sela jam makan utama (seperti kacang-kacangan atau alpukat).",
            "Penuhi kebutuhan tidur malam 7-8 jam per hari.",
            "Pastikan asupan kalori harian melebihi kalori yang dibakar."
        ];
    } else if (bmi >= 18.5 && bmi < 25.0) {
        category = "Normal (Berat badan ideal & sehat)";
        tips = [
            "Pertahankan pola makan bergizi seimbang (4 sehat 5 sempurna).",
            "Lakukan aktivitas fisik atau olahraga rutin 150 menit per minggu.",
            "Minum air putih minimal 2 liter sehari untuk menjaga hidrasi."
        ];
    } else if (bmi >= 25.0 && bmi < 27.0) {
        category = "Gemuk (Kelebihan berat badan tingkat ringan)";
        tips = [
            "Batasi konsumsi makanan manis, gorengan, dan minuman kemasan.",
            "Perbanyak konsumsi makanan berserat tinggi seperti buah dan sayur.",
            "Tingkatkan durasi latihan kardio (jalan cepat, bersepeda, berenang)."
        ];
    } else { // bmi >= 27.0
        category = "Obesitas (Kelebihan berat badan tingkat berat)";
        tips = [
            "Kurangi porsi karbohidrat sederhana dan ganti dengan karbohidrat kompleks.",
            "Hindari makan berat di malam hari (minimal 3 jam sebelum tidur).",
            "Lakukan defisit kalori secara konsisten dan terukur.",
            "Periksakan kadar gula darah dan kolesterol secara berkala."
        ];
    }

    // Menampilkan hasil ke elemen HTML
    document.getElementById('bmiValue').innerText = bmi;
    document.getElementById('bmiCategory').innerText = category;

    // 2. STRUKTUR PERULANGAN (Menggunakan loop 'for' untuk mencetak tips kesehatan)
    const listContainer = document.getElementById('recommendationsList');
    listContainer.innerHTML = ""; // Membersihkan list sebelumnya

    for (let i = 0; i < tips.length; i++) {
        let li = document.createElement('li');
        li.innerText = tips[i];
        listContainer.appendChild(li);
    }

    // Menampilkan kotak hasil
    document.getElementById('resultBox').classList.remove('hidden');
});
