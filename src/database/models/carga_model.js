import db from "../db.js";

const Schema = db.Schema;

const cargaSchema = new Schema({
  nomeCarga: {
    type: String,
    required: true,
  },
  tipoCarga: {
    type: String,
    required: true,
  },
  quantidadeCarga: {
    type: Number,
    required: true,
  },
  enderecamento: {
    type: String,
    required: true
  },
  defeitoCarga: {
    type: Boolean,
    required: false,
  },
  fornecedor: {
    type: Schema.ObjectId,
    ref: "Fornecedor"
  }
});

const CargaSchema = db.model("CargaSchema", cargaSchema);

export default CargaSchema;
