/* eslint-disable no-unused-vars */
import 'regenerator-runtime';
// Import our custom CSS
import '../styles/main.scss';
import '../styles/responsive.scss';
import * as bootstrap from 'bootstrap';
import App from './view/app';

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
