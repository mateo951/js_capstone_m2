/**
 * @jest-environment jsdom
 */

import jokesCounter from '../modules/jokesCounter.js'

beforeEach(() => {
  document.body.innerHTML = '<div class="grid-item">'+
  '</div><div class="grid-item"></div>';
});

describe('Should return items length', () => {
  test('Checks for items length', () => {
    expect(jokesCounter()).toBe(2);
  });
});