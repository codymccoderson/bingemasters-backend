const requireLogin = require('../../../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/score/post', requireLogin, async (req, res) => {
        // need to fill
    })
}

// must fix