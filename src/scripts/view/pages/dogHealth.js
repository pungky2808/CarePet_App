import createDogHealthTemp from '../template/dog-health-template';

const dogHealth = {
  async render() {
    return `
    <div class='dog-health-page'></div>
   `;
  },

  async afterRender() {
    const dogHealthContainer = document.querySelector('.dog-health-page');
    dogHealthContainer.innerHTML += createDogHealthTemp;
  },
};

export default dogHealth;
