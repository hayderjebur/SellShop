const express = require('express');
const router = express.Router();

/* GET all posts index */
// Route: /posts
router.get('/', (req, res, next) => {
  res.send('get all posts');
});

/* GET   new post  */
// Route: /posts/new
router.get('/new', (req, res, next) => {
  res.send('new post');
});

/* POST create new post  */
// Route: /posts
router.post('/', (req, res, next) => {
  res.send('Create Post');
});

/* GET post by ID   */
// Route: /posts/:id
router.get('/:id', (req, res, next) => {
  res.send('/posts/:id');
});
/* GET post by ID   */
// Route: /posts/:id
router.get('/:id/edit', (req, res, next) => {
  res.send('Edit Post by id');
});
/* UPDATE post by ID   */
// Route: /posts/:id
router.put('/:id', (req, res, next) => {
  res.send('Update Post');
});
/* DELETE post by ID   */
// Route: /posts/:id
router.delete('/:id', (req, res, next) => {
  res.send('Delete Post');
});

module.exports = router;
