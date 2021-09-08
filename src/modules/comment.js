// const item = []

// class Comment {
//   constructor(newName, newComment) {
//     this.newName = newName;
//     this.comment = newComment;
//   }

// }


// let addComment = (user, comment) => {
//   const newComment = new Comment(user.value, comment.value);
//   item.push(newComment);
//   console.log(item);
//   // clearOut()
//   user.value ='';
//   comment.value = '';
// }

// document.querySelector('#submit').addEventListener('click', (e) => {
//   e.preventDefault();
//   let user = document.querySelector('#form-popup').querySelector('input[name="input-name"]')
//   let comment = document.querySelector('#form-popup').querySelector('#input')
//   addComment(user, comment)
// })

// export default item;


export const displayGameInfo = (container, info) => {
  const imageContainer = container.querySelector('#popup-image');
  imageContainer.innerHTML = '';
  const gameImage = document.createElement('img');
  gameImage.alt = info.name;
  gameImage.src = info.image.url;
  gameImage.classList.add('popup-image');
  imageContainer.appendChild(gameImage);

  const gameName = container.querySelector('.popup-game-name');
  gameName.innerHTML = info.name;

  const infoCategories = ['game_for', 'game_group',  'life_span'];
  infoCategories.forEach((category) => {
    const categoryDisplay = container.querySelector(`#popup-${category}`);
    categoryDisplay.innerHTML = info[category];
  });
};

export const closePopupListener = (popup) => (event) => {
  event.preventDefault();
  popup.classList.add('d-none');
};

const openPopupListener = (commentButton, popup) => (event) => {
  event.preventDefault();
  const breedId = commentButton.closest('.breed-card').id;
  const storageKey = `${KEY_PREFIX}-${breedId}`;
  const breedInfo = JSON.parse(localStorage.getItem(storageKey));
  displayBreedInfo(popup, breedInfo);
  popup.classList.remove('d-none');
};

export default openPopupListener;