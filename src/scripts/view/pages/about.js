import aboutData from '../../data/about-data';
import createAboutTemp from '../template/about-template';

const About = {
  async render() {
    return `
    <div class='page-about'>
      <h2 tabindex="0" class="about-carepet">About CarePet</h2>
      <div class='about-page'>
        <div class='about-img'>
          <div class='about-inner'>
            <h2 class='about-title_pet'>CarePet</h2>
          </div>
        </div>
        <div class="about-text_pet">
          <h3>What is CarePet..??</h3>
          <p class="about-desc">CarePet adalah sebuah aplikasi penyedia informasi untuk pemeliharaan binatang peliharaan khususnya anjing dan kucing di Indonesia. Saat ini informasi terkait cara pemeliharaan anjing dan kucing masih susah untuk didapatkan di Indonesia khususnya di pelosok Indonesia. Dengan adanya permasalahan tersebut (kurangnya informasi) kami mengusulkan untuk membuat aplikasi ini berbasis web agar bisa diakses dimana saja dan dengan tujuan untuk memberikan informasi kepada pemilik dan dengan tujuan agar binatang peliharaan terjaga dari segala penyakit dan memanjangkan umur si binatang peliharaan.</p>
        </div>
      </div>

      <h2 tabindex="0" class="about-carepet">About Us</h2>
      <div class="about-card"></div>
      </div>
          `;
  },

  async afterRender() {
    const homeContainer = document.querySelector('.about-card');
    homeContainer.innerHTML += createAboutTemp(aboutData);
  },
};

export default About;
