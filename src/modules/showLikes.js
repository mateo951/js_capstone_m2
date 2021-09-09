const showLikes = async (response) => {
  response.forEach(element => {
    console.log(element.item_id)
  });
};

export default showLikes;
