const express = require("express");
const controller = require("../controllers/documents");

const router = express.Router();

router.get('/', controller.all);
router.get('/:documentId', controller.get);
router.post('/', controller.post);
router.put('/:documentId', controller.put);
router.delete('/:documentId', controller.delete);
router.get('/search', controller.search);

module.exports = router;