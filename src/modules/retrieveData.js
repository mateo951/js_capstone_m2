const retrieveData = async (api) => {
  let data = await fetch(api);
  let res = await data.json();
  if (!Object.keys(res).length) {
    throw "no data found";
  }
  return res;
};

export default retrieveData;