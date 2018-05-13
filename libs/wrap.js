module.exports = (fn, req, res) => (fnReq, fnRes) => fn(fnReq, fnRes)
  .then(result => fnRes.json(result))
  .catch(err => fnRes.send(err));
