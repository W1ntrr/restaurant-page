import restaurantPage from '../images/Restaurant-Image.jpg';

export function loadAboutPage() {
  const content = document.getElementById('content');
  const aboutWrapper = document.createElement('section');
  aboutWrapper.classList.add('about-wrapper');

  const aboutImg = document.createElement('div');
  aboutImg.classList.add('about-img');

  const aboutSection = document.createElement('div');
  aboutSection.classList.add('about-section');

  const img = document.createElement('img');
  img.src = restaurantPage;

  const aboutHeading = document.createElement('h2');
  aboutHeading.textContent = 'About';

  const aboutIntro = document.createElement('p');
  aboutIntro.textContent =
    "At Food, we're all about bold flavors, real ingredients, and a fast, fresh experience every time.";

  const aboutDetails = document.createElement('p');
  aboutDetails.textContent =
    'Founded with the idea that healthy and delicious can go hand in hand, Food blends global inspiration with local produce to craft seasonal dishes that hit just right. Whether you’re dining in or grabbing a bite on the go, our chefs serve up handcrafted meals made from scratch — no shortcuts, no compromises.';

  content.appendChild(aboutWrapper);
  aboutWrapper.appendChild(aboutImg);
  aboutImg.appendChild(img);
  aboutWrapper.appendChild(aboutSection);
  aboutSection.appendChild(aboutHeading);
  aboutSection.appendChild(aboutIntro);
  aboutSection.appendChild(aboutDetails);
}
