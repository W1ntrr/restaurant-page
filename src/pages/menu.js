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
  const dishes = document.querySelectorAll('.dish');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('pop-in');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  dishes.forEach((dish, index) => {
    dish.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(dish);
  });
  dishes.forEach((dish) => observer.observe(dish));
}
