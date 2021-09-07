const createBasket = async (api) => {
  fetch(api, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  }).catch(function (error) {
    console.log(error);
  });
}

export default createBasket;