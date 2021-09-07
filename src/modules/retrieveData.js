import displayData from "./displayData.js";

const retrieveData = async (api) => {
  await fetch(api, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((result) => {
      displayData(result);
    }).catch(function (error) {
      console.log(error);
    });
};

export default retrieveData;