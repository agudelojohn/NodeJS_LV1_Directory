const app = require('./app');

// Start server
const port = 3000;
try {
  app.listen(port, () => {
    console.log('Application listening on port 3000');
  });
} catch (err) {
  console.error(err);
}
