const Document = require("../models/document");

exports.all = async (_, res) => {
  try {
    const documents = await Document.find();
    res.status(200).json(documents);
  } catch (err) {
    res.status(400).send('Error while finding documents', err);
  }
};

exports.get = async (req, res) => {
  try {
    const document = await Document.findById(req.params.documentId);
    res.status(200).json(document);
  } catch (err) {
    res.status(400).send('Error while finding document', err);
  }
};

exports.post = async (req, res) => {
  try {
    const document = await Document({
      label: req.body.label,
      type: req.body.type
    }).save();
    res.status(200).json(document);
  } catch (err) {
    res.status(400).send('Error while creating a new document', err);
  }
};

exports.delete = async (req, res) => {
  try {
    const document = await Document.findByIdAndRemove(req.params.documentId);
    res.status(200).json(document);
  } catch (err) {
    res.status(400).send('Error while deleting document', err);
  }
};

exports.put = async (req, res) => {
  try {
    const document = await Document.findByIdAndUpdate(req.params.documentId, {...req.body}, { new: true });
    res.status(200).json(document);
  } catch (err) {
    res.status(400).send('Error while deleting document', err);
  }
};

exports.search = async (req, res) => {
  try {
    const documents = await Document.find({ label: { $regex: req.query.label } });
    res.status(200).json(documents);
  } catch (err) {
    res.status(400).send('Error while finding searched documents', err);
  }
};