//fungsi untuk menampilkan bagian luas persegi
function luas_persegi(){
    window.location.href = "index.html";
}

//fungsi untuk menampilkan bagian keliling persegi
function keliling_persegi(){
    window.location.href = "keliling.html";
}

//fungsi untuk menampilkan bagian luas persegi panjang
function luas_pp(){
    window.location.href = "luaspp.html";
}

//fungsi untuk menampilkan bagian keliling persegi panjang
function keliling_pp(){
    window.location.href = "kelilingpp.html";
}

//fungsi untuk menghitung luas persegi
function hitung_luas(){
    const sisi = document.getElementById('sisi').value; //ambil nilai sisi dari input
    if (sisi > 0){
        const luas = sisi * sisi; //hitung luas
        document.getElementById('hasil').innerText = `L = S x S 
        L = ${sisi} x ${sisi} 
        L = ${luas}`; //menampilkan hasil
    }else{
        alert("Silakan masukkan nilai yang valid!"); //pesan kesalahan
    }
}

//fungsi untuk mereset perhitungan luas persegi
function reset_luas() {
    document.getElementById('sisi').value = ''; //kosongkan inputan
    document.getElementById('hasil').innerText = ''; //kosongkan hasil
}

//fungsi untuk menghitung keliling persegi
function hitung_keliling() {
    const sisi = document.getElementById('sisi').value; //ambil nilai sisi dari input
    if (sisi > 0){
        const keliling = 4 * sisi; //hitung keliling
        document.getElementById('hasil').innerText = `K = 4 x S 
        K = 4 x ${sisi} 
        K = ${keliling}`; //menampilkan hasil
    }else{
        alert("Silakan masukkan nilai yang valid!"); //pesan kesalahan
    }
}

//fungsi untuk mereset perhitungan keliling persegi
function reset_keliling() {
    document.getElementById('sisi').value = ''; //kosongkan inputan
    document.getElementById('hasil').innerText = ''; //kosongkan hasil
}

//fungsi untuk menghitung luas persegi panjang
function hitung_luas_pp() {
    const panjang = document.getElementById('panjang').value; //ambil nilai panjang dari input
    const lebar = document.getElementById('lebar').value; //ambil nilai lebar dari input
    if (panjang > 0 && lebar > 0){
        const luas = panjang *lebar; //hitung luas
        document.getElementById('hasil').innerText = `L = P x L 
        L = ${panjang} x ${lebar} 
        L = ${luas}`; //menampilkan hasil
    }else{
        alert("Silakan masukkan nilai yang valid!"); //pesan kesalahan   
    }
    
}

//fungsi untuk mereset perhitungan luas persegi panjang
function reset_luas_pp() {
    document.getElementById('panjang').value = ''; //kosongkan inputan
    document.getElementById('lebar').value = ''; //kosongkan inputan
    document.getElementById('hasil').innerText = ''; //kosongkan hasil
}

//fungsi untuk menghitung keliling persegi panjang
function hitung_keliling_pp() {
    const panjang = document.getElementById('panjang').value; //ambil nilai panjang dari input
    const lebar = document.getElementById('lebar').value; //ambil nilai lebar dari input
    if (panjang > 0 && lebar > 0){
        const keliling = 2 * panjang + 2 * lebar; //hitung luas
        document.getElementById('hasil').innerText = `K = 2P + 2L
        K = 2 x ${panjang} + 2 x ${lebar}
        K = ${keliling}`; //menampilkan hasil
    }else{
        alert("Silakan masukkan nilai yang valid!"); //pesan kesalahan
    }
}

//fungsi untuk mereset perhitungan keliling persegi panjang
function reset_keliling_pp() {
    document.getElementById('panjang').value = ''; //kosongkan inputan
    document.getElementById('lebar').value = ''; //kosongkan inputan
    document.getElementById('hasil').innerText = ''; //kosongkan hasil
}