// toggle untuk info
var inf= document.querySelector('.the-inf');
// ketika info di klik
// note: (e) => berfungsi untuk parameter function, e.preventDefault() berfungsi untuk mencegah perilaku bawaan atau default dari event tersebut dan menyegarkan halaman.
document.querySelector('#informasi').onclick = (e) =>{
  inf.style.display = 'flex';
  inf.style.animation = 'animasi3 1s 1 forwards';
   e.preventDefault();
};
//ketika close item di klik
document.querySelector('.inf .close-icon').onclick = (e) =>{
  inf.style.display = 'none';
  e.preventDefault();
};

// function untuk menu utama
function selecTor() {
  var container3 = document.querySelector('#selector');
  var selhid = document.querySelector('.container3');
  var selector = document.querySelector('#selector1').value.toLowerCase();
  const persegi = document.querySelector('.container1');
  const segitiga = document.querySelector('.container2');
  const trigonometri = document.querySelector('.container4');
  const matriks = document.querySelector('.container5');
// === berarti harus benar, harus sama nilai nya 
  if (selector === 'persegi' || selector === 'persegi ' || selector === 'Persegi' || selector === 'Persegi ' || selector === 'Persegipanjang ' || selector === 'persegipanjang ' || selector === 'Persegi panjang ' || selector === 'Persegi panjang' || selector === 'Persegipanjang' || selector === 'persegipanjang' || selector === 'persegi panjang' || selector === 'persegi panjang ' || selector === 'pp ' || selector === 'pp' || selector === 'PP ' || selector === 'PP' || selector === 'Pp ' || selector === 'Pp'){
    persegi.style.display = 'flex'
    //persegi.style.animation ='animasi2 1.2s 1 ease forwards';
    selhid.style.display = 'none'
//ketika close item di klik di container
  document.querySelector('.container1 .close-icon').onclick = (e) =>{
  persegi.style.animation ='animasi 2s 1 ease forwards';
  persegi.style.display = 'none'
  container3.style.animation = 'animasi 1.2s 1 ease forwards';
  selhid.style.display = 'flex'
};
  } 
  //.trim() digunakan untuk menghapus spasi kosong (baik spasi di awal maupun di akhir) dari sebuah string.
  //.toLowerCase() digunakan untuk mengonversi semua karakter dalam suatu string menjadi huruf kecil (lowercase).
  else if (
  selector.trim().toLowerCase() === 'segitiga' ||
  selector.trim().toLowerCase() === 'segitiga ' ||
  selector.trim().toLowerCase() === 'segitiga ' ||
  selector.trim().toLowerCase() === 'sgt ' ||
  selector.trim().toLowerCase() === 'sgt' ||
  selector.trim().toLowerCase() === 'sgtg' ||
  selector.trim().toLowerCase() === 'sgtg '
) {
  segitiga.style.display = 'flex'
  //segitiga.style.animation ='animasi2 1.2s 1 ease forwards';
  selhid.style.display = 'none'
  
//ketika close item di klik di container
  document.querySelector('.close-icon').onclick = (e) =>{
    segitiga.style.animation ='animasi 2s 1 ease forwards';
    segitiga.style.display = 'none'
    container3.style.animation = 'animasi 1.2s 1 ease forwards';
    selhid.style.display = 'flex'
};
}
else if (
  selector.trim().toLowerCase() === 'trigonometri' ||
  selector.trim().toLowerCase() === 'trogonometri ' ||
  selector.trim().toLowerCase() === 'trigonometri ' ||
  selector.trim().toLowerCase() === 'tgnm ' ||
  selector.trim().toLowerCase() === 'tri' ||
  selector.trim().toLowerCase() === 'tgm' ||
  selector.trim().toLowerCase() === 'tgm '
) {
  trigonometri.style.display = 'flex'
  //trigonometri.style.animation ='animasi2 1.2s 1 ease forwards';
  selhid.style.display = 'none'
//ketika close item di klik di container
document.querySelector('.container4 .close-icontri').onclick = (e) =>{
    trigonometri.style.animation ='animasi 2s 1 ease forwards';
    trigonometri.style.display = 'none'
    container3.style.animation = 'animasi 1.2s 1 ease forwards';
    selhid.style.display = 'flex'
};
}
else if (selector.trim().toLowerCase() === 'matriks' ||
    selector.trim().toLowerCase() === 'matrik' ||
    selector.trim().toLowerCase() === 'matrix' ||
    selector.trim().toLowerCase() === 'mtx' ||
    selector.trim().toLowerCase() === 'mtrk' ||
    selector.trim().toLowerCase() === 'mtrks' ||
    selector.trim().toLowerCase() === 'mtrx'){
    matriks.style.display = 'flex'
    //persegi.style.animation ='animasi2 1.2s 1 ease forwards';
    selhid.style.display = 'none'
//ketika close item di klik di container
  document.querySelector('.container5 .close-icon').onclick = (e) =>{
  matriks.style.animation ='animasi 2s 1 ease forwards';
  matriks.style.display = 'none'
  container3.style.animation = 'animasi 1.2s 1 ease forwards';
  selhid.style.display = 'flex'
};
  }
  else {
    alert('maaf operasi hitung baru ada untuk persegi panjang dan segitiga, untuk info daftar operasi ada di icon i di pojok kanan atas');
  }
  
}

