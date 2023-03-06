class CatItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set cat(cat) {
    this._cat = cat;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
          <style>
          img{
            width: 100%;
            max-height: 500px;
            object-fit: cover;
            object-position: center;
            }
          #card{
            justify-content: center;
            align-item: center;
            padding: 5rem;
            padding-bottom: 10px;
            padding-top: 1rem;
            border: 5px rgb(196, 22, 22);
            border-radius: 10px;

          }

          article{
            text-align: start;
          }

          .item-card{
            border: 5px rgb(196, 22, 22);
            border-radius: 10px;
          }

          .post-item__title{
            text-align: center;
          }
  
          </style>
            <div id='card' class='cat-list'>
              <div tabindex="0" class="item-card">
              <article class="post-item">
              <h1 tabindex="0" class="post-item__title">${this._cat.name}</h1>
                <img tabindex="0" class="post-item__thumbnail" src="${this._cat.image_link}" alt="${this._cat.name}">
                <div tabindex="0" class="post-item__content">
                  <h2 tabindex="0" class="post-item__origin">From: ${this._cat.origin}</h2>
                  <p tabindex="0" class="post-item__city">Children Friendly: ${this._cat.children_friendly}</p>
                  <p tabindex="0" class="post-item__city">Family Friendly: ${this._cat.family_friendly}</p>
                </div>
              </article>
            </div>
           </div>

        
            `;
  }
}
customElements.define('cat-item', CatItem);
