import './style.css';
import { loadAboutPage } from './pages/about.js';
import { loadContactPage } from './pages/contact.js';
import { loadHomePage } from './pages/home.js';

const content = document.getElementById('content');
const tabButtons = document.querySelectorAll('nav button');

const tabs = ['Home', 'About', 'Contact'];

loadHomePage();
initializeTabButtons();

function initializeTabButtons() {
  tabButtons.forEach((tab, index) => {
    tab.setAttribute('data-tab', tabs[index]);
    tab.addEventListener('click', () => {
      const tabId = tab.getAttribute('data-tab');
      switchTab(tabId);
    });
  });
}

function switchTab(tab) {
  content.innerHTML = '';
  switch (tab) {
    case 'Home':
      loadHomePage();
      break;
    case 'About':
      loadAboutPage();
      break;
    case 'Contact':
      loadContactPage();
      break;
    default:
      console.error(`Unknown Tab: ${tab}`);
  }
}
