const retrieveLikes = async (api) => {
  let data = await fetch(api);
  let res = await data.json();
  return res;
};

export default retrieveLikes;