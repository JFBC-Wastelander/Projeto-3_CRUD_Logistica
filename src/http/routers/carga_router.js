import express from "express";
import carga_controller from "../controllers/carga_controller.js";

const router = express.Router();

router.post("/", carga_controller.store);
router.get("/", carga_controller.index);
router.get("/:id", carga_controller.show);
router.put("/:id", carga_controller.update);
router.delete("/:id", carga_controller.destroy);

export default router;
