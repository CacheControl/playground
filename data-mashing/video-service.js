let data = require('./data/videos')

exports.default = (app) => {
  app.get('/api/v1/videos', (req, res) => {
    res.json(data)
  })
  app.get('/api/v1/users/:id/videos', (req, res) => {
    let videos = data.filter(video => video.userId === req.params.id)
    res.json(videos)
  })
  app.listen(3002, () => {
    console.log('Video service listening on port 3002');
  })
}