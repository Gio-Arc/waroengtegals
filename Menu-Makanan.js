const menu = [
    { name: "Nasi Goreng", price: 15000 },
    { name: "Mie Ayam", price: 12000 },
    { name: "Sate Ayam", price: 20000 },
    { name: "Es Teh", price: 5000 },
    { name: "Es Jeruk", price: 7000 }
];

const menuList = document.getElementById('menu-list');
const orderList = document.getElementById('order-list');
const totalPriceEl = document.getElementById('total-price');
let totalPrice = 0;

menu.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - Rp ${item.price}`;
    listItem.addEventListener('click', () => {
        const orderItem = document.createElement('li');
        orderItem.textContent = item.name;
        orderList.appendChild(orderItem);

        totalPrice += item.price;
        totalPriceEl.textContent = totalPrice;
    });
    menuList.appendChild(listItem);
});
