let coins = 0.000000;
let profitPerClick = 0.000300;
let energy = 500;

const coinDisplay = document.getElementById("coinDisplay");
const energyText = document.getElementById("energyText");
const energyBar = document.getElementById("energyBar");
const coinBtn = document.getElementById("coinBtn");

coinBtn.addEventListener("click", () => {
  if (energy > 0) {
    coins += profitPerClick;
    energy--;

    // coin sayısını 6 basamaklı yazdır
    coinDisplay.textContent = coins.toFixed(6) + " USDT";

    // enerji güncelle
    energyText.textContent = energy + "/500";
    energyBar.style.width = (energy / 500) * 100 + "%";
  }
});
