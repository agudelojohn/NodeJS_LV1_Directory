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

exports.getById = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await books.find((el) => el.id === id);
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
