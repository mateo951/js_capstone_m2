import Jokes from "./jokes.js";

const showLikes = async (likes) => {
  let jokes = Jokes.getJokes();
  Object.values(jokes).forEach(joke => {
    likes.forEach(likedItem => {
      let span = document.getElementById(joke.id);
      if(parseInt(joke.id) == parseInt(likedItem.item_id)){
        span.innerHTML = likedItem.likes;
      }
    });
  });
};

export default showLikes;
