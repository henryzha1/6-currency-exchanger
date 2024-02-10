import Object from './../src/object.js';

describe('Object', () => {

  test('should do this', () => {
    const object = new Object();
    expect(object).toEqual(object.requirement);
  });
});