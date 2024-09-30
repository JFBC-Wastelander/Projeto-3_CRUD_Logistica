import fornecedor_model from "../../database/models/fornecedor_model.js";

const store = async (req, res) => {
  try {
    await fornecedor_model.create(req.body);
    res.json();
  } catch (err) {
    res.status(400).json(err);
  }
};

const index = async (req, res) => {
  try {
    let content = await fornecedor_model.find(req.query).exec();
    res.json(content);
  } catch (err) {
    res.status(400).json(err);
  }
};

const show = async (req, res) => {
  try {
    let content = await fornecedor_model.findById(req.params.id).exec();
    res.json(content);
  } catch (err) {
    res.status(400).json(err);
  }
};

const update = async (req, res) => {
  try {
    let content = await fornecedor_model

      .findByIdAndUpdate(req.params.id, req.body)
      .exec();
    res.json(content);
  } catch (err) {
    res.status(400).json(err);
  }
};

const destroy = async (req, res) => {
  try {
    let content = await fornecedor_model

      .findByIdAndDelete(req.params.id)
      .exec();
    res.json(content);
  } catch (err) {
    res.status(400).json(err);
  }
};

export default {
  store,
  index,
  show,
  update,
  destroy,
};