var inf1 = document.querySelector('#infotrii');
  // toggle info untuk trigonometri 
document.querySelector('.infortri #informasi1').onclick = (e) =>{
  inf1.style.display = 'flex';
  inf1.style.animation = 'animasi3 1s 1 forwards';
  e.preventDefault();
};

// ketika close item di klik di bagian trigonometri
document.querySelector('.inf1 .close-icon1').onclick = (e) =>{
  inf1.style.display = 'none';
  e.preventDefault();
};

// function segitiga 
//parseFloat mengubah data yang awalnya string menjadi number(angka).
function hitungSimir() {
   var a = parseFloat(document.querySelector('#a').value);
   var b = parseFloat(document.querySelector('#b').value);
   var c = parseFloat(document.querySelector('#c').value);
   var hasilHidden = document.querySelector('.cara');
   var hasilOperasiSgt = ''; //untuk menyimpan string 

   // Periksa apakah salah satu dari nilai a, b, atau c tidak diisi
   if (isNaN(a) && !isNaN(b) && !isNaN(c)) {
     // Hitung nilai a menggunakan rumus Pythagoras
     a = Math.sqrt(c*c - b*b);
     document.querySelector('#a').value = a;
     hasilOperasiSgt = `sisi a = (${c}×${c})-(${b}×${b}) = ${a}`;
   } else if (!isNaN(a) && isNaN(b) && !isNaN(c)) {
     // Hitung nilai b menggunakan rumus Pythagoras
     b = Math.sqrt(c*c - a*a);
     document.querySelector('#b').value = b;
     hasilOperasiSgt = `sisi b = (${c}×${c})-(${a}×${a}) = ${b}`;
   } else if (!isNaN(a) && !isNaN(b) && isNaN(c)) {
     // Hitung nilai c menggunakan rumus Pythagoras
     c = Math.sqrt(a*a + b*b);
     document.querySelector('#c').value = c;
     hasilOperasiSgt = `sisi c = (${a}×${a})+(${b}×${b}) = ${c}`;
   } else {
     alert('kosongkan satu kolom yang ingin di hitung, contoh ingin menghitung c (maka isi a dan b) c nya di kosongi');
     return;
   }
    document.querySelector('.hasil-p').textContent = hasilOperasiSgt;
    
    hasilHidden.style.display = 'flex';
}

