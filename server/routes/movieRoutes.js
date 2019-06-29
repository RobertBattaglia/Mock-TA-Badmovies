const router = require('express').Router();
const movieController = require('../controllers/movieController.js');

//Route different requests to different endpoints
router.get('/search/:genreId', movieController.getSearch);
router.get('/genres', movieController.getGenres);
router.get('/', movieController.getFavorites);
router.post('/', movieController.saveMovie);
router.delete('/:id', movieController.deleteMovie);

module.exports = router;
