var casual = require('casual');

const populate = (amount) => {
  let books = [];
  for (let i = 0; i < amount; i++)
    books.push({
      id: i,
      title: casual.title,
      type: casual.random_element(['Horror', 'Drama', 'Comedy', 'Fiction']),
      description: casual.description,
      pages: casual.random_element([
        'Less than 100',
        'Between 100-200',
        'Between 200-300',
        'More than 300',
      ]),
    });
  return books;
};

module.exports = { populate };
