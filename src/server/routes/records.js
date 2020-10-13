const express = require('express');
const router = express.Router();

const Record = require('../models/Record');

router.get('/', async (req, res) => {
    res.json(await Record.find());
});

router.get('/posts', (req, res) => {
    res.send(
      [{
        title: "Hello World!",
        description: "Hi there! How are you?"
      }]
    )
  })

router.post('/', async(req, res) => {
    const record = new Record(req.body);
    await record.save();
    res.json({state: 'success'});
});

router.get('/:id', async (req, res) => {
    res.json(await Record.find(req.params.id));
});

router.put('/:id', async (req, res) => {
    await Record.findByIdAndUpdate(req.params.id, req.body);
    res.json({state: 'updated'});
});

router.delete('/:id', async (req, res) => {
    await Record.findOneAndRemove(req.params.id);
    res.json({state: 'deleted'});
});

module.exports = router;
