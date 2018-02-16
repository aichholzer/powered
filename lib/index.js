const path = require('path');

module.exports = (poweredBy) => {
  if (!poweredBy) {
    let app = path.dirname(require.main.filename);
    app = path.resolve(`${app}/../`);
    try {
      const { author } = require.call(null, `${app}/package.json`);
      poweredBy = author.url || author.email || author.name || null;
    } catch (e) {
      poweredBy = null;
    }
  }

  return (req, res, next) => {
    if (poweredBy) {
      res.setHeader('x-powered-by', poweredBy);
    }

    next();
  };
};
