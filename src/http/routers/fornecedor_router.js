import express from "express";
import fornecedorController from "../controllers/fornecedor_controller.js";

const router = express.Router();

router.post("/", fornecedorController.store);
router.get("/", fornecedorController.index);
router.get("/:id", fornecedorController.show);
router.put("/:id", fornecedorController.update);
router.delete("/:id", fornecedorController.destroy);

export default router;
