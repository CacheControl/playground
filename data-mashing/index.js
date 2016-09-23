let express = require('express')

require('./user-service').default(express())
require('./photo-service').default(express())
require('./video-service').default(express())
