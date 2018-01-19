module.exports = (req, res, next) => {
    if (req.user.access !== 'admin') {
        return res.status(403).send({error: 'Insufficient access rights'});
    }
    next();
};