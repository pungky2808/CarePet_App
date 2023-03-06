import createCatHealthTemp from '../template/cat-health-template';

const catHealth = {
  async render() {
    return `
    <div class='cat-health-page'></div>
   `;
  },

  async afterRender() {
    const catHealthContainer = document.querySelector('.cat-health-page');
    catHealthContainer.innerHTML += createCatHealthTemp;
  },
};

export default catHealth;
