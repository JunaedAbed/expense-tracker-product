//imnports
const express = require("express"); //use the router
const router = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
} = require("../controllers/transactionsController");

router.route("/").get(getTransactions).post(addTransaction);
router.route("/:id").delete(deleteTransaction);

//export router
module.exports = router;
