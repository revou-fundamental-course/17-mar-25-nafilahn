function halamanLuas(){
    window.location.href = "index.html";
}

function halamanKeliling(){
    window.location.href = "keliling.html";
}

function hitungLuas() {
    const sisi = document.getElementById('sisi').value;
    const luas = sisi * sisi;
    document.getElementById('hasil').innerText = `L = S x S 
    L = ${sisi} x ${sisi} 
    L = ${luas}`;
    /*document.getElementById('sisi').innerText = `L = ${sisi} x ${sisi}`;
    document.getElementById('result').innerText = `L = ${luas}`;*/
}

function resetLuas() {
    document.getElementById('sisi').value = '';
    document.getElementById('hasil').innerText = '';
}

function hitungKeliling() {
    const sisi = document.getElementById('sisi').value;
    const keliling = 4 * sisi;
    document.getElementById('hasil').innerText = `K = 4 x S 
    K = 4 x ${sisi} 
    K = ${keliling}`;
    /*document.getElementById('sisi').innerText = `L = ${sisi} x ${sisi}`;
    document.getElementById('result').innerText = `L = ${luas}`;*/
}

function resetKeliling() {
    document.getElementById('sisi').value = '';
    document.getElementById('hasil').innerText = '';
}