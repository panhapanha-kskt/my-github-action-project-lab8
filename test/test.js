const assert = require('chai').assert;

describe('Simple test', function () {
  it('return hello message', function () {
    const message = 'Hello, GitHub Actions!';
    assert.equal(message, 'Hello, GitHub Actions!');
  });
});
