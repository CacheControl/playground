let data = require('./data/users')

exports.default = (app) => {
  app.get('/api/v1/users', (req, res) => {
    res.json(data)
  })
  app.listen(3000, function () {
    console.log('User service listening on port 3000');
  });
}