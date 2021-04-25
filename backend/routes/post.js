const router = require('express').Router();
let Post = require('../models/Post');

router.route('/').get(async (req, res) => {
    Post.find()
        try {
            post => res.json(post)
        }
        catch {
            err => res.status(400).json('Error: ' + err)
        }
});

router.route('/add').post(async (req, res) => {
    const text = req.body.text; 
    const newPost = new Post({
        text
    })
newPost.save()
    try {
        () => res.json('Post added!')
    }
    catch {
        err => res.status(400).json('Error: ' + err)
    }
});

router.route('/:id').get(async (req, res) => {
    Post.findById(req.params.id)
    try {
        post => res.json(post)
    }
    catch {
        err => res.status(400).json('Error: ' + err)
    }
})

router.route('/:id').delete(async (req, res) => {
    Post.findByIdAndDelete(req.params.id)
    try {
        () => res.json('Post deleted.')
    }
    catch {
        err => res.status(400).json('Error ' + err)
    }
});

router.route('/update/:id').post(async (req, res) => {
    Post.findById(req.params.id)
    try {
        post => {
        post.text = req.body.text
        post.save()
        .then(() => res.json('Post updated!'))
        .catch(err => res.status(400).json('Error: ' + err))
    }}
    catch {
        err => res.status(400).json('Error: ' + err)
    }
})


module.exports = router;