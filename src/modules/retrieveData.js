import displayData from './displayData.js';

const retrieveData = async (api) => {
  await fetch(api, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((result) => {
      displayData(result);
    }).catch((error) => {
      throw error;
    });
};

export default retrieveData;