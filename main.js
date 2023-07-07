// TUGAS 1 - Mencari luas sebuah bentuk

const btn1 = document.getElementById("btn-lingkaran");
const btn2 = document.getElementById("btn-segitiga");
const btn3 = document.getElementById("btn-persegi-panjang");
const btn4 = document.getElementById("btn-jajar-genjang");

// Luas Lingkaran
btn1.style.background = "firebrick";
btn1.style.color = "white";
btn1.style.padding = "10px";
btn1.style.borderRadius = "10px";
btn1.style.border = "none";

function btn1Click() {
  btn1.style.background = "rgb(145, 27, 27)";

  const r1Lingkaran = prompt(`Luas Lingkaran adalah 
L = π × r × r
Masukan r pertama. contoh : 7`);

  const r2Lingkaran = prompt(`Luas Lingkaran adalah 
L = π × r × r
Masukan r kedua. contoh : 7`);

  const luasLingkaran = (22 / 7) * r1Lingkaran * r2Lingkaran;

  if (r1Lingkaran == 0) {
    alert(`Luas lingkaran adalah ${luasLingkaran} 
Kamu pasti lupa isi nilai r1-nya`);
  } else if (r2Lingkaran == 0) {
    alert(`Luas lingkaran adalah ${luasLingkaran}
Kamu pasti lupa isi nilai r2-nya`);
  } else if (r1Lingkaran == 0 && r2Lingkaran == 0) {
    alert(`Luas lingkaran adalah ${luasLingkaran} 
Memang lupa ngisi asli`);
  } else {
    alert(`Luas lingkaran adalah ${luasLingkaran} 
π x ${r1Lingkaran} x ${r2Lingkaran} = ${luasLingkaran}`);
  }
}

// Luas Segitiga
btn2.style.background = "cornflowerblue";
btn2.style.color = "white";
btn2.style.padding = "10px";
btn2.style.borderRadius = "10px";
btn2.style.border = "none";

function btn2Click() {
  btn2.style.background = "rgb(88, 130, 209)";

  const alasSegitiga = prompt(`Luas Segitiga adalah
L = 1/2 x a x t
Masukan alasnya. contoh : 4`);

  const tinggiSegitiga = prompt(`Luas Segitiga adalah
L = 1/2 x a x t
Masukan tingginya. contoh : 10`);

  const luasSegitiga = (1 / 2) * alasSegitiga * tinggiSegitiga;

  if (alasSegitiga == 0) {
    alert(`Luas Segitiga adalah ${luasSegitiga} 
Kamu pasti lupa isi nilai alas-nya`);
  } else if (tinggiSegitiga == 0) {
    alert(`Luas Segitiga adalah ${luasSegitiga} 
Kamu pasti lupa isi nilai tinggi-nya`);
  } else if (alasSegitiga == 0 && tinggiSegitiga == 0) {
    alert(`Luas Segitiga adalah ${luasSegitiga}
Memang lupa isi asli`);
  } else {
    alert(`Luas Segitiga adalah ${luasSegitiga}
L = 1/2 x ${alasSegitiga} x ${tinggiSegitiga} = ${luasSegitiga}`);
  }
}

// Luas Persegi Panjang
btn3.style.background = "goldenrod";
btn3.style.color = "white";
btn3.style.padding = "10px";
btn3.style.borderRadius = "10px";
btn3.style.border = "none";

function btn3Click() {
  btn3.style.background = "rgb(211, 152, 3)";

  const panjangPersegiPanjang = prompt(`Luas Persegi Panjang adalah
L = p x l
Masukan panjang-nya. contoh : 4`);

  const lebarPersegiPanjang = prompt(`Luas Persegi Panjang adalah
L = p x l
Masukan lebar-nya. contoh : 5`);

  const luasPersegiPanjang = panjangPersegiPanjang * lebarPersegiPanjang;

  if (panjangPersegiPanjang == 0) {
    alert(`Luas Persegi Panjang adalah ${luasPersegiPanjang} 
Kamu pasti lupa isi nilai panjang-nya`);
  } else if (lebarPersegiPanjang == 0) {
    alert(`Luas Segitiga adalah ${luasPersegiPanjang} 
Kamu pasti lupa isi nilai lebar-nya`);
  } else if (panjangPersegiPanjang == 0 && lebarPersegiPanjang == 0) {
    alert(`Luas Persegi Panjang adalah ${luasPersegiPanjang}
Memang lupa isi asli`);
  } else {
    alert(`Luas Persegi Panjang adalah ${luasPersegiPanjang}
    L = ${panjangPersegiPanjang} x ${lebarPersegiPanjang} = ${luasPersegiPanjang}`);
  }
}

// Luas Jajar Genjang
btn4.style.background = "forestgreen";
btn4.style.color = "white";
btn4.style.padding = "10px";
btn4.style.borderRadius = "10px";
btn4.style.border = "none";

function btn4Click() {
  btn4.style.background = "rgb(25, 121, 25)";

  const alasJajarGenjang = prompt(`Luas Jajar Genjang adalah
L = a x t
Masukan alasnya. contoh : 3`);

  const tinggiJajarGenjang = prompt(`Luas Jajar Genjang adalah
L = a x t
Masukan tingginya. contoh : 4`);

  const luasJajarGenjang = alasJajarGenjang * tinggiJajarGenjang;

  if (alasJajarGenjang == 0) {
    alert(`Luas Jajar Genjang adalah ${luasJajarGenjang} 
Kamu pasti lupa isi nilai alas-nya`);
  } else if (tinggiJajarGenjang == 0) {
    alert(`Luas Jajar Genjang adalah ${luasJajarGenjang} 
Kamu pasti lupa isi nilai tinggi-nya`);
  } else if (alasJajarGenjang == 0 && tinggiJajarGenjang == 0) {
    alert(`Luas Jajar Genjang adalah ${luasJajarGenjang}
Memang lupa isi asli`);
  } else {
    alert(`Luas Segitiga adalah ${luasJajarGenjang}
L = ${alasJajarGenjang} x ${tinggiJajarGenjang} = ${luasJajarGenjang}`);
  }
}

// TUGAS 2 - input gaji keryawan dalam per bulan

const btn5 = document.getElementById("btn-gaji");

btn5.style.background = "darkslateblue";
btn5.style.color = "white";
btn5.style.padding = "10px";
btn5.style.borderRadius = "10px";
btn5.style.border = "none";

function btn5Click() {
  const namaKaryawan = prompt("Masukan nama Karyawan. (Kapital awal kalimat)");
  const gajiKaryawan = prompt("Gaji Karyawan per hari. (Tanpa titik / koma)");
  const hariMasukKaryawan = prompt("Jumlah hari Karyawan masuk. (Hanya angka max. 30 hari)");

  const gajiBulanan = gajiKaryawan * hariMasukKaryawan;
  const cutiKaryawan = 30 - hariMasukKaryawan;
  alert("Mohon tunggu sebentar..");

  alert(`${namaKaryawan}, Gaji per bulan ialah Rp${gajiBulanan} . Karna ia Cuti : ${cutiKaryawan} hari.
Gaji Bulanan = Gaji Harian x (30 hari - hari Karyawan masuk)`);
}
