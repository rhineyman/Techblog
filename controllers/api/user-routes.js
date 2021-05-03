const router = require('express').Router();
const { User, Post } = require('../../models')

router.get('/', (req, res) => {
    User.findAll({
            attributes: { exclude: ['[password'] }
        })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    User.findOne({
            attributes: { exclude: ['password'] },
            where: {
                id: req.params.id
            },
            include: [{
                    model: Post,
                    attributes: [
                        'id',
                        'title',
                        'content',
                        'created_at'
                    ]
                },               
                {
                    model: Post,
                    attributes: ['title'],
                }
            ]
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user with this ID' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {

})

module.exports = router;