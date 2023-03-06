import createLingPage from '../template/lingkungan-template';
import dataLing from '../../data/lingkungan-data';

const Lingkungan = {
  async render() {
    return `
    <div class="latest">
        <h1 class="latest__label">Perhatikan Lingkungan Sekitar Untuk Hewan Anda</h1>
        <div class="posts"></div>
    </div>
        `;
  },

  async afterRender() {
    const lingContainer = document.querySelector('.posts');
    lingContainer.innerHTML += createLingPage(dataLing);
  },
};

export default Lingkungan;
