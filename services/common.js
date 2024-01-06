const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  //TODO : this is temporary token for testing without cookie
  // token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OGJlN2QxYTc4Yjg2ZDM1MmVjY2I2NCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA0NDEzMzMwfQ.zZiD1BQEmx8Ym7_sERqn-W7mZ35QOvVe-RGylYHGNEM"
  return token;
};
