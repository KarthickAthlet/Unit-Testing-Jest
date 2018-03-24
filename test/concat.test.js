const concat = require('../index');

test('join Orin and ami to be Orinami', () => {
  expect(concat('Orin', 'ami')).toBe('Orinami');
});