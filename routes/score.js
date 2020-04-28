const UserModel = require('../models/UserModel');

const express = require('express');
const router = express.Router();
const requireLogin = require('../middlewares/requireLogin');

router.get('/api/scores', async (req, res) => {
    const users = await UserModel.find( {}, 'name score -_id').sort({ score: -1 }).limit(100);
    return res.status(200).send(users)
    
});

router.post('/api/scores/post', requireLogin, async (req, res) => {
    // DONT FORGET TO ADD SCORE LATER
    const { googleId, name, score} = req.body;
    await UserModel.updateOne({ googleId }, { name: name }, { score: score});
    // dummy data -- must have save to save changes
    req.user.name = "ABC";
    req.user.score = 7;
    await req.user.save();

    res.status(200).json({ status: "Success"});
});
 
module.exports = router;