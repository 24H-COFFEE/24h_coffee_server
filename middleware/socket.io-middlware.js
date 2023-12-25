const attachSocketIO = (io) => (req, res, next) => {
  req.io = io;
  next();
};

module.exports = attachSocketIO;
