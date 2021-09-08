import bow from '../media/bow.jpg';

const displayData = (data) => {
  const list = document.querySelector('.gamesList');
  const { games } = data;
  let id = 0;
  games.forEach((item) => {
    list.innerHTML += `<li class="card gameItem"><div>
    <img src="${bow}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item.game}</h5>
      <a href="#" id=${id} class="btn btn-primary">Comments</a>
    </div>
    </li>`;
    id += 1;
  });
};
export default displayData;