// function persegi panjang 
function hitungLuas() {
   var panjang = parseFloat(document.querySelector('#panjang').value);
   var lebar = parseFloat(document.querySelector('#lebar').value);
   var luas = parseFloat(document.querySelector('#hasil').value);
   var caraPp = document.querySelector('.caraPp');
   var hasilOperasi = ''; //untuk menyimpan string 
   
 // Periksa apakah salah satu dari nilai panjang, lebar, atau luas tidak diisi ( (!isNaN) berarti nilainya diketahui,jika (isNaN) nilainya belum di ketahui dan itu yang akan di hitung) (&& artinya dan )
 if (!isNaN(panjang) && !isNaN(lebar) && isNaN(luas)) {
     var luas = panjang*lebar;
     document.querySelector('#hasil').value = luas
     //mengisi hasil operasi yang akan di tampilkan 
     hasilOperasi = `luas = ${panjang}×${lebar} 
     = ${luas}`;
   }
   else if (isNaN(panjang) && !isNaN(lebar) && !isNaN(luas)) {
     var panjang = luas/lebar;
     document.querySelector('#panjang').value = panjang;
     hasilOperasi = `P = ${luas}/${lebar} = ${panjang}`;
   }
   else if (!isNaN(panjang) && isNaN(lebar) && !isNaN(luas)) {
     var lebar = luas/panjang;
     document.querySelector('#lebar').value = lebar;
     hasilOperasi = `l = ${luas}/${panjang} = ${lebar}`;
   } else {
    alert('kosongkan satu kolom yang ingin di hitung, contoh ingin menghitung luas (maka isi panjang dan lebar) luasnya di kosongi');
    return; 
  }
   //menampilkan hasil operasi 
   document.querySelector('.hasil-p-Pp').textContent = hasilOperasi;
   
   caraPp.style.display = 'flex';
}

