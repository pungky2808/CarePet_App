/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
import DataSource from '../../globals/data-source';
import '../../component/cat-search';
import '../../component/cat-list';

const catType = {
  async render() {
    return `
      <cat-search></cat-search>
      <cat-list></cat-list>
      `;
  },

  async afterRender() {
    const searchElement = document.querySelector('cat-search');
    const catListElement = document.querySelector('cat-list');

    const onButtonSearchClicked = () => {
      DataSource.searchCat(searchElement.value)
        .then(renderResult)
        .catch(fallbackResult);
    };

    const renderResult = (results) => {
      catListElement.cats = results;
    };

    const fallbackResult = (message) => {
      console.log(message);
      catListElement.appendChild(renderError(message));
    };

    searchElement.clickEvent = onButtonSearchClicked;
  },
};

export default catType;
