import beefWellingtonImg from '../images/food/beef-wellington.jpg';
import lobsterImg from '../images/food/lobster-thermidor.jpg';
import branzinoImg from '../images/food/pan-seared-branzino.jpg';
import steakTartareImg from '../images/food/steak-tartare.jpg';
import operaCakeImg from '../images/food/opera-cake.jpg';
import tarteTatinImg from '../images/food/tarte-tatin.jpg';
import moltenChocolateFondantImg from '../images/food/molten-chocolate-fondant.jpg';
import foieGrasImg from '../images/food/foie-gras.jpg';
import searedScallopsImg from '../images/food/seared-scallops.jpg';

export const menuData = {
  Appetizers: [
    {
      title: 'Steak Tartare',
      price: '$18.00',
      image: steakTartareImg,
    },

    {
      title: 'Seared Scallops',
      price: '$30.95',
      image: searedScallopsImg,
    },

    {
      title: 'Foie Gras',
      price: '$35.00',
      image: foieGrasImg,
    },
  ],
  Dessert: [
    {
      title: 'Beef Wellington',
      price: '$79.00',
      image: beefWellingtonImg,
    },

    {
      title: 'Lobster Thermidor',
      price: '$54.00',
      image: lobsterImg,
    },

    {
      title: 'Pan-Seared Branzino',
      price: '$30.00',
      image: branzinoImg,
    },
  ],
  'Main Course': [
    {
      title: 'Opera Cake',
      price: '$5.25',
      image: operaCakeImg,
    },

    {
      title: 'Molten Chocolate Foundant',
      price: '$12.00',
      image: moltenChocolateFondantImg,
    },

    {
      title: 'Tarte Tatin',
      price: '$13.00',
      image: tarteTatinImg,
    },
  ],
};
