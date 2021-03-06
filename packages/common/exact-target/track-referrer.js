const fetch = require('node-fetch');
const pushId = require('unique-push-id');
const hasReferrer = require('./has-referrer');
const buildPayload = require('./build-payload');
const buildUrl = require('./build-url');

module.exports = ({ onError } = {}) => (req, res, next) => {
  const errorHandler = typeof onError === 'function' ? onError : () => {};
  const { config } = req.app.locals;
  if (hasReferrer(req.query)) {
    try {
      const correlator = pushId();
      res.locals.exactTargetCorrelator = correlator;
      const payload = buildPayload({
        req,
        source: 'server',
        config,
        correlator,
      });
      const url = buildUrl(payload);
      fetch(url).catch(errorHandler);
    } catch (e) {
      errorHandler(e);
      next();
    } finally {
      next();
    }
  } else {
    next();
  }
};
