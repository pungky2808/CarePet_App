import createDogTemp1 from '../template/dog-template';

const Dog = {
  async render() {
    return `
          <div class="row dog-page">
            <div class="card mb-3">
              <img src="../images/dog-type.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h1 class="card-title">Anjing</h1>
                <p class="card-text">Anjing adalah salah satu binatang peliharaan yang diminati, untuk merawatnya dibutuhkan pengetahuan serta panduan yang benar agar anjing bisa hidup lebih lama dan terhindar dari penyakit.</p>
              </div>
            </div>
          </div>
        `;
  },

  async afterRender() {
    const catContainer = document.querySelector('.dog-page');
    catContainer.innerHTML += createDogTemp1;
  },
};

export default Dog;
