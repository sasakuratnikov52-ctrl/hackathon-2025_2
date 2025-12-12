// === 1. Поддержка Telegram Mini App ===
const tg = window.Telegram.WebApp;
tg.expand(); // раскрывает окно Mini App


// === 2. Инициализируем TON Connect ===
const connector = new TON_CONNECT.TonConnect({
    manifestUrl: "https://https://flamboyantly-charitable-ram.cloudpub.ru:443/tonconnect-manifest.json"
});


// === 3. Кнопка подключения ===
const connectBtn = document.getElementById("connect");
const status = document.getElementById("status");


// === 4. Обработчик подключения ===
connectBtn.onclick = async () => {
    try {
        const wallet = await connector.connect(); // открывает список кошельков

        status.innerHTML = `
            <b>Wallet connected!</b><br>
            Address: ${wallet.account.address}
        `;
    } catch (e) {
        status.innerHTML = "Подключение отменено.";
        console.log("Canceled:", e);
    }
};


// === 5. Проверяем, подключён ли кошелёк уже ===
connector.onStatusChange((wallet) => {
    if (wallet) {
        status.innerHTML = `
            <b>Wallet already connected:</b><br>
            ${wallet.account.address}
        `;
    }
});