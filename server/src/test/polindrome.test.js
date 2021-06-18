const { palindrome } = require('../etesting');

test('test if a string is a palindrome', () => {
    const result = palindrome('mundo');
    expect(result).toBe('');
});