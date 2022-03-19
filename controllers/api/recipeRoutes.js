const router = require('express').Router();
const { Recipe } = require('../../models');
// const withAuth = require('../../utils/auth');

//router.get
//pass in req.body
//convert req.body into separated list of numbers
//return recipe data back (res.json)

//utilize this template for get route
// router.get('/', async (req, res) => {
//   try {
//     const projectData = await Project.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!projectData) {
//       res.status(404).json({ message: 'No project found with this id!' });
//       return;
//     }

//     res.status(200).json(projectData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
