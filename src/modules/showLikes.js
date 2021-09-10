import Jokes from './jokes.js';

const showLikes = async (likes) => {
  const jokes = Jokes.getJokes();
  Object.values(jokes).forEach((joke) => {
    likes.forEach((likedItem) => {
      const span = document.getElementById(joke.id); // eslint-disable-next-line
      if (joke.id == likedItem.item_id) {
        span.innerHTML = likedItem.likes;
      }
    });
  });
};

export default showLikes;
