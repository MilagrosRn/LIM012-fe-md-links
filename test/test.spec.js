import hello from '../src/index.js';

describe('it should say hello', () => {
  it("should greet 'Sergio'", () => {
    expect(hello()).toBe('Hello, Sergio');
  });

  it("should greet 'Daniel'", () => {
    expect(hello('Daniel')).toBe('Hello, Daniel');
  });
});
