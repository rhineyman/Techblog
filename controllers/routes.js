const router = require('express').Router();
// Here is where we provide hardcoded data to render dynamically
const posts = [
  {
    dish_name: 'French Bread with Brie Cheese',
    description: 'French baguette with warm brie',
  }
];

router.get('/', async (req, res) => {
  res.render('all');
});

//get one dish
router.get('/dish/:num', async (req, res) => {
  return res.render('dish', dishes[req.params.num - 1]);
});

module.exports = router;
