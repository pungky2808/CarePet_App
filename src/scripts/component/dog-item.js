class DogItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set dog(dog) {
    this._dog = dog;
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
              <div id='card' class='dog-list'>
                <div tabindex="0" class="item-card">
                <article class="post-item">
                <h1 tabindex="0" class="post-item__title">${this._dog.name}</h1>
                  <img tabindex="0" class="post-item__thumbnail" src="${this._dog.image_link}" alt="${this._dog.name}">
                  <div tabindex="0" class="post-item__content">
                    <p tabindex="0" class="post-item__city">Children Friendly: ${this._dog.good_with_children}</p>
                    <p tabindex="0" class="post-item__city">Strangers Friendly: ${this._dog.good_with_strangers}</p>
                  </div>
                </article>
              </div>
             </div>
  
          
              `;
  }
}
customElements.define('dog-item', DogItem);
