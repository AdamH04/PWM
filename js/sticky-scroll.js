 window.onscroll = function() {myFunction()};

// panggil navbar
var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

//Menambahkan kelas sticky ketika scroll. Yaitu akan membuat navbar nembel diatas screen. DAn akan kembali jika keatas screen.
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 