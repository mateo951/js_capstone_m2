const api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const createApp = async () => fetch(api, {
  method: 'POST',
}).then((response) => response.json())
  .catch((error) => {
    throw error;
  });

export default createApp;
