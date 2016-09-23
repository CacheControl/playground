# Data Mashing

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

__GET /api/v1/photos__ - retrieve all videos

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

__GET /api/v1/videos/:id/photos__ - retrieve videos by user id

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