const express = require('express');

const router = express.Router();

const testDb = require('../db/testDb');


// get all
router.get('/', async (req, res, next) => {
  try {
      let results = await testDb.getAll();
      res.json(results);
  } catch (e) {
      console.log(e);
      res.sendStatus(500);
  }
});

router.get('/:name', async (req, res, next) => {
  try {
      let results = await testDb.getOne(req.params.name);
      res.json(results);
  } catch (e) {
      console.log(e);
      res.sendStatus(500);
  }
});

router.post('/contact', async (req, res, next) => {
  try {
      let results = await testDb.createContact(req.body);
      res.json(results);
  } catch (e) {
      console.log(e);
      res.sendStatus(500);
  }
});

module.exports = router;


