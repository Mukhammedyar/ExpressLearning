const logger = (req, res, next) => {
    console.log("Posted", Date.now());
    next();
}

module.exports = logger;