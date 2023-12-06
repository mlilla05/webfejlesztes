document.getElementById('kaloria_kalkulator_urlap').addEventListener('submit', function (e) {
    document.getElementById('eredmeny').style.display = 'none';
    setTimeout(kalkulator, 100);
    e.preventDefault();
});
function kalkulator(e) {
    const kor = document.getElementById('kor');
    const nem = document.querySelector('input[name="nem"]:checked');
    const suly = document.getElementById('suly');
    const magassag = document.getElementById('magassag');
    const aktivitas = document.getElementById('aktivitas').value;
    const napi_kaloriaszukseglet = document.getElementById('napi_kaloriaszukseglet');
    if (kor.value === '' || suly.value === '' || magassag.value === '' || 120 < kor.value || kor.value < 10 || suly.value < 30 || 300 < suly.value || 300 < magassag.value || magassag.value < 100) {
        errorMessage('Kérlek töltsd ki helyesen!')
    }
    else if (nem.id === 'ferfi' && aktivitas === "1") {
        napi_kaloriaszukseglet.value = (1.2 * (66.46 + (13.7 * suly.value) + (5 * magassag.value) - (6.8 * kor.value))).toFixed(0);
    }
    else if (nem.id === 'ferfi' && aktivitas === "2") {
        napi_kaloriaszukseglet.value = (1.4 * (66.46 + (13.7 * suly.value) + (5 * magassag.value) - (6.8 * kor.value))).toFixed(0);
    }
    else if (nem.id === 'ferfi' && aktivitas === "3") {
        napi_kaloriaszukseglet.value = (1.6 * (66.46 + (13.7 * suly.value) + (5 * magassag.value) - (6.8 * kor.value))).toFixed(0);
    }
    else if (nem.id === 'ferfi' && aktivitas === "4") {
        napi_kaloriaszukseglet.value = (1.8 * (66.46 + (13.7 * suly.value) + (5 * magassag.value) - (6.8 * kor.value))).toFixed(0);
    }
    else if (nem.id === 'ferfi' && aktivitas === "5") {
        napi_kaloriaszukseglet.value = (2 * (66.46 + (13.7 * suly.value) + (5 * magassag.value) - (6.8 * kor.value))).toFixed(0);
    }
    else if (nem.id === 'no' && aktivitas === "1") {
        napi_kaloriaszukseglet.value = (1.2 * (655.1 + (9.6 * suly.value) + (1.8 * magassag.value) - (4.7 * kor.value))).toFixed(0);
    }
    else if (nem.id === 'no' && aktivitas === "2") {
        napi_kaloriaszukseglet.value = (1.4 * (655.1 + (9.6 * suly.value) + (1.8 * magassag.value) - (4.7 * kor.value))).toFixed(0);
    }
    else if (nem.id === 'no' && aktivitas === "3") {
        napi_kaloriaszukseglet.value = (1.6 * (655.1 + (9.6 * suly.value) + (1.8 * magassag.value) - (4.7 * kor.value))).toFixed(0);
    }
    else if (nem.id === 'no' && aktivitas === "4") {
        napi_kaloriaszukseglet.value = (1.8 * (655.1 + (9.6 * suly.value) + (1.8 * magassag.value) - (4.7 * kor.value))).toFixed(0);
    }
    else {
        napi_kaloriaszukseglet.value = (2 * (655.1 + (9.6 * suly.value) + (1.8 * magassag) - (4.7 * kor.value))).toFixed(0);
    }
    document.getElementById('eredmeny').style.display = 'block';
}
function errorMessage(error) {
  document.getElementById('eredmeny').style.display = 'none';
  const hiba_div = document.createElement('div');
  const hibauzenet = document.querySelector('.hibauzenet');
  const kaloria_kalkulator_cim = document.querySelector('.kaloria_kalkulator_cim');
  hiba_div.className = 'hiba';
  hiba_div.appendChild(document.createTextNode(error));
  hibauzenet.insertBefore(hiba_div, kaloria_kalkulator_cim);
  setTimeout(clearError, 4000);
}
function clearError() {
  document.querySelector('.hiba').remove();
}