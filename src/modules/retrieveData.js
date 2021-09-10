const retrieveData = async (api) => {
  const data = await fetch(api);
  const res = await data.json();
  return res;
};

export default retrieveData;