const router = require('express').Router();
let Post = require('../models/post.model');

router.route('/').get((req, res) => {
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
    const text = req.body.text; 

    const newPost = new Post({
        text
    })
newPost.save()
.then(() => res.json('Post added!'))
.catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:id').delete((req, res) => {
    Post.findByIdAndDelete(req.params.id)
    .then(() => res.json('Post deleted.'))
    .catch(err => res.status(400).json('Error ' + err))
});

router.route('/update/:id').post((req, res) => {
    Post.findById()
    .then(post => {
        post.text = req.body.text

        post.save()
        .then(() => res.json('Post updated!'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err))
})


module.exports = router;