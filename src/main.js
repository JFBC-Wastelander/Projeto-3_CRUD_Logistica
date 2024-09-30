import express from "express";
import "dotenv/config";
import fornecedor_router from "./http/routers/fornecedor_router.js";
import carga_router from "./http/routers/carga_router.js";

const app = express();
app.use(express.json());

app.use("/fornecedor", fornecedor_router);
app.use("/carga", carga_router);

app.listen(process.env.API_PORT, () => {
  console.log("Aplicação rodando");
});
