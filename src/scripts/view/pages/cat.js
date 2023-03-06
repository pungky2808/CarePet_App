import createCatTemp1 from '../template/cat-template';

const Cat = {
  async render() {
    return `
          <div class="row cat-page">
            <div class="card mb-3">
              <img src="../images/cat-head.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h1 class="card-title">Kucing</h1>
                <p class="card-text">Kucing adalah salah satu binatang peliharaan yang diminati, untuk merawatnya dibutuhkan pengetahuan serta panduan yang benar agar kucing bisa hidup lebih lama dan terhindar dari penyakit.</p>
              </div>
            </div>
          </div>
          
        `;
  },

  async afterRender() {
    const catContainer = document.querySelector('.cat-page');
    catContainer.innerHTML += createCatTemp1;
  },
};

export default Cat;
