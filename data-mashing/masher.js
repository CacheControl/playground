/**
 * Counts the number of photos and videos belonging to the given user
 * @param   {string} userId - user guid
 * @returns {object} hash of video and photo counts
 * @returns {object.photos} photo count
 * @returns {object.videos} video count
 */
exports.countMediaByUser = (userId, cb) => {
  setImmediate(cb, null, {
    photos: 1,
    videos: 2
  })
}

/**
 * Determines who the highest contributor by media type is
 * @param   {string} mediaType - 'photos', 'videos'
 * @returns {string} - userId
 */
exports.highestContributorByMediaType = (mediaType, cb) => {
  if (!['photos', 'videos'].includes(mediaType)) {
    return cb(new Error('mediaType must be "videos" or "photos"'))
  }
  setImmediate(cb, null, 'randomUser')
}