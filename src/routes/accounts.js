const router = require('express').Router();
const db = require('../db');
router.get('/:accountId/statements', async (req, res) => {
  const sql = "SELECT * FROM statements WHERE account_id = " + req.params.accountId;
  const [rows] = await db.query(sql);
  res.json(rows);
});
module.exports = router;
