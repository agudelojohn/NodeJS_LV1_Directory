const { populate } = require('./../utils/transformData');
let books = populate(15);

exports.getAllBooks = async () => {
  return books;
};

exports.getById = async (id) => {
  return books.find((el) => el.id === id);
};
