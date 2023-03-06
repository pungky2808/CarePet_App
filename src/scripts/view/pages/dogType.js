/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
import DataSource from '../../globals/data-source-dog';
import '../../component/dog-search';
import '../../component/dog-list';

const dogType = {
  async render() {
    return `
      <dog-search></dog-search>
      <dog-list></dog-list>
      `;
  },

  async afterRender() {
    const searchElement = document.querySelector('dog-search');
    const dogListElement = document.querySelector('dog-list');

    const onButtonSearchClicked = () => {
      DataSource.searchDog(searchElement.value)
        .then(renderResult)
        .catch(fallbackResult);
    };

    const renderResult = (results) => {
      dogListElement.dogs = results;
    };

    const fallbackResult = (message) => {
      console.log(message);
      dogListElement.appendChild(renderError(message));
    };

    searchElement.clickEvent = onButtonSearchClicked;
  },
};

export default dogType;
