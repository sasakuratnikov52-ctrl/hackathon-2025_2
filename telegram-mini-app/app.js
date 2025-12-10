// Инициализация Telegram Mini App
const tg = window.Telegram.WebApp;

// Расширяем на весь экран и показываем интерфейс
tg.expand();
tg.ready();

// Получаем данные пользователя
const user = tg.initDataUnsafe.user;

// Отображаем ID пользователя, если он есть
if (user) {
    document.getElementById('user-id').textContent = user.id;
} else {
    document.getElementById('user-id').textContent = 'не получен (откройте через Telegram)';
}

// Логируем объект для отладки
console.log('Telegram WebApp:', tg);
console.log('User:', user);