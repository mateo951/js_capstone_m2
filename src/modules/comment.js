const item = []

class Comment {
  constructor(newName, newComment) {
    this.newName = newName;
    this.comment = newComment;
  }

}


let addComment = (user, comment) => {
  const newComment = new Comment(user.value, comment.value);
  item.push(newComment);
  console.log(item);
  // clearOut()
  user.value ='';
  comment.value = '';
}

document.querySelector('#submit').addEventListener('click', (e) => {
  e.preventDefault();
  let user = document.querySelector('#form-popup').querySelector('input[name="input-name"]')
  let comment = document.querySelector('#form-popup').querySelector('#input')
  addComment(user, comment)
})

export default item;