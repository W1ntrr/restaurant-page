import heroFood from '../images/food.png';
import { loadAboutPage } from './about.js';

export function loadHomePage() {
  const content = document.getElementById('content');

  const hero = document.createElement('section');
  hero.classList.add('hero');

  const leftSection = document.createElement('div');
  leftSection.classList.add('left-section');

  const restaurantTitle = document.createElement('h1');
  restaurantTitle.classList.add('restaurant-title');
  restaurantTitle.textContent = 'Food';

  const description = document.createElement('p');
  description.classList.add('description');
  description.textContent =
    'Bold flavors, fresh & fast—chef—crafted seasonal dishes served in minutes.';

  const actionContainer = document.createElement('div');
  actionContainer.classList.add('action-container');

  const learnMoreBtn = document.createElement('button');
  learnMoreBtn.classList.add('learn-more-btn');
  learnMoreBtn.textContent = 'Learn More';
  learnMoreBtn.addEventListener('click', () => {
    content.innerHTML = '';
    loadAboutPage();
  });

  const rightSection = document.createElement('div');
  rightSection.classList.add('right-section');

  const heroImg = document.createElement('img');
  heroImg.src = heroFood;
  heroImg.alt = 'hero';
  heroImg.classList.add('hero-image');

  content.appendChild(hero);
  hero.appendChild(leftSection);
  leftSection.appendChild(restaurantTitle);
  leftSection.appendChild(description);
  leftSection.appendChild(actionContainer);
  actionContainer.appendChild(learnMoreBtn);
  hero.appendChild(rightSection);
  rightSection.appendChild(heroImg);
}
