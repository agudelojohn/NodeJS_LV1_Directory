const { populate } = require('./../utils/transformData');
let books = populate(15);

exports.getAllBooks = (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      data: books,
    });
  } catch (err) {
    console.error(err);
  }
};

exports.getById = (req, res) => {
  try {
    const id = req.params.id;
    const book = books.find((el) => el.id == id);
    if (book) {
      res.status(200).json({
        status: 'success',
        data: book,
      });
    } else {
      res.status(404).json({
        status: 'fail',
        message: 'Not found',
      });
    }
  } catch (err) {
    console.error(err);
  }
};

exports.updateById = (req, res) => {
  try {
    const id = req.params.id;
    let book = books.find((el) => el.id == id);
    Object.entries(req.body).forEach(([key, data]) => {
      book[key] = data;
    });
    res.json({
      status: 'success',
      data: book,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.create = (req, res) => {
  try {
    let book = req.body;
    book.id = books.length + 1;
    books.push(book);
    res.json({
      status: 'success',
      data: book,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteById = (req, res) => {
  try {
    console.log(books);
    const id = req.params.id;
    let booksArray = books.filter((el) => el.id != id);
    books = booksArray;
    console.log(books);

    res.status(200).json({
      status: 'success',
    });
  } catch (err) {
    console.log(err);
  }
};
