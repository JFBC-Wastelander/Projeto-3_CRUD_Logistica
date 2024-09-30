import db from "../db.js";

const Schema = db.Schema;

const fornecedorSchema = new Schema({
  nomeFornecedor: {
    type: String,
    required: true,
  },
  fornecimentoCarga: {
    type: String,
    required: true,
  }
});

const FornecedorSchema = db.model("Fornecedor", fornecedorSchema);

export default FornecedorSchema;
