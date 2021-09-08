import bow from '../media/bow.jpg'

const displayData = (data) => {
  const list = document.querySelector('.gamesList');
  const { games } = data;
  games.forEach((item) => {
    list.innerHTML += `<li class="card gameItem"><div>
    <img src="${bow}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item.game}</h5>
      <a href="#" class="btn btn-primary">Reservations</a>
      <a href="#" class="btn btn-primary">Reviews</a>
    </div>
  </li>`;
  });
}
export default displayData;