// finction trigonometri
function hitungSudutIstime() {
  var sinCosTan = document.querySelector('#sinCosTan').value;
  var derajat = document.querySelector('#derajat').value;
  var sudutInput = document.querySelector('#sudutIstimewa');
  var caraTri = document.querySelector('.caraTri');
  var operasiTri = '';
  var hasilTri = '';

//selector derajat dan kuadran 
  if (!isNaN(derajat)) {
    var kuadran = '';
    var deg = '';
    var hasilSdt1 = '';
    var hasilSdt2 = '';
    var hasilSdt3 = '';
  //selector derajat negatif/positif 
    if ((derajat >= -1 && derajat < 91) || (derajat>=-90 && derajat<0)) {
      kuadran = 1;
      deg = derajat - 0;
    } else if ((derajat >= 90 && derajat < 181) || (derajat >= -180 && derajat < -90)) {
    kuadran = 2;
    //seleksi derajat negatif/positif 
    if (derajat >= 90) {
        deg = 180 - derajat;
    } else if (derajat >= -180 && derajat < -91) {
        deg = Math.abs(derajat) - 180;// Menggunakan derajat tanpa nilai mutlak (Math.abs)
    }
  }else if ((derajat >= 180 && derajat < 271)  || (derajat >= -270 && derajat < -181)){
      kuadran = 3;
  //seleksi derajat negatif/positif 
          if (derajat >= 180) {
            deg = derajat -180;
          } else if (derajat >= -270 && derajat < -181) {
            deg = 180 - Math.abs(derajat);//math.abs mengubah - menjadi +, atau mengubah menjadi default 
          }
    } else if ((derajat >= 270 && derajat < 361) || (derajat >= -360 && derajat < -271)) {
      kuadran = 4;
     //seleksi derajat negatif/positif 
          if (derajat >= 270) {
            deg = 360 - derajat;
          } else if (derajat >= -360 && derajat < -271) {
            deg = Math.abs(derajat) - 360;
    }
    }
// selector untuk hitung sin/cos/tan
    if (sinCosTan.trim().toLowerCase() === 'sin' || sinCosTan.trim().toLowerCase() === 'sin ') {
      hasilSdt1 = hitungSin(deg, kuadran);
      sudutInput.value = hasilSdt1;
     operasiTri = `sin${derajat}°=${
       //seleksi masuk kuadran berapa 
       (kuadran === 1) ? `${derajat} - 0 `:
       (kuadran === 2) ?
     // seleksi derajat positif/negatif 
       (derajat >= 90) ? `180 - ${derajat}` :
       (derajat < -90) ? `-180 -( ${derajat})` :
              '' : // string ' ' supaya tidak eror
       (kuadran === 3) ?
       // seleksi derajat positif/negatif 
       (derajat >= 180) ? `${derajat} -180` :
       (derajat < -180) ? `180${derajat}` :
              '' :
       (kuadran === 4) ?
      // seleksi derajat positif/negatif 
       (derajat >= 270) ? `360 - ${derajat}` :
       (derajat < -271) ? `-360-(${derajat})` :
              '' : ''
  }
      = ${deg}`;
      hasilTri = ` sin${deg}°= ${hasilSdt1} (kuadran${kuadran})`;
      
    } else if (sinCosTan.trim().toLowerCase() === 'cos' || sinCosTan.trim().toLowerCase() === 'cos ') {
      hasilSdt2 = hitungCos(deg, kuadran);
      sudutInput.value = hasilSdt2;
      operasiTri = `cos${derajat}°=${
       //seleksi masuk kuadran berapa 
          (kuadran === 1) ? `${derajat} - 0` :
          (kuadran === 2) ?
       // seleksi derajat positif/negatif 
          (derajat >= 90) ? `180 - ${derajat}` :
          (derajat < -90) ? `-180 -( ${derajat})` :
          '' : // string ' ' supaya tidak eror
          (kuadran === 3) ?
        // seleksi derajat positif/negatif 
          (derajat >= 180) ? `${derajat} -180` :
          (derajat < -180) ? `180${derajat}` :
                          '' :
          (kuadran === 4) ?
        // seleksi derajat positif/negatif 
          (derajat >= 270) ? `360 - ${derajat}` :
          (derajat < -271) ? `-360-(${derajat})` :
               '' : ''
 } 
            = ${deg}`;
      hasilTri = ` cos${deg}°= ${hasilSdt2} (kuadran${kuadran})`;
      
    } else if (sinCosTan.trim().toLowerCase() === 'tan' || sinCosTan.trim().toLowerCase() === 'tan ') {
      hasilSdt3 = hitungTan(deg, kuadran);
      sudutInput.value = hasilSdt3;
      operasiTri = `tan${derajat}°=${
              //seleksi masuk kuadran berapa 
              (kuadran === 1) ? `${derajat} - 0` :
              (kuadran === 2) ?
              // seleksi derajat positif/negatif 
              (derajat >= 90) ? `180 - ${derajat}` :
              (derajat < -90) ? `-180 -( ${derajat})` :
              '' : // string ' ' supaya tidak eror
              (kuadran === 3) ?
              // seleksi derajat positif/negatif 
              (derajat >= 180) ? `${derajat} -180` :
              (derajat < -180) ? `180${derajat}` :
              '' :
              (kuadran === 4) ?
              // seleksi derajat positif/negatif 
              (derajat >= 270) ? `360 - ${derajat}` :
              (derajat < -271) ? `-360-(${derajat})` :
              '' : ''
            } 
            = ${deg}`;
      hasilTri = `tan${deg}°= ${hasilSdt3} (kuadran${kuadran})`;
      
    }
    document.querySelector('.hasil-p-tri').textContent = operasiTri;
    document.querySelector('.hasil-p-tri1').textContent = hasilTri;
    caraTri.style.display = 'flex';
  }
}

//function hitung sin
function hitungSin(deg, kuadran) {
  if (kuadran == 1 || kuadran == 2) {
    if (deg <= -30) {
      return '-' + hitungSinEnd(deg);
    }
    else if (deg >= 30) {
      return hitungSinEnd(deg);
    }
  } else if (kuadran == 3 || kuadran == 4) {
    if (deg <= -30) {
      return hitungSinEnd(deg);
    }
    else if (deg >= 30) {
      return '-' + hitungSinEnd(deg);
    }
  }
}

