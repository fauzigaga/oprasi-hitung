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
  var persegi = document.querySelector('.container1');
  var segitiga = document.querySelector('.container2');
  var trigonometri = document.querySelector('.container4');
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
  document.querySelector('.container4 .close-icon').onclick = (e) =>{
    trigonometri.style.animation ='animasi 2s 1 ease forwards';
    trigonometri.style.display = 'none'
    container3.style.animation = 'animasi 1.2s 1 ease forwards';
    selhid.style.display = 'flex'
};
}
  else {
    alert('maaf operasi hitung baru ada untuk persegi panjang dan segitiga, untuk info daftar operasi ada di icon i di pojok kanan atas');
  }
  
}

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
     alert('Masukkan satu nilai yang tidak diisi untuk dihitung');
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
    var hasilSdt = '';
  //selector derajat negatif/positif 
    if ((derajat >= 0 && derajat < 91) || (derajat>=-90 && derajat<0)) {
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
    } else {
      kuadran = '2×';
    }
    }
// selector untuk hitung sin/cos/tan
    if (sinCosTan.trim().toLowerCase() === 'sin' || sinCosTan.trim().toLowerCase() === 'sin ') {
      hasilSdt = hitungSin(deg, kuadran);
      sudutInput.value = hasilSdt;
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
      hasilTri = ` sin${deg}°= ${hasilSdt} (kuadran${kuadran})`;
      
    } else if (sinCosTan.trim().toLowerCase() === 'cos' || sinCosTan.trim().toLowerCase() === 'cos ') {
      hasilSdt = hitungCos(deg, kuadran);
      sudutInput.value = hasilSdt;
      operasiTri = `tan${derajat}°=${
       //seleksi masuk kuadran berapa 
          (kuadran === 1) ? `${derajat} - 0`:
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
      hasilTri = ` cos${deg}°= ${hasilSdt} (kuadran${kuadran})`;
      
    } else if (sinCosTan.trim().toLowerCase() === 'tan' || sinCosTan.trim().toLowerCase() === 'tan ') {
      hasilSdt = hitungTan(deg, kuadran);
      sudutInput.value = hasilSdt;
      operasiTri = `tan${derajat}°=${
              //seleksi masuk kuadran berapa 
              (kuadran === 1) ? `${derajat} - 0` :
              (kuadran === 2) ?
              // seleksi derajat positif/negatif 
              (derajat >= 90) ? `180 - ${derajat}`:
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
      hasilTri = ` tan${deg}°= ${hasilSdt} (kuadran${kuadran})`;
      
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
function hitungSinEnd(deg,degmin) {
  var sudut = '';

  if (deg == 30) {
    sudut = '1/2';
  } else if (deg == 45) {
    sudut = '1/2√2';
  } else if (deg == 60) {
    sudut = '1/2√3';
  } else if (deg == 90) {
    sudut = '1';
  } else if (deg == 0) {
    sudut = '0';
  }
  else if(deg == -30) {
    sudut = '1/2';
  } else if (deg == -45) {
    sudut = '1/2√2';
  } else if (deg == -60) {
    sudut = '1/2√3';
  } else if (deg == -90) {
    sudut = '1';
  } else {
    sudut = 'belum tersedia';
  }
  return sudut;
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
  }else if (deg == -0) {
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
    sudut = 'infinity';
  } else if (deg == 0) {
    sudut = '0';
  } else if (deg == -30) {
    sudut = '1/3√3';
  } else if (deg == -45) {
    sudut = '1';
  } else if (deg == -60) {
    sudut = '1/3';
  } else if (deg == -90) {
    sudut = 'infinity';
  }else {
    sudut = 'belum tersedia';
  }
  //return menampilkan sudut 
  return sudut;
}