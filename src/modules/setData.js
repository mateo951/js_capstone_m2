import retrieveData from './retrieveData.js';

const setData = async (api, items) => fetch(api, {
  method: 'POST',
  body: JSON.stringify(items),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then(() => {
    retrieveData(api);
  }).catch((error) => {
    throw error;
  });

export default setData;