// function untuk jawaban sudut istimewa
function hitungSinEnd(deg) {
  var sudut1 = '';

  if (deg == 30) {
    sudut1 = '1/2';
  } else if (deg == 45) {
    sudut1 = '1/2√2';
  } else if (deg == 60) {
    sudut1 = '1/2√3';
  } else if (deg == 90) {
    sudut1 = '1';
  } else if (deg == 0) {
    sudut1 = '0';
  }
  else if(deg == -30) {
    sudut1 = '1/2';
  } else if (deg == -45) {
    sudut1 = '1/2√2';
  } else if (deg == -60) {
    sudut1 = '1/2√3';
  } else if (deg == -90) {
    sudut1 = '1';
  } else {
    sudut1 = 'belum tersedia';
  }
  return sudut1;
}
//function hitung cos
function hitungCos(deg, kuadran) {
  if (kuadran == 1 || kuadran == 4) {
    if (deg <= -30) {
      return '-' + hitungCosEnd(deg);
    }
    else if (deg >= 30) {
      return hitungCosEnd(deg);
    }
  } else if (kuadran == 3 || kuadran == 2) {
    if (deg <= -30) {
      return hitungCosEnd(deg);
    }
    else if (deg >= 30) {
      return '-' + hitungCosEnd(deg);
    }
  }
}

// function untuk jawaban sudut istimewa
function hitungCosEnd(deg) {
  var sudut = '';

  if (deg == 30) {
    sudut = '1/2√3';
  } else if (deg == 45) {
    sudut = '1/2√2';
  } else if (deg == 60) {
    sudut = '1/2';
  } else if (deg == 90) {
    sudut = '0';
  } else if (deg == 0) {
    sudut = '1';
  }
  else if(deg == -30) {
    sudut = '1/2√3';
  } else if (deg == -45) {
    sudut = '1/2√2';
  } else if (deg == -60) {
    sudut = '1/2';
  }else if (deg == -90) {
    sudut = '0';
  }else if (deg == 0 ) {
    sudut = '1';
  }else {
    sudut = 'belum tersedia';
  }
  return sudut;
}
//function hitung tan
function hitungTan(deg, kuadran) {
  if (kuadran == 1 || kuadran == 3) {
    if (deg <= -30) {
      return '-' + hitungTanEnd(deg);
    }
    else if (deg >= 30) {
      return hitungTanEnd(deg);
    }
  } else if (kuadran == 4 || kuadran == 2) {
    if (deg <= -30) {
      return hitungTanEnd(deg);
    }
    else if (deg >= 30) {
      return '-' + hitungTanEnd(deg);
    }
  }
}

// function untuk jawaban sudut istimewa
function hitungTanEnd(deg) {
  var sudut = '';

  if (deg == 30) {
    sudut = '1/3√3';
  } else if (deg == 45) {
    sudut = '1';
  } else if (deg == 60) {
    sudut = '1/3';
  } else if (deg == 90) {
    sudut = 'infinity🔥';
  } else if (deg == 0) {
    sudut = '0';
  } else if (deg == -30) {
    sudut = '1/3√3';
  } else if (deg == -45) {
    sudut = '1';
  } else if (deg == -60) {
    sudut = '1/3';
  } else if (deg == -90) {
    sudut = 'infinity🔥';
  }else {
    sudut = 'belum tersedia';
  }
  //return menampilkan sudut 
  return sudut;
}

