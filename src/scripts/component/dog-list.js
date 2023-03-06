/* eslint-disable no-underscore-dangle */
import './dog-item';

class DogList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set dogs(dogs) {
    this._dogs = dogs;
    this.render();
  }

  renderError(message) {
    this.shadowDOM.innerHTML = '';
    this.shadowDOM.innerHTML += `
        <style>
            .placeholder{
                text-align: center;
                color: #D8D8D8;
            }

            dog-item{
              padding: 10rem;
            }
        </style>
        <h2 class="placeholder">${message} </h2>
        `;
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
        :host{
            display: block;
            box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.2);
            border-radius: 5px;
            padding: 20px;
            margin: 1rem  7rem 2rem 7rem;
            text-align: justify;
            background-color: white;
            
        }

  
        </style>
        `;
    this._dogs.forEach((dog) => {
      const dogItemElement = document.createElement('dog-item');
      dogItemElement.dog = dog;
      this.shadowDOM.appendChild(dogItemElement);
    });
  }
}
customElements.define('dog-list', DogList);
