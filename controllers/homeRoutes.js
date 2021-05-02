const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User } = require('../models');

router.get('/', (req, res) => {
    console.log(req.session);

    Post.findAll({
      attributes: [
        'id',
        'title',
        'created_at',
        'content'
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(postData => {
        const posts = postData.map(post => post.get({ plain: true }));
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
          });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
// router.get('/', (req, res) => {
//     res.render('homepage')
// })

router.get('/signup', (req, res) => {
    res.render('signup')
});

router.get('/post', (req, res) => {
    res.render('post')
});

router.get('/login', (req, res) => {
    res.render('login')
});

module.exports = router;