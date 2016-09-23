let data = require('./data/photos')

exports.default = (app) => {
  app.get('/api/v1/photos', (req, res) => {
    res.json(data)
  })
  app.get('/api/v1/users/:id/photos', (req, res) => {
    let photos = data.filter(photo => photo.userId === req.params.id)
    res.json(photos)
  })
  app.listen(3001, function () {
    console.log('Photo service listening on port 3001');
  });
}