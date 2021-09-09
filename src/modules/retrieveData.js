const retrieveData = async (api) => {
  let data = await fetch(api, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "gamerpower.p.rapidapi.com",
      "x-rapidapi-key": "undefined"
    }
  }
);
  let res = await data.json();
  return res;
};

export default retrieveData;