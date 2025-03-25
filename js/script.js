function calculateArea() {
    const sisi = document.getElementById('sisi').value;
    const luas = sisi * sisi;
    document.getElementById('hasil').innerText = `L = S x S 
    L = ${sisi} x ${sisi} 
    L = ${luas}`;
    /*document.getElementById('sisi').innerText = `L = ${sisi} x ${sisi}`;
    document.getElementById('result').innerText = `L = ${luas}`;*/
}

function reset() {
    document.getElementById('sisi').value = '';
    document.getElementById('hasil').innerText = '';
}