const router = require('express').Router();
const db = require('../data/dbConfig');

router.get('/', (req, res) => {
    db('actions')
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(err => {
        res.status(500).json({err, message: "unable to load actions" })
    })
});

router.post('/', async (req, res) => {
    try {
        const action = await db('actions').insert(req.body)
        res.status(201).json(action)
    } catch (error) {
        res.status(500).json({ error: "unable to add action" })
    }
});

module.exports = router;