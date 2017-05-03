# Data Mashing

## Goal

This exercise presents several failing tests ([./test/masher.test.js](./test/masher.test.js)).  In order to make these tests pass, ([./masher.js](./masher.js)) must be updated to combination data from 3 different services.

- The _user-service_ provides a list of users.  It runs on port ``3000``
- The _photo-service_ provides photo information, including photos by user. It runs on port ``3001``
- The _video-service_ provides video information, including videos by user.  It runs on port ``3002``

You will need to make api calls to these 3 services and combine the responses to get all tests passing.

## Installation

```
nvm install v6.6.0  # node 6.6 required
```

```bash
nvm use 6
npm install
```

## Usage

```bash
node index.js # runs the services

# User service listening on port 3000
# Photo service listening on port 3001
# Video service listening on port 3002

# run the tests
npm test
```

## Services

### User Service

__GET /api/v1/users__ - retrieve all users

```js
[
  {
    "id": "fe6fe3e0-f0fb-4710-b512-6a2a3e68d99b",
    "email": "cgutierrez1@usda.gov",
    "gender": "Male"
  },
  {
    //...
  }
]
```

### Photo Service

__GET /api/v1/photos__ - retrieve all photos

```js
[
  {
    "filename": "vitae.jpg",
    "filesize": 131560,
    "userId": "ea5f66d8-f864-49bb-a68e-0209b7827942"
  },
  {
    //...
  }
]
```

__GET /api/v1/users/:id/photos__ - retrieve photos by user id
```js
[
  {
    "filename": "vitae.jpg",
    "filesize": 131560,
    "userId": "ea5f66d8-f864-49bb-a68e-0209b7827942"
  },
  {
    //...
  }
]
```

### Video Service

__GET /api/v1/videos__ - retrieve all videos

```js
[
  {
    "filename": "movie.avi",
    "filesize": 12821,
    "userId": "ea5f66d8-f864-49bb-a68e-0209b7827942"
  },
  {
    //...
  }
]
```

__GET /api/v1/users/:id/videos__ - retrieve videos by user id

```js
[
  {
    "filename": "video.avi",
    "filesize": 413472,
    "userId": "ea5f66d8-f864-49bb-a68e-0209b7827942"
  },
  {
    //...
  }
]
```
