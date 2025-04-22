export function createDishCard(dishList, containerElement) {
  dishList.forEach((dish) => {
    const dishEl = document.createElement('div');
    dishEl.classList.add('dish');
    containerElement.appendChild(dishEl);

    const dishImage = document.createElement('div');
    dishImage.classList.add('dish-image');
    dishEl.appendChild(dishImage);

    const img = document.createElement('img');
    dishImage.appendChild(img);
    img.src = dish.image;

    const dishInfo = document.createElement('div');
    dishInfo.classList.add('dish-info');
    dishEl.appendChild(dishInfo);

    const dishTitle = document.createElement('h2');
    dishTitle.classList.add('dish-title');
    dishTitle.textContent = dish.title;
    dishInfo.appendChild(dishTitle);

    const dishPrice = document.createElement('p');
    dishPrice.classList.add('dish-price');
    dishPrice.textContent = dish.price;
    dishInfo.appendChild(dishPrice);

    const dishOrderBtn = document.createElement('button');
    dishOrderBtn.classList.add('dish-order-btn');
    dishOrderBtn.textContent = 'Order Now';
    dishInfo.appendChild(dishOrderBtn);
  });
}
