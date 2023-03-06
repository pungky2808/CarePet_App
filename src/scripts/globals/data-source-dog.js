/* eslint-disable prefer-promise-reject-errors */
class DataSource {
  static searchDog(name) {
    return fetch(`https://api.api-ninjas.com/v1/dogs?name=${name}`, {
      headers: {
        'x-api-key': 'uM1wOLi/oHua9DCIqS9w9Q==7BXf693NIAcBavA5',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson) {
          return Promise.resolve(responseJson);
        }
        return Promise.reject(`${name} is not found`);
      });
  }
}
export default DataSource;
