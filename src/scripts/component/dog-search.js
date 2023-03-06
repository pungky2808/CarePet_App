/* eslint-disable no-underscore-dangle */
class DogSearch extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
          <style>
          .dog-search{
              box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.2);
              padding: 0 0 1rem 12rem;
              margin: 1rem  7rem 2rem 7rem;
              background-color: white;
              border-radius: 10px;
          }
          
          .dog-search input{
              width: 70%;
              padding: 10px;
              margin-top: 1rem;
              border-radius: 10px;
              border-color: #562B08;
              text-align: center;
          }
          
          .dog-search button{
              height: fit-content;
              padding: 10px;
              background-color: #0d6efd;
              border-radius: 10px;
          }
  
          button:hover{
            background-color: #fff;
          }
          
          @media screen and (max-width: 1000px) {
              .dog-search {
                  flex-direction: column;
                  position: static;
                  padding: 1rem;
                }
              
                .dog-search > input {
                  width: 100%;
                  margin-bottom: 12px;
                  
                }
              
                .dog-search > button {
                  width: 100%;
                }
              
            }

            @media screen and (max-width: 375px){
              .dog-search {
                padding: 4px;
                margin: 0;
              }
            }
          </style>
          <div class="dog-search">
              <input placeholder="Search the dogs" id="searchElement" type="search">
              <button id="searchButtonElement" type="submit">Search</button>
          </div>
          `;

    this.shadowDOM
      .querySelector('#searchButtonElement')
      .addEventListener('click', this._clickEvent);
  }
}
customElements.define('dog-search', DogSearch);
