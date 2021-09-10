const jokesCounter = () => {
  const jokes = document.querySelectorAll('.grid-item');
  return jokes.length;
};

export default jokesCounter;