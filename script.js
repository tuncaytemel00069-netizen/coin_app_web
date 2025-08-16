let balance = 0.0;
let energy = 100; // yüzde
const balanceEl = document.getElementById("balance");
const energyBar = document.getElementById("energy-bar");
const tapBtn = document.getElementById("tap-btn");

// Tıklama ile coin kazanma
tapBtn.addEventListener("click", () => {
  if (energy > 0) {
    balance += 0.000300;
    energy -= 1; // %1 azalsın
    updateUI();
  } else {
    alert("Enerjin bitti! Beklemen lazım.");
  }
});

// Her 3 saniyede enerji %5 artsın
setInterval(() => {
  if (energy < 100) {
    energy += 5;
    if (energy > 100) energy = 100;
    updateUI();
  }
}, 3000);

// Arayüzü güncelle
function updateUI() {
  balanceEl.innerText = "Bakiye: " + balance.toFixed(6);
  energyBar.style.width = energy + "%";
}
