const concat = require('../index');

//sample test
test('join Orin and ami to be Orinami', () => {
  expect(concat('Orin', 'ami')).toBe('Orinami');
});