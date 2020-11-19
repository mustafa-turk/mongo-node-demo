const express = require("express");
const Document = require("../models/document");

const router = express.Router();

router.get('/', async (_, res) => {
  try {
    const documents = await Document.find();
    res.status(200).json(documents);
  } catch (err) {
    res.status(400).send('Error while finding documents', err);
  }
});

router.post('/', async (req, res) => {
  try {
    const document = await Document({
      label: req.body.label,
      type: req.body.type
    }).save();
    res.status(200).json(document);
  } catch (err) {
    res.status(400).send('Error while creating a new document', err);
  }
});

router.get('/search', async (req, res) => {
  try {
    const documents = await Document.find({ label: { $regex: req.query.label } });
    res.status(200).json(documents);
  } catch (err) {
    res.status(400).send('Error while finding searched documents', err);
  }
});

router.get('/:documentId', async (req, res) => {
  try {
    const document = await Document.findById(req.params.documentId);
    res.status(200).json(document);
  } catch (err) {
    res.status(400).send('Error while finding document', err);
  }
});

router.delete('/:documentId', async (req, res) => {
  try {
    const document = await Document.findByIdAndRemove(req.params.documentId);
    res.status(200).json(document);
  } catch (err) {
    res.status(400).send('Error while deleting document', err);
  }
});

router.put('/:documentId', async (req, res) => {
  try {
    const document = await Document.findByIdAndUpdate(req.params.documentId, {...req.body}, { new: true });
    console.log(document);
    res.status(200).json(document);
  } catch (err) {
    res.status(400).send('Error while deleting document', err);
  }
});

module.exports = router;