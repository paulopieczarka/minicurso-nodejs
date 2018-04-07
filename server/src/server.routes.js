const app = require('express');
const { batataRouter } = require('./controllers/BatataController');

const router = app.Router();

router.use('/batata', batataRouter);

module.exports = router;