//function matriks
function pilihOrdo() {
  const selectedOrdo = document.getElementById('selectOrdo').value;
  const container11 = document.querySelector('.container11');
  const container12 = document.querySelector('.container12');
  const ordo = document.querySelector('.container5');

  if (selectedOrdo === '2') {
    container11.style.display = 'flex';
    ordo.style.display = 'none';
    //ketika close item di klik di container
document.querySelector('.container11 .close-iconmat').onclick = (e) =>{
container11.style.animation ='animasi 2s 1 ease forwards';
container11.style.display = 'none'
ordo.style.animation = 'animasi 1.2s 1 ease forwards';
ordo.style.display = 'flex'
};
  } else if (selectedOrdo === '3') {
    ordo.style.display = 'none';
    container12.style.display = 'flex';
     //ketika close item di klik di container
document.querySelector('.container12 .close-iconmat').onclick = (e) =>{
container12.style.animation ='animasi 2s 1 ease forwards';
container12.style.display = 'none'
ordo.style.animation = 'animasi 1.2s 1 ease forwards';
ordo.style.display = 'flex'
};
  } else {
    console.error('Ordo tidak valid.');
  }
}
let infmat = document.querySelector('#matinf');
  // toggle info untuk matriks
document.querySelector('.informat #informasi1').onclick = (e) =>{
  infmat.style.display = 'flex';
  infmat.style.animation = 'animasi3 1s 1 forwards';
  e.preventDefault();
};
document.querySelector('.informat2 #informasi1').onclick = (e) =>{
  infmat.style.display = 'flex';
  infmat.style.animation = 'animasi3 1s 1 forwards';
  e.preventDefault();
};
// ketika close item di klik di bagian matriks
document.querySelector('.inf2 .close-icon2').onclick = (e) =>{
  infmat.style.display = 'none';
  e.preventDefault();
};


//invers matriks 3*3
function hitungInvers() {
  let baris1 = document.querySelector('#baris1').value;
  let baris2 = document.querySelector('#baris2').value;
  let baris3 = document.querySelector('#baris3').value;
  let cara = document.querySelector('#cara');
  let matrix = [];

  // Menggunakan split untuk memisahkan nilai setiap baris
  let bar1 = baris1.split(',').map(value => parseFloat(value) || 0);
  let bar2 = baris2.split(',').map(value => parseFloat(value) || 0);
  let bar3 = baris3.split(',').map(value => parseFloat(value) || 0);

  matrix.push(bar1, bar2, bar3);

  // Menghitung invers matriks
  let inverseMatrix = numeric.inv(matrix);

  // Mengonversi matriks ke dalam bentuk string untuk ditampilkan
  let matrixString = matrix.map(row => row.join(', ')).join('<br>');

  // Mengonversi invers matriks ke dalam bentuk string untuk ditampilkan
  let inverseMatrixString = inverseMatrix.map(row => row.join(', ')).join('<br>');

  // Menetapkan hasil matriks dan invers ke dalam elemen dengan class 'hasil-p-Pp'
  document.querySelector('.hasil-p-Pp').innerHTML = "Matriks Awal:";
  document.querySelector('.hasil-p-Pp1').innerHTML = matrixString;
  document.querySelector('.hasil-p-Pp2').innerHTML = "invers matrix:";
  document.querySelector('.hasil-p-Pp3').innerHTML = inverseMatrixString;
  // Menampilkan elemen dengan id 'cara'
  cara.style.display = 'flex';
  
  
  
}
//invers matriks 2*2
function hitungInvMat() {
  let baris11 = document.querySelector('#baris11').value;
  let baris22 = document.querySelector('#baris22').value;
  let baris33 = document.querySelector('#baris33').value;
  let baris44 = document.querySelector('#baris44').value;
  let cara2 = document.querySelector('.caraInv2');
  let inv = '';
  let inv1 = '';
  let inv2 = '';
  let inv3 = '';
  
  if (!isNaN(baris11) && !isNaN(baris22) && !isNaN(baris33) && !isNaN(baris44)) {
   let det = (baris11*baris44)-(baris22*baris33);
   inv = baris44/det;
   inv1 = -baris22/det;
   inv2 = -baris33/det;
   inv3 = baris11/det;
   
  document.querySelector('.hasil-p-Ppp').textContent = "matriks nya:";
  document.querySelector('.hasil-p-Pp11').textContent = `${baris11} ${baris22}`;
  document.querySelector('.hasil-p-Pp22').textContent = `${baris33} ${baris44}`;
  document.querySelector('.hasil-p-Pp33').textContent = "invers matriks:";
  document.querySelector('.hasil-p-Pp44').textContent = `${inv} ${inv1}`;
  document.querySelector('.hasil-p-Pp55').textContent = `${inv2} ${inv3}`;
  // Menampilkan elemen dengan id 'cara'
  cara2.style.display = 'flex';
  } else {
    alert('maaf masukkan angka ya 😁')
  } 
  
}

