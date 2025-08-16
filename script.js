// Başlangıç coin miktarı
let coin = 0.000000;

// Kullanıcı adı
document.getElementById("username").innerText = "Tuncay";

// Bar başlangıç değeri
let barValue = 0;
let barMax = 500;

// Coin değerini güncelleme
function updateCoin() {
    document.getElementById("coinAmount").innerText = coin.toFixed(6) + " USDT";
}

// Bar değerini güncelleme
function updateBar() {
    const barFill = document.getElementById("barFill");
    const barText = document.getElementById("barText");

    barFill.style.width = (barValue / barMax) * 100 + "%";
    barText.innerText = barValue + "/" + barMax;
}

// Barı artırma
function increaseBar(amount) {
    barValue += amount;
    if (barValue > barMax) {
        barValue = 0; // dolunca sıfırlansın
    }
    updateBar();
}

// Click ile coin artırma
function clickProfit() {
    coin += 0.000300;
    updateCoin();
}

// Her 3 saniyede bar +1 artsın
setInterval(() => {
    increaseBar(1);
}, 3000);

// İlk açılışta değerleri göster
updateCoin();
updateBar();
