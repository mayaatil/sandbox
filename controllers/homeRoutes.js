const router = require('express').Router();
const { Ingredient, Recipe, IngredientRecipe, User } = require('../models');
const withAuth = require('../utils/auth');

// router.get('/', async (req, res) => {
//   try {
//     const ingredientData = await Ingredient.findAll({});

//     const ingredient = ingredientData.map((ingredient) =>
//       ingredient.get({ plain: true })
//     );
//     console.log(ingredient);
//     res.render('homepage', {
//       ingredient,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/', async (req, res) => {
  try {
    const ingredientData = await Ingredient.findAll({
      where: {
        id: [1, 2],
      },
      include: [
        {
          model: Recipe,
          through: IngredientRecipe,
        },
      ],
    });

    const ingredient = ingredientData.map((ingredient) =>
      ingredient.get({ plain: true })
    );
    console.log(ingredient);
    res.render('homepage', {
      ingredient,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/recipes', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const recipeData = await Recipe.findAll({
      include: [
        {
          model: Ingredient,
          through: IngredientRecipe,
        },
      ],
    });

    // Serialize data so the template can read it
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
    console.log(recipes);
    // Pass serialized data and session flag into template
    res.render('recipes', {
      recipes,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
