# Aplikasi Kalkulator Status Kesehatan (BMI)

# Fitur Utama
1. Perhitungan BMI : Menghitung indeks massa tubuh berdasarkan input berat (kg) dan tinggi (cm).
2. Logika Percabangan (5 Kondisi): Mengklasifikasikan tubuh user berdasarkan 5 kategori standar kesehatan: Sangat Kurus, Kurus, Normal, Gemuk, dan Obesitas.
3. Logika Perulangan: Menggunakan loop `for` untuk memproses array tips kesehatan dinamis yang disesuaikan dengan kategori pengguna

# Struktur File
* `index.html`
* `style.css` 
* `script.js`

# Penjelasan Kode Logika JavaScript
* Percabangan (`if-else`): Digunakan untuk menyaring batas nilai BMI guna menentukan status klinis pengguna ke dalam salah satu dari 5 kondisi spesifik. Setiap kondisi memiliki kumpulan teks tips kesehatan tersendiri yang disimpan di dalam *array*.
* Perulangan (`for loop`): Berfungsi untuk membaca seluruh isi data *array* rekomendasi tips kesehatan secara berurutan, membuat elemen HTML daftar (`<li>`), kemudian menampilkannya pada halaman web tanpa perlu menulis kodenya secara manual satu per satu.