// invers matriks 3×3 ribet
function invRibet() {
    let baris12 = document.querySelector('#nilai1').value;
    let baris23 = document.querySelector('#nilai2').value;
    let baris34 = document.querySelector('#nilai3').value;
    let baris45 = document.querySelector('#nilai4').value;
    let baris56 = document.querySelector('#nilai5').value;
    let baris67 = document.querySelector('#nilai6').value;
    let baris78 = document.querySelector('#nilai7').value;
    let baris89 = document.querySelector('#nilai8').value;
    let baris90 = document.querySelector('#nilai9').value;
    const caraRibet = document.querySelector('.inversCara');
    let inv = '';
    let inv1 = '';
    let inv2 = '';
    let inv3 = '';
    let inv4 = '';
    let inv5 = '';
    let inv6 = '';
    let inv7 = '';
    let inv8 = '';
    if (!isNaN(baris12) && !isNaN(baris23) && !isNaN(baris34) && !isNaN(baris45) && !isNaN(baris56) && !isNaN(baris67) && !isNaN(baris78) && !isNaN(baris89) && !isNaN(baris90)) {
      
      let det = 1/(((baris12*baris56*baris90) + (baris23*baris67*baris78) + (baris34*baris45*baris89)) - ((baris23*baris45*baris90)+(baris12*baris67*baris89)+(baris34*baris56*baris78))) ;
      //baris1
      inv = ((baris56*baris90)-(baris67*baris89))*det;
      inv1 = (-((baris23*baris90)-(baris34*baris89)))*det;
      inv2 = ((baris23*baris67)-(baris34*baris56))*det;
      //baris2
      inv3 = (-((baris45*baris90)-(baris67*baris78)))*det;
      inv4 = ((baris12*baris90)-(baris34*baris78))*det;
      inv5 = (-((baris12*baris67)-(baris34*baris45)))*det;
      //baris3
      inv6 = ((baris45*baris89)-(baris56*baris78))*det;
      inv7 = (-((baris12*baris89)-(baris23*baris78)))*det;
      inv8 = ((baris12*baris56)-(baris23*baris45))*det;
      
      
    document.querySelector('.hasil-p-Pp0').textContent = "matriks nya:";
    document.querySelector('.hasil-p-Pp12').textContent = `${baris12} ${baris23} ${baris34}`;
    document.querySelector('.hasil-p-Pp23').textContent = `${baris45} ${baris56} ${baris67}`;
    document.querySelector('.hasil-p-Pp34').textContent = `${baris78} ${baris89} ${baris90}`;
    document.querySelector('.hasil-p-Pp45').textContent = "invers matriks:";
    document.querySelector('.hasil-p-Pp56').textContent = `|${inv} ,     ${inv1}     , ${inv2}|` ;
    document.querySelector('.hasil-p-Pp67').textContent = `|${inv3} ,     ${inv4}   ,   ${inv5}|`;
    document.querySelector('.hasil-p-Pp78').textContent = `|${inv6}  ,    ${inv7}    ,  ${inv8}|`;
    // Menampilkan elemen dengan id 'cara'
    caraRibet.style.display = 'flex';
    }
    else {
      alert('masukkan nilai ')
    }
}