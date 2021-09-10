const Jokes = class {
    static jokes = '';

    static setJokes(data) {
      this.jokes = data;
    }

    static getJokes() {
      return this.jokes;
    }
};

export default Jokes;