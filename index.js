// Jalankan setelah HTML siap
document.addEventListener("DOMContentLoaded", () => {

  // Tombol menu & daftar menu
  const menuToggle = document.getElementById("menu-toggle");
  const menuList = document.getElementById("menu-list");

  // Klik untuk buka/tutup menu
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active"); // animasi tombol
    menuList.classList.toggle("show");     // tampilkan menu
  });
});

// Form login
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // stop reload

    let email = document.getElementById("email").value;

    if (email.trim() === "") { // cek kosong
        alert("Email tidak boleh kosong!");
        return;
    }

    window.location.href = "https://www.marvel.com/signin"; // redirect login resmi
});

// Tombol buat akun
document.getElementById("signupLink").addEventListener("click", function() {
    window.location.href = "https://www.marvel.com/signin"; // redirect signup
});
