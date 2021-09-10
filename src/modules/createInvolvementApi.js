const api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const createApp = async () => {
  const fetchNewApp = await fetch(api, {
    method: 'POST',
  });
  const resNewApp = await fetchNewApp.json();
  return resNewApp;
};

export default createApp;
