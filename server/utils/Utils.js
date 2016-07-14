var router = require('express').Router();
var sessionMiddleware = require('express-session');


router.use(sessionMiddleware({
  secret: 'tongissocool'
}));



module.exports = router;


