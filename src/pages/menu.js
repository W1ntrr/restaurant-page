import { menuData } from '../data/menuData.js';
import { createDishCard } from '../components/menuCard.js';

export function loadMenuPage() {
  const content = document.getElementById('content');

  const container = document.createElement('div');
  container.classList.add('container');

  for (const [category, dishes] of Object.entries(menuData)) {
    const menuCategory = document.createElement('div');
    menuCategory.classList.add('menu-category');
    container.appendChild(menuCategory);

    const menuTitle = document.createElement('div');
    menuTitle.classList.add('menu-category-title');
    menuCategory.appendChild(menuTitle);
    menuTitle.textContent = category;

    const menuDishes = document.createElement('div');
    menuDishes.classList.add('menu-category-dishes');
    menuCategory.append(menuDishes);

    createDishCard(dishes, menuDishes);
  }

  content.appendChild(container);
}
