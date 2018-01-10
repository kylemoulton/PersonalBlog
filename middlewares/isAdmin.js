module.exports = (req, res, next) => {
    console.log(req.user);
    if (req.user.access !== 'admin') {
        return res.status(403).send({error: 'Insufficient access rights'});
    }
    next();
};