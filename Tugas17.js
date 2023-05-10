var data1 = "Saya beLajar bahaSa peMrograman deNgan khUsuk";
var data2 = "Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual.";
var data3 = "Lorem Ipsum";
var output = "";


function ubahHuruf(){
  console.log(data1.toUpperCase());
  console.log(data1.toLowerCase());
  console.log(data2.toUpperCase());
  console.log(data2.toLowerCase());
}

function cekAscii(){

  for (var i = 0; i < 7; i++) {
    // console.log(data3.charCodeAt(i));
    output += data3.charCodeAt(i) + "-";
  }
  // Opsi lain
  // console.log(data3.charCodeAt(0));
  // console.log(data3.charCodeAt(1));
  // console.log(data3.charCodeAt(2));
  // console.log(data3.charCodeAt(3));
  // console.log(data3.charCodeAt(4));
  // console.log(data3.charCodeAt(5));
  // console.log(data3.charCodeAt(6));

  // console.log(data3.charCodeAt(0),"-",data3.charCodeAt(1), ...);
  console.log(output);
}

ubahHuruf();
cekAscii();
