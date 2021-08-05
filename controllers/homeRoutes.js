const router = require('express').Router();
const { User, Cat_item, Dog_item} = require('../models');
// const withAuth = require('../utils/auth');



// get all users
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] }, // do not include the password
      order: [['name', 'ASC']], // order by name, ascending
    });

    const users = userData.map((user) => user.get({ plain: true }));

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


// GET one cat item
router.get('/catitem/:id', async (req, res) => {
  try {
    const catData = await Cat_item.findByPk(req.params.id);

    const catitem = catData.get({ plain: true });
    res.render('catItems', { catitem});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/dogitem/:id', async (req, res) => {
  try {
    const dogData = await Dog_item.findByPk(req.params.id);

    const dogitem = dogData.get({ plain: true });
    res.render('dogItems', { dogitem, });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});




module.exports = router;