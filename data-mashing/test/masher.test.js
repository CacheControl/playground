let assert = require('assert')
let masher = require('../masher.js')

let USER1 = '955ae88c-ddf6-469e-8b4b-dc2045cab9fa'
let USER2 = 'bcc856d8-caba-4e12-a750-7ad5b40db7d0'

describe('Masher', () => {
  describe('countByUser', () => {
    it('returns a count of the users photos and videos (1)', (done) => {
      masher.countMediaByUser(USER1, (data) => {
        assert.deepEqual(data, { photos: 8, videos: 8 }, 'user1 has 8 photos and 8 videos')
        done()
      })
    })
    
    it('returns a count of the users photos and videos (2)', (done) => {
      masher.countMediaByUser(USER1, (data) => {
        assert.deepEqual(data, { photos: 11, videos: 7 }, 'user2 has 11 photos and 7 videos')
        done()
      })
    })
  })
  
  describe('highestContributorByMediaType', () => {
    it('returns the highest video contributor', (done) => {
      masher.highestContributorByMediaType('videos', (data) => {
        assert.deepEqual(data, 'fe6fe3e0-f0fb-4710-b512-6a2a3e68d99b', 'user who owns the most videos')
        done()
      })
    })
    
    it('returns the highest photos contributor', (done) => {
      masher.highestContributorByMediaType('photos', (data) => {
        assert.deepEqual(data, 'fe6fe3e0-f0fb-4710-b512-6a2a3e68d99b', 'user who owns the most photos')
        done()
      })
    })
  })
})