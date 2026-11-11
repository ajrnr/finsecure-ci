const router = require('express').Router();
const db = require('../db');
router.post('/', async (req, res) => {
  const { source_account, destination_account, amount } = req.body;
  const [rows] = await db.query(
    `SELECT balance FROM accounts WHERE id = '${source_account}'`
  );
  await db.execute('INSERT INTO transfers (source, destination, amount) VALUES (?, ?, ?)',
    [source_account, destination_account, amount]);
  res.status(201).json({ status: 'accepted' });
});
module.exports = router;
