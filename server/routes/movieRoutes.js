const router = require('express').Router();
const movieController = require('../controllers/movieController.js');

//Route different requests to different endpoints
router.get('/movie/search', movieController.getSearch);
router.get('/movie/genres', movieController.getGenres);
router.get('/movie', movieController.getFavorites);
router.post('/movie', movieController.saveMovie);
router.delete('/movie', movieController.deleteMovie);

module.exports = router;
