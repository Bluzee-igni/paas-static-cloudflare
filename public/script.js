// Script interaktivitas client-side untuk pengujian browser
document.querySelector("#cek").addEventListener("click", () => {
  const hasil = document.querySelector("#hasil");
  hasil.textContent = "JavaScript berhasil berjalan di browser.";
  hasil.style.opacity = "1";
});
