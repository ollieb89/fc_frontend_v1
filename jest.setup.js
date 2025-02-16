import '@testing-library/jest-dom'

// Mock Request object for Next.js tests
global.Request = class Request {
  constructor(input, init) {
    this.input = input;
    this.init = init;
  }
};
