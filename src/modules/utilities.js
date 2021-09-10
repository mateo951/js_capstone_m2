export default class Utilities {
  static CheckJSON = (jsonString) => { // eslint-disable-next-line
    if (/^[\],:{}\s]*$/.test(jsonString.replace(/\\["\\\/bfnrtu]/g, '@') // eslint-disable-next-line
      .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
      .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
      return true;
    }
    return false;
  }
  static hasValue = (input) => {
    if (input === '') {
      return false;
    }
    return true;
  }
}